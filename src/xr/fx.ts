// Juice: expanding rings, sparks and confetti on the board. All instanced or pooled, so it costs almost nothing.
// Every effect is skipped when reduced motion is on; state is still conveyed by colour and text.
import { Color, DoubleSide, Group, InstancedMesh, Matrix4, Mesh, MeshBasicMaterial, PlaneGeometry, Quaternion, RingGeometry, Vector3 } from "three";

interface Spark { x: number; y: number; vx: number; vy: number; life: number; max: number; size: number; g: number; color: Color; spin: number }
interface RingFx { mesh: Mesh; t: number; dur: number; from: number; to: number }

const CONFETTI = [0xffd166, 0xef476f, 0x06d6a0, 0x118ab2, 0xb56cff, 0xffffff];

export class Fx {
  root = new Group();
  reduced = false;
  private sparks: Spark[] = [];
  private inst: InstancedMesh;
  private rings: RingFx[] = [];
  private free: Mesh[] = [];
  private tmpM = new Matrix4(); private tmpQ = new Quaternion(); private tmpS = new Vector3(); private tmpP = new Vector3();
  private cap = 500;

  constructor() {
    this.inst = new InstancedMesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ color: 0xffffff, side: DoubleSide, transparent: true }), this.cap);
    this.inst.count = 0; this.inst.frustumCulled = false; this.inst.position.z = 0.06;
    this.root.add(this.inst);
  }

  /** A ring that grows and fades at (x, y) on the board. */
  ring(x: number, y: number, color: number, radius = 0.09, dur = 0.5) {
    if (this.reduced) return;
    const mesh = this.free.pop() ?? new Mesh(new RingGeometry(0.92, 1, 40), new MeshBasicMaterial({ transparent: true, side: DoubleSide, depthWrite: false }));
    (mesh.material as MeshBasicMaterial).color.set(color);
    mesh.position.set(x, y, 0.05); mesh.visible = true; this.root.add(mesh);
    this.rings.push({ mesh, t: 0, dur, from: radius * 0.4, to: radius });
  }

  burst(x: number, y: number, color: number, n = 14, speed = 0.18) {
    if (this.reduced) return;
    const c = new Color(color);
    for (let i = 0; i < n && this.sparks.length < this.cap; i++) {
      const a = Math.random() * Math.PI * 2, v = speed * (0.4 + Math.random());
      this.sparks.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: 0, max: 0.35 + Math.random() * 0.35, size: 0.008 + Math.random() * 0.007, g: 0, color: c, spin: 0 });
    }
  }

  /** Success celebration: confetti fountains up from the bottom of the board. */
  confetti(n = 140) {
    if (this.reduced) return;
    for (let i = 0; i < n && this.sparks.length < this.cap; i++) {
      const x = (Math.random() - 0.5) * 1.3;
      this.sparks.push({ x, y: -0.42, vx: (Math.random() - 0.5) * 0.35, vy: 0.55 + Math.random() * 0.6, life: -Math.random() * 0.4, max: 1.8 + Math.random() * 0.8,
        size: 0.014 + Math.random() * 0.012, g: -0.7, color: new Color(CONFETTI[i % CONFETTI.length]), spin: 4 + Math.random() * 8 });
    }
  }

  get active(): number { return this.sparks.length + this.rings.length; }
  clear() { this.sparks.length = 0; for (const r of this.rings) { r.mesh.visible = false; this.root.remove(r.mesh); this.free.push(r.mesh); } this.rings.length = 0; this.inst.count = 0; }

  update(dt: number) {
    for (let i = this.rings.length - 1; i >= 0; i--) {
      const r = this.rings[i];
      r.t += dt;
      const k = r.t / r.dur;
      if (k >= 1) { r.mesh.visible = false; this.root.remove(r.mesh); this.free.push(r.mesh); this.rings.splice(i, 1); continue; }
      const s = r.from + (r.to - r.from) * (1 - (1 - k) * (1 - k));
      r.mesh.scale.setScalar(s);
      (r.mesh.material as MeshBasicMaterial).opacity = 0.9 * (1 - k);
    }
    let n = 0;
    for (let i = this.sparks.length - 1; i >= 0; i--) {
      const p = this.sparks[i];
      p.life += dt;
      if (p.life < 0) continue;
      if (p.life >= p.max) { this.sparks.splice(i, 1); continue; }
      p.vy += p.g * dt; p.x += p.vx * dt; p.y += p.vy * dt;
    }
    for (const p of this.sparks) {
      if (p.life < 0 || n >= this.cap) continue;
      const fade = 1 - p.life / p.max;
      this.tmpP.set(p.x, p.y, 0);
      this.tmpQ.setFromAxisAngle(new Vector3(0, 0, 1), p.life * p.spin);
      const w = p.size * (p.spin ? 1 + Math.sin(p.life * p.spin * 2) * 0.6 : 1);
      this.tmpS.set(w * (0.4 + fade * 0.6), p.size * (0.4 + fade * 0.6), 1);
      this.tmpM.compose(this.tmpP, this.tmpQ, this.tmpS);
      this.inst.setMatrixAt(n, this.tmpM); this.inst.setColorAt(n, p.color); n++;
    }
    this.inst.count = n; this.inst.instanceMatrix.needsUpdate = true;
    if (this.inst.instanceColor) this.inst.instanceColor.needsUpdate = true;
  }
}
