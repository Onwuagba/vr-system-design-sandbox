import { test } from "node:test";
import assert from "node:assert/strict";
import { mulberry32, poisson, Zipf, percentile } from "../src/sim/rng.js";
import { Cache } from "../src/sim/cache.js";
import { analyse, cacheHitRate, hintsFor } from "../src/sim/flow.js";
import { simulate, Simulator } from "../src/sim/simulator.js";
import { LEVELS, evaluate } from "../src/sim/levels.js";
import { node, steady, type Design } from "../src/sim/model.js";
import { validate, edgeProblem, isRunnable } from "../src/sim/validate.js";

const users = node("users", "client");
const chain = (): Design => ({ nodes: [users, node("api1", "api"), node("db", "db", { capacityRps: 5000 })],
  edges: [{ from: "users", to: "api1" }, { from: "api1", to: "db" }] });

test("poisson mean and variance match lambda", () => {
  const rng = mulberry32(3);
  for (const lambda of [2, 10, 100]) {
    const xs = Array.from({ length: 20000 }, () => poisson(lambda, rng));
    const m = xs.reduce((a, b) => a + b, 0) / xs.length;
    const v = xs.reduce((a, b) => a + (b - m) ** 2, 0) / xs.length;
    assert.ok(Math.abs(m - lambda) / lambda < 0.03, `mean ${m} vs ${lambda}`);
    assert.ok(Math.abs(v - lambda) / lambda < 0.08, `var ${v} vs ${lambda}`);
  }
});

test("rng is deterministic per seed", () => {
  assert.equal(mulberry32(5)(), mulberry32(5)());
  assert.notEqual(mulberry32(5)(), mulberry32(6)());
});

test("zipf is skewed to hot keys and topMass is monotone", () => {
  const z = new Zipf(1000, 1);
  const rng = mulberry32(1);
  let hot = 0;
  for (let i = 0; i < 20000; i++) if (z.sample(rng) < 10) hot++;
  assert.ok(Math.abs(hot / 20000 - z.topMass(10)) < 0.02);
  assert.ok(z.topMass(300) > z.topMass(100));
  assert.equal(z.topMass(1000), 1);
});

test("percentile", () => {
  const xs = Array.from({ length: 100 }, (_, i) => i + 1);
  assert.equal(percentile(xs, 50), 50);
  assert.equal(percentile(xs, 99), 99);
  assert.equal(percentile([], 99), 0);
});

test("cache eviction policies behave differently", () => {
  const lru = new Cache(2, "lru"), fifo = new Cache(2, "fifo"), lfu = new Cache(2, "lfu");
  for (const c of [lru, fifo, lfu]) { c.insert(1); c.insert(2); c.lookup(1); c.lookup(1); c.insert(3); }
  assert.equal(lru.lookup(1), true);  // 1 was recently used, 2 evicted
  assert.equal(lru.lookup(2), false);
  assert.equal(fifo.lookup(1), false); // 1 was inserted first, evicted despite hits
  assert.equal(fifo.lookup(2), true);
  assert.equal(lfu.lookup(1), true);   // 1 is most frequent
  assert.equal(lfu.lookup(2), false);
});

test("simulated hit rate rises with cache size and lfu >= fifo on zipf traffic", () => {
  const run = (size: number, policy: "lru" | "fifo" | "lfu") => {
    const d: Design = { nodes: [users, node("api1", "api", { capacityRps: 9999 }), node("c", "cache", { cacheSize: size, policy }), node("db", "db", { capacityRps: 9999 })],
      edges: [{ from: "users", to: "api1" }, { from: "api1", to: "c" }, { from: "c", to: "db" }] };
    return simulate(d, steady(500), 2).nodes.c.hitRate!;
  };
  assert.ok(run(300, "lru") > run(50, "lru") + 0.1);
  assert.ok(run(100, "lfu") >= run(100, "fifo"));
  assert.ok(run(0, "lru") === 0);
});

test("analytic hit-rate model tracks the simulation within 12 points", () => {
  for (const policy of ["lru", "lfu", "fifo"] as const) {
    const cn = node("c", "cache", { cacheSize: 200, policy });
    const d: Design = { nodes: [users, node("api1", "api", { capacityRps: 9999 }), cn, node("db", "db", { capacityRps: 9999 })],
      edges: [{ from: "users", to: "api1" }, { from: "api1", to: "c" }, { from: "c", to: "db" }] };
    const sim = simulate(d, steady(800), 4).nodes.c.hitRate!;
    assert.ok(Math.abs(sim - cacheHitRate(cn, steady(800))) < 0.12, `${policy}: sim ${sim}`);
  }
});

test("underloaded chain: no errors, latency near service times", () => {
  const s = simulate(chain(), steady(100), 1);
  assert.equal(s.errors, 0);
  assert.ok(s.p50Ms >= 35 && s.p50Ms < 60, `p50 ${s.p50Ms}`);
  assert.ok(s.p99Ms >= s.p50Ms);
  assert.ok(Math.abs(s.arrivals - 2000) < 200);
});

test("overloaded single api sheds load and is flagged", () => {
  const s = simulate(chain(), steady(700), 1);
  assert.ok(s.errorRate > 0.25, `errors ${s.errorRate}`);
  assert.ok(s.peakOverloaded.includes("api1"));
  assert.equal(s.nodes.api1.overloaded, true);
});

test("p99 grows as utilisation approaches capacity", () => {
  const lo = simulate(chain(), steady(100), 1).p99Ms, hi = simulate(chain(), steady(380), 1).p99Ms;
  assert.ok(hi > lo);
});

test("simulation is deterministic for a seed", () => {
  assert.deepEqual(simulate(chain(), steady(300), 9).p99Ms, simulate(chain(), steady(300), 9).p99Ms);
});

test("load balancer splits traffic evenly", () => {
  const l = LEVELS[2];
  const r = analyse(l.start, 900);
  assert.equal(r.nodes.api1.rps, 300);
  assert.equal(r.nodes.api2.rps, 300);
  const s = simulate(l.start, steady(900), 1);
  assert.ok(Math.abs(s.nodes.api1.arrivalRps - s.nodes.api2.arrivalRps) < 60);
});

test("hints point at the overloaded db and suggest a cache", () => {
  const r = analyse(LEVELS[2].start, 1000);
  assert.equal(r.bottleneck, "db");
  assert.ok(r.hints.some((h) => h.includes("cache")));
});

test("hints from simulator snapshot flag overloaded api", () => {
  const s = new Simulator(chain(), steady(900), 1);
  for (let i = 0; i < 300; i++) s.step(0.01);
  assert.ok(hintsFor(s.design, s.snapshot()).some((h) => h.includes("api1")));
});

test("queue acks writes early and drains backlog", () => {
  const d: Design = { nodes: [users, node("api1", "api", { capacityRps: 5000 }), node("q", "queue", { capacityRps: 200 }), node("db", "db")],
    edges: [{ from: "users", to: "api1" }, { from: "api1", to: "q" }, { from: "q", to: "db" }] };
  const w = { phases: [{ untilSec: 3, rps: 600 }, { untilSec: 30, rps: 50 }], writeFraction: 1, keyspace: 100, zipfS: 1 };
  const s = simulate(d, w, 1);
  assert.equal(s.errors, 0);
  assert.ok(s.p99Ms < 100, `acked latency ${s.p99Ms}`);
  assert.ok(s.maxBacklog > 500);
  assert.equal(s.endBacklog, 0);
});

test("queue with too small a buffer rejects writes", () => {
  const d: Design = { nodes: [users, node("api1", "api", { capacityRps: 5000 }), node("q", "queue", { capacityRps: 100, bufferSize: 50 }), node("db", "db")],
    edges: [{ from: "users", to: "api1" }, { from: "api1", to: "q" }, { from: "q", to: "db" }] };
  const s = simulate(d, { phases: [{ untilSec: 5, rps: 500 }], writeFraction: 1, keyspace: 100, zipfS: 1 }, 1);
  assert.ok(s.errorRate > 0.5);
});

test("reads bypass the queue when a direct path exists", () => {
  const d: Design = { nodes: [users, node("api1", "api", { capacityRps: 5000 }), node("q", "queue"), node("db", "db", { capacityRps: 5000 })],
    edges: [{ from: "users", to: "api1" }, { from: "api1", to: "q" }, { from: "api1", to: "db" }, { from: "q", to: "db" }] };
  const s = simulate(d, { phases: [{ untilSec: 5, rps: 100 }], writeFraction: 0.5, keyspace: 100, zipfS: 1 }, 1);
  assert.ok(s.nodes.q.arrivalRps > 20 && s.nodes.q.arrivalRps < 80);
  assert.ok(s.nodes.db.arrivalRps > 60);
});

test("validation: rules", () => {
  assert.ok(validate({ nodes: [node("db", "db")], edges: [] }).some((i) => i.code === "client-count"));
  const d = chain();
  assert.ok(isRunnable(d));
  assert.match(edgeProblem(d, "db", "api1")!, /cannot send/);
  assert.match(edgeProblem(d, "api1", "db")!, /Already/);
  assert.match(edgeProblem(d, "users", "db")!, /cannot send|one door/);
  const d2: Design = { ...chain(), nodes: [...chain().nodes, node("api2", "api")] };
  assert.match(edgeProblem(d2, "users", "api2")!, /one door/);
  assert.match(edgeProblem(d2, "api1", "api2")!, /cannot send/);
  assert.ok(validate(d2).some((i) => i.code === "unreachable" && i.nodeId === "api2"));
  const cyc: Design = { nodes: [users, node("a", "lb"), node("b", "lb")], edges: [{ from: "users", to: "a" }, { from: "a", to: "b" }, { from: "b", to: "a" }] };
  assert.ok(validate(cyc).some((i) => i.code === "cycle"));
  assert.match(edgeProblem({ nodes: cyc.nodes, edges: cyc.edges.slice(0, 2) }, "b", "a")!, /loop/);
  assert.throws(() => new Simulator(cyc, steady(10)));
  const dead: Design = { nodes: [users, node("api1", "api")], edges: [{ from: "users", to: "api1" }] };
  assert.ok(validate(dead).some((i) => i.code === "dead-end"));
  assert.ok(validate({ nodes: [users, node("api1", "api")], edges: [{ from: "users", to: "ghost" }] }).some((i) => i.code === "dangling-edge"));
});

// ---- Levels: each has a known solution that passes, and its starting state does not ----
const add = (d: Design, ns: Design["nodes"], es: Design["edges"], drop: (e: { from: string; to: string }) => boolean = () => false): Design =>
  ({ nodes: [...d.nodes, ...ns], edges: [...d.edges.filter((e) => !drop(e)), ...es] });

test("level starts do not pass", () => {
  for (const l of LEVELS.slice(1)) assert.equal(evaluate(l, l.start).passed, false, `level ${l.id}`);
  assert.equal(evaluate(LEVELS[0], LEVELS[0].start).passed, false); // unwired
});

test("level 1 passes once wired, even though the server falls over", () => {
  const l = LEVELS[0];
  const d = add(l.start, [], [{ from: "users", to: "api1" }, { from: "api1", to: "db" }]);
  const v = evaluate(l, d);
  assert.ok(v.passed);
  assert.ok(v.summary!.errorRate > 0.1, "should visibly overload");
});

test("level 2 solved by lb + 2 apis; not by a bigger single server alone", () => {
  const l = LEVELS[1];
  const d = add(l.start, [node("lb", "lb"), node("api2", "api")],
    [{ from: "users", to: "lb" }, { from: "lb", to: "api1" }, { from: "lb", to: "api2" }, { from: "api2", to: "db" }],
    (e) => e.from === "users");
  const v = evaluate(l, d);
  assert.ok(v.passed, JSON.stringify(v.reasons));
  const cheat = structuredClone(l.start); cheat.nodes[1].capacityRps = 5000;
  assert.equal(evaluate(l, cheat).passed, false);
});

test("level 3 solved by a cache in front of the db", () => {
  const l = LEVELS[2];
  const d = add(l.start, [node("cache", "cache")], [{ from: "cache", to: "db" }]);
  d.edges = d.edges.map((e) => (e.to === "db" && e.from !== "cache" ? { ...e, to: "cache" } : e));
  const v = evaluate(l, d);
  assert.ok(v.passed, JSON.stringify(v.reasons));
  assert.ok(v.summary!.nodes.cache.hitRate! > 0.6);
  assert.ok(v.stars >= 1);
});

test("level 4 solved by routing writes through a queue", () => {
  const l = LEVELS[3];
  const d = add(l.start, [node("q", "queue")], [{ from: "q", to: "db" }, { from: "api1", to: "q" }, { from: "api2", to: "q" }, { from: "api3", to: "q" }]);
  const v = evaluate(l, d);
  assert.ok(v.passed, JSON.stringify(v.reasons) + JSON.stringify(v.summary));
  assert.ok(v.summary!.maxBacklog > 100, "queue should visibly absorb the spike");
});

test("level 5 sandbox: a full design passes; empty wiring fails validation", () => {
  const l = LEVELS[4];
  const d: Design = { nodes: [users, node("lb", "lb"), node("a1", "api"), node("a2", "api"), node("a3", "api"), node("a4", "api"),
    node("c", "cache", { cacheSize: 400, policy: "lfu" }), node("q", "queue", { capacityRps: 400 }), node("db", "db", { capacityRps: 600 })],
    edges: [{ from: "users", to: "lb" }, ...["a1", "a2", "a3", "a4"].flatMap((a) => [{ from: "lb", to: a }, { from: a, to: "c" }, { from: a, to: "q" }]),
      { from: "c", to: "db" }, { from: "q", to: "db" }] };
  const v = evaluate(l, d);
  assert.ok(v.passed, JSON.stringify(v.reasons));
  assert.equal(evaluate(l, l.start).passed, false);
});

test("wrong design gives actionable reasons", () => {
  const v = evaluate(LEVELS[1], LEVELS[1].start);
  assert.ok(v.reasons.length > 0);
});
