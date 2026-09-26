// Pure simulation core: no rendering, no XR. Tested on its own; the VR scene only draws it.

export type Kind = "client" | "lb" | "api" | "cache" | "db" | "queue"
  | "replica" | "cdn" | "limiter" | "shard" | "broker" | "worker";
export type EvictionPolicy = "lru" | "fifo" | "lfu";

export interface Node {
  id: string;
  kind: Kind;
  capacityRps: number;   // requests/sec it can serve (queue: drain rate to downstream)
  latencyMs: number;     // service time when not overloaded
  hitRate?: number;      // cache only: optional fixed override of the modelled hit rate
  cacheSize?: number;    // cache only: number of keys it can hold
  policy?: EvictionPolicy; // cache only
  bufferSize?: number;   // queue/broker only: max backlog before it rejects
  coalesce?: boolean;    // cache only: single-flight, concurrent misses for one key share one DB read
  perClientRps?: number; // limiter only: token-bucket refill rate for each individual client
  staticHit?: number;    // cdn only: share of static requests answered at the edge
}

/** Kinds that acknowledge a write as soon as it is safely stored, then drain it later. */
export const isQueueKind = (k: Kind): boolean => k === "queue" || k === "broker";

export interface Edge { from: string; to: string }
export interface Design { nodes: Node[]; edges: Edge[] }

export const KINDS: Kind[] = ["client", "lb", "api", "cache", "db", "queue", "replica", "cdn", "limiter", "shard", "broker", "worker"];

export const CATALOG: Record<Kind, Omit<Node, "id">> = {
  client: { kind: "client", capacityRps: Infinity, latencyMs: 0 },
  lb:     { kind: "lb",     capacityRps: 5000, latencyMs: 1 },
  api:    { kind: "api",    capacityRps: 400,  latencyMs: 20 },
  cache:  { kind: "cache",  capacityRps: 8000, latencyMs: 2, cacheSize: 300, policy: "lru" },
  db:     { kind: "db",     capacityRps: 300,  latencyMs: 15 },
  queue:  { kind: "queue",  capacityRps: 200,  latencyMs: 5, bufferSize: 4000 },
  replica: { kind: "replica", capacityRps: 300, latencyMs: 15 },
  cdn:    { kind: "cdn",    capacityRps: 20000, latencyMs: 8, staticHit: 0.95 },
  limiter: { kind: "limiter", capacityRps: 6000, latencyMs: 1, perClientRps: 20 },
  shard:  { kind: "shard",  capacityRps: 3000, latencyMs: 1 },
  broker: { kind: "broker", capacityRps: 500,  latencyMs: 4, bufferSize: 8000 },
  worker: { kind: "worker", capacityRps: 60,   latencyMs: 120 },
};

export const COST: Record<Kind, number> = { client: 0, lb: 2, api: 3, cache: 4, db: 5, queue: 3, replica: 4, cdn: 3, limiter: 2, shard: 2, broker: 4, worker: 2 };

export function node(id: string, kind: Kind, overrides: Partial<Node> = {}): Node {
  return { id, ...CATALOG[kind], ...overrides };
}

export function cost(d: Design): number {
  return d.nodes.reduce((s, n) => s + COST[n.kind], 0);
}

export function outEdges(d: Design, id: string): string[] {
  return d.edges.filter((e) => e.from === id).map((e) => e.to);
}

/** Workload description shared by the analytic model and the discrete simulator. */
export interface Workload {
  phases: { untilSec: number; rps: number }[]; // piecewise-constant client rate
  writeFraction: number;   // share of requests that are writes (never cache hits)
  keyspace: number;        // number of distinct keys
  zipfS: number;           // key popularity skew (1.0 = classic hot-key skew)
  staticFraction?: number; // share of requests that are static files (images, JS): a CDN can serve these
  abuseFraction?: number;  // share of requests sent by a handful of abusive clients (bots)
  warmCaches?: boolean;    // caches start already holding the hottest keys
  events?: SimEvent[];     // scripted incidents
}

/** Things that go wrong on a schedule: a node dies (and optionally comes back) or a cache empties. */
export interface SimEvent { atSec: number; kill?: string; reviveAtSec?: number; flushCache?: boolean }

export function rateAt(w: Workload, t: number): number {
  for (const p of w.phases) if (t < p.untilSec) return p.rps;
  return w.phases[w.phases.length - 1].rps;
}
export function durationOf(w: Workload): number { return w.phases[w.phases.length - 1].untilSec; }

export function steady(rps: number, extra: Partial<Workload> = {}): Workload {
  return { phases: [{ untilSec: 20, rps }], writeFraction: 0, keyspace: 1000, zipfS: 1, ...extra };
}
