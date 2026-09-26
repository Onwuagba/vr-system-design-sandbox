// Text for the end-of-run panel, kept free of rendering so it can be tested.
import type { Level, Verdict } from "../sim/levels.js";
import type { Design } from "../sim/model.js";
import { explainRun } from "./coach.js";
import { conceptLines } from "./coach.js";
import type { Review } from "../review/review.js";
import type { ScoreEntry } from "./storage.js";

export function statLine(v: Verdict): string {
  const s = v.summary;
  return s ? `p50 ${s.p50Ms.toFixed(0)} ms    p99 ${s.p99Ms.toFixed(0)} ms    errors ${(s.errorRate * 100).toFixed(1)}%    cost ${v.cost}` : "";
}

export function starCriteria(level: Level, v: Verdict): string {
  const g = level.goal;
  if (g.observeOnly) return "Goal: wire it up and watch it run.";
  const p = v.summary;
  const parts = [`clear the goal (errors under ${(g.maxErrorRate * 100).toFixed(0)}%, p99 under ${g.maxP99Ms} ms)`, `p99 under ${(g.maxP99Ms / 2).toFixed(0)} ms${p && v.passed ? (p.p99Ms <= g.maxP99Ms / 2 ? " (got it)" : "") : ""}`];
  if (level.starBudget) parts.push(`cost ${level.starBudget} or less${v.passed && v.cost <= level.starBudget ? " (got it)" : ""}`);
  return "Stars: " + parts.join("  |  ");
}

export function resultPages(level: Level, design: Design, v: Verdict, review?: Review, extra?: { score?: number; best?: ScoreEntry[]; isBest?: boolean }): [string, string] {
  const ex = explainRun(level, design, v);
  const head = v.passed ? `LEVEL CLEARED  ${v.stars} of 3 stars` : "NOT YET";
  const why = v.passed ? "" : "\n" + v.reasons.join(" ");
  const score = extra?.score !== undefined ? `\nSCORE ${extra.score}${extra.isBest ? "  NEW PERSONAL BEST" : extra.best?.length ? `   best ${extra.best[0].score}` : ""}` : "";
  const p1 = `${head}\n${statLine(v)}${why}${score}\n${starCriteria(level, v)}\n\n${ex.title.toUpperCase()}\n` + ex.lines.map((l) => "- " + l).join("\n");
  const p2 = (review ? `REVIEW: ${review.headline}\n` + review.points.map((p) => "- " + p).join("\n") : "REVIEW\nAsking for a design review...")
    + `\n\nIDEAS IN PLAY\n` + conceptLines(ex.concepts.slice(0, 5)).map((l) => "- " + l).join("\n");
  return [p1, p2];
}
