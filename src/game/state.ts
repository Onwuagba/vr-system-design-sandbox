// Pure game state: which level, what the player has placed and wired, undo/redo. No rendering.
import type { Design, EvictionPolicy, Kind } from "../sim/model.js";
import { COST, node } from "../sim/model.js";
import { LEVELS, SANDBOX, evaluate, type Level, type Verdict } from "../sim/levels.js";
import { edgeProblem } from "../sim/validate.js";
import { decodeSnapshot, parseSnapshot, toSnapshot, type Parsed, type Snapshot } from "./share.js";

export interface Vec2 { x: number; y: number }
export const CACHE_PRESETS: { policy: EvictionPolicy; size: number; coalesce?: boolean }[] = [
  { policy: "lru", size: 300 }, { policy: "lfu", size: 300 }, { policy: "fifo", size: 300 },
  { policy: "lru", size: 100 }, { policy: "lru", size: 600 }, { policy: "lfu", size: 600 },
  { policy: "lru", size: 300, coalesce: true }, { policy: "lfu", size: 600, coalesce: true },
];

/** Board coordinates are metres, x right, y up, origin at board centre. Board is 1.5 x 0.8. */
export const BOARD = { w: 1.5, h: 0.8 };

/** Columns follow the longest path from Users, so any topology lays out left to right. */
export function autoLayout(d: Design): Record<string, Vec2> {
  const depth: Record<string, number> = {};
  const client = d.nodes.find((n) => n.kind === "client");
  const visit = (id: string, k: number, stack: Set<string>) => {
    if (stack.has(id)) return;
    if ((depth[id] ?? -1) >= k) return;
    depth[id] = k;
    stack.add(id);
    for (const e of d.edges) if (e.from === id) visit(e.to, k + 1, stack);
    stack.delete(id);
  };
  if (client) visit(client.id, 0, new Set());
  const fallback: Record<Kind, number> = { client: 0, cdn: 1, limiter: 1, lb: 1, api: 2, cache: 3, queue: 3, broker: 3, shard: 3, worker: 4, replica: 4, db: 4 };
  for (const n of d.nodes) if (depth[n.id] === undefined) depth[n.id] = fallback[n.kind];
  const maxD = Math.max(1, ...Object.values(depth));
  const step = Math.min(0.3, 1.2 / maxD);
  const cols: Record<number, string[]> = {};
  for (const n of d.nodes) (cols[depth[n.id]] ??= []).push(n.id);
  const out: Record<string, Vec2> = {};
  const x0 = -0.6 + (maxD < 4 ? (4 - maxD) * 0.15 : 0);
  for (const [c, ids] of Object.entries(cols)) {
    const n = ids.length, crowded = n > 3;
    const gap = crowded ? Math.max(0.1, Math.min(0.16, 0.66 / (n - 1))) : Math.min(0.18, 0.62 / Math.max(1, n));
    // A crowded column zig-zags sideways so neighbouring labels never sit on top of each other.
    ids.forEach((id, i) => { out[id] = { x: x0 + Number(c) * step + (crowded ? (i % 2 ? 0.055 : -0.055) : 0), y: (n - 1) * gap / 2 - i * gap }; });
  }
  return out;
}

interface Snap { design: Design; pos: Record<string, Vec2>; counters: Partial<Record<Kind, number>> }
const HISTORY_LIMIT = 100;

export class GameState {
  level!: Level;
  design!: Design;
  pos: Record<string, Vec2> = {};
  locked = new Set<string>();   // nodes shipped with the level (users); cannot be deleted
  verdict?: Verdict;
  private counters: Partial<Record<Kind, number>> = {};
  private undoStack: Snap[] = [];
  private redoStack: Snap[] = [];
  listeners: (() => void)[] = [];
  onVerdict?: (v: Verdict, level: Level) => void;

  constructor(levelIndex = 0) { this.load(levelIndex); }

  get index(): number { return LEVELS.indexOf(this.level); }
  get mode(): "campaign" | "sandbox" | "daily" { return this.level.sandbox ? "sandbox" : LEVELS.includes(this.level) ? "campaign" : "daily"; }

  load(levelIndex: number) { this.loadLevel(LEVELS[Math.max(0, Math.min(LEVELS.length - 1, levelIndex))]); }
  loadSandbox() { this.loadLevel(SANDBOX); }

  loadLevel(level: Level) {
    this.level = level;
    this.design = structuredClone(level.start);
    this.pos = autoLayout(this.design);
    this.locked = new Set(this.design.nodes.filter((n) => n.kind === "client").map((n) => n.id));
    this.counters = {};
    for (const n of this.design.nodes) this.counters[n.kind] = (this.counters[n.kind] ?? 0) + 1;
    this.verdict = undefined;
    this.undoStack = []; this.redoStack = [];
    this.emit();
  }
  reset() { this.loadLevel(this.level); }

  private emit() { this.listeners.forEach((l) => l()); }
  onChange(fn: () => void) { this.listeners.push(fn); }

  // ---------- undo / redo ----------
  private snap(): Snap { return { design: structuredClone(this.design), pos: structuredClone(this.pos), counters: { ...this.counters } }; }
  /** Call before any edit that should be undoable. Dragging calls it once, when the drag begins. */
  checkpoint() {
    this.undoStack.push(this.snap());
    if (this.undoStack.length > HISTORY_LIMIT) this.undoStack.shift();
    this.redoStack = [];
  }
  private apply(s: Snap) {
    this.design = s.design; this.pos = s.pos; this.counters = s.counters; this.verdict = undefined; this.emit();
  }
  get canUndo(): boolean { return this.undoStack.length > 0; }
  get canRedo(): boolean { return this.redoStack.length > 0; }
  undo(): boolean { const s = this.undoStack.pop(); if (!s) return false; this.redoStack.push(this.snap()); this.apply(s); return true; }
  redo(): boolean { const s = this.redoStack.pop(); if (!s) return false; this.undoStack.push(this.snap()); this.apply(s); return true; }

  // ---------- edits ----------
  canAdd(kind: Kind): boolean { return this.level.palette.includes(kind) && kind !== "client"; }

  add(kind: Kind, at: Vec2): string | undefined {
    if (!this.canAdd(kind)) return undefined;
    this.checkpoint();
    const n = (this.counters[kind] = (this.counters[kind] ?? 0) + 1);
    let id = `${kind}${n}`;
    while (this.design.nodes.some((x) => x.id === id)) id = `${kind}${++this.counters[kind]!}`;
    this.design.nodes.push(node(id, kind));
    this.pos[id] = this.freeSpot(clamp(at));
    this.verdict = undefined;
    this.emit();
    return id;
  }

  /** Nudge a drop point off any part it would sit on, so new parts never hide each other. */
  freeSpot(p: Vec2, min = 0.15): Vec2 {
    const free = (q: Vec2) => this.design.nodes.every((n) => { const o = this.pos[n.id]; return !o || Math.hypot(o.x - q.x, o.y - q.y) >= min; });
    if (free(p)) return p;
    for (let r = 0.09; r < 0.6; r += 0.05) for (let k = 0; k < 16; k++) {
      const a = (k / 16) * Math.PI * 2 + r * 7, q = clamp({ x: p.x + Math.cos(a) * r, y: p.y + Math.sin(a) * r });
      if (free(q)) return q;
    }
    return p;
  }

  move(id: string, at: Vec2) { this.pos[id] = clamp(at); this.emit(); }

  remove(id: string): boolean {
    if (this.locked.has(id)) return false;
    this.checkpoint();
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
    this.checkpoint();
    this.design.edges.push({ from, to });
    this.verdict = undefined;
    this.emit();
    return undefined;
  }

  disconnect(from: string, to: string) {
    if (!this.design.edges.some((e) => e.from === from && e.to === to)) return;
    this.checkpoint();
    this.design.edges = this.design.edges.filter((e) => !(e.from === from && e.to === to));
    this.verdict = undefined;
    this.emit();
  }

  cycleCache(id: string) {
    const n = this.design.nodes.find((x) => x.id === id);
    if (!n || n.kind !== "cache") return;
    this.checkpoint();
    const i = CACHE_PRESETS.findIndex((p) => p.policy === n.policy && p.size === n.cacheSize && !!p.coalesce === !!n.coalesce);
    const p = CACHE_PRESETS[(i + 1) % CACHE_PRESETS.length];
    n.policy = p.policy; n.cacheSize = p.size; n.coalesce = p.coalesce || undefined;
    this.verdict = undefined;
    this.emit();
  }

  /** Re-run the automatic left-to-right layout. */
  tidy() { this.checkpoint(); this.pos = autoLayout(this.design); this.emit(); }

  get cost(): number { return this.design.nodes.reduce((s, n) => s + COST[n.kind], 0); }

  judge(): Verdict {
    this.verdict = evaluate(this.level, this.design);
    this.emit();
    this.onVerdict?.(this.verdict, this.level);
    return this.verdict;
  }

  // ---------- save / share ----------
  snapshot(note?: string): Snapshot { return toSnapshot(this.level.id, this.design, this.pos, note); }

  /** Replace the board with a parsed design. Db capacities always come from the level, never from the file. */
  restore(p: Parsed): string | undefined {
    if (!p.ok) return p.error;
    const bad = p.design.nodes.find((n) => n.kind !== "client" && !this.level.palette.includes(n.kind) && !this.level.start.nodes.some((s) => s.id === n.id && s.kind === n.kind));
    if (bad) return `${bad.id} is not available in this level.`;
    const client = p.design.nodes.filter((n) => n.kind === "client");
    if (client.length !== 1) return "The design needs exactly one Users node.";
    for (const n of p.design.nodes) {
      const orig = this.level.start.nodes.find((s) => s.id === n.id && s.kind === n.kind);
      if (orig && n.kind !== "cache") n.capacityRps = orig.capacityRps;
    }
    this.checkpoint();
    this.design = p.design; this.pos = p.pos;
    this.locked = new Set(client.map((n) => n.id));
    this.counters = {};
    for (const n of this.design.nodes) { const k = Number(/(\d+)$/.exec(n.id)?.[1] ?? 0); this.counters[n.kind] = Math.max(this.counters[n.kind] ?? 0, k, 1); }
    this.verdict = undefined;
    this.emit();
    return undefined;
  }
  restoreFromText(text: string): string | undefined { return this.restore(decodeSnapshot(text)); }
  restoreSnapshot(s: Snapshot): string | undefined { return this.restore(parseSnapshot(s)); }
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
