import { test } from "node:test";
import assert from "node:assert/strict";
import { LEVELS, SANDBOX, evaluate, levelById } from "../src/sim/levels.js";
import { stack, E } from "../src/sim/builders.js";
import { node, type Design, type Workload } from "../src/sim/model.js";
import { Simulator, simulate, FAILOVER_SEC } from "../src/sim/simulator.js";
import { validate, canConnect } from "../src/sim/validate.js";

const wl = (rps: number, extra: Partial<Workload> = {}, sec = 20): Workload => ({ phases: [{ untilSec: sec, rps }], writeFraction: 0, keyspace: 1000, zipfS: 1, ...extra });
const run = (s: Simulator, sec: number) => { for (let i = 0; i < sec * 100; i++) s.step(0.01); return s; };

test("campaign: 13 levels, every start fails, every reference solution passes, 2+ solutions per real level", () => {
  assert.equal(LEVELS.length, 13);
  assert.deepEqual(LEVELS.map((l) => l.id), Array.from({ length: 13 }, (_, i) => i + 1));
  for (const l of LEVELS) {
    assert.ok(l.story.length > 40 && l.brief && l.lesson && l.concepts.length > 0, `level ${l.id} has narrative`);
    assert.ok(l.solutions.length >= (l.id === 1 ? 1 : 2), `level ${l.id} has multiple solutions`);
    assert.ok(validate(l.start).every((i) => i.severity !== "error") || l.id === 1, `level ${l.id} start is runnable`);
    let best = 0;
    for (const sol of l.solutions) {
      const v = evaluate(l, sol.build());
      assert.ok(v.passed, `level ${l.id} "${sol.name}": ${v.reasons.join(" ")}`);
      best = Math.max(best, v.stars);
    }
    assert.equal(best, 3, `level ${l.id}: three stars must be reachable`);
    if (l.id > 1) assert.equal(evaluate(l, l.start).passed, false, `level ${l.id} start must fail`);
  }
});

test("levelById and sandbox", () => {
  assert.equal(levelById(0), SANDBOX);
  assert.equal(levelById(9)!.title, "Database failover");
  assert.ok(SANDBOX.palette.includes("shard") && SANDBOX.sandbox);
});

test("every new part is placeable in the sandbox and wiring rules hold", () => {
  for (const k of ["replica", "cdn", "limiter", "shard", "broker", "worker"] as const) assert.ok(SANDBOX.palette.includes(k), k);
  assert.ok(canConnect("api", "replica") && canConnect("broker", "worker") && canConnect("shard", "db") && canConnect("client", "cdn"));
  assert.ok(!canConnect("replica", "db") && !canConnect("db", "replica") && !canConnect("worker", "api"));
});

test("read replica: reads are split, writes only ever reach the primary, staleness is reported", () => {
  const d = stack({ apis: 2, replicas: 2, db: { capacityRps: 5000 } });
  const s = simulate(d, wl(600, { writeFraction: 0.2, keyspace: 20, zipfS: 1 }), 3);
  const { db, replica1, replica2 } = s.nodes;
  assert.ok(replica1.arrivalRps > 100 && replica2.arrivalRps > 100, "replicas serve reads");
  assert.ok(Math.abs(replica1.arrivalRps - replica2.arrivalRps) < 40);
  assert.ok(db.arrivalRps > 100 + 0.8 * 120 - 20, "primary gets all writes plus its share of reads");
  assert.ok(s.staleReads > 0, "a replica lags, so a read right after a write can be stale");
  assert.equal(s.errorRate, 0);
});

test("a replica refuses writes until promoted", () => {
  const d: Design = { nodes: [node("users", "client"), node("api1", "api"), node("replica1", "replica")], edges: E("users>api1", "api1>replica1") };
  const s = simulate(d, wl(50, { writeFraction: 1 }, 5), 1);
  assert.ok(s.errorRate > 0.95);
});

test("cdn answers static files at the edge and spares the api", () => {
  const w = wl(1000, { staticFraction: 0.8 });
  const without = simulate(stack({ apis: 1, lb: false }), w, 2);
  const withCdn = simulate(stack({ apis: 1, lb: false, cdn: true }), w, 2);
  assert.ok(without.errorRate > 0.3, "one api cannot serve 1000 rps");
  assert.equal(withCdn.errorRate, 0);
  assert.ok(withCdn.cdnHits > 0.7 * 0.94 * withCdn.arrivals);
  assert.ok(withCdn.nodes.cdn.hitRate! > 0.9);
  assert.ok(withCdn.nodes.api1.arrivalRps < 0.3 * 1000);
});

test("static requests never touch the database", () => {
  const s = simulate(stack({ apis: 2, db: { capacityRps: 5000 } }), wl(400, { staticFraction: 1 }, 5), 1);
  assert.equal(s.nodes.db.arrivalRps < 1, true);
  assert.equal(s.errorRate, 0);
});

test("rate limiter blocks abusive clients and lets real ones through", () => {
  const w = wl(800, { abuseFraction: 0.6 });
  const bare = simulate(stack({ apis: 1, lb: false, db: { capacityRps: 5000 } }), w, 5);
  const lim = simulate(stack({ apis: 1, lb: false, limiter: 20, db: { capacityRps: 5000 } }), w, 5);
  assert.ok(bare.errorRate > 0.2, "bots crowd out real users");
  assert.ok(lim.errorRate < 0.01, `legit error rate ${lim.errorRate}`);
  assert.ok(lim.abuseBlocked > 0.7 * 0.6 * lim.arrivals * 0.9, "most bot requests are rejected");
  assert.ok(lim.nodes.api1.arrivalRps < 400);
});

test("rate limiter is per client: a strict limit also throttles heavy legit users", () => {
  const strict = simulate(stack({ apis: 1, lb: false, limiter: 0.05 }), wl(800, { abuseFraction: 0.1 }, 6), 5);
  assert.ok(strict.errorRate > 0.2, "legit clients averaging 0.36 rps each exceed a 0.05 rps allowance");
});

test("shard router sends a key to the same database every time", () => {
  const d = stack({ apis: 1, lb: false, shards: 3, db: { capacityRps: 9999 } });
  const s = simulate(d, wl(300, { keyspace: 1, zipfS: 1 }, 5), 1); // exactly one key
  const loads = [s.nodes.db1, s.nodes.db2, s.nodes.db3].map((n) => n.arrivalRps);
  assert.equal(loads.filter((x) => x > 5).length, 1, "one hot key lands on exactly one shard");
});

test("sharding spreads many keys roughly evenly and multiplies write capacity", () => {
  const w = wl(500, { writeFraction: 1, keyspace: 5000, zipfS: 0.3 });
  const one = simulate(stack({ apis: 2 }), w, 2);
  const three = simulate(stack({ apis: 2, shards: 3 }), w, 2);
  assert.ok(one.errorRate > 0.2);
  assert.equal(three.errorRate, 0);
  const l = [three.nodes.db1, three.nodes.db2, three.nodes.db3].map((n) => n.arrivalRps);
  assert.ok(Math.max(...l) < 1.5 * Math.min(...l));
});

test("broker acks writes at once; workers drain the backlog", () => {
  const d = stack({ apis: 2, broker: { workers: 3 } });
  const w: Workload = { phases: [{ untilSec: 4, rps: 300 }, { untilSec: 30, rps: 40 }], writeFraction: 1, keyspace: 100, zipfS: 1 };
  const s = simulate(d, w, 2);
  assert.equal(s.errors, 0);
  assert.ok(s.p99Ms < 60, `producer latency ${s.p99Ms}`);
  assert.ok(s.maxBacklog > 300, "spike parked in the broker");
  assert.equal(s.endBacklog, 0, "workers caught up");
});

test("too few workers leave a permanent backlog", () => {
  const s = simulate(stack({ apis: 2, broker: { workers: 1 } }), wl(300, { writeFraction: 1 }, 8), 2);
  assert.ok(s.endBacklog > 500);
});

test("killing an api: the load balancer keeps sending traffic for one health-check interval, then routes around it", () => {
  const d = stack({ apis: 2, db: { capacityRps: 5000 } });
  const s = new Simulator(d, wl(400, {}, 30), 1);
  run(s, 3);
  const e0 = s.errors;
  s.kill("api1");
  run(s, 0.5);
  assert.ok(s.errors - e0 > 30, "requests routed to the dead node fail");
  run(s, 1.5);
  const e1 = s.errors;
  run(s, 3);
  assert.equal(s.errors, e1, "after health check no more errors");
  assert.equal(s.isDown("api1"), true);
  assert.ok(s.snapshot().api2.arrivalRps > 300, "survivor takes everything");
  s.revive("api1");
  run(s, 4);
  assert.ok(s.snapshot().api1.arrivalRps > 100, "revived node gets traffic again");
  assert.ok(s.log.some((l) => /crashed/.test(l.text)) && s.log.some((l) => /back/.test(l.text)));
});

test("killing the only database fails every request; the queue holds writes and loses none it acked", () => {
  const d = stack({ apis: 1, lb: false, queue: true });
  const s = new Simulator(d, wl(100, { writeFraction: 1 }, 30), 1);
  run(s, 2); s.kill("db"); run(s, 5);
  assert.ok(s.backlog > 300, "queue keeps accepting writes");
  s.revive("db"); run(s, 15);
  assert.equal(s.asyncLost, 0);
  assert.equal(s.backlog, 0, "backlog drains after recovery");
});

test("failover promotes a replica after the detection delay and writes resume", () => {
  const d = stack({ apis: 2, replicas: 1, db: { capacityRps: 2000 } });
  const s = new Simulator(d, wl(200, { writeFraction: 0.3 }, 30), 4);
  run(s, 2); s.kill("db");
  run(s, FAILOVER_SEC - 0.5);
  assert.ok(!s.snapshot().replica1.promoted);
  run(s, 1);
  assert.equal(s.snapshot().replica1.promoted, true);
  assert.ok(s.log.some((l) => /promoted/.test(l.text)));
  const before = s.errors; run(s, 5);
  assert.equal(s.errors, before, "no more failures once promoted");
});

test("without a replica the outage never ends", () => {
  const s = simulate(stack({ apis: 2 }), wl(200, { events: [{ atSec: 5, kill: "db" }] }, 15), 2);
  assert.ok(s.errorRate > 0.5);
});

test("scheduled kill with revive brings the node back", () => {
  const s = simulate(stack({ apis: 2 }), wl(200, { events: [{ atSec: 4, kill: "db", reviveAtSec: 8 }] }, 16), 2);
  assert.ok(s.log.some((l) => /crashed/.test(l.text)) && s.log.some((l) => /back/.test(l.text)));
  assert.ok(s.errorRate > 0.1 && s.errorRate < 0.4);
});

test("cache flush stampede: without coalescing the database drowns, with it the herd shares one fetch", () => {
  const l = LEVELS[6];
  const plain = simulate(l.start, l.workload, 7);
  const single = simulate(l.solutions[0].build(), l.workload, 7);
  assert.ok(plain.errorRate > single.errorRate + 0.01, `${plain.errorRate} vs ${single.errorRate}`);
  assert.ok(single.coalesced > 100);
  assert.ok(plain.log.some((l) => /emptied/.test(l.text)));
  assert.ok(plain.firstOverloadSec.db >= 8, "db only struggles after the flush");
});

test("warm caches start with the hottest keys; cold caches start empty", () => {
  const d = stack({ apis: 1, lb: false, cache: { cacheSize: 100 } });
  const warm = new Simulator(d, wl(100, { warmCaches: true }), 1);
  const cold = new Simulator(d, wl(100), 1);
  run(warm, 1); run(cold, 1);
  assert.ok(warm.snapshot().cache.hitRate! > cold.snapshot().cache.hitRate!);
});

test("summary carries the timeline and first-overload time used for explanations", () => {
  const s = simulate(stack({ apis: 1, lb: false }), { phases: [{ untilSec: 4, rps: 100 }, { untilSec: 10, rps: 900 }], writeFraction: 0, keyspace: 100, zipfS: 1 }, 1);
  assert.ok(s.series.length >= 10 && s.series[1].arrivals < s.series[7].arrivals);
  assert.ok(s.firstOverloadSec.api1 >= 4 && s.firstOverloadSec.api1 < 7);
  assert.ok(s.peakUtil.api1 > 1.5);
});

test("live overrides change the load mid-run", () => {
  const s = new Simulator(stack({ apis: 3, db: { capacityRps: 5000 } }), wl(100, {}, 1e9), 1);
  run(s, 3);
  const calm = s.snapshot().api1.arrivalRps;
  s.rpsOverride = 900; run(s, 3);
  assert.ok(s.snapshot().api1.arrivalRps > calm * 3);
  s.writeOverride = 1; s.rpsOverride = 60; run(s, 3);
  assert.ok(s.snapshot().db.arrivalRps > 30);
});

test("a cache with no downstream is refused, so it cannot fake a pass by swallowing misses", () => {
  const d = stack({ apis: 1, lb: false, cache: { cacheSize: 100 } });
  d.edges = d.edges.filter((e) => e.from !== "cache");
  assert.ok(validate(d).some((i) => i.severity === "error" && i.code === "cache-dead-end"));
  assert.equal(evaluate(LEVELS[2], { ...LEVELS[2].start, nodes: [...LEVELS[2].start.nodes, node("cache", "cache")], edges: [...LEVELS[2].start.edges.filter((e) => e.to !== "db"), ...E("api1>cache", "api2>cache", "api3>cache")] }).passed, false);
});
