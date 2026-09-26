// The application shell: owns the game state, settings, storage, sound and haptics, and every player-level action
// (switch mode, save, load, share, import). The 3D board and the desktop HUD are both thin views over this.
import { GameState } from "../game/state.js";
import { LEVELS, SANDBOX, type Level, type Verdict } from "../sim/levels.js";
import { DAILY_ID, dailyLevel, dailyScore, dateKey, isDaily, type DailyLevel } from "../game/daily.js";
import { DEFAULT_SETTINGS, defaultStore, flag, hasDesign, loadDesign, loadProgress, loadScores, loadSettings, recordScore, recordStars,
  saveDesign, saveSettings, setFlag, type KV, type Progress, type ScoreEntry, type Settings } from "../game/storage.js";
import { decodeSnapshot, encodeSnapshot, extractCode } from "../game/share.js";
import { drawCard, CARD } from "../game/card.js";
import { Sound } from "./audio.js";
import { haptic, supportsHaptics, type HapticSession, type Pattern } from "./haptics.js";

export type Mode = "campaign" | "sandbox" | "daily";

export class App {
  kv: KV;
  settings: Settings;
  sound = new Sound();
  game: GameState;
  progress: Progress;
  daily: DailyLevel;
  xrSession: HapticSession | null = null;
  lastScore?: { score: number; best: boolean; list: ScoreEntry[] };
  private subs: (() => void)[] = [];
  /** Set by the view so actions can show a message on the board. */
  notify: (msg: string) => void = () => {};

  constructor(kv: KV = defaultStore(), startLevel = 0) {
    this.kv = kv;
    this.settings = loadSettings(kv);
    // First run: respect the OS-level reduced-motion preference.
    try { if (!kv.getItem("sds:v1:settings") && typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches) this.settings = { ...this.settings, reducedMotion: true }; } catch { /* ignore */ }
    this.progress = loadProgress(kv);
    this.daily = dailyLevel(dateKey());
    this.game = new GameState(startLevel);
    this.game.onVerdict = (v, l) => this.onVerdict(v, l);
    this.sound.setMuted(this.settings.muted); this.sound.setVolume(this.settings.volume);
  }

  onChange(fn: () => void) { this.subs.push(fn); }
  private changed() { this.subs.forEach((f) => f()); }

  get level(): Level { return this.game.level; }
  get mode(): Mode { return this.game.mode; }
  get slot(): string { return this.level.sandbox ? "sandbox" : isDaily(this.level) ? `daily-${this.daily.key}` : `L${this.level.id}`; }

  // ---------- modes ----------
  startCampaign(i: number) { this.game.load(i); this.changed(); }
  startSandbox() { this.game.loadSandbox(); this.changed(); }
  startDaily() { this.daily = dailyLevel(dateKey()); this.game.loadLevel(this.daily); this.changed(); }
  get dailyScores(): ScoreEntry[] { return loadScores(this.kv, this.daily.key); }

  private onVerdict(v: Verdict, level: Level) {
    if (level.sandbox) return;
    if (isDaily(level)) {
      const score = dailyScore(level, v);
      if (v.passed && v.summary) { this.lastScore = { score, ...recordScore(this.kv, level.key, { score, stars: v.stars, cost: v.cost, p99: v.summary.p99Ms, at: Date.now() }) }; }
      else this.lastScore = undefined;
    } else if (v.passed) this.progress = recordStars(this.kv, level.id, v.stars);
    this.changed();
  }

  // ---------- settings ----------
  set<K extends keyof Settings>(k: K, v: Settings[K]) {
    this.settings = { ...this.settings, [k]: v };
    saveSettings(this.kv, this.settings);
    if (k === "muted") this.sound.setMuted(v as boolean);
    if (k === "volume") this.sound.setVolume(v as number);
    this.changed();
  }
  resetSettings() { this.settings = { ...DEFAULT_SETTINGS }; saveSettings(this.kv, this.settings); this.sound.setMuted(false); this.sound.setVolume(this.settings.volume); this.changed(); }

  // ---------- feedback ----------
  haptic(p: Pattern) { haptic(this.xrSession, p, this.settings.hand, this.settings.haptics); }
  get hapticsAvailable(): boolean { return supportsHaptics(this.xrSession); }
  unlockAudio() { this.sound.unlock(); }

  // ---------- save / load / share ----------
  save(): boolean {
    const ok = saveDesign(this.kv, this.slot, encodeSnapshot(this.game.snapshot()));
    this.notify(ok ? "Design saved on this device." : "Could not save (storage is blocked).");
    return ok;
  }
  get hasSave(): boolean { return hasDesign(this.kv, this.slot); }
  load(): boolean {
    const raw = loadDesign(this.kv, this.slot);
    if (!raw) { this.notify("Nothing saved for this level yet."); return false; }
    const err = this.game.restore(decodeSnapshot(raw));
    this.notify(err ?? "Design loaded.");
    return !err;
  }
  shareCode(): string { return encodeSnapshot(this.game.snapshot()); }
  shareUrl(base = typeof location !== "undefined" ? location.origin + location.pathname : ""): string { return `${base}#d=${this.shareCode()}`; }
  exportJson(): string { return JSON.stringify(this.game.snapshot(), null, 2); }

  /** Import from a share URL, a bare code or JSON text. Switches level if the design belongs to another one. */
  importText(text: string): string | undefined {
    const parsed = decodeSnapshot(extractCode(text.trim()));
    if (!parsed.ok) return parsed.error;
    const id = parsed.snapshot.level;
    if (id !== this.level.id) {
      if (id === 0) this.game.loadSandbox();
      else if (id === DAILY_ID) this.game.loadLevel(this.daily);
      else { const i = LEVELS.findIndex((l) => l.id === id); if (i < 0) return "That design is for a level this version does not have."; this.game.load(i); }
    }
    const err = this.game.restore(parsed);
    this.changed();
    return err;
  }

  /** A 1200x630 picture of the current design, or null if canvas is unavailable. */
  async cardBlob(): Promise<Blob | null> {
    if (typeof document === "undefined") return null;
    const c = document.createElement("canvas"); c.width = CARD.w; c.height = CARD.h;
    const ctx = c.getContext("2d"); if (!ctx) return null;
    const v = this.game.verdict;
    drawCard(ctx, { title: this.level.sandbox ? "My sandbox design" : `${this.level.title}`, subtitle: this.level.sandbox ? "Free-play system design" : this.level.brief.slice(0, 90),
      design: this.game.design, pos: this.game.pos, stars: v?.passed ? v.stars : undefined,
      stats: v?.summary ? `p99 ${v.summary.p99Ms.toFixed(0)} ms   errors ${(v.summary.errorRate * 100).toFixed(1)}%   cost ${v.cost}` : `cost ${this.game.cost}` });
    return new Promise((res) => c.toBlob((b) => res(b), "image/png"));
  }

  tutorialSeen(id: number): boolean { return flag(this.kv, `tutorial-${id}`); }
  markTutorialSeen(id: number) { setFlag(this.kv, `tutorial-${id}`); }
}

export { SANDBOX };
