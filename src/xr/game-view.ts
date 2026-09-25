// The 3D board: renders GameState, turns pointer input (hand pinch ray, poke, mouse) into edits,
// and animates the live simulation as particles. Input arrives as plain pointer events from
// either IWSDK's XR pointers or the desktop raycaster in desktop.ts.
import {
  BoxGeometry, CircleGeometry, Color, CylinderGeometry, DoubleSide, Group, InstancedMesh, Matrix4, Mesh, MeshBasicMaterial,
  MeshStandardMaterial, Object3D, PlaneGeometry, Quaternion, SphereGeometry, Vector3,
} from "three";
import { BOARD, GameState, nearestNode, type Vec2 } from "../game/state.js";
import { LEVELS } from "../sim/levels.js";
import { analyse, hintsFor } from "../sim/flow.js";
import { durationOf, type Kind } from "../sim/model.js";
import { Simulator, type NodeSnap } from "../sim/simulator.js";
import { edgeProblem, isRunnable, validate } from "../sim/validate.js";
import { defaultProviders, reviewWithFallback, type Review } from "../review/review.js";
import { TextPlane } from "./text.js";

export interface Handlers { down?(p: Vector3, pid: number): void; move?(p: Vector3, pid: number): void; up?(p: Vector3, pid: number): void; click?(): void }

export const KIND_COLOR: Record<Kind, number> = { client: 0x7c8cff, lb: 0xb56cff, api: 0x3ddc97, cache: 0xffb547, db: 0x4fc3f7, queue: 0xff7ab8 };
const GLYPH: Record<Kind, string> = { client: "USERS", lb: "LB", api: "API", cache: "CACHE", db: "DB", queue: "QUEUE" };
const PORT_OUT = 0.075, PORT_IN = -0.065;

interface NodeView { group: Group; body: Mesh; bar: Mesh; label: TextPlane; kind: Kind; lastLabel: string }
interface WireView { line: Mesh; handle: Mesh; from: string; to: string }
interface Particle { from: string; to: string; t: number; speed: number; write: boolean }
type Drag = { type: "new"; kind: Kind; pid: number } | { type: "move"; id: string; pid: number; moved: boolean; start: Vec2 }
  | { type: "wire"; from: string; pid: number };

export class GameView {
  root = new Group();
  private backdrop: Mesh;
  private nodes = new Map<string, NodeView>();
  private wires = new Map<string, WireView>();
  private ghost: Group;
  private preview: Mesh;
  private info = new TextPlane(1.5, 0.46, 700, { font: "bold 30px system-ui, sans-serif", bg: "rgba(12,18,40,0.88)", pad: 16 });
  private overlay = new TextPlane(1.2, 0.7, 700, { font: "bold 30px system-ui, sans-serif", bg: "rgba(12,18,40,0.96)", pad: 22 });
  private toastPlane = new TextPlane(1.0, 0.09, 900, { font: "bold 34px system-ui, sans-serif", bg: "rgba(160,40,40,0.95)", align: "center", pad: 10 });
  private buttons: Record<string, TextPlane> = {};
  private particles: Particle[] = [];
  private pMesh: InstancedMesh;
  private budget = new Map<string, number>();
  private edgeRate = new Map<string, number>();
  private drag?: Drag;
  private dirty = true;
  private toastT = 0;
  private hintIdx = 0;
  private uiT = 0;
  private time = 0;
  private acc = 0;
  private hintText = "";
  private review?: Review;
  status: "edit" | "running" | "done" = "edit";
  speed = 2;
  sim?: Simulator;
  /** Meshes the desktop raycaster should test. */
  interactives: Object3D[] = [];
  onToast?: (msg: string) => void;
  onLevelChange?: () => void;
  endpoint: string | null = null;

  constructor(public game: GameState) {
    const bg = new Mesh(new PlaneGeometry(BOARD.w, BOARD.h), new MeshStandardMaterial({ color: 0x101832, roughness: 0.9, side: DoubleSide }));
    this.backdrop = bg;
    this.root.add(bg);
    this.reg(bg, { move: (p, pid) => this.dragMove(p, pid), up: (p, pid) => this.dragEnd(p, pid) });
    // subtle grid
    const grid = new Mesh(new PlaneGeometry(BOARD.w, BOARD.h), new MeshBasicMaterial({ color: 0x1b2650, wireframe: true, transparent: true, opacity: 0.35 }));
    grid.position.z = 0.001; this.root.add(grid);
    (grid.material as MeshBasicMaterial).wireframe = false;
    grid.visible = false;

    this.info.position.set(0, 0.66, 0.02); this.root.add(this.info);
    this.overlay.position.set(0, 0, 0.09); this.showOverlay(false); this.root.add(this.overlay);
    this.reg(this.overlay, { click: () => { this.showOverlay(false); } });
    this.toastPlane.position.set(0, -0.36, 0.09); this.toastPlane.visible = false; this.root.add(this.toastPlane);

    this.ghost = this.makeNodeBody("api", false); this.ghost.visible = false; this.root.add(this.ghost);
    this.preview = new Mesh(new CylinderGeometry(0.005, 0.005, 1, 8), new MeshBasicMaterial({ color: 0xffffff }));
    this.preview.visible = false; this.root.add(this.preview);

    this.pMesh = new InstancedMesh(new SphereGeometry(0.011, 8, 6), new MeshBasicMaterial({ color: 0xffffff }), 480);
    this.pMesh.frustumCulled = false; this.pMesh.count = 0; this.pMesh.position.z = 0.03; this.root.add(this.pMesh);

    this.buildButtons();
    this.buildBin();
    game.onChange(() => {
      this.dirty = true;
      if (this.status === "running") this.stop();
      else if (this.status === "done" && !game.verdict) { this.status = "edit"; this.showOverlay(false); }
    });
  }

  // ---------- input plumbing ----------
  /** Attach handlers for XR pointer events and remember the mesh for the desktop raycaster. */
  reg(obj: Object3D, h: Handlers) {
    obj.userData.h = h;
    const o = obj as any;
    o.addEventListener("pointerdown", (e: any) => h.down?.(e.point, e.pointerId ?? 0));
    o.addEventListener("pointermove", (e: any) => h.move?.(e.point, e.pointerId ?? 0));
    o.addEventListener("pointerup", (e: any) => h.up?.(e.point, e.pointerId ?? 0));
    o.addEventListener("click", () => h.click?.());
    this.interactives.push(obj);
  }

  local(p: Vector3): Vec2 { const v = this.root.worldToLocal(p.clone()); return { x: v.x, y: v.y }; }

  private dragMove(p: Vector3, pid: number) {
    const d = this.drag; if (!d || d.pid !== pid) return;
    const l = this.local(p);
    if (d.type === "new") { this.ghost.visible = true; this.ghost.position.set(l.x, l.y, 0.05); }
    else if (d.type === "move") {
      if (!d.moved && Math.hypot(l.x - d.start.x, l.y - d.start.y) < 0.02) return;
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
      if (l.y > -0.43 && Math.abs(l.x) < BOARD.w / 2) {
        const id = this.game.add(d.kind, l);
        if (!id) this.toast("Not available in this level.");
      }
    } else if (d.type === "move") {
      if (!d.moved) { if (this.game.design.nodes.find((n) => n.id === d.id)?.kind === "cache") this.game.cycleCache(d.id); return; }
      if (Math.hypot(l.x - 0.66, l.y + 0.52) < 0.1) { if (!this.game.remove(d.id)) { this.toast("Users can't be deleted."); this.game.move(d.id, d.start); } }
    } else {
      const t = nearestNode(this.game, l, 0.09, d.from);
      if (t) { const err = this.game.connect(d.from, t); if (err) this.toast(err); }
    }
  }

  // ---------- building visuals ----------
  private makeNodeBody(kind: Kind, withLabel = true): Group {
    const g = new Group();
    const col = new Color(KIND_COLOR[kind]);
    const body = new Mesh(new BoxGeometry(0.12, 0.1, 0.04), new MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: 0.25, roughness: 0.5 }));
    body.position.z = 0.02; g.add(body); g.userData.body = body;
    const gl = new TextPlane(0.11, 0.05, 1000, { font: "bold 30px system-ui, sans-serif", color: "#0b1020", align: "center", pad: 0 });
    gl.setText(GLYPH[kind]); gl.position.set(0, 0, 0.041); g.add(gl);
    if (withLabel) {
      const label = new TextPlane(0.26, 0.06, 900, { font: "bold 34px system-ui, sans-serif", align: "center", pad: 4 });
      label.position.set(0, -0.085, 0.02); g.add(label); g.userData.label = label;
    }
    return g;
  }

  private portPos(id: string, out: boolean): Vec2 { const p = this.game.pos[id]; return { x: p.x + (out ? PORT_OUT : PORT_IN), y: p.y }; }

  private setSegment(m: Mesh, a: Vector3, b: Vector3) {
    const d = b.clone().sub(a), len = Math.max(d.length(), 1e-4);
    m.position.copy(a).addScaledVector(d, 0.5);
    m.quaternion.setFromUnitVectors(new Vector3(0, 1, 0), d.divideScalar(len));
    m.scale.set(1, len, 1);
  }

  private buildButtons() {
    const defs: [string, string, number, () => void][] = [
      ["play", "PLAY", 0.32, () => (this.status === "running" ? this.stop() : this.start())],
      ["speed", "SPEED 2x", 0.19, () => { this.speed = this.speed >= 4 ? 1 : this.speed * 2; }],
      ["hint", "HINT", 0.06, () => this.showHint()],
      ["reset", "RESET", -0.07, () => { this.stop(); this.game.reset(); }],
      ["prev", "< LEVEL", -0.2, () => this.setLevel(-1)],
      ["next", "LEVEL >", -0.33, () => this.setLevel(1)],
    ];
    for (const [id, label, y, fn] of defs) {
      const b = new TextPlane(0.22, 0.1, 800, { font: "bold 30px system-ui, sans-serif", bg: "#26346b", align: "center", pad: 18, radius: 22 });
      b.setText(label); b.position.set(0.95, y, 0.02); this.root.add(b); this.buttons[id] = b;
      this.reg(b, { click: fn });
    }
  }

  private buildBin() {
    const bin = new Mesh(new CircleGeometry(0.075, 24), new MeshBasicMaterial({ color: 0x5a1f2b }));
    bin.position.set(0.66, -0.52, 0.005); this.root.add(bin);
    const t = new TextPlane(0.16, 0.05, 800, { font: "bold 26px system-ui, sans-serif", align: "center", pad: 0 });
    t.setText("DELETE"); t.position.set(0.66, -0.52, 0.01); this.root.add(t);
    this.reg(bin, { move: (p, pid) => this.dragMove(p, pid), up: (p, pid) => this.dragEnd(p, pid) });
  }

  private rebuildShelf() {
    for (const c of [...this.root.children]) if (c.userData.shelf) { this.root.remove(c); this.interactives = this.interactives.filter((o) => o !== c); }
    const kinds = this.game.level.palette;
    const title = new TextPlane(0.7, 0.05, 800, { font: "bold 26px system-ui, sans-serif", color: "#9aa6d0", pad: 2 });
    title.setText("PINCH A PART, DRAG IT ONTO THE BOARD");
    title.position.set(-0.4, -0.44, 0.01); title.userData.shelf = true; this.root.add(title);
    kinds.forEach((k, i) => {
      const g = this.makeNodeBody(k, false);
      g.position.set(-0.6 + i * 0.19, -0.56, 0.01); g.scale.setScalar(0.85); g.userData.shelf = true;
      this.root.add(g);
      const body = g.userData.body as Mesh;
      const hit = new Mesh(new BoxGeometry(0.16, 0.14, 0.06), new MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }));
      hit.position.z = 0.02; g.add(hit);
      this.reg(hit, {
        down: (_p, pid) => { this.drag = { type: "new", kind: k, pid }; this.setGhost(k); },
        move: (p, pid) => this.dragMove(p, pid), up: (p, pid) => this.dragEnd(p, pid),
      });
      void body;
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
    const ids = new Set(d.nodes.map((n) => n.id));
    for (const [id, v] of this.nodes) if (!ids.has(id) || v.kind !== d.nodes.find((n) => n.id === id)!.kind) {
      this.root.remove(v.group); this.nodes.delete(id);
      this.interactives = this.interactives.filter((o) => !v.group.children.includes(o) && o.parent !== v.group);
    }
    for (const n of d.nodes) {
      if (this.nodes.has(n.id)) continue;
      const g = this.makeNodeBody(n.kind);
      const body = g.userData.body as Mesh, label = g.userData.label as TextPlane;
      const bar = new Mesh(new PlaneGeometry(0.1, 0.008), new MeshBasicMaterial({ color: 0x3ddc97 }));
      bar.position.set(0, 0.062, 0.041); g.add(bar);
      const id = n.id;
      this.reg(body, {
        down: (p, pid) => { if (this.game.locked.has(id) && false) return; this.drag = { type: "move", id, pid, moved: false, start: { ...this.game.pos[id] } }; void p; },
        move: (p, pid) => this.dragMove(p, pid), up: (p, pid) => this.dragEnd(p, pid),
      });
      if (n.kind !== "db") {
        const port = new Mesh(new SphereGeometry(0.024, 12, 10), new MeshBasicMaterial({ color: 0xffffff }));
        port.position.set(PORT_OUT, 0, 0.03); g.add(port);
        const hit = new Mesh(new SphereGeometry(0.04, 8, 6), new MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }));
        hit.position.copy(port.position); g.add(hit);
        this.reg(hit, {
          down: (_p, pid) => { this.drag = { type: "wire", from: id, pid }; },
          move: (p, pid) => this.dragMove(p, pid), up: (p, pid) => this.dragEnd(p, pid),
        });
      }
      this.root.add(g);
      this.nodes.set(n.id, { group: g, body, bar, label, kind: n.kind, lastLabel: "" });
    }
    // wires
    const keys = new Set(d.edges.map((e) => `${e.from}>${e.to}`));
    for (const [k, w] of this.wires) if (!keys.has(k)) {
      this.root.remove(w.line, w.handle);
      this.interactives = this.interactives.filter((o) => o !== w.handle);
      this.wires.delete(k);
    }
    for (const e of d.edges) {
      const k = `${e.from}>${e.to}`;
      if (this.wires.has(k)) continue;
      const line = new Mesh(new CylinderGeometry(0.004, 0.004, 1, 6), new MeshBasicMaterial({ color: 0x6f7db8 }));
      const handle = new Mesh(new CircleGeometry(0.017, 14), new MeshBasicMaterial({ color: 0x8a2b3a }));
      this.root.add(line, handle);
      this.reg(handle, { click: () => this.game.disconnect(e.from, e.to) });
      this.wires.set(k, { line, handle, from: e.from, to: e.to });
    }
  }

  private showOverlay(v: boolean) {
    this.overlay.visible = v;
    (this.overlay as any).pointerEvents = v ? "auto" : "none"; // pmndrs pointer-events: hidden overlay must not block the board
  }

  // ---------- run control ----------
  toast(msg: string) { this.toastPlane.setText(msg); this.toastPlane.visible = true; this.toastT = 3; this.onToast?.(msg); }

  start() {
    const issues = validate(this.game.design).filter((i) => i.severity === "error");
    if (issues.length) { this.toast(issues[0].message); return; }
    this.showOverlay(false); this.review = undefined; this.hintText = "";
    this.sim = new Simulator(this.game.design, this.game.level.workload, 7);
    this.particles.length = 0; this.acc = 0; this.status = "running";
    this.sim.onHop = ({ from, to, write }) => {
      const k = `${from}>${to}`;
      const b = this.budget.get(k) ?? 0;
      if (b >= 1 && this.particles.length < 470) { this.budget.set(k, b - 1); this.particles.push({ from, to, t: 0, speed: 1.2 + Math.random() * 0.4, write }); }
    };
  }

  stop() { this.status = "edit"; this.sim = undefined; this.particles.length = 0; this.pMesh.count = 0; }

  private finish() {
    const summary = this.sim!.summary();
    this.status = "done"; this.sim = undefined;
    const v = this.game.judge();
    void summary;
    this.showOverlay(true);
    this.overlay.setText(this.verdictText(v.passed, v.stars, v.reasons) + "\n\nAsking for a design review...");
    reviewWithFallback({ level: this.game.level, design: this.game.design, verdict: v }, defaultProviders(this.endpoint))
      .then((r) => { this.review = r; this.overlay.setText(this.verdictText(v.passed, v.stars, v.reasons) + `\n\n${r.headline}\n` + r.points.map((p) => "- " + p).join("\n") + "\n\n(tap to close)"); });
  }

  private verdictText(passed: boolean, stars: number, reasons: string[]) {
    const s = this.game.verdict?.summary;
    const stat = s ? `p50 ${s.p50Ms.toFixed(0)} ms   p99 ${s.p99Ms.toFixed(0)} ms   errors ${(s.errorRate * 100).toFixed(1)}%` : "";
    return `${passed ? "LEVEL CLEARED  " + "*".repeat(stars) : "NOT YET"}\n${stat}` + (passed ? "" : "\n" + reasons.join(" "));
  }

  setLevel(delta: number) {
    const i = LEVELS.indexOf(this.game.level) + delta;
    if (i < 0 || i >= LEVELS.length) return;
    this.stop(); this.showOverlay(false); this.game.load(i); this.rebuildShelf(); this.onLevelChange?.();
  }
  loadLevel(i: number) { this.stop(); this.showOverlay(false); this.game.load(i); this.rebuildShelf(); this.onLevelChange?.(); }

  showHint() {
    const g = this.game, d = g.design;
    const list: string[] = [];
    const errs = validate(d).filter((i) => i.severity === "error");
    if (errs.length) list.push(errs[0].message);
    else {
      const a = analyse(d, g.level.workload);
      list.push(...hintsFor(d, a.nodes));
      for (const k of g.level.goal.requires) if (!d.nodes.some((n) => n.kind === k)) list.push(`This level needs a ${k}. Pinch one from the shelf.`);
      if (!list.length) list.push(isRunnable(d) ? "Press PLAY and watch for red nodes." : "Wire everything from Users to the database.");
    }
    this.hintText = list[this.hintIdx++ % list.length];
    this.toast("Hint: " + this.hintText);
  }

  // ---------- per frame ----------
  update(dt: number) {
    this.time += dt;
    if (this.dirty) { this.sync(); if (!this.shelfBuilt) { this.rebuildShelf(); this.shelfBuilt = true; } }
    if (this.toastT > 0 && (this.toastT -= dt) <= 0) this.toastPlane.visible = false;

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
      if (this.sim.t >= total) this.finish();
    }
    for (const [k, r] of this.edgeRate) this.budget.set(k, Math.min(3, (this.budget.get(k) ?? 0) + dt * r * this.speed * 0.6));

    // nodes
    for (const [id, v] of this.nodes) {
      const p = this.game.pos[id]; if (!p) continue;
      v.group.position.set(p.x, p.y, 0.01);
      const s = snap?.[id];
      const mat = v.body.material as MeshStandardMaterial;
      const base = new Color(KIND_COLOR[v.kind]);
      if (s?.overloaded) {
        const pulse = 0.5 + 0.5 * Math.sin(this.time * 9);
        mat.color.copy(base).lerp(new Color(0xff2222), 0.75); mat.emissive.set(0xff1111); mat.emissiveIntensity = 0.4 + 0.9 * pulse;
      } else { mat.color.copy(base); mat.emissive.copy(base); mat.emissiveIntensity = 0.25; }
      const u = s ? Math.min(1.2, s.utilisation) : 0;
      v.bar.scale.x = Math.max(0.02, Math.min(1, u)); v.bar.position.x = -0.05 * (1 - v.bar.scale.x);
      (v.bar.material as MeshBasicMaterial).color.set(u > 0.95 ? 0xff3b3b : u > 0.7 ? 0xffb547 : 0x3ddc97);
      const n = this.game.design.nodes.find((x) => x.id === id)!;
      let txt = id;
      if (n.kind === "cache") txt += ` ${n.policy?.toUpperCase()} ${n.cacheSize}`;
      if (s && n.kind !== "client") txt += n.kind === "queue" ? `  backlog ${s.waiting}` : `  ${Math.round(s.arrivalRps)}/${n.capacityRps} rps`;
      if (s?.hitRate !== undefined) txt += `  hit ${(s.hitRate * 100).toFixed(0)}%`;
      if (s?.overloaded) txt += "  OVERLOAD";
      else if (!s && n.kind !== "client") txt += `  cap ${n.capacityRps}`;
      if (txt !== v.lastLabel) { v.lastLabel = txt; v.label.setText(txt, { color: s?.overloaded ? "#ff8080" : "#dfe6ff" }); }
    }
    // wires
    for (const w of this.wires.values()) {
      const a = this.portPos(w.from, true), b = this.portPos(w.to, false);
      this.setSegment(w.line, new Vector3(a.x, a.y, 0.03), new Vector3(b.x, b.y, 0.03));
      w.handle.position.set((a.x + b.x) / 2, (a.y + b.y) / 2, 0.035);
      const hot = snap?.[w.to]?.overloaded;
      (w.line.material as MeshBasicMaterial).color.set(hot ? 0xff5555 : 0x6f7db8);
    }
    // particles
    const m = new Matrix4(), q = new Quaternion(), sc = new Vector3(1, 1, 1), pos = new Vector3(), col = new Color();
    let n = 0;
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.t += dt * p.speed;
      if (p.t >= 1 || !this.game.pos[p.from] || !this.game.pos[p.to]) { this.particles.splice(i, 1); }
    }
    for (const p of this.particles) {
      const a = this.portPos(p.from, true), b = this.portPos(p.to, false);
      pos.set(a.x + (b.x - a.x) * p.t, a.y + (b.y - a.y) * p.t, 0.02);
      m.compose(pos, q, sc); this.pMesh.setMatrixAt(n, m);
      this.pMesh.setColorAt(n, col.set(p.write ? 0xffa040 : 0x40e8ff)); n++;
    }
    this.pMesh.count = n; this.pMesh.instanceMatrix.needsUpdate = true;
    if (this.pMesh.instanceColor) this.pMesh.instanceColor.needsUpdate = true;

    this.uiT -= dt;
    if (this.uiT <= 0) { this.uiT = 0.25; this.refreshInfo(snap); }
  }
  private shelfBuilt = false;

  private refreshInfo(snap?: Record<string, NodeSnap>) {
    const g = this.game, L = g.level;
    let text = `LEVEL ${L.id}: ${L.title.toUpperCase()}\n${L.brief}\n`;
    if (this.status === "running" && this.sim) {
      const s = this.sim.summary();
      text += `\nRUNNING  ${this.sim.t.toFixed(0)}s   p50 ${s.p50Ms.toFixed(0)} ms   p99 ${s.p99Ms.toFixed(0)} ms   errors ${(s.errorRate * 100).toFixed(1)}%`;
      const live = hintsFor(g.design, snap ?? {});
      if (live.length) text += `\nHINT: ${live[0]}`;
    } else {
      text += `\nCost ${g.cost}   ${this.hintText ? "HINT: " + this.hintText : "Wire it up, then press PLAY."}`;
    }
    this.info.setText(text);
    this.buttons.play.setText(this.status === "running" ? "STOP" : "PLAY", { bg: this.status === "running" ? "#8a2b3a" : "#1f7a4d" });
    this.buttons.speed.setText(`SPEED ${this.speed}x`);
  }
}

export function placeBoard(root: Group) {
  root.position.set(0, 0.98, -0.72);
  root.rotation.x = -0.55;
}
export type { Handlers as BoardHandlers };
