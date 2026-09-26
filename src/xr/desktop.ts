// Mouse and keyboard fallback so the board is fully usable in a normal browser tab.
import { Camera, Raycaster, Vector2, Vector3, Plane } from "three";
import type { GameView, Handlers } from "./game-view.js";

/** Pointer input on a canvas. Returns a function that removes every listener it added. */
export function attachPointer(view: GameView, canvas: HTMLElement, camera: Camera, inXR: () => boolean = () => false): () => void {
  const ray = new Raycaster(), ndc = new Vector2();
  let captured: Handlers | undefined, downTarget: Handlers | undefined, moved = false, dx = 0, dy = 0;
  const setRay = (e: PointerEvent) => {
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
  };
  const pick = (): { h?: Handlers; point: Vector3 } => {
    const hits = ray.intersectObjects(view.interactives, false);
    for (const hit of hits) {
      let vis = true;
      for (let a: any = hit.object; a; a = a.parent) if (!a.visible) vis = false;
      if (!vis) continue;
      const pe = (hit.object as any).pointerEvents ?? (hit.object.parent as any)?.pointerEvents;
      if (pe === "none") continue;
      let o: any = hit.object;
      while (o && !o.userData.h) o = o.parent;
      if (o) return { h: o.userData.h, point: hit.point };
    }
    return { point: planePoint() };
  };
  const planePoint = () => {
    view.root.updateMatrixWorld(true);
    const n = new Vector3(0, 0, 1).transformDirection(view.root.matrixWorld);
    const pl = new Plane().setFromNormalAndCoplanarPoint(n, view.root.getWorldPosition(new Vector3()));
    return ray.ray.intersectPlane(pl, new Vector3()) ?? new Vector3();
  };
  const down = (e: Event) => {
    const pe = e as PointerEvent;
    if (pe.button !== 0 || inXR()) return;
    view.app.unlockAudio();
    setRay(pe); view.root.updateMatrixWorld(true);
    const { h, point } = pick();
    downTarget = h; captured = h; moved = false; dx = pe.clientX; dy = pe.clientY;
    h?.down?.(point, -1);
  };
  const move = (e: Event) => {
    const pe = e as PointerEvent;
    setRay(pe);
    if (!captured) return;
    if (Math.hypot(pe.clientX - dx, pe.clientY - dy) > 5) moved = true;
    captured.move?.(planePoint(), -1);
  };
  const up = (e: Event) => {
    if (!captured && !downTarget) return;
    setRay(e as PointerEvent);
    const { h } = pick();
    const pt = planePoint();
    captured?.up?.(pt, -1);
    if (downTarget && h === downTarget && !moved) downTarget.click?.();
    captured = undefined; downTarget = undefined;
  };
  canvas.addEventListener("pointerdown", down); canvas.addEventListener("pointermove", move); window.addEventListener("pointerup", up);
  return () => { canvas.removeEventListener("pointerdown", down); canvas.removeEventListener("pointermove", move); window.removeEventListener("pointerup", up); };
}

/** Keyboard shortcuts. Added once for the page. */
export function attachKeys(view: GameView) {
  window.addEventListener("keydown", (ev) => {
    const t = ev.target as HTMLElement | null;
    if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT")) return;
    const k = ev.key.toLowerCase(), g = view.game, a = view.app;
    a.unlockAudio();
    if ((ev.ctrlKey || ev.metaKey) && k === "z") { ev.preventDefault(); (ev.shiftKey ? g.redo() : g.undo()); return; }
    if ((ev.ctrlKey || ev.metaKey) && k === "y") { ev.preventDefault(); g.redo(); return; }
    if (ev.ctrlKey || ev.metaKey || ev.altKey) return;
    if (k === " ") { ev.preventDefault(); view.status === "running" ? view.stop() : view.start(); }
    else if (k === "h") view.showHint();
    else if (k === "r") { view.stop(); g.reset(); view.refreshLevel(); }
    else if (k === "n") view.setLevel(1);
    else if (k === "p") view.setLevel(-1);
    else if (k === "m") view.menu.toggle();
    else if (k === "u") a.set("muted", !a.settings.muted);
    else if (k === "escape") { if (view.menu.isOpen) view.menu.close(); else if (view.overlayOpen) view.closeOverlay(); }
    else if (k >= "1" && k <= "9") view.loadLevel(Number(k) - 1);
    else if (k === "]") view.speed = view.speed >= 4 ? 1 : view.speed * 2;
  });
}
