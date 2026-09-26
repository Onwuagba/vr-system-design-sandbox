// Everything the player keeps: settings, saved designs, progress and best scores. localStorage can be missing,
// full or blocked (private windows, some headsets), so every access is guarded and an in-memory store is the fallback.
export interface KV { getItem(k: string): string | null; setItem(k: string, v: string): void; removeItem(k: string): void }

export class MemoryStore implements KV {
  private m = new Map<string, string>();
  getItem(k: string) { return this.m.get(k) ?? null; }
  setItem(k: string, v: string) { this.m.set(k, v); }
  removeItem(k: string) { this.m.delete(k); }
}

export function defaultStore(): KV {
  try {
    const s = (globalThis as any).localStorage as KV | undefined;
    if (s) { const k = "sds:probe"; s.setItem(k, "1"); s.removeItem(k); return s; }
  } catch { /* blocked */ }
  return new MemoryStore();
}

const P = "sds:v1:";

function readJSON<T>(kv: KV, key: string, fallback: T): T {
  try { const raw = kv.getItem(P + key); return raw ? { ...fallback, ...JSON.parse(raw) } : fallback; } catch { return fallback; }
}
function readRaw<T>(kv: KV, key: string): T | undefined {
  try { const raw = kv.getItem(P + key); return raw ? (JSON.parse(raw) as T) : undefined; } catch { return undefined; }
}
function write(kv: KV, key: string, v: unknown): boolean {
  try { kv.setItem(P + key, JSON.stringify(v)); return true; } catch { return false; }
}

// ---------- settings ----------
export interface Settings {
  hand: "right" | "left";     // which side the control panel sits on (your non-dominant side keeps the dominant hand free for wiring)
  heightOffset: number;       // metres, seated calibration: raises or lowers the board
  largeTargets: boolean;      // bigger grab handles and buttons
  reducedMotion: boolean;     // no pulsing, fewer particles, no confetti or camera-like motion
  muted: boolean;
  volume: number;             // 0..1
  hints: boolean;             // contextual teaching hints on
  haptics: boolean;           // controller vibration (hands have none)
}
export const DEFAULT_SETTINGS: Settings = { hand: "right", heightOffset: 0, largeTargets: false, reducedMotion: false, muted: false, volume: 0.6, hints: true, haptics: true };

export function loadSettings(kv: KV): Settings {
  const s = readJSON<Settings>(kv, "settings", DEFAULT_SETTINGS);
  return {
    hand: s.hand === "left" ? "left" : "right",
    heightOffset: Math.max(-0.5, Math.min(0.5, Number(s.heightOffset) || 0)),
    largeTargets: !!s.largeTargets, reducedMotion: !!s.reducedMotion, muted: !!s.muted,
    volume: Math.max(0, Math.min(1, Number.isFinite(s.volume) ? s.volume : 0.6)), hints: s.hints !== false, haptics: s.haptics !== false,
  };
}
export function saveSettings(kv: KV, s: Settings) { write(kv, "settings", s); }

// ---------- saved designs ----------
export function saveDesign(kv: KV, slot: string, encoded: string): boolean { return write(kv, `save:${slot}`, { at: Date.now(), data: encoded }); }
export function loadDesign(kv: KV, slot: string): string | undefined { return readRaw<{ data: string }>(kv, `save:${slot}`)?.data; }
export function hasDesign(kv: KV, slot: string): boolean { return loadDesign(kv, slot) !== undefined; }

// ---------- progress ----------
export type Progress = Record<string, number>; // level id -> best stars
export function loadProgress(kv: KV): Progress { return readRaw<Progress>(kv, "progress") ?? {}; }
export function recordStars(kv: KV, levelId: number, stars: number): Progress {
  const p = loadProgress(kv);
  if (stars > (p[levelId] ?? 0)) { p[levelId] = stars; write(kv, "progress", p); }
  return p;
}
export function totalStars(p: Progress): number { return Object.values(p).reduce((a, b) => a + b, 0); }
export function isUnlocked(p: Progress, levelIndex: number, ids: number[]): boolean {
  return levelIndex <= 0 || (p[ids[levelIndex - 1]] ?? 0) > 0 || levelIndex < 2; // first levels are always open; then clear the previous one
}

// ---------- best scores (daily challenge) ----------
export interface ScoreEntry { score: number; stars: number; cost: number; p99: number; at: number }
export function loadScores(kv: KV, key: string): ScoreEntry[] { return readRaw<ScoreEntry[]>(kv, `best:${key}`) ?? []; }
export function recordScore(kv: KV, key: string, e: ScoreEntry): { best: boolean; list: ScoreEntry[] } {
  const list = loadScores(kv, key);
  const best = list.length === 0 || e.score > list[0].score;
  list.push(e); list.sort((a, b) => b.score - a.score);
  const top = list.slice(0, 5);
  write(kv, `best:${key}`, top);
  return { best, list: top };
}

export function flag(kv: KV, name: string): boolean { return readRaw<boolean>(kv, `flag:${name}`) === true; }
export function setFlag(kv: KV, name: string, v = true) { write(kv, `flag:${name}`, v); }
