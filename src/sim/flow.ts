// Steady-state analysis: cheap, deterministic estimate used for hints and wire-load labels.
// The discrete simulator (simulator.ts) is the source of truth for verdicts.
import type { Design, Node, Workload } from "./model.js";
import { outEdges, steady } from "./model.js";
import { Zipf } from "./rng.js";
import { validate } from "./validate.js";

export interface NodeStats { id: string; rps: number; utilisation: number; latencyMs: number; overloaded: boolean }
export interface Result { nodes: Record<string, NodeStats>; p50Ms: number; errorRate: number; bottleneck?: string; hints: string[] }

const POLICY_FACTOR = { lfu: 1, lru: 0.92, fifo: 0.88 } as const;

/** Modelled read hit rate of a cache under a Zipf workload. */
export function cacheHitRate(n: Node, w: Workload): number {
  if (n.hitRate !== undefined) return n.hitRate;
  const z = new Zipf(w.keyspace, w.zipfS);
  return z.topMass(n.cacheSize ?? 0) * POLICY_FACTOR[n.policy ?? "lru"];
}

export function analyse(design: Design, load: number | Workload): Result {
  const w = typeof load === "number" ? steady(load) : load;
  const clientRps = Math.max(...w.phases.map((p) => p.rps));
  const bad = validate(design).find((i) => i.severity === "error");
  if (bad) throw new Error(bad.message);
  const byId = new Map(design.nodes.map((n) => [n.id, n]));
  const client = design.nodes.find((n) => n.kind === "client")!;
  const rps: Record<string, number> = {};

  // Load is split into reads and writes so caches and queues can treat them differently.
  const visit = (id: string, reads: number, writes: number) => {
    rps[id] = (rps[id] ?? 0) + reads + writes;
    const n = byId.get(id)!;
    const outs = outEdges(design, id);
    if (!outs.length) return;
    if (n.kind === "cache") reads *= 1 - cacheHitRate(n, w);
    const cap = n.capacityRps;
    const total = reads + writes;
    if (total > cap) { const k = cap / total; reads *= k; writes *= k; } // excess is shed here
    const qs = outs.filter((o) => byId.get(o)!.kind === "queue"), nq = outs.filter((o) => byId.get(o)!.kind !== "queue");
    const rTargets = nq.length ? nq : outs, wTargets = qs.length ? qs : outs;
    for (const t of rTargets) visit(t, reads / rTargets.length, 0);
    for (const t of wTargets) visit(t, 0, writes / wTargets.length);
  };
  visit(client.id, clientRps * (1 - w.writeFraction), clientRps * w.writeFraction);

  const nodes: Record<string, NodeStats> = {};
  let dropped = 0;
  for (const [id, load] of Object.entries(rps)) {
    const n = byId.get(id)!;
    const u = load / n.capacityRps;
    const overloaded = u > 1;
    if (overloaded && n.kind !== "queue") dropped = Math.max(dropped, (load - n.capacityRps) / clientRps);
    const lat = overloaded ? n.latencyMs * 50 : n.latencyMs / (1 - Math.min(u, 0.99));
    nodes[id] = { id, rps: load, utilisation: u, latencyMs: lat, overloaded };
  }
  const ranked = Object.values(nodes).filter((s) => byId.get(s.id)!.kind !== "client").sort((a, b) => b.utilisation - a.utilisation);
  const bottleneck = ranked[0]?.utilisation >= 0.8 ? ranked[0].id : undefined;
  return { nodes, p50Ms: criticalPath(design, client.id, nodes), errorRate: Math.min(dropped, 1), bottleneck, hints: hintsFor(design, nodes) };
}

function criticalPath(d: Design, id: string, s: Record<string, NodeStats>): number {
  const next = outEdges(d, id);
  return (s[id]?.latencyMs ?? 0) + (next.length ? Math.max(...next.map((n) => criticalPath(d, n, s))) : 0);
}

export interface HintNode { id: string; overloaded: boolean }

/** Rule-based, plain-language nudges keyed on which node is overloaded and what is missing. */
export function hintsFor(d: Design, s: Record<string, { overloaded: boolean }>): string[] {
  const h: string[] = [];
  const has = (k: string) => d.nodes.some((n) => n.kind === k);
  for (const n of d.nodes) {
    if (!s[n.id]?.overloaded) continue;
    if (n.kind === "db") h.push(has("cache")
      ? `${n.id} is overloaded. Is the cache big enough for the hot keys, and are writes going through a queue?`
      : `${n.id} is overloaded. Most traffic is reads: try a cache in front of it.`);
    if (n.kind === "api") h.push(has("lb")
      ? `${n.id} can't keep up. Add another API server behind the load balancer.`
      : `${n.id} can't keep up. Add more API servers behind a load balancer.`);
    if (n.kind === "queue") h.push(`${n.id} is filling faster than it drains. Reduce write load on the database or enlarge the buffer.`);
    if (n.kind === "cache") h.push(`${n.id} is saturated. Split traffic across more caches.`);
    if (n.kind === "lb") h.push(`${n.id} is saturated. Add a second balancer tier.`);
  }
  const apis = d.nodes.filter((n) => n.kind === "api");
  if (apis.length === 1 && !has("lb")) h.push("One API server is a single point of failure.");
  return h;
}
