// Pure game state: which level, what the player has placed and wired. No rendering.
import type { Design, EvictionPolicy, Kind } from "../sim/model.js";
import { COST, node } from "../sim/model.js";
import { LEVELS, evaluate, type Level, type Verdict } from "../sim/levels.js";
import { edgeProblem } from "../sim/validate.js";

export interface Vec2 { x: number; y: number }
export const CACHE_PRESETS: { policy: EvictionPolicy; size: number }[] = [
  { policy: "lru", size: 300 }, { policy: "lfu", size: 300 }, { policy: "fifo", size: 300 },
  { policy: "lru", size: 100 }, { policy: "lru", size: 600 }, { policy: "lfu", size: 600 },
];

const COLUMN: Record<Kind, number> = { client: 0, lb: 1, api: 2, cache: 3, queue: 3, db: 4 };

/** Board coordinates are metres, x right, y up, origin at board centre. Board is 1.5 x 0.8. */
export const BOARD = { w: 1.5, h: 0.8 };

export function autoLayout(d: Design): Record<string, Vec2> {
  const cols: Record<number, string[]> = {};
  for (const n of d.nodes) (cols[COLUMN[n.kind]] ??= []).push(n.id);
  const out: Record<string, Vec2> = {};
  for (const [c, ids] of Object.entries(cols)) {
    ids.forEach((id, i) => {
      out[id] = { x: -0.6 + Number(c) * 0.3, y: (ids.length - 1) * 0.09 - i * 0.18 };
    });
  }
  return out;
}

export class GameState {
  level!: Level;
  design!: Design;
  pos: Record<string, Vec2> = {};
  locked = new Set<string>();   // nodes shipped with the level (users); cannot be deleted
  verdict?: Verdict;
  private counters: Partial<Record<Kind, number>> = {};
  listeners: (() => void)[] = [];

  constructor(levelIndex = 0) { this.load(levelIndex); }

  load(levelIndex: number) {
    this.level = LEVELS[Math.max(0, Math.min(LEVELS.length - 1, levelIndex))];
    this.design = structuredClone(this.level.start);
    this.pos = autoLayout(this.design);
    this.locked = new Set(this.design.nodes.filter((n) => n.kind === "client").map((n) => n.id));
    this.counters = {};
    for (const n of this.design.nodes) this.counters[n.kind] = (this.counters[n.kind] ?? 0) + 1;
    this.verdict = undefined;
    this.emit();
  }
  reset() { this.load(LEVELS.indexOf(this.level)); }

  private emit() { this.listeners.forEach((l) => l()); }
  onChange(fn: () => void) { this.listeners.push(fn); }

  canAdd(kind: Kind): boolean {
    return this.level.palette.includes(kind) && (kind !== "db" || this.level.sandbox === true);
  }

  add(kind: Kind, at: Vec2): string | undefined {
    if (!this.canAdd(kind)) return undefined;
    const n = (this.counters[kind] = (this.counters[kind] ?? 0) + 1);
    let id = `${kind}${n}`;
    while (this.design.nodes.some((x) => x.id === id)) id = `${kind}${++this.counters[kind]!}`;
    this.design.nodes.push(node(id, kind));
    this.pos[id] = clamp(at);
    this.verdict = undefined;
    this.emit();
    return id;
  }

  move(id: string, at: Vec2) { this.pos[id] = clamp(at); this.emit(); }

  remove(id: string): boolean {
    if (this.locked.has(id)) return false;
    this.design.nodes = this.design.nodes.filter((n) => n.id !== id);
    this.design.edges = this.design.edges.filter((e) => e.from !== id && e.to !== id);
    delete this.pos[id];
    this.verdict = undefined;
    this.emit();
    return true;
  }

  /** Returns an error message, or undefined on success. */
  connect(from: string, to: string): string | undefined {
    const problem = edgeProblem(this.design, from, to);
    if (problem) return problem;
    this.design.edges.push({ from, to });
    this.verdict = undefined;
    this.emit();
    return undefined;
  }

  disconnect(from: string, to: string) {
    this.design.edges = this.design.edges.filter((e) => !(e.from === from && e.to === to));
    this.verdict = undefined;
    this.emit();
  }

  cycleCache(id: string) {
    const n = this.design.nodes.find((x) => x.id === id);
    if (!n || n.kind !== "cache") return;
    const i = CACHE_PRESETS.findIndex((p) => p.policy === n.policy && p.size === n.cacheSize);
    const p = CACHE_PRESETS[(i + 1) % CACHE_PRESETS.length];
    n.policy = p.policy; n.cacheSize = p.size;
    this.verdict = undefined;
    this.emit();
  }

  get cost(): number { return this.design.nodes.reduce((s, n) => s + COST[n.kind], 0); }

  judge(): Verdict { this.verdict = evaluate(this.level, this.design); this.emit(); return this.verdict; }
}

function clamp(p: Vec2): Vec2 {
  return { x: Math.max(-BOARD.w / 2 + 0.06, Math.min(BOARD.w / 2 - 0.06, p.x)), y: Math.max(-BOARD.h / 2 + 0.06, Math.min(BOARD.h / 2 - 0.06, p.y)) };
}

/** Nearest node to a board point within `radius`, excluding ids. */
export function nearestNode(g: GameState, p: Vec2, radius: number, exclude?: string): string | undefined {
  let best: string | undefined, bd = radius;
  for (const n of g.design.nodes) {
    if (n.id === exclude) continue;
    const q = g.pos[n.id]; if (!q) continue;
    const d = Math.hypot(q.x - p.x, q.y - p.y);
    if (d < bd) { bd = d; best = n.id; }
  }
  return best;
}
