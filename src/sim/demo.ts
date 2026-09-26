// `npm run sim`: print how every campaign level's starting design and reference solutions fare.
import { LEVELS, evaluate } from "./levels.js";
import { isRunnable } from "./validate.js";

const line = (name: string, v: ReturnType<typeof evaluate>) => {
  const s = v.summary;
  return `${name}: ${v.passed ? "PASS" : "FAIL"} ${s ? `p99=${s.p99Ms.toFixed(0)}ms errors=${(s.errorRate * 100).toFixed(1)}% ` : ""}cost=${v.cost} stars=${v.stars}`;
};

for (const l of LEVELS) {
  console.log(`L${l.id} ${l.title}`);
  console.log("   " + (isRunnable(l.start) ? line("start", evaluate(l, l.start)) : "start: (unwired)"));
  for (const s of l.solutions) console.log("   " + line(s.name, evaluate(l, s.build())));
}
