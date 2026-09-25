// End-of-puzzle design review. Pluggable: an LLM endpoint if one is configured, otherwise (or on
// any failure/timeout) a deterministic rule-based reviewer that works fully offline.
import type { Design } from "../sim/model.js";
import type { Level, Verdict } from "../sim/levels.js";
import { cost } from "../sim/model.js";

export interface ReviewInput { level: Level; design: Design; verdict: Verdict }
export interface Review { source: "rules" | "llm"; headline: string; points: string[] }
export interface ReviewProvider { name: string; review(input: ReviewInput, signal?: AbortSignal): Promise<Review> }

export function describe(i: ReviewInput): string {
  const { design: d, verdict: v } = i;
  const s = v.summary;
  return [
    `Level ${i.level.id}: ${i.level.title}. Goal: ${i.level.lesson}`,
    `Components: ${d.nodes.map((n) => `${n.id}(${n.kind}${n.kind === "cache" ? `,${n.policy},${n.cacheSize}` : ""})`).join(", ")}`,
    `Wires: ${d.edges.map((e) => `${e.from}->${e.to}`).join(", ")}`,
    s ? `Result: p50 ${s.p50Ms.toFixed(0)}ms, p99 ${s.p99Ms.toFixed(0)}ms, errors ${(s.errorRate * 100).toFixed(1)}%, max queue backlog ${s.maxBacklog}` : "Result: not runnable",
    `Passed: ${v.passed}. Cost: ${cost(d)}.`,
  ].join("\n");
}

export function buildPrompt(i: ReviewInput): { system: string; user: string } {
  return {
    system: "You are a friendly senior engineer reviewing a beginner's system design in a teaching game. Reply with a one-line headline, then at most 4 short bullet points: what they did well, the biggest remaining risk, and one concrete next step. No jargon without explanation.",
    user: describe(i),
  };
}

/** Deterministic review from the design structure and simulation numbers. Always available. */
export class RuleBasedReviewer implements ReviewProvider {
  name = "rules";
  async review({ level, design: d, verdict: v }: ReviewInput): Promise<Review> {
    const has = (k: string) => d.nodes.filter((n) => n.kind === k).length;
    const pts: string[] = [];
    const s = v.summary;
    if (!s) return { source: "rules", headline: "The design does not run yet.", points: v.reasons };
    if (has("api") === 1 && !has("lb")) pts.push("Single point of failure: one API server means one crash takes everything down. A load balancer with two or more servers removes that.");
    if (has("api") > 1 && !has("lb")) pts.push("Several API servers but no load balancer in front of them.");
    if (has("db") >= 1 && !has("cache") && level.workload.writeFraction < 0.6) pts.push("Reads hit the database directly. A cache in front of it absorbs repeated reads cheaply.");
    for (const c of d.nodes.filter((n) => n.kind === "cache")) {
      const hr = s.nodes[c.id]?.hitRate;
      if (hr !== undefined && hr < 0.6) pts.push(`${c.id} only hits ${(hr * 100).toFixed(0)}% of the time. A larger cache, or LFU eviction for skewed traffic, would help.`);
      else if (hr !== undefined) pts.push(`${c.id} answers ${(hr * 100).toFixed(0)}% of reads without touching the database. Nice.`);
    }
    if (level.workload.writeFraction > 0 && !has("queue") && s.errorRate > 0.005) pts.push("Bursts of writes are overwhelming the database. A queue lets it catch up at its own pace.");
    if (has("queue") && s.maxBacklog > 0) pts.push(`The queue absorbed a backlog of up to ${s.maxBacklog} writes and drained it. That is the point of buffering. Remember queued writes are eventually, not instantly, stored.`);
    const hot = Object.values(s.nodes).filter((n) => n.utilisation > 0.85 && n.id !== "users").map((n) => n.id);
    if (hot.length && v.passed) pts.push(`${hot.join(", ")} run close to capacity, so a traffic bump would tip them over. Leave some headroom.`);
    if (s.p99Ms > 2.5 * Math.max(s.p50Ms, 1) && s.p99Ms > 100) pts.push(`Typical requests take ${s.p50Ms.toFixed(0)} ms but the slowest 1% take ${s.p99Ms.toFixed(0)} ms. Tail latency is where queues build up first.`);
    if (level.starBudget && v.cost > level.starBudget) pts.push(`Cost ${v.cost} is above the efficient budget of ${level.starBudget}. Could a smaller design do the same job?`);
    if (!v.passed) pts.push(...v.reasons);
    const headline = v.passed ? `Solid design: ${v.stars} of 3 stars.` : "Not there yet. Here is what to look at.";
    return { source: "rules", headline, points: pts.slice(0, 5).length ? pts.slice(0, 5) : ["Looks balanced. Try the sandbox with heavier traffic."] };
  }
}

/** Generic HTTP provider. POSTs {system,user,design} to your own proxy and expects {text}. Never put API keys in the browser. */
export class HttpLlmReviewer implements ReviewProvider {
  name = "llm";
  constructor(private url: string, private fetchImpl: typeof fetch = (...a) => fetch(...a)) {}
  async review(i: ReviewInput, signal?: AbortSignal): Promise<Review> {
    const p = buildPrompt(i);
    const res = await this.fetchImpl(this.url, { method: "POST", headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...p, design: i.design }), signal });
    if (!res.ok) throw new Error(`review endpoint ${res.status}`);
    const body = (await res.json()) as { text?: unknown };
    if (typeof body.text !== "string" || !body.text.trim()) throw new Error("empty review");
    const lines = body.text.split("\n").map((l) => l.replace(/^[-*\d.\s]+/, "").trim()).filter(Boolean);
    return { source: "llm", headline: lines[0], points: lines.slice(1, 6) };
  }
}

/** Try providers in order; first success wins; the rule-based reviewer is the guaranteed last resort. */
export async function reviewWithFallback(input: ReviewInput, providers: ReviewProvider[], timeoutMs = 6000): Promise<Review> {
  for (const p of providers) {
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), timeoutMs);
    try {
      return await Promise.race([p.review(input, ctl.signal),
        new Promise<never>((_, rej) => ctl.signal.addEventListener("abort", () => rej(new Error("timeout"))))]);
    } catch { /* fall through to next provider */ } finally { clearTimeout(timer); }
  }
  return new RuleBasedReviewer().review(input);
}

export function defaultProviders(endpoint?: string | null): ReviewProvider[] {
  return endpoint ? [new HttpLlmReviewer(endpoint), new RuleBasedReviewer()] : [new RuleBasedReviewer()];
}
