import type { Design, Kind, Node, Workload } from "./model.js";
import { E, stack } from "./builders.js";
import { cost, node } from "./model.js";
import { simulate, type SimSummary } from "./simulator.js";
import { validate, type Issue } from "./validate.js";

export interface Goal { maxErrorRate: number; maxP99Ms: number; maxEndBacklog: number; requires: Kind[]; requiresAny?: Kind[]; observeOnly?: boolean }
/** A reference design that passes the level. Several per level prove there is more than one right answer. */
export interface Solution { name: string; build: () => Design }
export interface Level {
  id: number; chapter: string; title: string;
  story: string;      // the scenario, told as a short incident
  brief: string;      // the actual task
  lesson: string;
  concepts: string[]; // glossary ids taught here
  workload: Workload; start: Design; palette: Kind[]; goal: Goal;
  starBudget?: number; // total cost for a third star
  sandbox?: boolean;
  solutions: Solution[];
}

const users = () => node("users", "client");
const w = (phases: Workload["phases"], extra: Partial<Workload> = {}): Workload =>
  ({ phases, writeFraction: 0, keyspace: 1000, zipfS: 1, warmCaches: true, ...extra });
/** Copy a design, then add nodes/edges and drop edges. Used to write reference solutions tersely. */
export function extend(base: Design, add: { nodes?: Node[]; edges?: string[]; drop?: string[]; patch?: Record<string, Partial<Node>> }): Design {
  const d = structuredClone(base);
  const drop = new Set(add.drop ?? []);
  d.edges = d.edges.filter((e) => !drop.has(`${e.from}>${e.to}`));
  d.nodes.push(...(add.nodes ?? []));
  d.edges.push(...E(...(add.edges ?? [])));
  for (const [id, p] of Object.entries(add.patch ?? {})) Object.assign(d.nodes.find((n) => n.id === id)!, p);
  return d;
}
const l3Start = (): Design => stack({ apis: 3 });
const chain = (dbCap = 2000): Design => ({ nodes: [users(), node("api1", "api"), node("db", "db", { capacityRps: dbCap })], edges: E("users>api1", "api1>db") });

export const LEVELS: Level[] = [
  { id: 1, chapter: "Basics", title: "It works on my machine",
    story: "Launch day. Your app ran fine for your friends. Then a newsletter goes out and everyone shows up at once.",
    brief: "Wire Users to the API server, then to the database. Press Play and watch launch day crush one server.",
    lesson: "One server has a hard ceiling. Past it, requests queue up and get dropped.",
    concepts: ["capacity", "overload"],
    workload: w([{ untilSec: 8, rps: 200 }, { untilSec: 20, rps: 700 }]),
    start: { nodes: [users(), node("api1", "api"), node("db", "db", { capacityRps: 2000 })], edges: [] },
    palette: ["api", "db"], goal: { maxErrorRate: 1, maxP99Ms: 1e9, maxEndBacklog: 1e9, requires: [], observeOnly: true },
    solutions: [{ name: "Wire it and watch", build: () => chain() }] },
  { id: 2, chapter: "Basics", title: "Spread the load",
    story: "The newsletter worked. Traffic is now a steady 600 requests a second, and your single server tops out at 400.",
    brief: "Put a load balancer in front of more API servers so no one server is overwhelmed.",
    lesson: "A load balancer spreads requests so many small servers act like one big one.",
    concepts: ["load-balancer", "horizontal-scaling", "spof"],
    workload: w([{ untilSec: 20, rps: 600 }]),
    start: chain(), palette: ["lb", "api"], goal: { maxErrorRate: 0.01, maxP99Ms: 300, maxEndBacklog: 1e9, requires: ["lb"] }, starBudget: 12,
    solutions: [
      { name: "LB + 2 APIs", build: () => stack({ apis: 2, db: { capacityRps: 2000 } }) },
      { name: "LB + 3 APIs", build: () => stack({ apis: 3, db: { capacityRps: 2000 } }) },
    ] },
  { id: 3, chapter: "Basics", title: "Hot reads",
    story: "Everyone is reading the same popular products. The database is answering the same question thousands of times.",
    brief: "The database is melting: 1000 reads a second, and most ask for the same popular keys. Keep it cool.",
    lesson: "A cache answers popular reads from memory, so the database only sees the misses.",
    concepts: ["cache", "hit-rate", "eviction", "p99"],
    workload: w([{ untilSec: 20, rps: 1000 }]),
    start: l3Start(), palette: ["cache"], goal: { maxErrorRate: 0.01, maxP99Ms: 250, maxEndBacklog: 1e9, requires: ["cache"] }, starBudget: 20,
    solutions: [
      { name: "LRU cache", build: () => stack({ apis: 3, cache: { cacheSize: 300, policy: "lru" } }) },
      { name: "LFU cache", build: () => stack({ apis: 3, cache: { cacheSize: 300, policy: "lfu" } }) },
      { name: "Big cache", build: () => stack({ apis: 3, cache: { cacheSize: 600, policy: "lru" } }) },
    ] },
  { id: 4, chapter: "Basics", title: "Survive the spike",
    story: "A flash sale triples traffic for five seconds, and lots of it is people placing orders. Lost orders are lost money.",
    brief: "Absorb the spike without dropping orders: writes need somewhere to wait.",
    lesson: "A queue buffers bursts of writes and lets the database drain them at its own pace.",
    concepts: ["queue", "async", "backpressure"],
    workload: w([{ untilSec: 8, rps: 300 }, { untilSec: 13, rps: 900 }, { untilSec: 40, rps: 300 }], { writeFraction: 0.4 }),
    start: stack({ apis: 3, cache: { cacheSize: 300 } }),
    palette: ["queue"], goal: { maxErrorRate: 0.01, maxP99Ms: 300, maxEndBacklog: 50, requires: ["queue"] }, starBudget: 28,
    solutions: [
      { name: "Queue on the write path", build: () => stack({ apis: 3, cache: { cacheSize: 300 }, queue: true }) },
      { name: "Queue with a bigger buffer, LFU cache", build: () => stack({ apis: 3, cache: { cacheSize: 300, policy: "lfu" }, queue: { bufferSize: 8000 } }) },
    ] },
  { id: 5, chapter: "Scenarios", title: "Black Friday",
    story: "It is the biggest shopping day of the year. Traffic climbs all morning and peaks near 1800 requests a second. The marketing team already spent the budget on ads, not servers.",
    brief: "Scale out for the peak, keep the database calm, and keep orders safe. Cheaper designs earn the third star.",
    lesson: "Real launches combine every tool: a balanced fleet, a cache for reads, a queue for writes.",
    concepts: ["horizontal-scaling", "cache", "queue", "headroom"],
    workload: w([{ untilSec: 6, rps: 600 }, { untilSec: 14, rps: 1500 }, { untilSec: 24, rps: 1800 }, { untilSec: 32, rps: 900 }], { writeFraction: 0.1 }),
    start: stack({ apis: 1, db: { capacityRps: 600 } }),
    palette: ["lb", "api", "cache", "queue"], goal: { maxErrorRate: 0.01, maxP99Ms: 300, maxEndBacklog: 50, requires: ["lb", "cache"] }, starBudget: 32,
    solutions: [
      { name: "5 APIs, LFU cache, queue", build: () => stack({ apis: 5, cache: { cacheSize: 600, policy: "lfu" }, queue: true, db: { capacityRps: 600 } }) },
      { name: "6 APIs, LRU cache, queue", build: () => stack({ apis: 6, cache: { cacheSize: 600, policy: "lru" }, queue: true, db: { capacityRps: 600 } }) },
    ] },
  { id: 6, chapter: "Scenarios", title: "The viral post",
    story: "A celebrity shares one of your posts. Suddenly most of the world is asking for the same single item, over and over.",
    brief: "One key is getting most of the traffic. Find what absorbs a hot key. Careful: splitting the database cannot split one key.",
    lesson: "A hot key overwhelms whatever stores it. A tiny cache in front absorbs it, because the hot key is always in it.",
    concepts: ["hot-key", "cache", "eviction", "sharding"],
    workload: w([{ untilSec: 20, rps: 1600 }], { writeFraction: 0.005, keyspace: 300, zipfS: 1.6 }),
    start: stack({ apis: 5 }), palette: ["cache", "replica", "shard", "db"],
    goal: { maxErrorRate: 0.01, maxP99Ms: 250, maxEndBacklog: 1e9, requires: [], requiresAny: ["cache"] }, starBudget: 26,
    solutions: [
      { name: "Tiny LFU cache (50 keys)", build: () => stack({ apis: 5, cache: { cacheSize: 50, policy: "lfu" } }) },
      { name: "Small LRU cache (100 keys)", build: () => stack({ apis: 5, cache: { cacheSize: 100, policy: "lru" } }) },
      { name: "Cache plus a replica", build: () => stack({ apis: 5, cache: { cacheSize: 100, policy: "lfu" }, replicas: 1 }) },
    ] },
  { id: 7, chapter: "Scenarios", title: "Thundering herd",
    story: "At 10:00 sharp a scheduled job empties every cache. The next thousand users all miss at the same instant and all ask the database for the same thing.",
    brief: "A cache flush hits mid-run. Stop the stampede: tap the cache to change its mode, or spread the misses across more databases.",
    lesson: "When a cache empties, every request misses at once. Coalescing lets one request fetch while the rest wait for it.",
    concepts: ["thundering-herd", "coalescing", "cache", "replica"],
    workload: w([{ untilSec: 24, rps: 1300 }], { writeFraction: 0.02, keyspace: 300, zipfS: 1.3, events: [{ atSec: 8, flushCache: true }] }),
    start: stack({ apis: 4, cache: { cacheSize: 150 } }), palette: ["cache", "replica"],
    goal: { maxErrorRate: 0.01, maxP99Ms: 300, maxEndBacklog: 1e9, requires: [] }, starBudget: 22,
    solutions: [
      { name: "Single-flight (coalescing) cache", build: () => stack({ apis: 4, cache: { cacheSize: 150, coalesce: true } }) },
      { name: "Two replicas absorb the misses", build: () => stack({ apis: 4, cache: { cacheSize: 150 }, replicas: 2 }) },
      { name: "Coalescing plus a replica", build: () => stack({ apis: 4, cache: { cacheSize: 150, coalesce: true, policy: "lfu" }, replicas: 1 }) },
    ] },
  { id: 8, chapter: "Scenarios", title: "Read replicas",
    story: "Your analytics dashboards read from thousands of different rows. Nothing repeats, so a cache barely helps, and one database cannot answer everything.",
    brief: "Reads dominate but nothing is popular. Copy the database: replicas serve reads while the primary keeps the writes.",
    lesson: "Read replicas multiply read capacity. The trade-off: a replica can lag behind, so a fresh write may not be visible yet.",
    concepts: ["replica", "replication-lag", "cache", "capacity"],
    workload: w([{ untilSec: 20, rps: 800 }], { writeFraction: 0.1, keyspace: 5000, zipfS: 0.7 }),
    start: stack({ apis: 3 }), palette: ["replica", "cache"],
    goal: { maxErrorRate: 0.01, maxP99Ms: 250, maxEndBacklog: 1e9, requires: [], requiresAny: ["replica"] }, starBudget: 28,
    solutions: [
      { name: "Three replicas", build: () => stack({ apis: 3, replicas: 3 }) },
      { name: "One replica plus a big cache", build: () => stack({ apis: 3, replicas: 1, cache: { cacheSize: 1500, policy: "lfu" } }) },
      { name: "Two replicas plus a cache", build: () => stack({ apis: 3, replicas: 2, cache: { cacheSize: 300, policy: "lfu" } }) },
    ] },
  { id: 9, chapter: "Scenarios", title: "Database failover",
    story: "3 a.m. The primary database's disk dies. The pager goes off. Every second the site is down costs real money.",
    brief: "The database will crash 8 seconds in. Keep the site up: a replica can be promoted to primary, and a queue can hold writes while it happens.",
    lesson: "Failover is not instant: the system must notice the failure, then promote a replica. Queues hide the gap for writes.",
    concepts: ["failover", "replica", "queue", "spof", "health-check"],
    workload: w([{ untilSec: 24, rps: 260 }], { writeFraction: 0.2, events: [{ atSec: 8, kill: "db" }] }),
    start: stack({ apis: 2 }), palette: ["replica", "queue", "cache"],
    goal: { maxErrorRate: 0.06, maxP99Ms: 300, maxEndBacklog: 200, requires: [], requiresAny: ["replica"] }, starBudget: 22,
    solutions: [
      { name: "Replica ready to promote", build: () => stack({ apis: 2, replicas: 1 }) },
      { name: "Replica plus write queue", build: () => stack({ apis: 2, replicas: 1, queue: true }) },
    ] },
  { id: 10, chapter: "Scenarios", title: "Sharding",
    story: "Your users generate more writes than any single database can absorb. Buying a bigger box is no longer an option.",
    brief: "Writes exceed one database's ceiling. Split the data across several databases with a shard router.",
    lesson: "Sharding splits data by key so each database handles a slice of the writes. Uneven keys mean uneven shards.",
    concepts: ["sharding", "hot-key", "capacity"],
    workload: w([{ untilSec: 20, rps: 700 }], { writeFraction: 0.6, keyspace: 5000, zipfS: 0.6 }),
    start: stack({ apis: 3 }), palette: ["shard", "db", "queue", "replica"],
    goal: { maxErrorRate: 0.01, maxP99Ms: 300, maxEndBacklog: 50, requires: ["shard"] }, starBudget: 30,
    solutions: [
      { name: "Three shards", build: () => stack({ apis: 3, shards: 3 }) },
      { name: "Two shards plus a read replica", build: () => stack({ apis: 3, shards: 2, replicas: 1 }) },
    ] },
  { id: 11, chapter: "Scenarios", title: "CDN for static files",
    story: "Your home page is mostly images and scripts. Every visitor downloads the same files from your one API server, on the other side of the planet.",
    brief: "Most requests are static files. Put a CDN at the front so the edge answers them and your servers only see real work.",
    lesson: "A CDN caches static files near users. Your servers stop serving the same bytes again and again.",
    concepts: ["cdn", "static-assets", "latency"],
    workload: w([{ untilSec: 20, rps: 1200 }], { staticFraction: 0.8, writeFraction: 0.02 }),
    start: chain(), palette: ["cdn", "lb", "api"],
    goal: { maxErrorRate: 0.01, maxP99Ms: 200, maxEndBacklog: 1e9, requires: [], requiresAny: ["cdn"] }, starBudget: 14,
    solutions: [
      { name: "CDN in front of one API", build: () => extend(chain(), { nodes: [node("cdn", "cdn")], drop: ["users>api1"], edges: ["users>cdn", "cdn>api1"] }) },
      { name: "CDN, balancer and two APIs", build: () => stack({ apis: 2, cdn: true, db: { capacityRps: 2000 } }) },
    ] },
  { id: 12, chapter: "Scenarios", title: "Rate limiter",
    story: "A scraper is hammering your API from a handful of addresses. Real customers are timing out behind it.",
    brief: "Most of the traffic is a few abusive clients. Throttle them per client so real users get through, without buying more servers.",
    lesson: "A rate limiter gives every client a fair allowance. Abusers hit the wall while everyone else never notices.",
    concepts: ["rate-limiter", "token-bucket", "fairness"],
    workload: w([{ untilSec: 20, rps: 800 }], { abuseFraction: 0.6, writeFraction: 0.05 }),
    start: chain(), palette: ["limiter", "lb", "api"],
    goal: { maxErrorRate: 0.02, maxP99Ms: 250, maxEndBacklog: 1e9, requires: [], requiresAny: ["limiter"] }, starBudget: 10,
    solutions: [
      { name: "Limiter in front of one API", build: () => extend(chain(), { nodes: [node("limiter", "limiter")], drop: ["users>api1"], edges: ["users>limiter", "limiter>api1"] }) },
      { name: "Limiter, balancer and two APIs", build: () => stack({ apis: 2, limiter: 20, db: { capacityRps: 2000 } }) },
    ] },
  { id: 13, chapter: "Scenarios", title: "Async jobs",
    story: "Users upload videos. Each upload kicks off slow processing. Making the user wait for it means timeouts and angry reviews.",
    brief: "Accept the upload instantly and do the slow work in the background: a message broker holds jobs, a pool of workers drains them.",
    lesson: "A broker decouples accepting work from doing it. Add workers until the backlog drains.",
    concepts: ["message-broker", "worker-pool", "async", "backpressure"],
    workload: w([{ untilSec: 8, rps: 500 }, { untilSec: 14, rps: 900 }, { untilSec: 30, rps: 500 }], { writeFraction: 0.35, zipfS: 1.2 }),
    start: stack({ apis: 3, cache: { cacheSize: 300 } }), palette: ["broker", "worker"],
    goal: { maxErrorRate: 0.01, maxP99Ms: 250, maxEndBacklog: 50, requires: ["broker", "worker"] }, starBudget: 34,
    solutions: [
      { name: "Broker with 4 workers", build: () => stack({ apis: 3, cache: { cacheSize: 300 }, broker: { workers: 4 } }) },
      { name: "Broker with 4 workers, LFU cache, bigger buffer", build: () => stack({ apis: 3, cache: { cacheSize: 400, policy: "lfu" }, broker: { workers: 4, bufferSize: 12000 } }) },
    ] },
];

/** The free-play board: everything unlocked, live load controls and failure injection. */
export const SANDBOX: Level = {
  id: 0, chapter: "Sandbox", title: "Sandbox",
  story: "No goals, no grade. Build anything, then turn the load up and break it on purpose.",
  brief: "Everything unlocked. Drag the load and the read/write mix while it runs, and tap a node to kill it.",
  lesson: "Real systems combine all of these. Kill a node and see what your design does about it.",
  concepts: ["chaos", "headroom"],
  workload: w([{ untilSec: 1e9, rps: 500 }], { writeFraction: 0.2, zipfS: 1.1, keyspace: 1000 }),
  start: { nodes: [users(), node("db", "db")], edges: [] }, palette: ["lb", "api", "cache", "db", "queue", "replica", "cdn", "limiter", "shard", "broker", "worker"], sandbox: true,
  goal: { maxErrorRate: 0.01, maxP99Ms: 300, maxEndBacklog: 50, requires: [] }, starBudget: 40,
  solutions: [],
};

/** The old sandbox spike, used to grade a sandbox design. */
export const STRESS: Workload = w([{ untilSec: 10, rps: 500 }, { untilSec: 16, rps: 1500 }, { untilSec: 40, rps: 700 }], { writeFraction: 0.3, zipfS: 1.1 });

export function levelById(id: number): Level | undefined { return id === 0 ? SANDBOX : LEVELS.find((l) => l.id === id); }

export interface Verdict { passed: boolean; stars: number; issues: Issue[]; summary?: SimSummary; reasons: string[]; cost: number }

export function evaluate(level: Level, design: Design, seed = 7): Verdict {
  const issues = validate(design);
  const errs = issues.filter((i) => i.severity === "error");
  const c = cost(design);
  if (errs.length) return { passed: false, stars: 0, issues, reasons: errs.map((e) => e.message), cost: c };
  // The sandbox runs forever; judging it (tests, share cards) uses a fixed stress profile instead.
  const summary = simulate(design, level.sandbox ? STRESS : level.workload, seed);
  const g = level.goal, reasons: string[] = [];
  if (g.observeOnly) {
    const path = design.edges.some((e) => e.from === "users") && design.nodes.some((n) => n.kind === "db")
      && design.nodes.some((n) => n.kind === "api");
    if (!path) reasons.push("Wire Users to the API server and the API server to the database.");
  } else {
    for (const k of g.requires) if (!design.nodes.some((n) => n.kind === k)) reasons.push(`This level needs a ${k}.`);
    if (g.requiresAny && !g.requiresAny.some((k) => design.nodes.some((n) => n.kind === k))) reasons.push(`This level needs one of: ${g.requiresAny.join(", ")}.`);
    if (summary.errorRate > g.maxErrorRate) reasons.push(`${(summary.errorRate * 100).toFixed(1)}% of requests failed (limit ${(g.maxErrorRate * 100).toFixed(0)}%).`);
    if (summary.p99Ms > g.maxP99Ms) reasons.push(`Slowest 1% of requests took ${summary.p99Ms.toFixed(0)} ms (limit ${g.maxP99Ms} ms).`);
    if (summary.endBacklog > g.maxEndBacklog) reasons.push(`${summary.endBacklog} writes still waiting in the queue at the end.`);
  }
  const passed = reasons.length === 0;
  const stars = !passed ? 0 : 1 + (summary.p99Ms <= g.maxP99Ms * 0.5 ? 1 : 0) + (level.starBudget && c <= level.starBudget ? 1 : 0);
  return { passed, stars: g.observeOnly ? 3 : stars, issues, summary, reasons, cost: c };
}
