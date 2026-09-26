// Discrete-time simulator. Poisson arrivals, per-node FIFO queues with finite service rate,
// real caches with eviction, async queues that ack early, health-checked routing, failover,
// per-client rate limiting, sharding and CDN edges. Deterministic for a given seed.
import { Cache } from "./cache.js";
import type { Design, Node, Workload } from "./model.js";
import { durationOf, isQueueKind, outEdges, rateAt } from "./model.js";
import { mulberry32, percentile, poisson, Zipf, type Rng } from "./rng.js";
import { validate } from "./validate.js";

interface Req {
  id: number; key: number; write: boolean; born: number; enq: number; latMs: number; acked: boolean;
  stat: boolean; abuse: boolean; client: number; parkedAt: number; lead?: Runtime;
}

export interface NodeSnap {
  id: string; arrivalRps: number; servedRps: number; dropRps: number;
  utilisation: number; waiting: number; waitMs: number; overloaded: boolean; hitRate?: number;
  down?: boolean; promoted?: boolean; throttledRps?: number;
}
export interface Hop { from: string; to: string; write: boolean }
export interface LogEntry { t: number; text: string; nodeId?: string }
export interface SecondBin { t: number; arrivals: number; errors: number; backlog: number }
export interface SimSummary {
  seconds: number; arrivals: number; legitArrivals: number; completed: number; errors: number; errorRate: number;
  p50Ms: number; p95Ms: number; p99Ms: number; throughputRps: number;
  asyncLost: number; maxBacklog: number; endBacklog: number;
  throttled: number; abuseBlocked: number; abuseAdmitted: number; staleReads: number; coalesced: number; cdnHits: number;
  nodes: Record<string, NodeSnap>; peakOverloaded: string[];
  peakUtil: Record<string, number>; firstOverloadSec: Record<string, number>;
  log: LogEntry[]; series: SecondBin[];
}

const TAU = 1;            // seconds, smoothing window for rate estimates
const TIMEOUT_MS = 1500;  // a reply slower than this counts as an error
const OVERLOAD_WAIT_MS = 250;
export const HEALTH_CHECK_SEC = 1;  // how long a load balancer takes to notice a dead target
export const FAILOVER_SEC = 3;      // how long before a replica is promoted to primary
export const REPLICA_LAG_SEC = 0.3; // a replica may not yet have a write made this recently

class Rate {
  v = 0;
  add(n = 1) { this.v += n / TAU; }
  decay(dt: number) { this.v *= Math.exp(-dt / TAU); }
}

class Runtime {
  waiting: Req[] = [];
  head = 0;
  credit = 0;
  arr = new Rate(); srv = new Rate(); drop = new Rate(); thr = new Rate();
  rr = 0;
  cache?: Cache;
  inflight = new Map<number, Req[]>();
  buckets = new Map<number, { tokens: number; last: number }>();
  down = false; deadSince = 0; promoted = false; failoverDone = false;
  staticSeen = 0; staticHits = 0;
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
  drain(): Req[] { const out = this.waiting.slice(this.head); this.waiting = []; this.head = 0; return out; }
  get maxWaiting(): number {
    if (isQueueKind(this.n.kind)) return this.n.bufferSize ?? 4000;
    return Math.max(20, Math.ceil(this.n.capacityRps * 0.5)); // ~500 ms of backlog, then it sheds load
  }
}

export class Simulator {
  t = 0;
  private rng: Rng;
  private zipf: Zipf;
  private rt = new Map<string, Runtime>();
  private order: string[] = [];
  private outs = new Map<string, string[]>();
  private clientId: string;
  private nextId = 1;
  private lat: number[] = [];
  private recent: number[] = []; // rolling window of latest latencies for cheap live readouts
  private lastWrite = new Map<number, number>();
  private evIdx = 0;
  private revives: { at: number; id: string }[] = [];
  private events: NonNullable<Workload["events"]>;
  private bins: SecondBin[] = [];
  private peakUtil: Record<string, number> = {};
  private firstOverload: Record<string, number> = {};
  readonly log: LogEntry[] = [];
  arrivals = 0; legitArrivals = 0; errors = 0; asyncLost = 0; maxBacklog = 0;
  throttled = 0; abuseBlocked = 0; abuseAdmitted = 0; staleReads = 0; coalesced = 0; cdnHits = 0;
  /** Live sandbox controls: when set they replace the scripted rate / write mix. */
  rpsOverride?: number;
  writeOverride?: number;
  private peak = new Set<string>();
  /** Optional hook for visuals: called for every request moving along a wire. */
  onHop?: (h: Hop) => void;
  /** Optional hook for visuals: a request died at this node (overflow, crash, throttled). */
  onDrop?: (nodeId: string) => void;
  /** Optional hook for feedback (sound, haptics): incidents such as a kill or promotion. */
  onEvent?: (e: LogEntry) => void;

  constructor(public design: Design, public workload: Workload, seed = 1) {
    const bad = validate(design).find((i) => i.severity === "error");
    if (bad) throw new Error(`Design is not runnable: ${bad.message}`);
    this.rng = mulberry32(seed);
    this.zipf = new Zipf(workload.keyspace, workload.zipfS);
    for (const n of design.nodes) this.rt.set(n.id, new Runtime(n));
    this.clientId = design.nodes.find((n) => n.kind === "client")!.id;
    for (const n of design.nodes) this.outs.set(n.id, outEdges(design, n.id));
    this.order = this.topo();
    this.events = [...(workload.events ?? [])].sort((a, b) => a.atSec - b.atSec);
    if (workload.warmCaches) this.warm();
  }

  private warm() {
    for (const rt of this.rt.values()) if (rt.cache) for (let k = Math.min(rt.cache.size, this.workload.keyspace) - 1; k >= 0; k--) rt.cache.insert(k);
  }

  private note(text: string, nodeId?: string) {
    const e = { t: this.t, text, nodeId };
    this.log.push(e);
    this.onEvent?.(e);
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

  // ---------- failure injection ----------
  isDown(id: string): boolean { return this.rt.get(id)?.down ?? false; }

  /** Kill a node: it stops answering and everything waiting inside it is lost. */
  kill(id: string) {
    const r = this.rt.get(id);
    if (!r || r.down || r.n.kind === "client") return;
    r.down = true; r.deadSince = this.t; r.failoverDone = false;
    this.peak.add(id);
    for (const q of r.drain()) this.fail(r, q);
    for (const [, list] of r.inflight) for (const p of list) this.fail(r, p);
    r.inflight.clear();
    this.note(`${id} crashed`, id);
  }

  revive(id: string) {
    const r = this.rt.get(id);
    if (!r || !r.down) return;
    r.down = false;
    this.note(`${id} is back`, id);
  }

  toggle(id: string) { if (this.isDown(id)) this.revive(id); else this.kill(id); }

  private flush() {
    for (const rt of this.rt.values()) rt.cache?.clear();
    this.note("Every cache was emptied at once");
  }

  private alive(id: string): boolean {
    const r = this.rt.get(id)!;
    return !(r.down && this.t - r.deadSince >= HEALTH_CHECK_SEC);
  }
  private takesWrites(id: string): boolean {
    const r = this.rt.get(id)!;
    return r.n.kind !== "replica" || r.promoted;
  }
  private hash(key: number): number { return Math.imul(key + 1, 2654435761) >>> 0; }

  private route(from: Runtime, r: Req): string | undefined {
    const outs = this.outs.get(from.n.id)!;
    if (!outs.length) return undefined;
    if (from.n.kind === "shard") return [...outs].sort()[this.hash(r.key) % outs.length]; // key decides the shard, alive or not
    const kindOf = (id: string) => this.rt.get(id)!.n.kind;
    const ok = (id: string) => this.alive(id) && (!r.write || this.takesWrites(id));
    let tiers: string[][];
    if (r.write) tiers = [outs.filter((id) => isQueueKind(kindOf(id)) && ok(id)), outs.filter(ok)];
    else tiers = [outs.filter((id) => !isQueueKind(kindOf(id)) && kindOf(id) !== "worker" && ok(id)), outs.filter((id) => kindOf(id) !== "worker" && this.alive(id)), outs.filter((id) => this.alive(id))];
    let cand = tiers.find((t) => t.length) ?? [];
    if (!cand.length) cand = outs; // everything downstream is dead: the request goes to a dead node and fails there
    return cand[from.rr++ % cand.length];
  }

  private forward(from: Runtime, r: Req) {
    const to = this.route(from, r);
    if (to === undefined) { this.complete(r); return; }
    this.onHop?.({ from: from.n.id, to, write: r.write });
    this.arrive(this.rt.get(to)!, r);
  }

  private bin(): SecondBin {
    const i = Math.floor(this.t);
    while (this.bins.length <= i) this.bins.push({ t: this.bins.length, arrivals: 0, errors: 0, backlog: 0 });
    return this.bins[i];
  }

  private allow(node: Runtime, r: Req): boolean {
    const rate = node.n.perClientRps ?? 20;
    let b = node.buckets.get(r.client);
    if (!b) { b = { tokens: rate, last: this.t }; node.buckets.set(r.client, b); }
    b.tokens = Math.min(rate, b.tokens + (this.t - b.last) * rate); b.last = this.t;
    if (b.tokens < 1) return false;
    b.tokens -= 1;
    return true;
  }

  /** A request died at `node` (overflow, crash, read-only refusal). */
  private fail(node: Runtime, r: Req) {
    node.drop.add();
    this.onDrop?.(node.n.id);
    this.peak.add(node.n.id);
    this.settleLeader(r, false);
    if (r.acked) this.asyncLost++;
    else if (r.abuse) this.abuseBlocked++;
    else { this.errors++; this.bin().errors++; }
  }

  private arrive(node: Runtime, r: Req) {
    node.arr.add();
    r.enq = this.t;
    if (node.down) { this.fail(node, r); return; }
    if (node.n.kind === "replica" && r.write && !node.promoted) { this.fail(node, r); return; } // read-only
    if (node.n.kind === "limiter" && !this.allow(node, r)) {
      node.thr.add(); this.throttled++; this.onDrop?.(node.n.id);
      this.settleLeader(r, false);
      if (r.abuse) this.abuseBlocked++; else { this.errors++; this.bin().errors++; } // a legit client got a 429
      return;
    }
    if (node.len >= node.maxWaiting) { this.fail(node, r); return; }
    if (isQueueKind(node.n.kind) && r.write && !r.acked) {
      r.acked = true; // producer is told "accepted" immediately; the work continues in the background
      this.record(r, r.latMs + node.n.latencyMs);
    }
    node.push(r);
  }

  private record(r: Req, ms: number) {
    if (r.abuse) return;
    if (ms > TIMEOUT_MS) { this.errors++; this.bin().errors++; }
    else { this.lat.push(ms); this.recent.push(ms); if (this.recent.length > 3000) this.recent.splice(0, 1000); }
  }

  private complete(r: Req) {
    if (r.abuse && !r.acked) this.abuseAdmitted++;
    if (!r.acked) this.record(r, r.latMs);
    this.settleLeader(r, true);
  }

  /** A single-flight cache leader finished: wake everyone parked behind it. */
  private settleLeader(r: Req, ok: boolean) {
    const c = r.lead; if (!c) return;
    r.lead = undefined;
    if (ok) c.cache!.insert(r.key); // a cache only learns a key once the database has actually answered
    if (!c.n.coalesce) return;
    const list = c.inflight.get(r.key) ?? [];
    c.inflight.delete(r.key);
    for (const p of list) {
      if (!ok) { this.fail(c, p); continue; }
      p.latMs += (this.t - p.parkedAt) * 1000;
      this.complete(p);
    }
  }

  private process(node: Runtime, r: Req) {
    node.srv.add();
    const n = node.n;
    r.latMs += n.latencyMs + (this.t - r.enq) * 1000;
    if (n.kind === "cache") {
      const c = node.cache!;
      if (r.write) { c.invalidate(r.key); this.forward(node, r); return; }
      if (c.lookup(r.key)) { this.complete(r); return; }
      if (n.coalesce) {
        const parked = node.inflight.get(r.key);
        if (parked) { r.parkedAt = this.t; parked.push(r); this.coalesced++; return; }
        node.inflight.set(r.key, []); // leader fetches; the rest wait for it
      }
      r.lead = node;
    } else if (n.kind === "cdn" && r.stat) {
      node.staticSeen++;
      if (this.rng() < (n.staticHit ?? 0.95)) { node.staticHits++; this.cdnHits++; this.complete(r); return; }
    } else if (n.kind === "api" && r.stat) {
      this.complete(r); return; // the API serves the file itself; no database involved
    } else if (n.kind === "db" || (n.kind === "replica" && node.promoted)) {
      if (r.write) this.lastWrite.set(r.key, this.t);
    } else if (n.kind === "replica" && !r.write) {
      const w = this.lastWrite.get(r.key);
      if (w !== undefined && this.t - w < REPLICA_LAG_SEC) this.staleReads++;
    }
    this.forward(node, r);
  }

  private runEvents() {
    while (this.evIdx < this.events.length && this.events[this.evIdx].atSec <= this.t) {
      const e = this.events[this.evIdx++];
      if (e.kill) { this.kill(e.kill); if (e.reviveAtSec !== undefined) this.revives.push({ at: e.reviveAtSec, id: e.kill }); }
      if (e.flushCache) this.flush();
    }
    for (let i = this.revives.length - 1; i >= 0; i--) if (this.revives[i].at <= this.t) { this.revive(this.revives[i].id); this.revives.splice(i, 1); }
    // Failover: once a primary has been dead long enough, the first healthy replica takes over writes.
    for (const rt of this.rt.values()) {
      if (rt.down && !rt.failoverDone && (rt.n.kind === "db") && this.t - rt.deadSince >= FAILOVER_SEC) {
        rt.failoverDone = true;
        const rep = [...this.rt.values()].find((x) => x.n.kind === "replica" && !x.down && !x.promoted);
        if (rep) { rep.promoted = true; this.note(`${rep.n.id} promoted to primary after ${rt.n.id} failed`, rep.n.id); }
      }
    }
  }

  step(dt: number) {
    this.t += dt;
    this.runEvents();
    for (const rt of this.rt.values()) { rt.arr.decay(dt); rt.srv.decay(dt); rt.drop.decay(dt); rt.thr.decay(dt); }
    const cl = this.rt.get(this.clientId)!;
    const w = this.workload;
    const rps = this.rpsOverride ?? rateAt(w, this.t);
    const wf = this.writeOverride ?? w.writeFraction;
    const count = poisson(rps * dt, this.rng);
    for (let i = 0; i < count; i++) {
      this.arrivals++;
      const abuse = w.abuseFraction ? this.rng() < w.abuseFraction : false;
      const write = this.rng() < wf;
      const stat = !write && w.staticFraction ? this.rng() < w.staticFraction : false;
      const r: Req = { id: this.nextId++, key: this.zipf.sample(this.rng), write, born: this.t, enq: this.t, latMs: 0, acked: false,
        stat, abuse, client: abuse ? 100000 + Math.floor(this.rng() * 3) : w.abuseFraction ? Math.floor(this.rng() * 2000) : 0, parkedAt: 0 };
      if (!abuse) this.legitArrivals++;
      this.bin().arrivals++;
      cl.arr.add();
      this.forward(cl, r);
    }
    let backlog = 0;
    for (const id of this.order) {
      if (id === this.clientId) continue;
      const node = this.rt.get(id)!;
      if (node.down) continue;
      const per = node.n.capacityRps * dt;
      node.credit = Math.min(node.credit + per, per + 1);
      let r: Req | undefined;
      // A queue consumer sees "connection refused" at once and keeps the message, so it only drains into live nodes.
      const room = () => !isQueueKind(node.n.kind) || this.outs.get(id)!.some((o) => { const t = this.rt.get(o)!; return !t.down && this.takesWrites(o) && t.len < t.maxWaiting * 0.25; });
      while (node.credit >= 1 && room() && (r = node.pop())) { node.credit -= 1; this.process(node, r); }
      if (isQueueKind(node.n.kind)) backlog += node.len;
      if (this.overloaded(node)) { this.peak.add(id); if (this.firstOverload[id] === undefined) this.firstOverload[id] = this.t; }
      if (Number.isFinite(node.n.capacityRps)) this.peakUtil[id] = Math.max(this.peakUtil[id] ?? 0, node.arr.v / node.n.capacityRps);
    }
    this.bin().backlog = backlog;
    this.maxBacklog = Math.max(this.maxBacklog, backlog);
  }

  private overloaded(node: Runtime): boolean {
    if (node.down) return false;
    if (isQueueKind(node.n.kind)) return node.len > (node.n.bufferSize ?? 4000) * 0.8 || node.drop.v > 0.5;
    if (node.n.kind === "limiter") return false;
    return node.drop.v > 0.5 || (node.len / node.n.capacityRps) * 1000 > OVERLOAD_WAIT_MS;
  }

  /** Cheap live numbers for on-screen readouts: latest latencies and the last three seconds of errors. */
  liveStats(): { p50: number; p99: number; errorRate: number; rps: number } {
    const sorted = [...this.recent].sort((a, b) => a - b);
    const i = Math.floor(this.t), from = Math.max(0, i - 2);
    let arr = 0, err = 0;
    for (let k = from; k <= i && k < this.bins.length; k++) { arr += this.bins[k].arrivals; err += this.bins[k].errors; }
    return { p50: percentile(sorted, 50), p99: percentile(sorted, 99), errorRate: arr ? Math.min(1, err / arr) : 0, rps: this.rpsOverride ?? rateAt(this.workload, this.t) };
  }

  get backlog(): number {
    let b = 0;
    for (const rt of this.rt.values()) if (isQueueKind(rt.n.kind)) b += rt.len;
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
        overloaded: rt.n.kind !== "client" && this.overloaded(rt),
        hitRate: rt.cache ? rt.cache.hitRate : rt.n.kind === "cdn" ? (rt.staticSeen ? rt.staticHits / rt.staticSeen : 0) : undefined,
        down: rt.down || undefined, promoted: rt.promoted || undefined, throttledRps: rt.n.kind === "limiter" ? rt.thr.v : undefined,
      };
    }
    return out;
  }

  summary(): SimSummary {
    const sorted = [...this.lat].sort((a, b) => a - b);
    const done = this.lat.length;
    return {
      seconds: this.t, arrivals: this.arrivals, legitArrivals: this.legitArrivals, completed: done, errors: this.errors,
      errorRate: this.legitArrivals ? Math.min(1, this.errors / this.legitArrivals) : 0,
      p50Ms: percentile(sorted, 50), p95Ms: percentile(sorted, 95), p99Ms: percentile(sorted, 99),
      throughputRps: this.t ? done / this.t : 0, asyncLost: this.asyncLost,
      maxBacklog: this.maxBacklog, endBacklog: this.backlog,
      throttled: this.throttled, abuseBlocked: this.abuseBlocked, abuseAdmitted: this.abuseAdmitted,
      staleReads: this.staleReads, coalesced: this.coalesced, cdnHits: this.cdnHits,
      nodes: this.snapshot(), peakOverloaded: [...this.peak], peakUtil: { ...this.peakUtil }, firstOverloadSec: { ...this.firstOverload },
      log: [...this.log], series: this.bins.map((b) => ({ ...b })),
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
