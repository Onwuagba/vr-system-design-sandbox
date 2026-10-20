import { test } from "node:test";
import assert from "node:assert/strict";
import { parseStack, drillLevel, inferKind, DRILLS, SAMPLE_STACKS, baselineRps } from "../src/import/stack.js";
import { evaluate } from "../src/sim/levels.js";
import { isRunnable, validate } from "../src/sim/validate.js";
import { node } from "../src/sim/model.js";

const kinds = (t: string) => parseStack(t).design.nodes.map((n) => n.kind).sort();

test("kind inference from names and images", () => {
  assert.equal(inferKind("redis"), "cache"); assert.equal(inferKind("db", "postgres:16"), "db");
  assert.equal(inferKind("gateway", "nginx"), "lb"); assert.equal(inferKind("rabbit"), "broker");
  assert.equal(inferKind("db-replica", "postgres"), "replica"); assert.equal(inferKind("zzz"), undefined);
});

test("mermaid: shapes, labels, chains and edge labels", () => {
  const p = parseStack("flowchart TD\n U[Users] -->|http| N[nginx] --> A1(api 1)\n N --> A2(api 2)\n A1 --> R[(Redis)] --> D[(Postgres)]\n A2 --> D");
  assert.deepEqual(kinds("flowchart TD\n U[Users] --> N[nginx] --> A1(api 1)\n A1 --> D[(Postgres)]"), ["api", "client", "db", "lb"]);
  assert.ok(p.design.nodes.some((n) => n.kind === "cache") && p.design.nodes.filter((n) => n.kind === "api").length === 2);
  assert.ok(isRunnable(p.design), JSON.stringify(validate(p.design)));
});

test("compose: services, depends_on, replicas, and users get wired in", () => {
  const p = parseStack(SAMPLE_STACKS.find((s) => s.id === "compose")!.text);
  assert.equal(p.design.nodes.filter((n) => n.kind === "api").length, 2);
  assert.ok(p.design.edges.some((e) => e.from === "users" && e.to === "lb"));
  assert.ok(p.design.edges.some((e) => e.from === "api-1" && e.to === "db"));
  assert.ok(isRunnable(p.design), JSON.stringify(validate(p.design)));
});

test("json input and unknown names produce a warning, not a crash", () => {
  const p = parseStack(JSON.stringify({ nodes: [{ id: "web", kind: "api" }, { id: "thing" }, { id: "db", kind: "db" }], edges: [["web", "db"], ["thing", "db"]] }));
  assert.ok(p.warnings.some((w) => /thing/.test(w)));
  assert.ok(p.design.nodes.some((n) => n.kind === "client"));
});

test("edges the model cannot route are dropped and reported", () => {
  const p = parseStack("graph LR\n U[Users] --> A[api]\n A --> B[api two]\n B --> D[(db)]");
  assert.ok(p.warnings.some((w) => /cannot send traffic/.test(w)));
});

test("bad input is rejected with a readable message", () => {
  assert.throws(() => parseStack("   "), /Paste/);
  assert.throws(() => parseStack("services:\n"), /No services|no services/i);
});

test("every sample stack imports, runs, and every drill yields a valid level", () => {
  for (const s of SAMPLE_STACKS) {
    const p = parseStack(s.text); assert.ok(isRunnable(p.design), s.id);
    for (const d of DRILLS) { const lv = drillLevel(p, d.id); const v = evaluate(lv, lv.start); assert.ok(v.summary, `${s.id}/${d.id}`); assert.ok(Number.isFinite(v.cost)); }
  }
});

test("drills are real: the bare monolith fails the failover drill, and adding a replica plus queue fixes it", () => {
  const p = parseStack(SAMPLE_STACKS.find((s) => s.id === "monolith")!.text);
  const lv = drillLevel(p, "failover");
  assert.equal(evaluate(lv, lv.start).passed, false);
  const fixed = structuredClone(lv.start);
  fixed.nodes.push(node("replica1", "replica"), node("queue", "queue"));
  fixed.edges = fixed.edges.filter((e) => !(e.from === "app-server" && e.to === "postgres"));
  const a = fixed.nodes.find((n) => n.kind === "api")!.id, db = fixed.nodes.find((n) => n.kind === "db")!.id;
  fixed.edges.push({ from: a, to: "queue" }, { from: "queue", to: db }, { from: "queue", to: "replica1" }, { from: a, to: "replica1" });
  const v = evaluate(lv, fixed);
  assert.ok(v.summary && v.summary.errorRate < evaluate(lv, lv.start).summary!.errorRate, "fix should reduce errors");
});

test("baseline load scales with the stack", () => {
  const small = parseStack(SAMPLE_STACKS[0].text).design, big = parseStack(SAMPLE_STACKS[2].text).design;
  assert.ok(baselineRps(big) >= baselineRps(small));
});
