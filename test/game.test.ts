import { test } from "node:test";
import assert from "node:assert/strict";
import { GameState, nearestNode } from "../src/game/state.js";
import { LEVELS, evaluate } from "../src/sim/levels.js";
import { RuleBasedReviewer, HttpLlmReviewer, reviewWithFallback, defaultProviders, buildPrompt } from "../src/review/review.js";

test("game state: place, wire, refuse, remove", () => {
  const g = new GameState(1);
  const id = g.add("lb", { x: 0, y: 0 })!;
  assert.equal(id, "lb1");
  assert.equal(g.add("db", { x: 0, y: 0 }), undefined, "db not in palette");
  assert.equal(g.connect("users", "api1"), "Already wired.");
  assert.match(g.connect("db", "lb1")!, /cannot send/);
  g.disconnect("users", "api1");
  assert.equal(g.connect("users", "lb1"), undefined);
  assert.equal(g.connect("lb1", "api1"), undefined);
  assert.equal(g.remove("users"), false);
  assert.equal(g.remove("lb1"), true);
  assert.ok(!g.design.edges.some((e) => e.from === "lb1" || e.to === "lb1"));
  assert.equal(nearestNode(g, g.pos.api1, 0.1), "api1");
  assert.equal(nearestNode(g, g.pos.api1, 0.1, "api1"), undefined);
});

test("game state: level 2 solved by hand-like edits, judged", () => {
  const g = new GameState(1);
  g.disconnect("users", "api1");
  g.add("lb", { x: 0, y: 0 }); g.add("api", { x: 0.1, y: 0.2 });
  for (const [a, b] of [["users", "lb1"], ["lb1", "api1"], ["lb1", "api2"], ["api2", "db"]]) assert.equal(g.connect(a, b), undefined);
  const v = g.judge();
  assert.ok(v.passed, v.reasons.join());
  g.reset();
  assert.equal(g.design.nodes.length, 3);
});

test("cache presets cycle and change hit rate", () => {
  const g = new GameState(2);
  g.add("cache", { x: 0, y: 0 });
  const before = g.design.nodes.find((n) => n.id === "cache1")!.policy;
  g.cycleCache("cache1");
  assert.notEqual(g.design.nodes.find((n) => n.id === "cache1")!.policy, before);
});

test("rule-based review is offline and mentions a queue when writes overwhelm", async () => {
  const l = LEVELS[3];
  const r = await new RuleBasedReviewer().review({ level: l, design: l.start, verdict: evaluate(l, l.start) });
  assert.equal(r.source, "rules");
  assert.ok(r.points.join(" ").toLowerCase().includes("queue"));
});

test("review falls back to rules when the llm fails or times out", async () => {
  const l = LEVELS[2]; const input = { level: l, design: l.start, verdict: evaluate(l, l.start) };
  const failing = new HttpLlmReviewer("http://x", (async () => { throw new Error("offline"); }) as unknown as typeof fetch);
  assert.equal((await reviewWithFallback(input, [failing, new RuleBasedReviewer()])).source, "rules");
  const hanging = new HttpLlmReviewer("http://x", ((_u: string, o: { signal: AbortSignal }) => new Promise((_r, rej) => o.signal.addEventListener("abort", () => rej(new Error("a"))))) as unknown as typeof fetch);
  assert.equal((await reviewWithFallback(input, [hanging], 50)).source, "rules");
  const ok = new HttpLlmReviewer("http://x", (async () => ({ ok: true, json: async () => ({ text: "Nice work\n- add a cache\n- watch p99" }) })) as unknown as typeof fetch);
  const r = await reviewWithFallback(input, [ok]);
  assert.equal(r.source, "llm"); assert.equal(r.points.length, 2);
  assert.equal(defaultProviders(null).length, 1);
  assert.ok(buildPrompt(input).user.includes("Level 3"));
});
