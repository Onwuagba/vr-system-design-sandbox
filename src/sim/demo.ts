import { LEVELS, evaluate } from "./levels.js";
import { isRunnable } from "./validate.js";

for (const l of LEVELS) {
  if (!isRunnable(l.start)) { console.log(`L${l.id} ${l.title}: (unwired start)`); continue; }
  const v = evaluate(l, l.start);
  const s = v.summary!;
  console.log(`L${l.id} ${l.title}: p50=${s.p50Ms.toFixed(0)}ms p99=${s.p99Ms.toFixed(0)}ms errors=${(s.errorRate * 100).toFixed(0)}% passed=${v.passed}`);
  v.reasons.forEach((r) => console.log("   -", r));
}
