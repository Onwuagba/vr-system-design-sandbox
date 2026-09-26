import { test } from "node:test";
import assert from "node:assert/strict";
import { GameState, autoLayout } from "../src/game/state.js";
import { LEVELS, SANDBOX, evaluate } from "../src/sim/levels.js";
import { stack } from "../src/sim/builders.js";
import { CONCEPTS, concept } from "../src/game/concepts.js";
import { contextHints, explainRun } from "../src/game/coach.js";
import { Tutorial, TUTORIALS } from "../src/game/tutorial.js";
import { decodeSnapshot, encodeSnapshot, extractCode, parseSnapshot, toSnapshot } from "../src/game/share.js";
import { MemoryStore, DEFAULT_SETTINGS, loadSettings, saveSettings, recordStars, loadProgress, recordScore, loadScores, saveDesign, loadDesign, defaultStore } from "../src/game/storage.js";
import { dailyLevel, dailyScore, dateKey, seedFor } from "../src/game/daily.js";
import { Simulator } from "../src/sim/simulator.js";
import { RuleBasedReviewer } from "../src/review/review.js";

test("glossary covers every concept a level teaches, with real explanations", () => {
  for (const l of [...LEVELS, SANDBOX]) for (const c of l.concepts) assert.ok(concept(c), `${l.title} teaches unknown concept ${c}`);
  for (const c of CONCEPTS) assert.ok(c.short.length > 15 && c.why.length > 30, c.id);
  assert.equal(new Set(CONCEPTS.map((c) => c.id)).size, CONCEPTS.length);
  assert.ok(concept("p99")!.short.includes("slowest 1%"));
});

test("undo and redo restore design and layout, and a new edit clears redo", () => {
  const g = new GameState(1);
  const start = g.design.nodes.length;
  const id = g.add("lb", { x: 0, y: 0.1 })!;
  const placed = { ...g.pos[id] };
  assert.equal(g.connect("users", id), "Users enter through one door. Use a load balancer to fan out.");
  g.disconnect("users", "api1");
  assert.equal(g.connect("users", id), undefined);
  assert.equal(g.canUndo, true);
  g.undo(); g.undo();
  assert.ok(g.design.edges.some((e) => e.from === "users" && e.to === "api1"), "wire is back");
  assert.equal(g.design.nodes.length, start + 1);
  g.undo();
  assert.equal(g.design.nodes.length, start);
  assert.equal(g.canUndo, false);
  g.redo();
  assert.ok(g.design.nodes.some((n) => n.id === id) && g.pos[id].y === placed.y && g.pos[id].x === placed.x);
  g.add("api", { x: 0, y: 0 });
  assert.equal(g.canRedo, false);
  assert.equal(g.undo() && g.undo() && g.undo(), false);
});

test("undo covers delete, cache mode changes and tidy", () => {
  const g = new GameState(3);
  const before = JSON.stringify(g.design);
  g.cycleCache("cache");
  assert.notEqual(JSON.stringify(g.design), before);
  g.undo(); assert.equal(JSON.stringify(g.design), before);
  g.remove("api1"); assert.ok(!g.design.nodes.some((n) => n.id === "api1"));
  g.undo(); assert.ok(g.design.nodes.some((n) => n.id === "api1") && g.design.edges.length > 0);
  g.pos.api1 = { x: 0.5, y: 0.3 }; g.tidy(); assert.notEqual(g.pos.api1.x, 0.5);
  g.undo(); assert.equal(g.pos.api1.x, 0.5);
});

test("cache presets include single-flight coalescing", () => {
  const g = new GameState(6);
  const seen = new Set<boolean>();
  for (let i = 0; i < 9; i++) { g.cycleCache("cache"); seen.add(!!g.design.nodes.find((n) => n.id === "cache")!.coalesce); }
  assert.ok(seen.has(true) && seen.has(false));
});

test("share: snapshot round-trips through JSON text, a code and a share URL", () => {
  const g = new GameState(4);
  const sol = LEVELS[4].solutions[0].build();
  g.loadLevel(LEVELS[4]);
  assert.equal(g.restoreSnapshot(toSnapshot(5, sol, autoLayout(sol))), undefined);
  const snap = g.snapshot("my design");
  const code = encodeSnapshot(snap);
  assert.match(code, /^[A-Za-z0-9_-]+$/);
  const g2 = new GameState(4);
  assert.equal(g2.restoreFromText(`https://example.com/x/#d=${extractCode(`https://example.com/x/#d=${code}`)}`.split("#d=")[1]), undefined);
  assert.deepEqual(g2.design.edges, g.design.edges);
  assert.deepEqual(g2.design.nodes.map((n) => n.id), g.design.nodes.map((n) => n.id));
  const g3 = new GameState(4);
  assert.equal(g3.restoreFromText(JSON.stringify(snap)), undefined);
  assert.equal(evaluate(LEVELS[4], g3.design).passed, true, "an imported design still passes");
  assert.equal(g3.canUndo, true, "import is undoable");
});

test("share: imports are validated and cannot cheat capacities", () => {
  const bad = (x: unknown) => assert.equal(parseSnapshot(x).ok, false);
  bad(null); bad({}); bad({ v: 2, nodes: [], edges: [] });
  bad({ v: 1, level: 1, nodes: [{ id: "a b", kind: "api" }], edges: [] });
  bad({ v: 1, level: 1, nodes: [{ id: "x", kind: "warp-drive" }], edges: [] });
  bad({ v: 1, level: 1, nodes: [{ id: "u", kind: "client" }, { id: "d", kind: "db" }], edges: [["u", "d"]] });
  bad({ v: 1, level: 1, nodes: [{ id: "u", kind: "client" }, { id: "u", kind: "api" }], edges: [] });
  assert.equal(decodeSnapshot("%%%not-base64").ok, false);
  const cheat = { v: 1, level: 2, nodes: [{ id: "users", kind: "client" }, { id: "api1", kind: "api", capacityRps: 999999 }, { id: "db", kind: "db", cap: 999999 }],
    edges: [["users", "api1"], ["api1", "db"]], pos: {} };
  const g = new GameState(1);
  assert.equal(g.restoreFromText(JSON.stringify(cheat)), undefined);
  assert.equal(g.design.nodes.find((n) => n.id === "api1")!.capacityRps, 400);
  assert.equal(g.design.nodes.find((n) => n.id === "db")!.capacityRps, 2000, "db keeps the level's own capacity");
  const notAllowed = { v: 1, level: 2, nodes: [{ id: "users", kind: "client" }, { id: "cdn1", kind: "cdn" }, { id: "api1", kind: "api" }], edges: [["users", "cdn1"], ["cdn1", "api1"]], pos: {} };
  assert.match(g.restoreFromText(JSON.stringify(notAllowed))!, /not available/);
});

test("storage: settings clamp, progress keeps best, scores keep top five, blocked storage falls back", () => {
  const kv = new MemoryStore();
  assert.deepEqual(loadSettings(kv), DEFAULT_SETTINGS);
  saveSettings(kv, { ...DEFAULT_SETTINGS, hand: "left", heightOffset: 9, volume: 5, muted: true });
  const s = loadSettings(kv);
  assert.equal(s.hand, "left"); assert.equal(s.heightOffset, 0.5); assert.equal(s.volume, 1); assert.equal(s.muted, true);
  kv.setItem("sds:v1:settings", "{corrupt");
  assert.deepEqual(loadSettings(kv), DEFAULT_SETTINGS);
  recordStars(kv, 3, 2); recordStars(kv, 3, 1); recordStars(kv, 4, 3);
  assert.deepEqual(loadProgress(kv), { 3: 2, 4: 3 });
  for (const sc of [100, 300, 200, 50, 400, 250, 10]) recordScore(kv, "2026-01-01", { score: sc, stars: 1, cost: 1, p99: 1, at: 0 });
  assert.deepEqual(loadScores(kv, "2026-01-01").map((x) => x.score), [400, 300, 250, 200, 100]);
  assert.equal(recordScore(kv, "2026-01-01", { score: 999, stars: 3, cost: 1, p99: 1, at: 0 }).best, true);
  assert.equal(recordScore(kv, "2026-01-01", { score: 5, stars: 3, cost: 1, p99: 1, at: 0 }).best, false);
  saveDesign(kv, "L3", "abc"); assert.equal(loadDesign(kv, "L3"), "abc"); assert.equal(loadDesign(kv, "nope"), undefined);
  const throwing = { getItem() { throw new Error("blocked"); }, setItem() { throw new Error("blocked"); }, removeItem() { throw new Error("blocked"); } };
  (globalThis as any).localStorage = throwing;
  const fb = defaultStore(); fb.setItem("a", "1"); assert.equal(fb.getItem("a"), "1");
  delete (globalThis as any).localStorage;
});

test("tutorial advances only when the board reaches each state", () => {
  const g = new GameState(0);
  const t = Tutorial.forLevel(1)!;
  const ctx = () => ({ design: g.design, played: false, sawOverload: false, verdict: g.verdict });
  assert.equal(t.current(ctx())!.id, "wire-api");
  g.connect("users", "api1");
  assert.equal(t.current(ctx())!.id, "wire-db");
  g.connect("api1", "db");
  assert.equal(t.current(ctx())!.id, "play");
  assert.equal(t.current({ ...ctx(), played: true })!.id, "overload");
  g.judge();
  assert.equal(t.current(ctx())!.id, "next");
  assert.equal(t.current(ctx())!.id, "next", "last step stays");
  assert.ok(TUTORIALS[2] && TUTORIALS[3]);
  const g3 = new GameState(2);
  const t3 = Tutorial.forLevel(3)!;
  const c3 = (played = false) => ({ design: g3.design, played, sawOverload: false, verdict: g3.verdict });
  assert.equal(t3.current(c3())!.id, "play");
  assert.equal(t3.current(c3(true))!.id, "cache");
  const id = g3.add("cache", { x: 0, y: 0 })!;
  assert.equal(t3.current(c3(true))!.id, "wire");
  for (const a of ["api1", "api2", "api3"]) { g3.disconnect(a, "db"); g3.connect(a, id); }
  g3.connect(id, "db");
  assert.equal(t3.current(c3(true))!.id, "rerun");
  assert.equal(g3.judge().passed, true, "the demo moment: adding the cache by hand fixes level 3");
  assert.equal(t3.current(c3(true))!.id, "done");
});

test("coach: hints teach the concept that matches what is failing", () => {
  const l3 = LEVELS[2];
  const s = new Simulator(l3.start, l3.workload, 1);
  for (let i = 0; i < 600; i++) s.step(0.01);
  const running = contextHints(l3, l3.start, s.snapshot(), { p50: s.summary().p50Ms, p99: s.summary().p99Ms });
  assert.equal(running[0].concept, "cache");
  assert.match(running[0].text, /answers those from memory/);
  const idle = contextHints(LEVELS[1], LEVELS[1].start);
  assert.ok(idle.some((h) => h.concept === "spof"));
  const withCache = contextHints(l3, LEVELS[2].solutions[0].build());
  assert.ok(withCache.some((h) => h.concept === "eviction" && /forget/.test(h.text)));
  const l9 = LEVELS[8], sim = new Simulator(l9.start, l9.workload, 1);
  for (let i = 0; i < 900; i++) sim.step(0.01);
  assert.ok(contextHints(l9, l9.start, sim.snapshot()).some((h) => h.concept === "failover"));
  const p99 = contextHints(l3, l3.start, {}, { p50: 30, p99: 400 });
  assert.ok(p99.some((h) => h.concept === "p99" && /slowest 1%/.test(h.text)));
});

test("coach: post-run explanation is tied to the metrics", () => {
  const l1 = LEVELS[0];
  const bad = evaluate(l1, LEVELS[0].solutions[0].build());
  const ex = explainRun(l1, LEVELS[0].solutions[0].build(), bad);
  assert.match(ex.lines.join("\n"), /api1 was the first to break/);
  assert.match(ex.lines.join("\n"), /400 rps capacity/);
  assert.ok(ex.concepts.includes("overload") && ex.concepts.includes("p99"));
  const l3 = LEVELS[2], sol = l3.solutions[0].build(), v = evaluate(l3, sol);
  const ex3 = explainRun(l3, sol, v);
  assert.match(ex3.lines.join("\n"), /cache answered \d+% of reads/);
  assert.ok(ex3.concepts.includes("hit-rate"));
  const l9 = LEVELS[8], s9 = l9.solutions[1].build(), ex9 = explainRun(l9, s9, evaluate(l9, s9));
  assert.match(ex9.lines.join("\n"), /crashed/); assert.match(ex9.lines.join("\n"), /promoted/);
  const bare9 = explainRun(l9, l9.start, evaluate(l9, l9.start));
  assert.match(bare9.lines.join("\n"), /errors came from the crash/); assert.match(bare9.lines.join("\n"), /nothing ever took over/);
  assert.match(ex9.lines.join("\n"), /crashed/);
  const l12 = LEVELS[11], s12 = l12.solutions[0].build(), ex12 = explainRun(l12, s12, evaluate(l12, s12));
  assert.match(ex12.lines.join("\n"), /rate limiter rejected/);
});

test("rule-based review knows the new parts", async () => {
  const l = LEVELS[9], bare = stack({ apis: 3 }), v = evaluate(l, bare);
  const r = await new RuleBasedReviewer().review({ level: l, design: bare, verdict: v });
  assert.ok(r.points.join(" ").match(/shard|write/i));
  const l12 = LEVELS[11], s12 = l12.solutions[0].build();
  const r12 = await new RuleBasedReviewer().review({ level: l12, design: s12, verdict: evaluate(l12, s12) });
  assert.ok(r12.points.join(" ").match(/limiter|abusive|throttl/i));
});

test("daily: same date gives the same puzzle; a par design passes and the empty start does not", () => {
  assert.equal(dateKey(new Date(Date.UTC(2026, 8, 26))), "2026-09-26");
  assert.equal(seedFor("2026-09-26"), seedFor("2026-09-26"));
  assert.notEqual(seedFor("2026-09-26"), seedFor("2026-09-27"));
  assert.deepEqual(dailyLevel("2026-09-26").workload, dailyLevel("2026-09-26").workload);
  const titles = new Set<string>();
  for (let day = 1; day <= 14; day++) {
    const key = `2026-10-${String(day).padStart(2, "0")}`;
    const l = dailyLevel(key);
    titles.add(l.title);
    const par = evaluate(l, l.solutions[0].build());
    assert.ok(par.passed, `${key} ${l.title}: ${par.reasons.join(" ")}`);
    assert.ok(dailyScore(l, par) >= 100);
    assert.equal(evaluate(l, l.start).passed, false, `${key} ${l.title} start should not pass`);
    assert.equal(dailyScore(l, evaluate(l, l.start)), 0);
    assert.ok(par.cost <= l.par);
  }
  assert.ok(titles.size >= 4, "puzzle varies by date");
});

test("daily: cheaper passing design scores higher than a wasteful one", () => {
  const l = dailyLevel("2026-10-03");
  const par = evaluate(l, l.solutions[0].build());
  const fat = evaluate(l, { ...l.solutions[0].build(), nodes: [...l.solutions[0].build().nodes, ...stack({ apis: 3 }).nodes.filter((n) => n.kind === "api").map((n, i) => ({ ...n, id: `extra${i}` }))] });
  if (fat.passed) assert.ok(dailyScore(l, par) > dailyScore(l, fat));
});

import { resultPages, statLine, starCriteria } from "../src/game/result.js";
import { boardToCard } from "../src/game/card.js";

test("result pages: verdict, star criteria, explanation and concepts are all present", () => {
  const l = LEVELS[2], d = l.solutions[0].build(), v = evaluate(l, d);
  const [p1, p2] = resultPages(l, d, v);
  assert.match(p1, /LEVEL CLEARED/); assert.match(p1, /p99 \d+ ms/); assert.match(p1, /Stars:/); assert.match(p1, /WHAT HAPPENED/);
  assert.match(p2, /IDEAS IN PLAY/); assert.match(p2, /Hit rate/);
  const fail = evaluate(l, l.start), [f1] = resultPages(l, l.start, fail);
  assert.match(f1, /NOT YET/); assert.match(f1, /cache/);
  assert.ok(statLine(v).includes("cost")); assert.ok(starCriteria(l, v).includes("cost 20"));
  const [d1] = resultPages(dailyLevel("2026-10-03"), dailyLevel("2026-10-03").solutions[0].build(), evaluate(dailyLevel("2026-10-03"), dailyLevel("2026-10-03").solutions[0].build()), undefined, { score: 700, isBest: true });
  assert.match(d1, /SCORE 700  NEW PERSONAL BEST/);
});

test("card layout maps board corners into the card box", () => {
  const tl = boardToCard({ x: -0.75, y: 0.4 }), br = boardToCard({ x: 0.75, y: -0.4 });
  assert.deepEqual([tl.x, tl.y], [60, 150]); assert.deepEqual([br.x, br.y], [1140, 570]);
});

test("new parts are placed on a free spot, never on top of another part", () => {
  const g = new GameState(2);
  const at = { ...g.pos.api2 };
  const id = g.add("cache", at)!;
  for (const n of g.design.nodes) if (n.id !== id) assert.ok(Math.hypot(g.pos[n.id].x - g.pos[id].x, g.pos[n.id].y - g.pos[id].y) >= 0.14, `${n.id} overlaps`);
});
