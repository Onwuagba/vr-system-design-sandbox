// The in-world menu: a panel that floats over the board with big buttons, so every feature is reachable by pinch
// or poke in a headset with no keyboard. Pages: main, levels, settings, share, glossary.
import { Group, Mesh, MeshBasicMaterial, PlaneGeometry } from "three";
import { LEVELS } from "../sim/levels.js";
import { CONCEPTS } from "../game/concepts.js";
import { isDaily } from "../game/daily.js";
import { TextPlane } from "./text.js";
import type { GameView } from "./game-view.js";

interface Item { label: string; fn: () => void; on?: boolean; disabled?: boolean }
type Page = "main" | "levels" | "settings" | "share" | "glossary";
const POOL = 15;

export class Menu {
  private group = new Group();
  private title = new TextPlane(1.24, 0.09, 800, { font: "bold 34px system-ui, sans-serif", color: "#ffffff", pad: 6 });
  private body = new TextPlane(1.24, 0.2, 800, { font: "24px system-ui, sans-serif", color: "#cfd8ff", pad: 8 });
  private slots: TextPlane[] = [];
  private backdrop: Mesh;
  private page: Page = "main";
  private gloss = 0;
  private sel = -1;
  private message = "";
  private dirty = false;
  open_ = false;

  constructor(private v: GameView) {
    this.backdrop = new Mesh(new PlaneGeometry(1.36, 0.78), new MeshBasicMaterial({ color: 0x0b1020, transparent: true, opacity: 1 }));
    this.group.add(this.backdrop);
    this.v.reg(this.backdrop, {});
    this.title.position.set(0, 0.33, 0.005); this.group.add(this.title);
    this.body.position.set(0, -0.3, 0.005); this.group.add(this.body);
    for (let i = 0; i < POOL; i++) {
      const b = new TextPlane(0.4, 0.095, 800, { font: "bold 27px system-ui, sans-serif", bg: "#26346b", align: "center", pad: 14, radius: 20 });
      b.position.set(-0.42 + (i % 3) * 0.42, 0.21 - Math.floor(i / 3) * 0.125, 0.006);
      this.group.add(b); this.slots.push(b);
      const idx = i;
      this.v.reg(b, { click: () => this.tap(idx) });
    }
    this.group.position.set(0, 0.02, 0.11);
    this.group.traverse((o) => { o.renderOrder = 31; });
    this.backdrop.renderOrder = 29; // strictly behind its own buttons, whatever the tilt
    this.v.root.add(this.group);
    this.setVisible(false);
  }

  private items: Item[] = [];

  get isOpen() { return this.open_; }
  toggle() { if (this.open_) this.close(); else this.open("main"); }
  close() { this.open_ = false; this.setVisible(false); }
  open(p: Page) { this.page = p; this.open_ = true; this.message = ""; this.setVisible(true); this.build(); }
  private setVisible(vis: boolean) {
    this.group.visible = vis;
    for (const o of [this.backdrop, ...this.slots]) (o as any).pointerEvents = vis ? "auto" : "none";
  }
  private tap(i: number) {
    const it = this.items[i];
    if (!it || it.disabled) return;
    this.v.app.sound.play("click"); this.v.app.haptic("tap");
    it.fn();
    this.dirty = true;
  }
  update(_dt: number) { if (this.dirty) { this.dirty = false; if (this.open_) this.build(); } }

  private go(p: Page) { return () => { this.page = p; this.message = ""; this.sel = -1; }; }

  private build() {
    const a = this.v.app, s = a.settings, g = this.v.game;
    let title = "MENU", items: Item[] = [], body = this.message;
    const close = () => this.close();
    switch (this.page) {
      case "main":
        title = "MENU";
        items = [
          { label: "CAMPAIGN", fn: this.go("levels") },
          { label: "SANDBOX", fn: () => { this.v.loadSandbox(); close(); }, on: g.mode === "sandbox" },
          { label: `DAILY ${a.daily.key.slice(5)}`, fn: () => { this.v.loadDaily(); close(); }, on: g.mode === "daily" },
          { label: "SAVE", fn: () => a.save() },
          { label: "LOAD", fn: () => { a.load(); close(); }, disabled: !a.hasSave },
          { label: "SHARE / IMPORT", fn: this.go("share") },
          { label: "GLOSSARY", fn: this.go("glossary") },
          { label: "COMFORT", fn: this.go("settings") },
          { label: "TIDY LAYOUT", fn: () => { g.tidy(); close(); } },
          { label: "TUTORIAL", fn: () => { this.v.restartTutorial(); close(); } },
          { label: "CLOSE", fn: close },
        ];
        body = isDaily(g.level) ? `Daily best: ${a.dailyScores[0]?.score ?? "none yet"}. Same puzzle for everyone today.` : `Stars earned: ${Object.values(a.progress).reduce((x, y) => x + y, 0)} of ${LEVELS.length * 3}`;
        break;
      case "levels":
        title = "CAMPAIGN";
        items = LEVELS.map((l, i) => ({ label: `${l.id} ${l.title.slice(0, 15)} ${"*".repeat(a.progress[l.id] ?? 0)}`, fn: () => { this.v.loadLevel(i); close(); }, on: g.mode === "campaign" && g.index === i }));
        items.push({ label: "BACK", fn: this.go("main") });
        body = "";
        break;
      case "settings":
        title = "COMFORT AND ACCESSIBILITY";
        items = [
          { label: `HAND: ${s.hand.toUpperCase()}`, fn: () => { a.set("hand", s.hand === "right" ? "left" : "right"); this.v.applySettings(); } },
          { label: "BOARD HIGHER", fn: () => { a.set("heightOffset", Math.min(0.5, Math.round((s.heightOffset + 0.05) * 100) / 100)); this.v.applySettings(); } },
          { label: "BOARD LOWER", fn: () => { a.set("heightOffset", Math.max(-0.5, Math.round((s.heightOffset - 0.05) * 100) / 100)); this.v.applySettings(); } },
          { label: "RECENTER BOARD", fn: () => { this.message = this.v.recenter ? "Board moved in front of you." : "Recentering works inside a headset."; this.v.recenter?.(); } },
          { label: `LARGE TARGETS: ${s.largeTargets ? "ON" : "OFF"}`, on: s.largeTargets, fn: () => { a.set("largeTargets", !s.largeTargets); this.v.applySettings(); } },
          { label: `REDUCED MOTION: ${s.reducedMotion ? "ON" : "OFF"}`, on: s.reducedMotion, fn: () => { a.set("reducedMotion", !s.reducedMotion); this.v.applySettings(); } },
          { label: `SOUND: ${s.muted ? "MUTED" : "ON"}`, on: !s.muted, fn: () => a.set("muted", !s.muted) },
          { label: `VOLUME ${Math.round(s.volume * 100)}%  +`, fn: () => a.set("volume", Math.min(1, Math.round((s.volume + 0.1) * 10) / 10)) },
          { label: "VOLUME -", fn: () => a.set("volume", Math.max(0, Math.round((s.volume - 0.1) * 10) / 10)) },
          { label: `HAPTICS: ${s.haptics ? "ON" : "OFF"}`, on: s.haptics, fn: () => a.set("haptics", !s.haptics) },
          { label: `HINTS: ${s.hints ? "ON" : "OFF"}`, on: s.hints, fn: () => a.set("hints", !s.hints) },
          { label: "BACK", fn: this.go("main") },
        ];
        body = `Dominant hand puts the PLAY controls on that side. Seated: raise or lower the board until it sits at chest height. Height offset ${(s.heightOffset * 100).toFixed(0)} cm.${a.hapticsAvailable ? "" : " Haptics need controllers; hand tracking has none."}`;
        break;
      case "share":
        title = "SHARE YOUR DESIGN";
        items = [
          { label: "COPY LINK", fn: () => { void this.copy(a.shareUrl()); } },
          { label: "COPY JSON", fn: () => { void this.copy(a.exportJson()); } },
          { label: "SAVE IMAGE", fn: () => { void this.image(); } },
          { label: "IMPORT: PASTE", fn: () => { void this.paste(); } },
          { label: "BACK", fn: this.go("main") },
        ];
        body = this.message || "A link or JSON holds your whole design. Send it to a friend and they can import it. Imports are checked, and can never change a part's capacity.";
        break;
      case "glossary": {
        title = "GLOSSARY";
        const per = 12, pages = Math.ceil(CONCEPTS.length / per);
        const list = CONCEPTS.slice(this.gloss * per, this.gloss * per + per);
        items = list.map((c, i) => ({ label: c.term.slice(0, 20), fn: () => { this.sel = this.gloss * per + i; }, on: this.sel === this.gloss * per + i }));
        while (items.length < per) items.push({ label: "", fn: () => {}, disabled: true });
        items.push({ label: `PAGE ${this.gloss + 1}/${pages}  >`, fn: () => { this.gloss = (this.gloss + 1) % pages; this.sel = -1; } }, { label: "BACK", fn: this.go("main") });
        const c = CONCEPTS[this.sel];
        body = c ? `${c.term}: ${c.short}  ${c.why}` : "Tap a term to read what it means and why it matters.";
        break;
      }
    }
    this.items = items;
    this.title.setText(title);
    this.body.setText(body, { font: body.length > 200 ? "20px system-ui, sans-serif" : "24px system-ui, sans-serif" });
    this.slots.forEach((b, i) => {
      const it = items[i];
      b.visible = this.group.visible && !!it && (it.label !== "" || false);
      (b as any).pointerEvents = b.visible && !it?.disabled ? "auto" : "none";
      if (it) b.setText(it.label, { bg: it.disabled ? "#1a2438" : it.on ? "#2f6b4f" : "#26346b", color: it.disabled ? "#6a7590" : "#ffffff", font: it.label.length > 18 ? "bold 22px system-ui, sans-serif" : "bold 27px system-ui, sans-serif" });
    });
  }

  private async copy(text: string) {
    try { await navigator.clipboard.writeText(text); this.message = "Copied to the clipboard."; }
    catch { this.message = text.length < 300 ? text : "Clipboard is blocked here. Use the desktop HUD to copy the link."; }
    this.dirty = true;
  }
  private async paste() {
    try {
      const text = await navigator.clipboard.readText();
      const err = this.v.app.importText(text);
      this.v.refreshLevel();
      this.message = err ?? "Imported. Undo will bring your old board back.";
      if (!err) this.close();
    } catch { this.message = "Clipboard is blocked here. Use the desktop HUD to import."; }
    this.dirty = true;
  }
  private async image() {
    const b = await this.v.app.cardBlob();
    if (!b) { this.message = "Images need a browser canvas."; this.dirty = true; return; }
    const a = document.createElement("a"); a.href = URL.createObjectURL(b); a.download = "my-system-design.png"; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    this.message = "Image saved to your downloads."; this.dirty = true;
  }
}
