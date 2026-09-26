// Teaching layer: contextual hints while you build or run, and the "what happened" explanation after a run.
// Everything here is rule-based and offline, and every line ties a concept to a number you can see.
import type { Design, Node } from "../sim/model.js";
import { isQueueKind } from "../sim/model.js";
import type { Level, Verdict } from "../sim/levels.js";
import type { NodeSnap, SimSummary } from "../sim/simulator.js";
import { concept } from "./concepts.js";

export interface Hint { concept?: string; text: string }

const has = (d: Design, k: string) => d.nodes.some((n) => n.kind === k);
const count = (d: Design, k: string) => d.nodes.filter((n) => n.kind === k).length;
const fmtPct = (x: number) => `${Math.round(x * 100)}%`;

/** Hints for the current design, most relevant first. `snap` is present while the simulation runs. */
export function contextHints(level: Level, d: Design, snap?: Record<string, NodeSnap>, stats?: { p50: number; p99: number }): Hint[] {
  const out: Hint[] = [];
  const push = (c: string | undefined, text: string) => out.push({ concept: c, text });
  const over = (n: Node) => snap?.[n.id]?.overloaded;
  const dead = d.nodes.filter((n) => snap?.[n.id]?.down);

  for (const n of dead) push("failover", `${n.id} is down. Watch which requests fail, and how long until traffic routes around it. Tap it again to bring it back.`);

  for (const n of d.nodes) {
    if (!over(n)) continue;
    if (n.kind === "db" && !has(d, "cache") && level.workload.writeFraction < 0.5) push("cache", `${n.id} is overloaded. Most traffic is reads of popular keys: a cache in front of it answers those from memory.`);
    else if (n.kind === "db" && has(d, "replica") === false && level.palette.includes("replica")) push("replica", `${n.id} is overloaded. A read replica is a live copy that serves reads, so the primary only takes writes.`);
    else if (n.kind === "db") push("capacity", `${n.id} is overloaded. Check the cache hit rate, and whether writes can wait in a queue.`);
    if (n.kind === "api") push("horizontal-scaling", `${n.id} can't keep up. Add another API server behind the load balancer: two small servers share the load.`);
    if (n.kind === "lb") push("capacity", `${n.id} is saturated. Even a load balancer has a ceiling.`);
    if (n.kind === "cache") push("capacity", `${n.id} is saturated. Split traffic across more caches.`);
    if (isQueueKind(n.kind)) push("backpressure", `${n.id} is filling faster than it drains. A queue only helps if its consumers eventually keep up.`);
    if (n.kind === "worker") push("worker-pool", `${n.id} is the slow step. Add more workers behind the broker so jobs drain faster.`);
    if (n.kind === "replica") push("replica", `${n.id} is saturated. Add another replica or put a cache in front.`);
    if (n.kind === "shard") push("sharding", `${n.id} is saturated.`);
  }
  // one shard much hotter than its siblings: a hot key or few shards
  const shardDbs = d.nodes.filter((n) => d.edges.some((e) => e.from !== "" && e.to === n.id && d.nodes.find((x) => x.id === e.from)?.kind === "shard"));
  if (snap && shardDbs.length > 1) {
    const loads = shardDbs.map((n) => snap[n.id]?.arrivalRps ?? 0);
    if (Math.max(...loads) > 1.6 * Math.max(1, Math.min(...loads)) && Math.max(...loads) > 60)
      push("hot-key", "One shard is much busier than the others. Popular keys stay on one shard, and splitting the database cannot split one key. A cache absorbs a hot key.");
  }

  // teachable moments that need no failure
  for (const c of d.nodes.filter((n) => n.kind === "cache")) {
    const hr = snap?.[c.id]?.hitRate;
    if (hr !== undefined && snap?.[c.id] && snap[c.id].arrivalRps > 20 && hr < 0.5)
      push("eviction", `${c.id} only answers ${fmtPct(hr)} of reads. A cache is small, so it must forget things. Tap it to change the eviction policy: LFU keeps the most popular keys, which suits skewed traffic.`);
  }
  if (stats && stats.p99 > 2.5 * Math.max(1, stats.p50) && stats.p99 > 120)
    push("p99", `p50 is ${stats.p50.toFixed(0)} ms but p99 is ${stats.p99.toFixed(0)} ms. p99 means the slowest 1% of requests. Queues build up in that tail first, so it warns you before the average does.`);

  // structural nudges (not running)
  if (!snap) {
    const apis = count(d, "api");
    if (apis === 1 && !has(d, "lb") && level.palette.includes("lb")) push("spof", "One API server is a single point of failure: if it crashes, everything stops. A load balancer with two servers removes that.");
    for (const k of level.goal.requires) if (!has(d, k)) push(undefined, `This level needs a ${k}. Pinch one from the shelf.`);
    if (level.goal.requiresAny && !level.goal.requiresAny.some((k) => has(d, k))) push(undefined, `Try adding one of: ${level.goal.requiresAny.join(", ")}.`);
    if (has(d, "cache")) push("eviction", "Tap a cache to change its size and eviction policy. A cache can only hold so many keys, so it has to decide what to forget.");
    if (has(d, "replica")) push("replication-lag", "Replicas serve reads but may lag a moment behind, so a read right after a write can be stale.");
  }
  return out.length ? out : [{ text: snap ? "Everything is healthy. Watch the p99 in the corner, and try the sandbox load slider." : "Wire everything from Users to the database, then press PLAY." }];
}

export interface Explanation { title: string; lines: string[]; concepts: string[] }

const worst = (s: SimSummary, d: Design): { id: string; util: number } | undefined => {
  let best: { id: string; util: number } | undefined;
  for (const n of d.nodes) {
    if (n.kind === "client") continue;
    const u = s.peakUtil[n.id] ?? 0;
    if (!best || u > best.util) best = { id: n.id, util: u };
  }
  return best;
};

/** Post-run explanation tied to the metrics: what broke first, why, and what the numbers mean. */
export function explainRun(level: Level, d: Design, v: Verdict): Explanation {
  const s = v.summary;
  const lines: string[] = [], seen: string[] = [];
  const note = (c: string) => { if (!seen.includes(c)) seen.push(c); };
  if (!s) return { title: "It did not run", lines: v.reasons, concepts: [] };
  const byId = new Map(d.nodes.map((n) => [n.id, n]));

  const peakBin = s.series.reduce((a, b) => (b.arrivals > a.arrivals ? b : a), s.series[0] ?? { t: 0, arrivals: 0, errors: 0, backlog: 0 });
  lines.push(`Traffic peaked at about ${peakBin.arrivals} requests per second around ${peakBin.t}s.`);

  const overloaded = Object.entries(s.firstOverloadSec).sort((a, b) => a[1] - b[1]);
  if (overloaded.length) {
    const [id, t] = overloaded[0];
    const n = byId.get(id)!;
    const u = s.peakUtil[id] ?? 0;
    lines.push(`${id} was the first to break, at ${t.toFixed(0)}s. It peaked at ${fmtPct(u)} of its ${n.capacityRps} rps capacity, so extra requests waited in line and then were dropped.`);
    note("capacity"); note("overload");
  } else if (s.errorRate > 0.02 && s.log.some((e) => /crash/.test(e.text))) {
    const dead = s.log.find((e) => /crash/.test(e.text))!;
    const heal = s.log.find((e) => /promoted/.test(e.text));
    lines.push(`Nothing was overloaded: the errors came from the crash. ${dead.nodeId ?? "A part"} died at ${dead.t.toFixed(0)}s and every request that needed it failed${heal ? `, until ${heal.nodeId} took over at ${heal.t.toFixed(0)}s` : ", and nothing ever took over"}.`);
    note("failover"); note("spof");
  } else {
    const w = worst(s, d);
    if (w && w.util > 0.05) lines.push(`Nothing overloaded. The busiest part, ${w.id}, peaked at ${fmtPct(w.util)} of capacity${w.util > 0.85 ? ", which leaves little headroom" : ", a comfortable margin"}.`);
    if (w && w.util > 0.85) note("headroom");
  }

  for (const c of d.nodes.filter((n) => n.kind === "cache")) {
    const hr = s.nodes[c.id]?.hitRate;
    if (hr !== undefined) { lines.push(`${c.id} answered ${fmtPct(hr)} of reads from memory (${c.policy?.toUpperCase()}, ${c.cacheSize} keys), so downstream only saw ${fmtPct(1 - hr)} of them.`); note("hit-rate"); note("eviction"); }
    if (c.coalesce && s.coalesced > 0) { lines.push(`${s.coalesced} requests waited for another request's fetch instead of hitting the database themselves.`); note("coalescing"); }
  }
  for (const c of d.nodes.filter((n) => n.kind === "cdn")) {
    lines.push(`The CDN answered ${s.cdnHits} static requests at the edge (${fmtPct(s.nodes[c.id]?.hitRate ?? 0)} of them), so your servers never saw those.`); note("cdn");
  }
  if (s.throttled > 0) { lines.push(`The rate limiter rejected ${s.throttled} requests; ${s.abuseBlocked} of the rejected or failed were from abusive clients.`); note("rate-limiter"); }
  else if (level.workload.abuseFraction) { lines.push(`Abusive clients sent ${Math.round(level.workload.abuseFraction * 100)}% of the traffic and nothing stopped them, so they competed with real users for capacity.`); note("rate-limiter"); }
  if (s.staleReads > 0) { lines.push(`${s.staleReads} reads came from a replica that had not yet seen a very recent write. That is replication lag.`); note("replication-lag"); }
  if (s.maxBacklog > 20) { lines.push(`The queue absorbed a backlog of up to ${s.maxBacklog} writes${s.endBacklog > 0 ? `, and ${s.endBacklog} were still waiting at the end` : " and fully drained it"}.`); note("queue"); }
  for (const e of s.log) {
    lines.push(`At ${e.t.toFixed(0)}s: ${e.text}.`);
    if (/crash/.test(e.text) || /promoted/.test(e.text)) { note("failover"); note("health-check"); }
    if (/emptied/.test(e.text)) note("thundering-herd");
  }
  lines.push(`Typical (p50) request: ${s.p50Ms.toFixed(0)} ms. Slowest 1% (p99): ${s.p99Ms.toFixed(0)} ms.${s.p99Ms > 2.5 * Math.max(1, s.p50Ms) ? " The tail is much slower than typical: that is where queues build up first." : ""} Errors: ${(s.errorRate * 100).toFixed(1)}%.`);
  note("p99");
  return { title: v.passed ? "What happened (you passed)" : "What happened", lines, concepts: seen };
}

export function conceptLines(ids: string[]): string[] {
  return ids.map((id) => concept(id)).filter((c): c is NonNullable<typeof c> => !!c).map((c) => `${c.term}: ${c.short}`);
}
