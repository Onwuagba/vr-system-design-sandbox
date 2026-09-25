# System Design Sandbox (VR)

Meta VR Start Developer Competition 2026, **Productivity** track. Build a backend with your
hands: pinch a load balancer, API servers, a cache and a queue off a shelf, wire them to the
database, press Play, and watch simulated requests flow as glowing particles. Overloaded nodes
turn red and tell you why. Five levels, 5 to 10 minutes each, seated and hand tracked.

## Run

```bash
npm install
npm test          # simulation, game state, review tests
npm run dev       # http://localhost:5173  (IWER Quest 3 emulator injected on localhost)
npm run build     # type-check + production build into dist/
```

Desktop browser: mouse and keyboard work with no headset (drag parts, drag from a node's right
dot to wire, click a wire's red dot to cut it, click a cache to cycle policy/size; Space plays,
H hints, R resets, 1-5 picks level). In a headset the same actions are a pinch (far ray) or a
fingertip poke. Add `?level=N` to start on a level, `?review=<url>` to enable the optional LLM
review endpoint.

## Layout

- `src/sim/` pure simulation: seeded Poisson arrivals, per-node service rate and queues,
  Zipf-popularity caches with real LRU/FIFO/LFU eviction, async queues, p50/p95/p99, wiring
  validation, levels 1-5 and the pass/fail/star verdict. `flow.ts` is a fast steady-state
  estimate used for hints.
- `src/game/state.ts` placing, wiring, deleting; no rendering.
- `src/review/` pluggable end-of-level review: `RuleBasedReviewer` (offline, default) and
  `HttpLlmReviewer` (POSTs to your own proxy; never ship API keys in the client), with timeout
  fallback to the rules.
- `src/xr/` IWSDK (`@iwsdk/core` 1.0.0-rc.2) world, the board, particles, desktop fallback.
- `docs/video-script.md` demo script. `.github/workflows/pages.yml` GitHub Pages deploy.

## Status and honest limits

See the final hand-off notes: not yet tested on a physical headset; the simulator is a model,
not a real load test.

License: MIT
