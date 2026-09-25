// Discrete-time simulator. Poisson arrivals, per-node FIFO queues with finite service rate,
// real caches with eviction, async queues that ack early. Deterministic for a given seed.
import { Cache } from "./cache.js";
import type { Design, Node, Workload } from "./model.js";
import { durationOf, outEdges, rateAt } from "./model.js";
import { mulberry32, percentile, poisson, Zipf, type Rng } from "./rng.js";
import { validate } from "./validate.js";

interface Req { id: number; key: number; write: boolean; born: number; enq: number; latMs: number; acked: boolean }

export interface NodeSnap {
  id: string; arrivalRps: number; servedRps: number; dropRps: number;
  utilisation: number; waiting: number; waitMs: number; overloaded: boolean; hitRate?: number;
}
export interface Hop { from: string; to: string; write: boolean }
export interface SimSummary {
  seconds: number; arrivals: number; completed: number; errors: number; errorRate: number;
  p50Ms: number; p95Ms: number; p99Ms: number; throughputRps: number;
  asyncLost: number; maxBacklog: number; endBacklog: number;
  nodes: Record<string, NodeSnap>; peakOverloaded: string[];
}

const TAU = 1;            // seconds, smoothing window for rate estimates
const TIMEOUT_MS = 1500;  // a reply slower than this counts as an error
const OVERLOAD_WAIT_MS = 250;

class Rate {
  v = 0;
  add(n = 1) { this.v += n / TAU; }
  decay(dt: number) { this.v *= Math.exp(-dt / TAU); }
}

class Runtime {
  waiting: Req[] = [];
  head = 0;
  credit = 0;
  arr = new Rate(); srv = new Rate(); drop = new Rate();
  rr = 0;
  cache?: Cache;
  constructor(public n: Node) {
    if (n.kind === "cache") this.cache = new Cache(n.cacheSize ?? 0, n.policy ?? "lru");
  }
  get len() { return this.waiting.length - this.head; }
  push(r: Req) { this.waiting.push(r); }
  pop(): Req | undefined {
    if (this.head >= this.waiting.length) return undefined;
    const r = this.waiting[this.head++];
    if (this.head > 1024 && this.head * 2 > this.waiting.length) { this.waiting = this.waiting.slice(this.head); this.head = 0; }
    return r;
  }
  get maxWaiting(): number {
    if (this.n.kind === "queue") return this.n.bufferSize ?? 4000;
    return Math.max(20, Math.ceil(this.n.capacityRps * 0.5)); // ~500 ms of backlog, then it sheds load
  }
}

export class Simulator {
  t = 0;
  private rng: Rng;
  private zipf: Zipf;
  private rt = new Map<string, Runtime>();
  private order: string[] = [];
  private clientId: string;
  private nextId = 1;
  private lat: number[] = [];
  arrivals = 0; errors = 0; asyncLost = 0; maxBacklog = 0;
  private peak = new Set<string>();
  /** Optional hook for visuals: called for every request moving along a wire. */
  onHop?: (h: Hop) => void;

  constructor(public design: Design, public workload: Workload, seed = 1) {
    const bad = validate(design).find((i) => i.severity === "error");
    if (bad) throw new Error(`Design is not runnable: ${bad.message}`);
    this.rng = mulberry32(seed);
    this.zipf = new Zipf(workload.keyspace, workload.zipfS);
    for (const n of design.nodes) this.rt.set(n.id, new Runtime(n));
    this.clientId = design.nodes.find((n) => n.kind === "client")!.id;
    this.order = this.topo();
  }

  private topo(): string[] {
    const indeg = new Map(this.design.nodes.map((n) => [n.id, 0]));
    for (const e of this.design.edges) indeg.set(e.to, (indeg.get(e.to) ?? 0) + 1);
    const q = [...indeg].filter(([, d]) => d === 0).map(([id]) => id), out: string[] = [];
    while (q.length) {
      const id = q.shift()!; out.push(id);
      for (const to of outEdges(this.design, id)) { indeg.set(to, indeg.get(to)! - 1); if (indeg.get(to) === 0) q.push(to); }
    }
    return out;
  }

  private route(from: Runtime, r: Req): string | undefined {
    const outs = outEdges(this.design, from.n.id);
    if (!outs.length) return undefined;
    const isQ = (id: string) => this.rt.get(id)!.n.kind === "queue";
    let cand = r.write ? outs.filter(isQ) : outs.filter((id) => !isQ(id));
    if (!cand.length) cand = outs;
    return cand[from.rr++ % cand.length];
  }

  private forward(from: Runtime, r: Req) {
    const to = this.route(from, r);
    if (to === undefined) { this.complete(r); return; }
    this.onHop?.({ from: from.n.id, to, write: r.write });
    this.arrive(this.rt.get(to)!, r);
  }

  private arrive(node: Runtime, r: Req) {
    node.arr.add();
    r.enq = this.t;
    if (node.len >= node.maxWaiting) {
      node.drop.add();
      this.peak.add(node.n.id);
      if (r.acked) this.asyncLost++; else this.errors++;
      return;
    }
    if (node.n.kind === "queue" && r.write && !r.acked) {
      r.acked = true; // producer is told "accepted" immediately; the work continues in the background
      this.record(r.latMs + node.n.latencyMs);
    }
    node.push(r);
  }

  private record(ms: number) {
    if (ms > TIMEOUT_MS) this.errors++;
    else this.lat.push(ms);
  }

  private complete(r: Req) { if (!r.acked) this.record(r.latMs); }

  private process(node: Runtime, r: Req) {
    node.srv.add();
    const n = node.n;
    r.latMs += n.latencyMs + (this.t - r.enq) * 1000;
    if (n.kind === "cache") {
      const c = node.cache!;
      if (r.write) { c.invalidate(r.key); this.forward(node, r); return; }
      if (c.lookup(r.key)) { this.complete(r); return; }
      c.insert(r.key);
    }
    this.forward(node, r);
  }

  step(dt: number) {
    this.t += dt;
    for (const rt of this.rt.values()) { rt.arr.decay(dt); rt.srv.decay(dt); rt.drop.decay(dt); }
    const cl = this.rt.get(this.clientId)!;
    const count = poisson(rateAt(this.workload, this.t) * dt, this.rng);
    for (let i = 0; i < count; i++) {
      this.arrivals++;
      const r: Req = { id: this.nextId++, key: this.zipf.sample(this.rng), write: this.rng() < this.workload.writeFraction,
        born: this.t, enq: this.t, latMs: 0, acked: false };
      cl.arr.add();
      this.forward(cl, r);
    }
    let backlog = 0;
    for (const id of this.order) {
      if (id === this.clientId) continue;
      const node = this.rt.get(id)!;
      const per = node.n.capacityRps * dt;
      node.credit = Math.min(node.credit + per, per + 1);
      let r: Req | undefined;
      const room = () => node.n.kind !== "queue" || outEdges(this.design, id).some((o) => { const t = this.rt.get(o)!; return t.len < t.maxWaiting * 0.25; });
      while (node.credit >= 1 && room() && (r = node.pop())) { node.credit -= 1; this.process(node, r); }
      if (node.n.kind === "queue") backlog += node.len;
      if (this.overloaded(node)) this.peak.add(id);
    }
    this.maxBacklog = Math.max(this.maxBacklog, backlog);
  }

  private overloaded(node: Runtime): boolean {
    if (node.n.kind === "queue") return node.len > (node.n.bufferSize ?? 4000) * 0.8 || node.drop.v > 0.5;
    return node.drop.v > 0.5 || (node.len / node.n.capacityRps) * 1000 > OVERLOAD_WAIT_MS;
  }

  get backlog(): number {
    let b = 0;
    for (const rt of this.rt.values()) if (rt.n.kind === "queue") b += rt.len;
    return b;
  }

  snapshot(): Record<string, NodeSnap> {
    const out: Record<string, NodeSnap> = {};
    for (const rt of this.rt.values()) {
      const cap = rt.n.capacityRps;
      out[rt.n.id] = {
        id: rt.n.id, arrivalRps: rt.arr.v, servedRps: rt.srv.v, dropRps: rt.drop.v,
        utilisation: Number.isFinite(cap) ? rt.arr.v / cap : 0, waiting: rt.len,
        waitMs: Number.isFinite(cap) ? (rt.len / cap) * 1000 : 0,
        overloaded: rt.n.kind !== "client" && this.overloaded(rt), hitRate: rt.cache ? rt.cache.hitRate : undefined,
      };
    }
    return out;
  }

  summary(): SimSummary {
    const sorted = [...this.lat].sort((a, b) => a - b);
    const done = this.lat.length;
    return {
      seconds: this.t, arrivals: this.arrivals, completed: done, errors: this.errors,
      errorRate: this.arrivals ? Math.min(1, this.errors / this.arrivals) : 0,
      p50Ms: percentile(sorted, 50), p95Ms: percentile(sorted, 95), p99Ms: percentile(sorted, 99),
      throughputRps: this.t ? done / this.t : 0, asyncLost: this.asyncLost,
      maxBacklog: this.maxBacklog, endBacklog: this.backlog, nodes: this.snapshot(), peakOverloaded: [...this.peak],
    };
  }
}

/** Run a whole workload headlessly (used for the verdict and by tests). */
export function simulate(design: Design, workload: Workload, seed = 1, dt = 0.01): SimSummary {
  const s = new Simulator(design, workload, seed);
  const total = durationOf(workload);
  const steps = Math.round(total / dt);
  for (let i = 0; i < steps; i++) s.step(dt);
  return s.summary();
}
