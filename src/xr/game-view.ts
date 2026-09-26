// The 3D board: renders GameState, turns pointer input (hand pinch ray, poke, mouse) into edits, and animates the
// live simulation as particles. Input arrives as plain pointer events from either IWSDK's XR pointers or the
// desktop raycaster in desktop.ts. This file depends only on three, so it runs with or without an XR session.
import {
  BoxGeometry, CircleGeometry, Color, CylinderGeometry, DoubleSide, Group, InstancedMesh, Matrix4, Mesh, MeshBasicMaterial,
  MeshStandardMaterial, Object3D, PlaneGeometry, Quaternion, Shape, ShapeGeometry, SphereGeometry, Vector3,
} from "three";
import { BOARD, nearestNode, type GameState, type Vec2 } from "../game/state.js";
import { LEVELS } from "../sim/levels.js";
import { durationOf, COST, type Kind } from "../sim/model.js";
import { Simulator, type NodeSnap } from "../sim/simulator.js";
import { edgeProblem, validate } from "../sim/validate.js";
import { defaultProviders, reviewWithFallback, type Review } from "../review/review.js";
import { contextHints } from "../game/coach.js";
import { KIND_INFO, concept } from "../game/concepts.js";
import { resultPages } from "../game/result.js";
import { Tutorial } from "../game/tutorial.js";
import { isDaily } from "../game/daily.js";
import { TextPlane } from "./text.js";
import { Fx } from "./fx.js";
import type { App } from "./app.js";
import { Menu } from "./menu.js";

export interface Handlers { down?(p: Vector3, pid: number): void; move?(p: Vector3, pid: number): void; up?(p: Vector3, pid: number): void; click?(): void }

export const KIND_COLOR: Record<Kind, number> = { client: 0x7c8cff, lb: 0xb56cff, api: 0x3ddc97, cache: 0xffb547, db: 0x4fc3f7, queue: 0xff7ab8,
  replica: 0x2ea6d9, cdn: 0xff8a3d, limiter: 0xe05a5a, shard: 0x8e7dff, broker: 0xd94fb0, worker: 0x9adf5a };
const GLYPH: Record<Kind, string> = { client: "USERS", lb: "LB", api: "API", cache: "CACHE", db: "DB", queue: "QUEUE", replica: "REPL", cdn: "CDN", limiter: "LIMIT", shard: "SHARD", broker: "BROKER", worker: "WORK" };
const PORT_OUT = 0.075, PORT_IN = -0.065;
const FONT = "bold 30px system-ui, sans-serif";

interface NodeView { group: Group; body: Mesh; hit: Mesh; port?: Mesh; portHit?: Mesh; bar: Mesh; label: TextPlane; kind: Kind; lastLabel: string; born: number; wasOver: boolean; lastPulse: number; lastAlarm: number; wasDown: boolean }
interface WireView { line: Mesh; handle: Mesh; from: string; to: string }
interface Particle { from: string; to: string; t: number; speed: number; write: boolean }
type Drag = { type: "new"; kind: Kind; pid: number; moved: boolean } | { type: "move"; id: string; pid: number; moved: boolean; start: Vec2 }
  | { type: "wire"; from: string; pid: number };

const LOAD_STEPS = [100, 200, 300, 400, 500, 600, 800, 1000, 1200, 1500, 2000, 3000];

export class GameView {
  root = new Group();
  fx = new Fx();
  menu: Menu;
  private nodes = new Map<string, NodeView>();
  private wires = new Map<string, WireView>();
  private ghost: Group;
  private preview: Mesh;
  private info = new TextPlane(1.5, 0.3, 700, { font: "bold 27px system-ui, sans-serif", bg: "rgba(12,18,40,0.88)", pad: 14 });
  private coach = new TextPlane(1.5, 0.22, 700, { font: "bold 27px system-ui, sans-serif", bg: "rgba(14,70,84,0.94)", color: "#e6fbff", pad: 14 });
  private overlay = new TextPlane(1.42, 0.8, 700, { font: "bold 25px system-ui, sans-serif", bg: "rgba(12,18,40,0.97)", pad: 22 });
  private toastPlane = new TextPlane(1.2, 0.11, 900, { font: "bold 32px system-ui, sans-serif", bg: "rgba(160,40,40,0.95)", align: "center", pad: 10 });
  private buttons = new Map<string, TextPlane>();
  private btnBase = new Map<string, { w: number; h: number }>();
  private ovButtons: TextPlane[] = [];
  private stars: Mesh[] = [];
  private particles: Particle[] = [];
  private pMesh: InstancedMesh;
  private budget = new Map<string, number>();
  private edgeRate = new Map<string, number>();
  private dropAcc = new Map<string, number>();
  private drag?: Drag;
  private dirty = true;
  private shelfDirty = true;
  private toastT = 0;
  private hintIdx = 0;
  private uiT = 0;
  private time = 0;
  private acc = 0;
  private pin?: { text: string; until: number };
  private review?: Review;
  private ovPages: [string, string] = ["", ""];
  private ovPage = 0;
  private tutorial?: Tutorial;
  private played = false;
  private starT = -1;
  private lastLevel?: unknown;
  status: "edit" | "running" | "done" = "edit";
  speed = 2;
  sim?: Simulator;
  /** Sandbox load generator. */
  load = { rps: 500, writeFraction: 0.2 };
  private burstUntil = 0;
  /** Meshes the desktop raycaster should test. */
  interactives: Object3D[] = [];
  onToast?: (msg: string) => void;
  onLevelChange?: () => void;
  onBoardMoved?: () => void;
  /** Set by the XR layer: put the board in front of the player's head at a comfortable height. */
  recenter?: () => void;
  endpoint: string | null = null;

  get game(): GameState { return this.app.game; }

  constructor(public app: App) {
    const bg = new Mesh(new PlaneGeometry(BOARD.w, BOARD.h), new MeshStandardMaterial({ color: 0x101832, roughness: 0.9, side: DoubleSide }));
    this.root.add(bg);
    this.reg(bg, { move: (p, pid) => this.dragMove(p, pid), up: (p, pid) => this.dragEnd(p, pid) });

    this.info.position.set(0, 0.56, 0.02); this.root.add(this.info);
    this.coach.position.set(0, 0.85, 0.02); this.root.add(this.coach);
    this.overlay.position.set(0, 0, 0.09); this.root.add(this.overlay);
    this.reg(this.overlay, {});
    this.toastPlane.position.set(0, -0.3, 0.13); this.toastPlane.visible = false; this.root.add(this.toastPlane);
    this.root.add(this.fx.root);

    this.ghost = this.makeNodeBody("api", false); this.ghost.visible = false; this.root.add(this.ghost);
    this.preview = new Mesh(new CylinderGeometry(0.005, 0.005, 1, 8), new MeshBasicMaterial({ color: 0xffffff }));
    this.preview.visible = false; this.root.add(this.preview);

    this.pMesh = new InstancedMesh(new SphereGeometry(0.011, 8, 6), new MeshBasicMaterial({ color: 0xffffff }), 480);
    this.pMesh.frustumCulled = false; this.pMesh.count = 0; this.pMesh.position.z = 0.03; this.root.add(this.pMesh);

    this.buildButtons();
    this.buildBin();
    this.buildStars();
    this.menu = new Menu(this);
    this.setOverlayVisible(false);
    this.game.onChange(() => {
      this.dirty = true;
      if (this.status === "running") this.stop();
      else if (this.status === "done" && !this.game.verdict) { this.status = "edit"; this.setOverlayVisible(false); }
    });
    app.notify = (m) => this.toast(m);
    this.applySettings();
    this.levelChanged();
  }

  // ---------- input plumbing ----------
  /** Attach handlers for XR pointer events and remember the mesh for the desktop raycaster. */
  reg(obj: Object3D, h: Handlers) {
    obj.userData.h = h;
    const o = obj as any;
    o.addEventListener("pointerdown", (e: any) => { this.app.unlockAudio(); h.down?.(e.point, e.pointerId ?? 0); });
    o.addEventListener("pointermove", (e: any) => h.move?.(e.point, e.pointerId ?? 0));
    o.addEventListener("pointerup", (e: any) => h.up?.(e.point, e.pointerId ?? 0));
    o.addEventListener("click", () => { this.app.unlockAudio(); h.click?.(); });
    this.interactives.push(obj);
  }
  unreg(obj: Object3D) { this.interactives = this.interactives.filter((o) => o !== obj); }

  local(p: Vector3): Vec2 { const v = this.root.worldToLocal(p.clone()); return { x: v.x, y: v.y }; }
  private get reduced() { return this.app.settings.reducedMotion; }
  private posOf(id: string) { return this.game.pos[id] ?? { x: 0, y: 0 }; }

  private dragMove(p: Vector3, pid: number) {
    const d = this.drag; if (!d || d.pid !== pid) return;
    const l = this.local(p);
    if (d.type === "new") { d.moved = true; this.ghost.visible = true; this.ghost.position.set(l.x, l.y, 0.05); }
    else if (d.type === "move") {
      if (!d.moved && Math.hypot(l.x - d.start.x, l.y - d.start.y) < 0.02) return;
      if (!d.moved) this.game.checkpoint();
      d.moved = true; this.game.move(d.id, l);
    } else if (d.type === "wire") {
      const a = this.portPos(d.from, true); this.setSegment(this.preview, new Vector3(a.x, a.y, 0.03), new Vector3(l.x, l.y, 0.03));
      this.preview.visible = true;
      const t = nearestNode(this.game, l, 0.09, d.from);
      (this.preview.material as MeshBasicMaterial).color.set(t && edgeProblem(this.game.design, d.from, t) ? 0xff5555 : t ? 0x55ff99 : 0xffffff);
    }
  }

  private dragEnd(p: Vector3, pid: number) {
    const d = this.drag; if (!d || d.pid !== pid) return;
    this.drag = undefined; this.ghost.visible = false; this.preview.visible = false;
    const l = this.local(p);
    if (d.type === "new") {
      if (!d.moved) { this.toast(this.partInfo(d.kind), false); this.app.sound.play("click"); return; }
      if (l.y > -0.43 && Math.abs(l.x) < BOARD.w / 2) {
        const id = this.game.add(d.kind, l);
        if (!id) this.fail("Not available in this level.");
        else { this.app.sound.play("place", this.posOf(id)); this.app.haptic("confirm"); this.fx.ring(this.posOf(id).x, this.posOf(id).y, KIND_COLOR[d.kind], 0.1, 0.4); }
      }
    } else if (d.type === "move") {
      if (!d.moved) { this.nodeTapped(d.id); return; }
      if (Math.hypot(l.x - 0.66, l.y + 0.52) < 0.1) {
        if (!this.game.remove(d.id)) { this.fail("Users can't be deleted."); this.game.move(d.id, d.start); }
        else { this.app.sound.play("delete"); this.app.haptic("confirm"); }
      }
    } else {
      const t = nearestNode(this.game, l, 0.09, d.from);
      if (t) {
        const err = this.game.connect(d.from, t);
        if (err) this.fail(err);
        else { const q = this.posOf(t); this.app.sound.play("connect", q); this.app.haptic("confirm"); this.fx.ring(q.x, q.y, 0x55ff99, 0.09, 0.35); }
      }
    }
  }

  private partInfo(k: Kind): string { return `${KIND_INFO[k]}  Cost ${COST[k]}.`; }

  private nodeTapped(id: string) {
    const n = this.game.design.nodes.find((x) => x.id === id); if (!n) return;
    const q = this.posOf(id);
    if (this.status === "running" && this.sim && this.game.level.sandbox && n.kind !== "client") {
      this.sim.toggle(id);
      return;
    }
    if (n.kind === "cache") {
      this.game.cycleCache(id);
      const c = this.game.design.nodes.find((x) => x.id === id)!;
      this.toast(`${id}: ${c.policy?.toUpperCase()} ${c.cacheSize} keys${c.coalesce ? " + single-flight" : ""}`, false);
      this.app.sound.play("click", q); this.fx.ring(q.x, q.y, KIND_COLOR.cache, 0.09, 0.3);
    } else { this.toast(KIND_INFO[n.kind], false); this.app.sound.play("click", q); }
  }

  // ---------- building visuals ----------
  private makeNodeBody(kind: Kind, withLabel = true): Group {
    const g = new Group();
    const col = new Color(KIND_COLOR[kind]);
    const body = new Mesh(new BoxGeometry(0.12, 0.1, 0.04), new MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: 0.25, roughness: 0.5 }));
    body.position.z = 0.02; g.add(body); g.userData.body = body;
    const gl = new TextPlane(0.11, 0.05, 1000, { font: `bold ${GLYPH[kind].length > 5 ? 22 : 30}px system-ui, sans-serif`, color: "#0b1020", align: "center", pad: 0 });
    gl.setText(GLYPH[kind]); gl.position.set(0, 0, 0.041); g.add(gl);
    if (withLabel) {
      const label = new TextPlane(0.3, 0.06, 900, { font: "bold 32px system-ui, sans-serif", align: "center", pad: 4 });
      label.position.set(0, -0.085, 0.02); g.add(label); g.userData.label = label;
    }
    return g;
  }

  private portPos(id: string, out: boolean): Vec2 { const p = this.posOf(id); return { x: p.x + (out ? PORT_OUT : PORT_IN), y: p.y }; }

  private setSegment(m: Mesh, a: Vector3, b: Vector3, thick = 1) {
    const d = b.clone().sub(a), len = Math.max(d.length(), 1e-4);
    m.position.copy(a).addScaledVector(d, 0.5);
    m.quaternion.setFromUnitVectors(new Vector3(0, 1, 0), d.divideScalar(len));
    m.scale.set(thick, len, thick);
  }

  private makeButton(id: string, label: string, w: number, h: number, fn: () => void, bg = "#26346b", font = FONT): TextPlane {
    const b = new TextPlane(w, h, 800, { font, bg, align: "center", pad: 16, radius: 22 });
    b.setText(label); this.root.add(b); this.buttons.set(id, b); this.btnBase.set(id, { w, h });
    this.reg(b, { click: () => { this.app.sound.play("click"); this.app.haptic("tap"); fn(); } });
    return b;
  }

  private buildButtons() {
    const g = () => this.game;
    const defs: [string, string, () => void][] = [
      ["play", "PLAY", () => (this.status === "running" ? this.stop() : this.start())],
      ["speed", "SPEED 2x", () => { this.speed = this.speed >= 4 ? 1 : this.speed * 2; }],
      ["hint", "HINT", () => this.showHint()],
      ["reset", "RESET", () => { this.stop(); g().reset(); this.levelChanged(); }],
      ["prev", "< LEVEL", () => this.setLevel(-1)],
      ["next", "LEVEL >", () => this.setLevel(1)],
      ["menu", "MENU", () => this.menu.toggle()],
    ];
    for (const [id, label, fn] of defs) this.makeButton(id, label, 0.22, 0.1, fn);
    this.buttons.get("menu")!.setText("MENU", { bg: "#5a3d8a" });
    const tools: [string, string, () => void][] = [
      ["undo", "UNDO", () => { if (!g().undo()) this.fail("Nothing to undo."); }],
      ["redo", "REDO", () => { if (!g().redo()) this.fail("Nothing to redo."); }],
      ["tidy", "TIDY", () => g().tidy()],
      ["save", "SAVE", () => this.app.save()],
      ["loadd", "LOAD", () => this.app.load()],
      ["rps+", "LOAD +", () => this.stepLoad(1)],
      ["rps-", "LOAD -", () => this.stepLoad(-1)],
      ["mix+", "WRITES +", () => this.stepMix(1)],
      ["mix-", "WRITES -", () => this.stepMix(-1)],
      ["burst", "BURST", () => this.doBurst()],
    ];
    for (const [id, label, fn] of tools) this.makeButton(id, label, 0.22, 0.1, fn, "#1f3a5c");
    this.layoutButtons();
  }

  /** Place the controls on your dominant side and the tools on the other; scale for large-target mode. */
  layoutButtons() {
    const s = this.app.settings, k = s.largeTargets ? 1.3 : 1, side = s.hand === "right" ? 1 : -1;
    const sb = this.game.level.sandbox === true;
    const place = (ids: string[], x: number) => {
      ids.forEach((id, i) => { const b = this.buttons.get(id)!; b.visible = true; b.position.set(x, 0.32 - i * 0.135 * (k > 1 ? 1.08 : 1), 0.02); b.scale.setScalar(k); (b as any).pointerEvents = "auto"; });
    };
    const hide = (ids: string[]) => ids.forEach((id) => { const b = this.buttons.get(id)!; b.visible = false; (b as any).pointerEvents = "none"; });
    const sandboxTools = ["undo", "redo", "rps+", "rps-", "mix+", "mix-", "burst"], campaignTools = ["undo", "redo", "tidy", "save", "loadd"];
    place(sb ? ["play", "speed", "hint", "reset", "menu"] : ["play", "speed", "hint", "reset", "prev", "next", "menu"], 0.95 * side);
    place(sb ? sandboxTools : campaignTools, -0.95 * side);
    hide(sb ? ["prev", "next", "tidy", "save", "loadd"] : ["rps+", "rps-", "mix+", "mix-", "burst"]);
  }

  private buildBin() {
    const bin = new Mesh(new CircleGeometry(0.075, 24), new MeshBasicMaterial({ color: 0x5a1f2b }));
    bin.position.set(0.66, -0.52, 0.005); this.root.add(bin);
    const t = new TextPlane(0.16, 0.05, 800, { font: "bold 26px system-ui, sans-serif", align: "center", pad: 0 });
    t.setText("DELETE"); t.position.set(0.66, -0.52, 0.01); this.root.add(t);
    this.reg(bin, { move: (p, pid) => this.dragMove(p, pid), up: (p, pid) => this.dragEnd(p, pid) });
  }

  private buildStars() {
    const sh = new Shape();
    for (let i = 0; i < 10; i++) { const a = Math.PI / 2 + (i * Math.PI) / 5, r = i % 2 ? 0.02 : 0.05; const x = Math.cos(a) * r, y = Math.sin(a) * r; if (i) sh.lineTo(x, y); else sh.moveTo(x, y); }
    sh.closePath();
    const geo = new ShapeGeometry(sh);
    for (let i = 0; i < 3; i++) { const m = new Mesh(geo, new MeshBasicMaterial({ color: 0x33406e })); m.position.set(0.5 + i * 0.12 - 0.12, 0.32, 0.1); m.visible = false; this.root.add(m); this.stars.push(m); }
    const defs: [string, string, () => void][] = [
      ["ov-retry", "RETRY", () => { this.setOverlayVisible(false); this.stop(); }],
      ["ov-page", "MORE", () => { this.ovPage = 1 - this.ovPage; this.renderOverlay(); }],
      ["ov-next", "NEXT LEVEL", () => { this.setOverlayVisible(false); this.setLevel(1); }],
      ["ov-share", "SHARE", () => { this.setOverlayVisible(false); this.menu.open("share"); }],
      ["ov-close", "CLOSE", () => this.setOverlayVisible(false)],
    ];
    defs.forEach(([id, label, fn], i) => {
      const b = this.makeButton(id, label, 0.24, 0.09, fn, "#26346b", "bold 26px system-ui, sans-serif");
      b.position.set(-0.5 + i * 0.255, -0.32, 0.12); this.ovButtons.push(b); this.buttons.delete(id);
    });
  }

  private rebuildShelf() {
    this.shelfDirty = false;
    for (const c of [...this.root.children]) if (c.userData.shelf) { this.root.remove(c); c.traverse((o) => this.unreg(o)); }
    const kinds = this.game.level.palette;
    const title = new TextPlane(1.3, 0.05, 800, { font: "bold 22px system-ui, sans-serif", color: "#9aa6d0", pad: 2 });
    title.setText(this.game.level.palette.length ? "PINCH A PART AND DRAG IT ONTO THE BOARD. TAP A PART TO LEARN IT." : "");
    title.position.set(-0.1, -0.44, 0.01); title.userData.shelf = true; this.root.add(title);
    const step = Math.min(0.19, 1.3 / Math.max(1, kinds.length));
    const x0 = -0.62;
    kinds.forEach((k, i) => {
      const g = this.makeNodeBody(k, false);
      g.position.set(x0 + i * step, -0.56, 0.01); g.scale.setScalar(Math.min(0.85, step / 0.15)); g.userData.shelf = true;
      this.root.add(g);
      const hit = new Mesh(new BoxGeometry(0.16, 0.14, 0.06), new MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }));
      hit.position.z = 0.02; g.add(hit);
      this.reg(hit, {
        down: (_p, pid) => { this.drag = { type: "new", kind: k, pid, moved: false }; this.setGhost(k); },
        move: (p, pid) => this.dragMove(p, pid), up: (p, pid) => this.dragEnd(p, pid),
      });
    });
  }

  private setGhost(kind: Kind) {
    const old = this.ghost; this.root.remove(old);
    this.ghost = this.makeNodeBody(kind, false); this.ghost.visible = false;
    this.ghost.traverse((o) => { const m = (o as Mesh).material as MeshStandardMaterial | undefined; if (m && "opacity" in m) { m.transparent = true; m.opacity = 0.7; } });
    this.root.add(this.ghost);
  }

  private sync() {
    this.dirty = false;
    const d = this.game.design;
    const kinds = new Map(d.nodes.map((n) => [n.id, n.kind]));
    for (const [id, v] of this.nodes) if (kinds.get(id) !== v.kind) {
      this.root.remove(v.group); this.nodes.delete(id);
      v.group.traverse((o) => this.unreg(o));
    }
    for (const n of d.nodes) {
      if (this.nodes.has(n.id)) continue;
      const g = this.makeNodeBody(n.kind);
      const body = g.userData.body as Mesh, label = g.userData.label as TextPlane;
      const bar = new Mesh(new PlaneGeometry(0.1, 0.008), new MeshBasicMaterial({ color: 0x3ddc97 }));
      bar.position.set(0, 0.062, 0.041); g.add(bar);
      const id = n.id;
      const hit = new Mesh(new BoxGeometry(0.13, 0.11, 0.06), new MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }));
      hit.position.z = 0.02; g.add(hit);
      const h: Handlers = {
        down: (_p, pid) => { this.drag = { type: "move", id, pid, moved: false, start: { ...this.posOf(id) } }; },
        move: (p, pid) => this.dragMove(p, pid), up: (p, pid) => this.dragEnd(p, pid),
      };
      this.reg(body, h); this.reg(hit, h);
      let port: Mesh | undefined, portHit: Mesh | undefined;
      if (n.kind !== "db" && n.kind !== "replica") {
        port = new Mesh(new SphereGeometry(0.024, 12, 10), new MeshBasicMaterial({ color: 0xffffff }));
        port.position.set(PORT_OUT, 0, 0.03); g.add(port);
        portHit = new Mesh(new SphereGeometry(0.04, 8, 6), new MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }));
        portHit.position.copy(port.position); g.add(portHit);
        this.reg(portHit, {
          down: (_p, pid) => { this.drag = { type: "wire", from: id, pid }; },
          move: (p, pid) => this.dragMove(p, pid), up: (p, pid) => this.dragEnd(p, pid),
        });
      }
      g.scale.setScalar(this.reduced ? 1 : 0.4);
      this.root.add(g);
      this.nodes.set(n.id, { group: g, body, hit, port, portHit, bar, label, kind: n.kind, lastLabel: "", born: this.time, wasOver: false, lastPulse: -9, lastAlarm: -9, wasDown: false });
    }
    for (const [id, v] of this.nodes) if (!kinds.has(id)) { this.root.remove(v.group); this.nodes.delete(id); v.group.traverse((o) => this.unreg(o)); }
    this.applyHitScale();
    // wires
    const keys = new Set(d.edges.map((e) => `${e.from}>${e.to}`));
    for (const [k, w] of this.wires) if (!keys.has(k)) { this.root.remove(w.line, w.handle); this.unreg(w.handle); this.wires.delete(k); }
    for (const e of d.edges) {
      const k = `${e.from}>${e.to}`;
      if (this.wires.has(k)) continue;
      const line = new Mesh(new CylinderGeometry(0.004, 0.004, 1, 6), new MeshBasicMaterial({ color: 0x6f7db8 }));
      const handle = new Mesh(new CircleGeometry(0.017, 14), new MeshBasicMaterial({ color: 0x8a2b3a }));
      this.root.add(line, handle);
      this.reg(handle, { click: () => { this.game.disconnect(e.from, e.to); this.app.sound.play("delete"); } });
      this.wires.set(k, { line, handle, from: e.from, to: e.to });
    }
    this.applyHitScale();
  }

  /** Larger grab handles for people who need them. */
  private applyHitScale() {
    const k = this.app.settings.largeTargets ? 1.5 : 1;
    for (const v of this.nodes.values()) { v.hit.scale.setScalar(k); v.portHit?.scale.setScalar(k); }
    for (const w of this.wires.values()) w.handle.scale.setScalar(k * (k > 1 ? 1.2 : 1));
  }

  applySettings() {
    this.fx.reduced = this.reduced;
    this.layoutButtons(); this.applyHitScale();
    this.onBoardMoved?.();
  }

  private setOverlayVisible(v: boolean) {
    this.overlay.visible = v;
    (this.overlay as any).pointerEvents = v ? "auto" : "none"; // pmndrs pointer-events: a hidden overlay must not block the board
    for (const b of this.ovButtons) { b.visible = v; (b as any).pointerEvents = v ? "auto" : "none"; }
    for (const s of this.stars) s.visible = v && this.status === "done" && !!this.game.verdict?.passed && !this.game.level.sandbox && this.ovPage === 0;
    if (!v) this.fx.clear();
  }
  get overlayOpen(): boolean { return this.overlay.visible; }
  closeOverlay() { this.setOverlayVisible(false); }

  // ---------- messages ----------
  toast(msg: string, warn = true) {
    this.toastPlane.setText(msg, { bg: warn ? "rgba(160,40,40,0.95)" : "rgba(30,70,110,0.95)" });
    this.toastPlane.visible = true; this.toastT = 3.5; this.onToast?.(msg);
  }
  private fail(msg: string) { this.toast(msg); this.app.sound.play("error"); this.app.haptic("error"); }

  // ---------- coach ----------
  private tutorialCtx() { return { design: this.game.design, played: this.played, sawOverload: false, verdict: this.game.verdict }; }

  private levelChanged() {
    const l = this.game.level;
    this.lastLevel = l;
    this.shelfDirty = true; this.dirty = true; this.played = false; this.pin = undefined; this.hintIdx = 0;
    this.tutorial = l.sandbox || l.id > 3 || this.app.tutorialSeen(l.id) ? undefined : Tutorial.forLevel(l.id);
    this.layoutButtons();
    this.setOverlayVisible(false);
    this.onLevelChange?.();
  }

  skipTutorial() { if (this.tutorial) this.app.markTutorialSeen(this.game.level.id); this.tutorial = undefined; }
  restartTutorial() { this.app.kv.removeItem(`sds:v1:flag:tutorial-${this.game.level.id}`); this.tutorial = Tutorial.forLevel(this.game.level.id); if (!this.tutorial) this.toast("No tutorial for this level.", false); }

  private coachText(snap?: Record<string, NodeSnap>): string {
    const t = this.tutorial?.current(this.tutorialCtx());
    if (t) {
      if (this.tutorial!.index >= this.tutorial!.steps.length - 1 && this.game.level.id !== 1) this.app.markTutorialSeen(this.game.level.id);
      return `TUTORIAL ${this.tutorial!.index + 1}/${this.tutorial!.steps.length}: ${t.text}`;
    }
    if (this.pin && this.time < this.pin.until) return this.pin.text;
    if (!this.app.settings.hints) return "Hints are off. Open MENU > SETTINGS to turn them on.";
    const l = this.game.level;
    if (this.status === "running" && this.sim) {
      const st = this.sim.liveStats();
      const h = contextHints(l, this.game.design, snap ?? this.sim.snapshot(), { p50: st.p50, p99: st.p99 })[0];
      return this.hintLine(h);
    }
    if (this.status === "done") return "Read WHAT HAPPENED in the results, then adjust and retry.";
    if (l.sandbox) return "Sandbox: build anything, press PLAY, then change the load, or tap a part while it runs to KILL it.";
    return `${l.story}`;
  }
  private hintLine(h: { concept?: string; text: string }): string {
    const c = h.concept ? concept(h.concept) : undefined;
    return c ? `${c.term.toUpperCase()}: ${h.text}` : h.text;
  }

  showHint() {
    const g = this.game;
    const snap = this.sim?.snapshot();
    const st = this.sim?.liveStats();
    const list = contextHints(g.level, g.design, snap, st ? { p50: st.p50, p99: st.p99 } : undefined);
    const h = list[this.hintIdx++ % list.length];
    const errs = validate(g.design).filter((i) => i.severity === "error");
    const text = errs.length && !snap ? errs[0].message : this.hintLine(h);
    this.pin = { text: "HINT  " + text, until: this.time + 14 };
    this.app.sound.play("click");
  }

  // ---------- sandbox load generator ----------
  private stepLoad(dir: number) {
    const i = LOAD_STEPS.findIndex((x) => x >= this.load.rps);
    const at = Math.max(0, Math.min(LOAD_STEPS.length - 1, (i < 0 ? LOAD_STEPS.length - 1 : LOAD_STEPS[i] === this.load.rps ? i : i - (dir > 0 ? 1 : 0)) + dir));
    this.load.rps = LOAD_STEPS[at]; this.pushLoad();
  }
  private stepMix(dir: number) { this.load.writeFraction = Math.max(0, Math.min(1, Math.round((this.load.writeFraction + dir * 0.1) * 10) / 10)); this.pushLoad(); }
  private doBurst() { if (this.status !== "running") { this.fail("Press PLAY first, then BURST."); return; } this.burstUntil = this.time + 4; this.pushLoad(); this.toast("Traffic burst: 3x for 4 seconds", false); }
  private pushLoad() {
    if (!this.sim) return;
    this.sim.rpsOverride = this.load.rps * (this.time < this.burstUntil ? 3 : 1);
    this.sim.writeOverride = this.load.writeFraction;
  }
  setLoad(rps: number, wf: number) { this.load.rps = rps; this.load.writeFraction = wf; this.pushLoad(); }

  // ---------- run control ----------
  start() {
    const issues = validate(this.game.design).filter((i) => i.severity === "error");
    if (issues.length) { this.fail(issues[0].message); return; }
    this.setOverlayVisible(false); this.review = undefined;
    this.sim = new Simulator(this.game.design, this.game.level.workload, 7);
    if (this.game.level.sandbox) this.pushLoad();
    this.particles.length = 0; this.acc = 0; this.status = "running"; this.played = true; this.dropAcc.clear();
    this.sim.onHop = ({ from, to, write }) => {
      const k = `${from}>${to}`;
      const b = this.budget.get(k) ?? 0;
      const cap = this.reduced ? 160 : 470;
      if (b >= 1 && this.particles.length < cap) { this.budget.set(k, b - 1); this.particles.push({ from, to, t: 0, speed: 1.2 + Math.random() * 0.4, write }); }
    };
    this.sim.onDrop = (id) => this.dropAcc.set(id, (this.dropAcc.get(id) ?? 0) + 1);
    this.sim.onEvent = (e) => {
      this.toast(e.text.replace(/^./, (c) => c.toUpperCase()), e.text.includes("promoted") === false);
      const p = e.nodeId ? this.posOf(e.nodeId) : undefined;
      if (/crash/.test(e.text)) { this.app.sound.play("kill", p); this.app.haptic("error"); if (p) this.fx.burst(p.x, p.y, 0x999999, 24, 0.25); }
      else if (/promoted/.test(e.text)) { this.app.sound.play("promote", p); this.app.haptic("success"); if (p) this.fx.ring(p.x, p.y, 0x55ff99, 0.14, 0.7); }
      else if (/back/.test(e.text)) this.app.sound.play("promote", p);
      else if (/emptied/.test(e.text)) { this.app.sound.play("error"); this.app.haptic("warn"); }
    };
    this.app.sound.play("play"); this.app.haptic("confirm");
  }

  stop() { this.status = "edit"; this.sim = undefined; this.particles.length = 0; this.pMesh.count = 0; this.app.sound.setTraffic(0); }

  private finish() {
    this.sim!.summary();
    this.status = "done"; this.sim = undefined; this.app.sound.setTraffic(0);
    const v = this.game.judge();
    this.ovPage = 0;
    const extra = isDaily(this.game.level) ? { score: this.app.lastScore?.score ?? 0, best: this.app.dailyScores, isBest: this.app.lastScore?.best } : undefined;
    const render = () => { this.ovPages = resultPages(this.game.level, this.game.design, v, this.review, extra); this.renderOverlay(); };
    render();
    this.setOverlayVisible(true);
    this.celebrate(v.passed, v.stars);
    reviewWithFallback({ level: this.game.level, design: this.game.design, verdict: v }, defaultProviders(this.endpoint))
      .then((r) => { this.review = r; if (this.status === "done") render(); });
  }

  private celebrate(passed: boolean, stars: number) {
    if (!passed) { this.app.sound.play("fail"); this.app.haptic("error"); return; }
    this.app.sound.play("success"); this.app.haptic("success");
    this.fx.confetti();
    this.starT = 0;
    for (const [i, s] of this.stars.entries()) { (s.material as MeshBasicMaterial).color.set(i < stars ? 0xffd166 : 0x33406e); s.scale.setScalar(this.reduced ? 1 : 0.01); }
  }

  private renderOverlay() {
    const last = this.ovPage === 1;
    this.overlay.setText(this.ovPages[this.ovPage]);
    this.ovButtons[1].setText(last ? "BACK" : "MORE");
    const v = this.game.verdict;
    this.ovButtons[2].visible = this.overlay.visible && !!v?.passed && this.game.mode === "campaign" && this.game.index < LEVELS.length - 1;
    (this.ovButtons[2] as any).pointerEvents = this.ovButtons[2].visible ? "auto" : "none";
    for (const s of this.stars) s.visible = this.overlay.visible && !!v?.passed && !last;
  }

  setLevel(delta: number) {
    if (this.game.mode !== "campaign") { this.fail("Level buttons work in the campaign. Open MENU to switch modes."); return; }
    const i = this.game.index + delta;
    if (i < 0 || i >= LEVELS.length) { this.toast(i < 0 ? "This is the first level." : "That was the last level. Try the sandbox or the daily challenge.", false); return; }
    this.loadLevel(i);
  }
  loadLevel(i: number) { this.stop(); this.app.startCampaign(i); this.levelChanged(); }
  loadSandbox() { this.stop(); this.app.startSandbox(); this.levelChanged(); }
  loadDaily() { this.stop(); this.app.startDaily(); this.levelChanged(); }
  /** Call after the app switched level by itself (import). */
  refreshLevel() { if (this.lastLevel !== this.game.level) { this.stop(); this.levelChanged(); } }

  // ---------- per frame ----------
  update(dt: number) {
    this.time += dt;
    if (this.dirty) this.sync();
    if (this.shelfDirty) this.rebuildShelf();
    if (this.toastT > 0 && (this.toastT -= dt) <= 0) this.toastPlane.visible = false;
    this.fx.update(dt);
    this.menu.update(dt);
    if (this.burstUntil && this.time >= this.burstUntil) { this.burstUntil = 0; this.pushLoad(); }

    let snap: Record<string, NodeSnap> | undefined;
    if (this.status === "running" && this.sim) {
      this.acc += Math.min(dt, 0.1) * this.speed;
      let steps = 0;
      const total = durationOf(this.game.level.workload);
      while (this.acc >= 0.01 && steps < 60 && this.sim.t < total) { this.sim.step(0.01); this.acc -= 0.01; steps++; }
      snap = this.sim.snapshot();
      for (const e of this.game.design.edges) {
        const k = `${e.from}>${e.to}`, rate = Math.min(45, 3 + (snap[e.to]?.arrivalRps ?? 0) / 12);
        this.edgeRate.set(k, rate);
      }
      let busy = 0; for (const s of Object.values(snap)) busy = Math.max(busy, s.utilisation);
      this.app.sound.setTraffic(Math.min(1, busy));
      if (this.sim.t >= total && !this.game.level.sandbox) this.finish();
    }
    for (const [k, r] of this.edgeRate) this.budget.set(k, Math.min(3, (this.budget.get(k) ?? 0) + dt * r * this.speed * 0.6));
    this.dropBursts(dt);

    // nodes
    for (const [id, v] of this.nodes) {
      const p = this.game.pos[id]; if (!p) continue;
      v.group.position.set(p.x, p.y, 0.01);
      const age = this.time - v.born;
      if (!this.reduced && age < 0.3) { const k = age / 0.3, s = 0.4 + 0.6 * (1 + 2.7 * Math.pow(k - 1, 3) + 1.7 * Math.pow(k - 1, 2)); v.group.scale.setScalar(Math.max(0.4, s)); }
      else if (v.group.scale.x !== 1) v.group.scale.setScalar(1);
      const s = snap?.[id];
      const mat = v.body.material as MeshStandardMaterial;
      const base = new Color(KIND_COLOR[v.kind]);
      if (s?.down) {
        mat.color.set(0x3a3f52); mat.emissive.set(0x111318); mat.emissiveIntensity = 0.1;
      } else if (s?.overloaded) {
        const pulse = this.reduced ? 1 : 0.5 + 0.5 * Math.sin(this.time * 9);
        mat.color.copy(base).lerp(new Color(0xff2222), 0.75); mat.emissive.set(0xff1111); mat.emissiveIntensity = 0.4 + 0.9 * pulse;
        if (!this.reduced && this.time - v.lastPulse > 0.9) { v.lastPulse = this.time; this.fx.ring(p.x, p.y, 0xff3b3b, 0.13, 0.7); }
        if (this.time - v.lastAlarm > (v.wasOver ? 2.2 : 0.2)) { v.lastAlarm = this.time; this.app.sound.play("overload", p, 1800, `ov:${id}`); if (!v.wasOver) this.app.haptic("warn"); }
      } else { mat.color.copy(base); mat.emissive.copy(base); mat.emissiveIntensity = 0.25; }
      if (s?.overloaded && !v.wasOver && snap) this.fx.burst(p.x, p.y, 0xff5555, 10, 0.15);
      v.wasOver = !!s?.overloaded; v.wasDown = !!s?.down;
      const u = s ? Math.min(1.2, s.utilisation) : 0;
      v.bar.scale.x = Math.max(0.02, Math.min(1, u)); v.bar.position.x = -0.05 * (1 - v.bar.scale.x);
      (v.bar.material as MeshBasicMaterial).color.set(u > 0.95 ? 0xff3b3b : u > 0.7 ? 0xffb547 : 0x3ddc97);
      const n = this.game.design.nodes.find((x) => x.id === id)!;
      let txt = id;
      if (n.kind === "cache") txt += ` ${n.policy?.toUpperCase()} ${n.cacheSize}${n.coalesce ? " SF" : ""}`;
      if (s?.down) txt += "  DOWN";
      else if (s && n.kind !== "client") txt += (n.kind === "queue" || n.kind === "broker") ? `  backlog ${s.waiting}` : `  ${Math.round(s.arrivalRps)}/${n.capacityRps} rps`;
      if (s?.hitRate !== undefined && !s.down) txt += `  hit ${(s.hitRate * 100).toFixed(0)}%`;
      if (s?.promoted) txt += "  PRIMARY";
      if (s?.overloaded) txt += "  OVERLOAD";
      else if (!s && n.kind !== "client") txt += `  cap ${Number.isFinite(n.capacityRps) ? n.capacityRps : ""}`;
      if (txt !== v.lastLabel) { v.lastLabel = txt; v.label.setText(txt, { color: s?.down ? "#9aa0b4" : s?.overloaded ? "#ff8080" : "#dfe6ff" }); }
    }
    // wires
    for (const w of this.wires.values()) {
      const a = this.portPos(w.from, true), b = this.portPos(w.to, false);
      const load = snap?.[w.to]?.arrivalRps ?? 0;
      const thick = 1 + Math.min(2.2, load / 450);
      this.setSegment(w.line, new Vector3(a.x, a.y, 0.03), new Vector3(b.x, b.y, 0.03), thick);
      w.handle.position.set((a.x + b.x) / 2, (a.y + b.y) / 2, 0.035);
      const hot = snap?.[w.to]?.overloaded, dead = snap?.[w.to]?.down;
      (w.line.material as MeshBasicMaterial).color.set(dead ? 0x444a5c : hot ? 0xff5555 : 0x6f7db8);
    }
    // particles
    const m = new Matrix4(), q = new Quaternion(), sc = new Vector3(1, 1, 1), pos = new Vector3(), col = new Color();
    let n = 0;
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.t += dt * p.speed;
      if (p.t >= 1 || !this.game.pos[p.from] || !this.game.pos[p.to]) this.particles.splice(i, 1);
    }
    for (const p of this.particles) {
      const a = this.portPos(p.from, true), b = this.portPos(p.to, false);
      pos.set(a.x + (b.x - a.x) * p.t, a.y + (b.y - a.y) * p.t, 0.02);
      const s = this.reduced ? 1 : 0.55 + 0.45 * Math.sin(Math.PI * Math.min(1, p.t * 1.05)); // swell in the middle of the wire
      sc.set(s, s, s);
      m.compose(pos, q, sc); this.pMesh.setMatrixAt(n, m);
      this.pMesh.setColorAt(n, col.set(p.write ? 0xffa040 : 0x40e8ff)); n++;
    }
    this.pMesh.count = n; this.pMesh.instanceMatrix.needsUpdate = true;
    if (this.pMesh.instanceColor) this.pMesh.instanceColor.needsUpdate = true;

    // celebration stars
    if (this.starT >= 0) {
      this.starT += dt;
      this.stars.forEach((s, i) => {
        const t = this.starT - 0.35 * i;
        if (t < 0) return;
        const k = Math.min(1, t / 0.35);
        if (!this.reduced) s.scale.setScalar(k < 1 ? 1.4 * k : 1.4 - 0.4 * Math.min(1, (t - 0.35) / 0.2));
        if (t > 0 && t - dt <= 0 && (s.material as MeshBasicMaterial).color.getHex() === 0xffd166) { this.app.sound.play("star"); this.fx.ring(s.position.x, s.position.y, 0xffd166, 0.1, 0.5); }
      });
      if (this.starT > 2) this.starT = -1;
    }

    this.uiT -= dt;
    if (this.uiT <= 0) { this.uiT = 0.25; this.refreshInfo(snap); }
  }

  /** Small puffs where requests die, so failure is visible and not just a number. */
  private dropT = 0;
  private dropBursts(dt: number) {
    this.dropT += dt;
    if (this.dropT < 0.14) return;
    this.dropT = 0;
    for (const [id, c] of this.dropAcc) {
      const p = this.game.pos[id]; if (!p) continue;
      this.fx.burst(p.x + PORT_IN, p.y, 0xff4d4d, Math.min(5, 1 + Math.floor(c / 6)), 0.12);
      if (c > 3) this.app.sound.play("drop", p, 250, `drop:${id}`);
    }
    this.dropAcc.clear();
  }

  private refreshInfo(snap?: Record<string, NodeSnap>) {
    const g = this.game, L = g.level;
    const stars = !L.sandbox && L.id > 0 && L.id <= LEVELS.length ? "  " + "*".repeat(this.app.progress[L.id] ?? 0) : "";
    let text = L.sandbox ? `SANDBOX\n${L.brief}` : `${L.chapter.toUpperCase()}  ${isDaily(L) ? "" : "LEVEL " + L.id + ": "}${L.title.toUpperCase()}${stars}\n${L.brief}`;
    if (this.status === "running" && this.sim) {
      const st = this.sim.liveStats();
      text += `\nRUNNING ${this.sim.t.toFixed(0)}s   ${Math.round(st.rps)} rps   p50 ${st.p50.toFixed(0)} ms   p99 ${st.p99.toFixed(0)} ms   errors ${(st.errorRate * 100).toFixed(1)}%`;
      if (L.sandbox) text += `   writes ${(this.load.writeFraction * 100).toFixed(0)}%   (tap a part to kill it)`;
    } else {
      text += `\nCost ${g.cost}${L.starBudget ? " (star budget " + L.starBudget + ")" : ""}   ${L.sandbox ? `Load ${this.load.rps} rps, ${(this.load.writeFraction * 100).toFixed(0)}% writes` : "Wire it up, then press PLAY."}`;
    }
    this.info.setText(text);
    this.coach.setText(this.coachText(snap));
    this.buttons.get("play")!.setText(this.status === "running" ? "STOP" : "PLAY", { bg: this.status === "running" ? "#8a2b3a" : "#1f7a4d" });
    this.buttons.get("speed")!.setText(`SPEED ${this.speed}x`);
    this.buttons.get("undo")!.setText("UNDO", { bg: g.canUndo ? "#1f3a5c" : "#1a2438", color: g.canUndo ? "#ffffff" : "#6a7590" });
    this.buttons.get("redo")!.setText("REDO", { bg: g.canRedo ? "#1f3a5c" : "#1a2438", color: g.canRedo ? "#ffffff" : "#6a7590" });
  }
}

export function placeBoard(root: Group, heightOffset = 0) {
  root.position.set(0, 0.98 + heightOffset, -0.72);
  root.rotation.x = -0.55;
}
export type { Handlers as BoardHandlers };
