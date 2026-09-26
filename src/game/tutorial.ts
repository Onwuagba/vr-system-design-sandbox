// Guided tutorial: a short list of steps per level. Each step is done when the board reaches a state, so the
// player is never told to do something they already did. Pure logic; the board just shows the current text.
import type { Design } from "../sim/model.js";
import type { Verdict } from "../sim/levels.js";

export interface TutorialCtx { design: Design; played: boolean; sawOverload: boolean; verdict?: Verdict }
export interface TutorialStep { id: string; text: string; done(c: TutorialCtx): boolean }

const edge = (d: Design, a: string, b: string) => d.edges.some((e) => e.from === a && e.to === b);
const kindOf = (d: Design, id: string) => d.nodes.find((n) => n.id === id)?.kind;
const anyEdge = (d: Design, fromKind: string, toKind: string) => d.edges.some((e) => kindOf(d, e.from) === fromKind && kindOf(d, e.to) === toKind);

export const TUTORIALS: Record<number, TutorialStep[]> = {
  1: [
    { id: "wire-api", text: "Welcome. Requests flow left to right. Pinch and drag from the small white dot on the right of USERS onto the API box to wire them.", done: (c) => edge(c.design, "users", "api1") },
    { id: "wire-db", text: "Good. Now drag from the API's dot onto DB. Wires are how traffic travels.", done: (c) => edge(c.design, "api1", "db") },
    { id: "play", text: "Press PLAY (green button, or Space) to send simulated traffic through your design.", done: (c) => c.played },
    { id: "overload", text: "Watch the API turn red and pulse: it is OVERLOADED. One server can only serve 400 requests a second. Anything beyond waits, then is dropped.", done: (c) => !!c.verdict },
    { id: "next", text: "That is the core loop: build, run, read the colours. Press LEVEL > to meet the load balancer.", done: () => false },
  ],
  2: [
    { id: "lb", text: "Pinch a LB off the shelf and drop it in the middle of the board.", done: (c) => c.design.nodes.some((n) => n.kind === "lb") },
    { id: "api", text: "Add a second API from the shelf. Two servers can share what one cannot.", done: (c) => c.design.nodes.filter((n) => n.kind === "api").length >= 2 },
    { id: "wire", text: "Wire Users to the LB, the LB to each API, and each API to DB. Cut the old direct wire by tapping its red dot.", done: (c) => anyEdge(c.design, "lb", "api") && anyEdge(c.design, "client", "lb") },
    { id: "play", text: "Press PLAY. Watch requests split across both servers.", done: (c) => c.played },
    { id: "done", text: "Load balancer: many small servers act like one big one, and one can fail without taking you down.", done: () => false },
  ],
  3: [
    { id: "play", text: "The database is the bottleneck. Press PLAY and watch it turn red.", done: (c) => c.played },
    { id: "cache", text: "Most reads ask for the same popular keys. Pinch a CACHE from the shelf and drop it between the APIs and the DB.", done: (c) => c.design.nodes.some((n) => n.kind === "cache") },
    { id: "wire", text: "Wire each API to the cache, and the cache to DB. Then cut the direct API-to-DB wires: tap their red dots.", done: (c) => anyEdge(c.design, "api", "cache") && anyEdge(c.design, "cache", "db") && !anyEdge(c.design, "api", "db") },
    { id: "rerun", text: "Press PLAY again and watch the DB go green. Tap the cache to try another eviction policy: it decides what a full cache forgets.", done: (c) => !!c.verdict?.passed },
    { id: "done", text: "Cache: popular reads are answered from memory, so the database only sees the misses.", done: () => false },
  ],
};

export class Tutorial {
  private idx = 0;
  constructor(public steps: TutorialStep[]) {}
  get finished(): boolean { return this.idx >= this.steps.length; }
  /** Advance past every step already satisfied and return the one to show (undefined when none). */
  current(c: TutorialCtx): TutorialStep | undefined {
    while (this.idx < this.steps.length - 1 && this.steps[this.idx].done(c)) this.idx++;
    return this.steps[this.idx];
  }
  get index(): number { return this.idx; }
  static forLevel(levelId: number): Tutorial | undefined { const s = TUTORIALS[levelId]; return s ? new Tutorial(s) : undefined; }
}
