# System Design Sandbox (VR)

Meta VR Start Developer Competition 2026, **Productivity** track. **Rehearse your own system's worst day, with your hands.**

Paste your architecture (a docker-compose file, a Mermaid flowchart or JSON) and it appears as a board in front of you,
laid out in depth: users nearest, the data tier furthest. Pick an incident (traffic spike, hot key, database failover,
cache stampede, lost server) and press Play. Simulated requests flow as glowing particles; whatever is overloaded
turns red, pulses and sounds an alarm, and the coach tells you why. Then fix it by pinching parts off the shelf and
wiring them in, and run it again. Seated, hand tracked, and playable in a normal browser tab too.

**The demo moment:** import the typical SaaS stack, run the database failover drill, watch 57% of requests fail,
add a replica and a queue by hand, run it again and watch the loss fall to about 5%, then tune until it passes.

It is a rough what-if, not a prediction: the simulator models capacity, latency, caching, queues, replicas and failover
with simple, documented rules (see `src/sim/`), so it shows which part breaks first and why, not production numbers.

## Drill your own stack

- **Desktop or phone:** open the **Drill** tab, then *Drill your own stack*, paste your file, pick an incident, press Run.
- **In the headset (nothing to paste):** MENU > DRILLS, pick a sample stack and an incident.
- **By link:** `?sample=saas&drill=failover`, or `#stack=<base64url of your text>&drill=hotkey`.
- **Formats:** docker-compose (`services`, `image`, `depends_on`, `deploy.replicas`), Mermaid `graph`/`flowchart`, or
  `{"nodes":[{"id","kind"}],"edges":[["a","b"]]}`. Kinds are inferred from names and images (nginx, redis, postgres,
  rabbitmq, worker, ...). Anything it could not map, or had to assume (for example that a cache sits in front of the
  database), is reported as a warning instead of guessed silently.

The five incidents live in `src/import/stack.ts`; the importer and drills have their own tests (`test/import.test.ts`).

The original 13-level campaign is still here and teaches the same ideas step by step.

## Run

```bash
npm install
npm test          # ~80 tests: simulator, scenarios, game logic, learning layer, feedback, importer and drills
npm run dev       # http://localhost:5173 (IWER Quest 3 emulator is injected on localhost only)
npm run build     # type-check + production build into dist/
```

URL options: `?level=N` starts on a campaign level, `?mode=sandbox` or `?mode=daily` starts in a mode,
`?review=<url>` enables the optional LLM review endpoint, and a share link ends in `#d=<code>` and opens that design.

## What is in it

**Campaign: 13 levels** (the first four teach, the rest are real incidents). Every level has a story, a goal,
a budget, a 3-star rating (pass, p99 under half the limit, cost under budget) and at least two different passing
designs. The test suite proves each start fails and each reference solution passes.

| # | Level | What it teaches | New part |
|---|---|---|---|
| 1 | It works on my machine | capacity, overload | API, DB |
| 2 | Spread the load | load balancing, single point of failure | Load balancer |
| 3 | Hot reads | caching, hit rate, eviction, p99 | Cache |
| 4 | Survive the spike | queues, backpressure | Queue |
| 5 | Black Friday | everything together, headroom | |
| 6 | The viral post | hot key: a tiny cache beats sharding | |
| 7 | Thundering herd | cache stampede, request coalescing | single-flight cache mode |
| 8 | Read replicas | scaling reads, replication lag | Read replica |
| 9 | Database failover | health checks, promotion, queues hiding the gap | |
| 10 | Sharding | splitting writes, uneven shards | Shard router |
| 11 | CDN for static files | edge caching | CDN |
| 12 | Rate limiter | per-client token buckets, fairness | Rate limiter |
| 13 | Async jobs | broker plus workers, backpressure | Message broker, Worker pool |

**Modes**
- **Sandbox:** everything unlocked, a live load generator (requests per second, read/write mix, a x3 burst) and
  failure injection: tap any part while it runs to kill it, tap again to revive. Watch the balancer notice, a
  replica get promoted, a queue fill.
- **Daily challenge:** a seeded puzzle, the same for everyone on a date, six scenario families with randomised
  load. Scored by stars and how far under the par cost you came. Your top five scores are kept on the device.

**Learning**
- Guided tutorial on levels 1 to 3 (each step completes when the board reaches that state, so it never nags).
- A coach line that teaches the concept behind whatever is currently failing: why a cache needs eviction, what
  p99 means, why sharding cannot split one hot key.
- Post-run **What happened**: what broke first and when, by how many percent of capacity, hit rates, backlog,
  incidents, p50 versus p99, all tied to the run's real numbers.
- 30-entry glossary, tap-to-learn on every part.
- End-of-run review is pluggable: a strong offline rule-based reviewer (default) or your own LLM endpoint
  (`?review=`), falling back to the rules on any failure or timeout. No API keys ever ship in the client.

**Experience**
- Particles that swell along wires and get thicker with load, red puffs where requests die, overload rings and
  pulses, a node pop-in, confetti and a three-star reveal on success.
- Synthesised WebAudio sound (nothing to download), positional for events on a part, ambient traffic hum that
  rises with load, mute and volume.
- Controller haptics through the WebXR gamepad (`hapticActuators[0].pulse` or `vibrationActuator.playEffect`),
  feature-detected. Bare hands have no haptics.
- Comfort and accessibility: dominant-hand panel side, seated board height and one-tap recenter, large targets,
  reduced motion (no pulses, rings or confetti; state is still shown by colour and text), hints on/off.
- Undo / redo (Ctrl+Z, Ctrl+Y or on-board buttons), autosaved slots per level (SAVE / LOAD), and **Share**:
  copy a link, copy or download JSON, download a PNG card, import from a link, code or JSON. Imports are
  validated and rebuilt from the part catalogue, so a shared file can never change a part's capacity.

## The simulator (why the results are trustworthy)

`src/sim/` is plain TypeScript with no rendering, tested on its own. Seeded Poisson arrivals, per-part service
rate and finite queues, Zipf key popularity, real LRU/LFU/FIFO eviction, caches that only learn a key once the
database has answered (so a stampede really stampedes), async queues that acknowledge early, health-checked
routing (a balancer keeps sending to a dead node for one interval), failover (a replica is promoted after 3 s),
per-client token buckets, hash sharding (a hot key stays on one shard), CDN edges for static files, and
replication lag. Same seed, same verdict. It is a teaching model, not a load test.

## Bundle and start-up

The board is plain three.js and starts immediately. The IWSDK runtime (physics, fonts, XR input) is loaded only when
you press **Enter VR**.

| | before | now |
|---|---|---|
| First load (JS) | 6.6 MB, 1.70 MB gzip | 0.75 MB, 0.20 MB gzip (+ 7 KB HUD) |
| VR runtime | in the first load | 5.9 MB, 1.5 MB gzip, fetched on Enter VR |

Measured in headless Chrome with software rendering (no GPU): playable in about 3 s from navigation. Headset numbers
have not been measured.

## Layout

- `src/sim/` simulator, parts catalogue, validation, `builders.ts` (architecture constructors), `levels.ts` (campaign, sandbox).
- `src/game/` game state with undo/redo, tutorial, coach, glossary, daily challenge, share codec, storage, result text.
- `src/review/` pluggable review: `RuleBasedReviewer`, `HttpLlmReviewer`, timeout fallback.
- `src/xr/` the 3D board (`game-view.ts`), in-world menu, effects, audio, haptics, desktop HUD, and `vr.ts` (lazy IWSDK).
- `docs/video-script.md` three-minute demo script. `.github/workflows/pages.yml` GitHub Pages deploy.

## Status and honest limits

**Verified:** unit tests (simulation, every level's solutions, game logic, storage, sharing, daily, audio and haptics
with fakes), type-check, production build, and the desktop path in headless Chrome (mouse and keyboard: placing, wiring,
cutting, all 13 levels start / fail / solve, sandbox kill and load controls, menu, settings, share and import, daily).

**Not verified:** anything on a physical headset. Hand-tracked pinch and poke, controller haptics, spatial audio
on real speakers, comfort of the board height, and the lazy Enter-VR handover have only been exercised in the
desktop browser. Starting an immersive session in headless Chrome with the IWER emulator fails with a three.js
`XRWebGLBinding` error, and it fails the same way on the original scaffold commit, so the emulator path is not a
usable check either. Multi-region is not implemented. The LLM review path is tested with a
fake endpoint only.

License: MIT
