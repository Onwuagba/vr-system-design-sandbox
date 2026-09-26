// Terse constructors for whole architectures. Used for level starts, reference solutions and the daily-puzzle solver.
import type { Design, Node } from "./model.js";
import { node } from "./model.js";

export interface StackOpts {
  apis?: number; lb?: boolean; cdn?: boolean; limiter?: number;
  cache?: Partial<Node>; queue?: Partial<Node> | true; broker?: { workers: number; bufferSize?: number };
  replicas?: number; shards?: number; db?: Partial<Node>;
}

export const E = (...pairs: string[]) => pairs.map((p) => { const [from, to] = p.split(">"); return { from, to }; });

export function stack(o: StackOpts = {}): Design {
  const nApi = o.apis ?? 1;
  const nodes: Node[] = [node("users", "client")], edges: { from: string; to: string }[] = [];
  const front: string[] = [];
  if (o.cdn) { nodes.push(node("cdn", "cdn")); front.push("cdn"); }
  if (o.limiter) { nodes.push(node("limiter", "limiter", { perClientRps: o.limiter })); front.push("limiter"); }
  const lb = o.lb ?? nApi > 1;
  if (lb) { nodes.push(node("lb", "lb")); front.push("lb"); }
  const apiIds = Array.from({ length: nApi }, (_, i) => `api${i + 1}`);
  for (const id of apiIds) nodes.push(node(id, "api"));
  const chain = ["users", ...front];
  for (let i = 0; i < chain.length - 1; i++) edges.push(...E(`${chain[i]}>${chain[i + 1]}`));
  const last = chain[chain.length - 1];
  for (const a of apiIds) edges.push(...E(`${last}>${a}`));
  // data tier
  const dbIds: string[] = [];
  const shardN = o.shards ?? 0;
  let store: string; // where reads/writes ultimately land
  if (shardN > 1) {
    nodes.push(node("shard", "shard"));
    for (let i = 1; i <= shardN; i++) { nodes.push(node(`db${i}`, "db", o.db)); dbIds.push(`db${i}`); edges.push(...E(`shard>db${i}`)); }
    store = "shard";
  } else { nodes.push(node("db", "db", o.db)); dbIds.push("db"); store = "db"; }
  const reps = Array.from({ length: o.replicas ?? 0 }, (_, i) => `replica${i + 1}`);
  for (const r of reps) nodes.push(node(r, "replica", o.db ? { capacityRps: o.db.capacityRps } : {}));
  const readTargets = [...(o.cache ? ["cache"] : [store]), ...(o.cache ? [] : reps)];
  if (o.cache) {
    nodes.push(node("cache", "cache", o.cache));
    edges.push(...E(`cache>${store}`), ...reps.map((r) => ({ from: "cache", to: r })));
  }
  const writeTargets: string[] = [];
  if (o.queue) {
    nodes.push(node("queue", "queue", o.queue === true ? {} : o.queue));
    edges.push(...E(`queue>${store}`), ...reps.map((r) => ({ from: "queue", to: r })));
    writeTargets.push("queue");
  }
  if (o.broker) {
    nodes.push(node("broker", "broker", o.broker.bufferSize ? { bufferSize: o.broker.bufferSize } : {}));
    for (let i = 1; i <= o.broker.workers; i++) { nodes.push(node(`worker${i}`, "worker")); edges.push(...E(`broker>worker${i}`, `worker${i}>${store}`)); }
    writeTargets.push("broker");
  }
  for (const a of apiIds) {
    for (const t of new Set([...readTargets, ...writeTargets])) edges.push(...E(`${a}>${t}`));
    if (o.cache && !writeTargets.length) { /* writes reach the store through the cache */ }
  }
  return { nodes, edges };
}
