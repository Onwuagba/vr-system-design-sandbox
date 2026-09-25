# Demo video script (target 2:30, under 3:00)

Record in the Meta XR Simulator / IWER emulator for the clean capture, then 20 seconds of real
headset footage (seated, hands only) for the final "it is real" shot. Keep the board in frame.

| Time | Visual | Voice-over |
|---|---|---|
| 0:00 | Black. A single request dot travels. Cut to the board. | "Every app you use is a chain of servers, and most people never see it fall over." |
| 0:10 | Level 1: pinch API and database from the shelf, drag a wire from the Users dot. Press Play: 700 requests a second, the API server turns red and pulses. | "Here is launch day. One server, and it is drowning. You can see it, and the hint tells you why." |
| 0:35 | Level 2: pinch a load balancer, add a second API server, wire them. Play. Particles split across two green servers. | "Add a load balancer and the traffic spreads. No slides, no jargon, just wires and consequences." |
| 1:00 | Level 3: database goes red. Pinch a cache, wire it in front. Tap the cache to switch LRU to LFU; hit rate readout climbs. | "Popular reads hit a cache instead of the database. Try eviction policies and watch the hit rate change." |
| 1:30 | Level 4: spike. Orange write particles pile up in a queue, backlog counter climbs then drains, database stays green. | "A flash sale triples traffic. A queue absorbs the spike and the database catches up at its own pace." |
| 1:55 | Results overlay: stars, p50 and p99, then the design review text. | "At the end you get p50 and p99 latency, a star rating, and a review of your design. It works offline; plug in an LLM for a richer critique." |
| 2:15 | Level 5 sandbox: build something big, hand pinch wiring in real headset footage. | "Fully hand tracked, seated, five to ten minutes a level. Learn system design by building it." |
| 2:30 | Title card: System Design Sandbox, Productivity track, GitHub link. | "System Design Sandbox VR." |

## Shot checklist
- Show the red overload state and the on-board hint in at least two levels.
- Show one refused wire (for example Database to API) so the validation is visible.
- Show the desktop fallback for two seconds, mouse dragging a node, to prove it runs without a headset.
- Captions on: judges often watch muted.
- Say plainly which parts are simulated (traffic is a model, not real servers).
