import type { Design, Kind, Workload } from "./model.js";
import { cost, node } from "./model.js";
import { simulate, type SimSummary } from "./simulator.js";
import { validate, type Issue } from "./validate.js";

export interface Goal { maxErrorRate: number; maxP99Ms: number; maxEndBacklog: number; requires: Kind[]; observeOnly?: boolean }
export interface Level {
  id: number; title: string; brief: string; lesson: string;
  workload: Workload; start: Design; palette: Kind[]; goal: Goal;
  starBudget?: number; // total cost for a third star
  sandbox?: boolean;
}

const users = () => node("users", "client");
const w = (phases: Workload["phases"], extra: Partial<Workload> = {}): Workload =>
  ({ phases, writeFraction: 0, keyspace: 1000, zipfS: 1, ...extra });

const l3Start = (): Design => ({
  nodes: [users(), node("lb", "lb"), node("api1", "api"), node("api2", "api"), node("api3", "api"), node("db", "db")],
  edges: [{ from: "users", to: "lb" }, { from: "lb", to: "api1" }, { from: "lb", to: "api2" }, { from: "lb", to: "api3" },
    { from: "api1", to: "db" }, { from: "api2", to: "db" }, { from: "api3", to: "db" }],
});

export const LEVELS: Level[] = [
  { id: 1, title: "It works on my machine", brief: "Wire Users to the API server, then to the database. Press Play and watch launch day crush one server.",
    lesson: "One server has a hard ceiling. Past it, requests queue up and get dropped.",
    workload: w([{ untilSec: 8, rps: 200 }, { untilSec: 20, rps: 700 }]),
    start: { nodes: [users(), node("api1", "api"), node("db", "db", { capacityRps: 2000 })], edges: [] },
    palette: ["api", "db"], goal: { maxErrorRate: 1, maxP99Ms: 1e9, maxEndBacklog: 1e9, requires: [], observeOnly: true } },
  { id: 2, title: "Spread the load", brief: "600 requests a second. One API server does 400. Put a load balancer in front of more servers.",
    lesson: "A load balancer spreads requests so many small servers act like one big one.",
    workload: w([{ untilSec: 20, rps: 600 }]),
    start: { nodes: [users(), node("api1", "api"), node("db", "db", { capacityRps: 2000 })],
      edges: [{ from: "users", to: "api1" }, { from: "api1", to: "db" }] },
    palette: ["lb", "api"], goal: { maxErrorRate: 0.01, maxP99Ms: 300, maxEndBacklog: 1e9, requires: ["lb"] }, starBudget: 12 },
  { id: 3, title: "Hot reads", brief: "The database is melting: 1000 reads a second, and most ask for the same popular keys. Keep it cool.",
    lesson: "A cache answers popular reads from memory, so the database only sees the misses.",
    workload: w([{ untilSec: 20, rps: 1000 }]),
    start: l3Start(), palette: ["cache"], goal: { maxErrorRate: 0.01, maxP99Ms: 250, maxEndBacklog: 1e9, requires: ["cache"] }, starBudget: 20 },
  { id: 4, title: "Survive the spike", brief: "A flash sale triples traffic for five seconds, and half of it is writes. Absorb it without dropping orders.",
    lesson: "A queue buffers bursts of writes and lets the database drain them at its own pace.",
    workload: w([{ untilSec: 8, rps: 300 }, { untilSec: 13, rps: 900 }, { untilSec: 40, rps: 300 }], { writeFraction: 0.4 }),
    start: (() => { const d = l3Start(); d.nodes.push(node("cache", "cache", { cacheSize: 300 }));
      d.edges = d.edges.map((e) => (e.to === "db" ? { ...e, to: "cache" } : e)); d.edges.push({ from: "cache", to: "db" }); return d; })(),
    palette: ["queue"], goal: { maxErrorRate: 0.01, maxP99Ms: 300, maxEndBacklog: 50, requires: ["queue"] }, starBudget: 28 },
  { id: 5, title: "Sandbox", brief: "Everything unlocked. Build any design, pick cache policies, and see how far it scales.",
    lesson: "Real systems combine all of these. Trade cost against headroom.",
    workload: w([{ untilSec: 10, rps: 500 }, { untilSec: 16, rps: 1500 }, { untilSec: 40, rps: 700 }], { writeFraction: 0.3, zipfS: 1.1 }),
    start: { nodes: [users(), node("db", "db")], edges: [] }, palette: ["lb", "api", "cache", "db", "queue"], sandbox: true,
    goal: { maxErrorRate: 0.01, maxP99Ms: 300, maxEndBacklog: 50, requires: [] }, starBudget: 40 },
];

export interface Verdict { passed: boolean; stars: number; issues: Issue[]; summary?: SimSummary; reasons: string[]; cost: number }

export function evaluate(level: Level, design: Design, seed = 7): Verdict {
  const issues = validate(design);
  const errs = issues.filter((i) => i.severity === "error");
  const c = cost(design);
  if (errs.length) return { passed: false, stars: 0, issues, reasons: errs.map((e) => e.message), cost: c };
  const summary = simulate(design, level.workload, seed);
  const g = level.goal, reasons: string[] = [];
  if (g.observeOnly) {
    const path = design.edges.some((e) => e.from === "users") && design.nodes.some((n) => n.kind === "db")
      && design.nodes.some((n) => n.kind === "api");
    if (!path) reasons.push("Wire Users to the API server and the API server to the database.");
  } else {
    for (const k of g.requires) if (!design.nodes.some((n) => n.kind === k)) reasons.push(`This level needs a ${k}.`);
    if (summary.errorRate > g.maxErrorRate) reasons.push(`${(summary.errorRate * 100).toFixed(1)}% of requests failed (limit ${(g.maxErrorRate * 100).toFixed(0)}%).`);
    if (summary.p99Ms > g.maxP99Ms) reasons.push(`Slowest 1% of requests took ${summary.p99Ms.toFixed(0)} ms (limit ${g.maxP99Ms} ms).`);
    if (summary.endBacklog > g.maxEndBacklog) reasons.push(`${summary.endBacklog} writes still waiting in the queue at the end.`);
  }
  const passed = reasons.length === 0;
  const stars = !passed ? 0 : 1 + (summary.p99Ms <= g.maxP99Ms * 0.5 ? 1 : 0) + (level.starBudget && c <= level.starBudget ? 1 : 0);
  return { passed, stars: g.observeOnly ? 3 : stars, issues, summary, reasons, cost: c };
}
