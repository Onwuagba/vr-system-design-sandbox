import type { Design, Kind } from "./model.js";

export interface Issue { severity: "error" | "warning"; code: string; message: string; nodeId?: string }

/** Which kinds may feed which. Anything else is rejected while wiring. */
export const ALLOWED: Record<Kind, Kind[]> = {
  client: ["lb", "api", "cdn", "limiter"],
  cdn: ["lb", "api", "limiter"],
  limiter: ["lb", "api"],
  lb: ["api", "lb"],
  api: ["cache", "db", "queue", "broker", "replica", "shard", "worker"],
  cache: ["db", "queue", "replica", "shard"],
  queue: ["db", "replica", "shard"],
  broker: ["worker", "db", "replica", "shard"],
  worker: ["db", "shard"],
  shard: ["db"],
  db: [],
  replica: [],
};

export function canConnect(from: Kind, to: Kind): boolean { return ALLOWED[from].includes(to); }

/** Why a proposed single edge is refused (used live while the player drags a wire). */
export function edgeProblem(d: Design, from: string, to: string): string | undefined {
  const a = d.nodes.find((n) => n.id === from), b = d.nodes.find((n) => n.id === to);
  if (!a || !b) return "Unknown node.";
  if (from === to) return "A node cannot connect to itself.";
  if (d.edges.some((e) => e.from === from && e.to === to)) return "Already wired.";
  if (!canConnect(a.kind, b.kind)) return `${label(a.kind)} cannot send traffic straight to ${label(b.kind)}.`;
  if (a.kind === "client" && d.edges.some((e) => e.from === from)) return "Users enter through one door. Use a load balancer to fan out.";
  if (reaches(d, to, from)) return "That would create a loop.";
  return undefined;
}

function label(k: Kind): string {
  return { client: "Users", lb: "A load balancer", api: "An API server", cache: "A cache", db: "The database", queue: "A queue",
    replica: "A read replica", cdn: "A CDN", limiter: "A rate limiter", shard: "A shard router", broker: "A message broker", worker: "A worker pool" }[k];
}

function reaches(d: Design, start: string, target: string): boolean {
  const seen = new Set<string>(), stack = [start];
  while (stack.length) {
    const c = stack.pop()!;
    if (c === target) return true;
    if (seen.has(c)) continue;
    seen.add(c);
    for (const e of d.edges) if (e.from === c) stack.push(e.to);
  }
  return false;
}

export function validate(d: Design): Issue[] {
  const issues: Issue[] = [];
  const err = (code: string, message: string, nodeId?: string) => issues.push({ severity: "error", code, message, nodeId });
  const warn = (code: string, message: string, nodeId?: string) => issues.push({ severity: "warning", code, message, nodeId });

  const ids = new Set<string>();
  for (const n of d.nodes) {
    if (ids.has(n.id)) err("duplicate-id", `Two nodes share the id ${n.id}.`, n.id);
    ids.add(n.id);
    if (!(n.capacityRps > 0)) err("bad-capacity", `${n.id} has no capacity.`, n.id);
  }
  const clients = d.nodes.filter((n) => n.kind === "client");
  if (clients.length !== 1) err("client-count", clients.length ? "Only one Users node is allowed." : "The design needs a Users node.");

  const seen = new Set<string>();
  for (const e of d.edges) {
    const key = `${e.from}>${e.to}`;
    if (seen.has(key)) { err("duplicate-edge", `Duplicate wire ${e.from} to ${e.to}.`); continue; }
    seen.add(key);
    const a = d.nodes.find((n) => n.id === e.from), b = d.nodes.find((n) => n.id === e.to);
    if (!a || !b) { err("dangling-edge", `Wire ${e.from} to ${e.to} points at a missing node.`); continue; }
    if (e.from === e.to) { err("self-loop", `${e.from} is wired to itself.`, e.from); continue; }
    if (!canConnect(a.kind, b.kind)) err("bad-edge", `${label(a.kind)} cannot send traffic straight to ${label(b.kind)}.`, e.from);
  }
  const c = clients[0];
  if (c) {
    if (d.edges.filter((e) => e.from === c.id).length > 1) err("client-fanout", "Users enter through one door. Use a load balancer to fan out.", c.id);
    if (!d.edges.some((e) => e.from === c.id)) err("client-unwired", "Connect Users to something.", c.id);
  }
  // Cycles.
  const color = new Map<string, number>();
  const dfs = (id: string): boolean => {
    color.set(id, 1);
    for (const e of d.edges) if (e.from === id) {
      const s = color.get(e.to) ?? 0;
      if (s === 1 || (s === 0 && dfs(e.to))) return true;
    }
    color.set(id, 2);
    return false;
  };
  if (d.nodes.some((n) => (color.get(n.id) ?? 0) === 0 && dfs(n.id))) err("cycle", "Traffic loops forever. Remove the wire that goes backwards.");

  // Reachability and dead ends (warnings: the design still runs).
  if (c) {
    const reach = new Set<string>(), st = [c.id];
    while (st.length) { const x = st.pop()!; if (reach.has(x)) continue; reach.add(x); for (const e of d.edges) if (e.from === x) st.push(e.to); }
    for (const n of d.nodes) if (!reach.has(n.id)) warn("unreachable", `${n.id} gets no traffic. Wire it in.`, n.id);
    for (const n of d.nodes) if (n.kind === "cache" && reach.has(n.id) && !d.edges.some((e) => e.from === n.id))
      err("cache-dead-end", `${n.id} has nowhere to send misses. Wire it onward to the database.`, n.id);
    for (const n of d.nodes) if (reach.has(n.id) && n.kind !== "db" && n.kind !== "client" && n.kind !== "cache" && n.kind !== "replica"
      && !d.edges.some((e) => e.from === n.id)) warn("dead-end", `${n.id} has nowhere to send requests. Connect it onward to the database.`, n.id);
    for (const n of d.nodes) if (n.kind === "replica" && !d.nodes.some((x) => x.kind === "db")) warn("orphan-replica", `${n.id} copies a primary database, but there is none.`, n.id);
    if (!d.nodes.some((n) => n.kind === "db" && reach.has(n.id))) warn("no-db", "No database is reachable, so nothing is ever stored.");
  }
  return issues;
}

export function isRunnable(d: Design): boolean { return !validate(d).some((i) => i.severity === "error"); }
