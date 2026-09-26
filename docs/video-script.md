# Demo video script (3:00 hard cap, target 2:50)

**The moment the video is built around:** Level 3, the database turns red, you reach out, pinch a cache off the
shelf, wire it in by hand, press Play again, and the database turns green. Everything else supports that beat.

Capture plan: record the headset for the hero shots (seated, hands only, board in frame). If a headset is not
available for the whole take, record the Meta XR Simulator / IWER emulator or the desktop fallback and say so
in the voice-over. Do not present emulator footage as headset footage. Captions on: judges often watch muted.

| Time | Visual | Voice-over |
|---|---|---|
| 0:00 | Black. One request dot travels along a wire, then the whole board fades in. | "Every app you use is a chain of servers, and most people never get to see one fall over." |
| 0:08 | Title card, then Level 1 in the headset: pinch-drag Users to API to DB. Press Play. The API turns red and pulses, a sound plays, a puff of red sparks. Coach panel: "One server can only do 400 requests a second." | "This is System Design Sandbox. You build the backend with your hands. One server, launch day, and it is drowning. You can see it, hear it, and the coach tells you why." |
| 0:30 | Quick cut: Level 2, drop a load balancer, add a second API, particles split across two green servers. | "Add a load balancer and the traffic spreads. No slides, no jargon. Wires and consequences." |
| 0:45 | **Level 3, the hero shot.** Play: the database turns red, red-alarm sound. Pause on it for a full second. | "Level three. A thousand reads a second and the database is melting." |
| 0:55 | Hand pinches a CACHE off the shelf, drops it between the APIs and the database, wires three APIs to it and the cache to the database, taps the red dots to cut the old wires. | "Most of those reads ask for the same popular items. So I put a cache in front. By hand." |
| 1:15 | Press Play. The database stays green, hit-rate readout climbs to about 80%, confetti, three stars, chord. | "Watch: the database goes green. The cache answers four out of five reads from memory." |
| 1:25 | Results panel, "What happened": "db was the first to break at 0s..., peaked at 358% of capacity"; then the cache line "answered 80% of reads". Tap the cache to switch LRU to LFU. | "And it tells me what happened, in numbers: what broke first, by how much, and what fixed it. Tap the cache to change how it forgets things." |
| 1:40 | Campaign map: Black Friday, viral post, thundering herd, read replicas, failover, sharding, CDN, rate limiter, async jobs. Fast montage, one second each, showing red then green. | "Thirteen real scenarios. A viral post, a cache stampede, a database that dies at three in the morning. Every level has more than one right answer, and stars for doing it cheaply." |
| 1:55 | Level 9, failover: database node goes grey and says DOWN, then a replica flashes green and says PRIMARY. | "Break things on purpose. Kill the database and watch a replica get promoted." |
| 2:10 | Sandbox: raise the load slider, hit BURST, tap a server to kill it, traffic reroutes. | "Sandbox mode has a load generator and failure injection. Turn the traffic up. Kill a server. Learn what your design does about it." |
| 2:25 | Menu: Daily challenge, glossary entry for p99, share dialog with the design image; then comfort settings (left hand, large targets, reduced motion, seat height). | "A new puzzle every day, a glossary that explains p99 and eviction in plain words, share your design as a link or an image. Left or right hand, seated, large targets, reduced motion." |
| 2:42 | Desktop browser, mouse dragging a node for two seconds, then title card with the GitHub link. | "It also runs in a plain browser tab, and it starts in a couple of seconds. System Design Sandbox VR." |

## Shot checklist
- Show the red overload state and the coach hint in at least two levels.
- Show one refused wire (for example Database to API) so validation is visible.
- Show the Level 3 fix in one continuous take, no cuts between "red" and "green".
- Show the results panel long enough to read the "What happened" lines.
- Say plainly which parts are simulated: traffic is a model of real systems, not a real load test.
- If any footage is from the emulator or desktop, put "emulator" or "desktop" in a corner caption.

## What must be true before recording
- Headset hand tracking and controller haptics have **not** been verified by the developer at time of writing.
  Run through Level 3 on the headset once first. If pinch wiring feels off, record on controllers instead.
- Sound is synthesised with WebAudio and starts after the first pinch or click (browser autoplay rules).
