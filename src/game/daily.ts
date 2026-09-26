// Daily challenge: a seeded puzzle (same for everyone on a date), with a computed "par" design and a score.
import type { Design, Workload } from "../sim/model.js";
import { mulberry32 } from "../sim/rng.js";
import { stack, type StackOpts } from "../sim/builders.js";
import { cost } from "../sim/model.js";
import type { Level, Verdict } from "../sim/levels.js";

export const DAILY_ID = 100;

export function dateKey(d = new Date()): string {
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")}`;
}
export function seedFor(key: string): number {
  let h = 2166136261;
  for (const c of key) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

const pick = <T,>(rng: () => number, xs: T[]): T => xs[Math.floor(rng() * xs.length)];
const between = (rng: () => number, a: number, b: number, step = 50) => Math.round((a + rng() * (b - a)) / step) * step;
const apisFor = (rps: number, headroom = 1.25) => Math.max(1, Math.ceil((rps * headroom) / 400));

interface Scenario { title: string; story: string; brief: string; workload: Workload; palette: Level["palette"]; ref: StackOpts; start: StackOpts; concepts: string[] }

function scenario(rng: () => number): Scenario {
  const base = { writeFraction: 0, keyspace: 1000, zipfS: 1, warmCaches: true };
  const all: Level["palette"] = ["lb", "api", "cache", "queue", "replica", "cdn", "limiter"];
  switch (Math.floor(rng() * 6)) {
    case 0: {
      const peak = between(rng, 800, 1400), calm = Math.round(peak / 3 / 50) * 50;
      return { title: "Flash sale", story: "A surprise sale goes live. Orders flood in.", brief: `Traffic jumps from ${calm} to ${peak} rps and 40% are orders. Do not drop any.`,
        workload: { ...base, writeFraction: 0.4, phases: [{ untilSec: 6, rps: calm }, { untilSec: 12, rps: peak }, { untilSec: 30, rps: calm }] }, palette: all,
        start: { apis: 3 }, ref: { apis: apisFor(peak), cache: { cacheSize: 300, policy: "lfu" }, queue: true }, concepts: ["queue", "cache"] };
    }
    case 1: {
      const rps = between(rng, 900, 1600);
      return { title: "Viral post", story: "One post takes off.", brief: `${rps} rps and most of it is one hot key.`,
        workload: { ...base, keyspace: 300, zipfS: 1.5, writeFraction: 0.005, phases: [{ untilSec: 20, rps }] }, palette: all,
        start: { apis: apisFor(rps) }, ref: { apis: apisFor(rps), cache: { cacheSize: 100, policy: "lfu" } }, concepts: ["hot-key", "cache"] };
    }
    case 2: {
      const rps = between(rng, 600, 1000), abuse = pick(rng, [0.5, 0.6, 0.7]);
      return { title: "Bot flood", story: "A scraper found your API.", brief: `${Math.round(abuse * 100)}% of ${rps} rps comes from a few abusive clients.`,
        workload: { ...base, abuseFraction: abuse, writeFraction: 0.05, phases: [{ untilSec: 20, rps }] }, palette: all,
        start: { apis: 1, lb: false, db: { capacityRps: 2000 } }, ref: { apis: apisFor(rps * (1 - abuse) + 80), limiter: 20, db: { capacityRps: 2000 } }, concepts: ["rate-limiter"] };
    }
    case 3: {
      const rps = between(rng, 1000, 1600), sf = pick(rng, [0.7, 0.8, 0.85]);
      return { title: "Heavy home page", story: "Your landing page is mostly images and scripts.", brief: `${Math.round(sf * 100)}% of ${rps} rps is static files.`,
        workload: { ...base, staticFraction: sf, writeFraction: 0.02, phases: [{ untilSec: 20, rps }] }, palette: all,
        start: { apis: 1, lb: false, db: { capacityRps: 2000 } }, ref: { apis: apisFor(rps * (1 - sf + 0.06)), cdn: true, db: { capacityRps: 2000 } }, concepts: ["cdn"] };
    }
    case 4: {
      const rps = between(rng, 500, 800);
      const reps = Math.max(1, Math.ceil((0.9 * rps) / (270 - 0.1 * rps)) - 1);
      return { title: "Analytics reads", story: "Dashboards read thousands of different rows.", brief: `${rps} rps, mostly reads, hardly any repeats.`,
        workload: { ...base, keyspace: 5000, zipfS: 0.7, writeFraction: 0.1, phases: [{ untilSec: 20, rps }] }, palette: all,
        start: { apis: apisFor(rps) }, ref: { apis: apisFor(rps), replicas: reps }, concepts: ["replica"] };
    }
    default: {
      const rps = between(rng, 200, 260, 20), at = 6 + Math.floor(rng() * 5);
      return { title: "The 3 a.m. crash", story: "The primary database dies.", brief: `The database crashes ${at} seconds in. Survive it.`,
        workload: { ...base, writeFraction: 0.2, phases: [{ untilSec: 24, rps }], events: [{ atSec: at, kill: "db" }] }, palette: all,
        start: { apis: 2 }, ref: { apis: 2, replicas: 1, queue: true }, concepts: ["failover"] };
    }
  }
}

export interface DailyLevel extends Level { key: string; par: number }

export function dailyLevel(key: string = dateKey()): DailyLevel {
  const s = scenario(mulberry32(seedFor(key)));
  const ref = stack(s.ref);
  const par = cost(ref);
  return {
    id: DAILY_ID, chapter: "Daily", title: `Daily: ${s.title}`, story: s.story, brief: `${s.brief} Par cost ${par}.`,
    lesson: "Same puzzle for everyone today. Beat par cost with a passing design.", concepts: s.concepts,
    workload: s.workload, start: stack(s.start), palette: s.palette,
    goal: { maxErrorRate: 0.02, maxP99Ms: 300, maxEndBacklog: 60, requires: [] }, starBudget: par,
    solutions: [{ name: "Par design", build: () => stack(s.ref) }], key, par,
  };
}

/** Score for a run: passing is worth a lot, then stars, then how far under par you came. */
export function dailyScore(level: DailyLevel, v: Verdict): number {
  if (!v.passed || !v.summary) return 0;
  return Math.max(100, Math.round(500 + v.stars * 150 + (level.par - v.cost) * 40 + (level.goal.maxP99Ms - v.summary.p99Ms)));
}
export function isDaily(l: Level): l is DailyLevel { return l.id === DAILY_ID; }
export type { Design };
