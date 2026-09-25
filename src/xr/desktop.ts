// Mouse and keyboard fallback so the board is fully usable in a normal browser tab.
import { Camera, Raycaster, Vector2, Vector3, Plane } from "three";
import type { GameView, Handlers } from "./game-view.js";

export function attachDesktop(view: GameView, canvas: HTMLElement, camera: Camera, inXR: () => boolean = () => false) {
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
  canvas.addEventListener("pointerdown", (e) => {
    if ((e as PointerEvent).button !== 0 || inXR()) return;
    setRay(e); view.root.updateMatrixWorld(true);
    const { h, point } = pick();
    downTarget = h; captured = h; moved = false; dx = e.clientX; dy = e.clientY;
    h?.down?.(point, -1);
  });
  canvas.addEventListener("pointermove", (e) => {
    setRay(e);
    if (!captured) return;
    if (Math.hypot(e.clientX - dx, e.clientY - dy) > 5) moved = true;
    captured.move?.(planePoint(), -1);
  });
  window.addEventListener("pointerup", (e) => {
    if (!captured && !downTarget) return;
    setRay(e);
    const { h } = pick();
    const pt = planePoint();
    captured?.up?.(pt, -1);
    if (downTarget && h === downTarget && !moved) downTarget.click?.();
    captured = undefined; downTarget = undefined;
  });
  window.addEventListener("keydown", (ev) => {
    const k = ev.key.toLowerCase();
    if (k === " ") { ev.preventDefault(); view.status === "running" ? view.stop() : view.start(); }
    else if (k === "h") view.showHint();
    else if (k === "r") { view.stop(); view.game.reset(); }
    else if (k === "n") view.setLevel(1);
    else if (k === "p") view.setLevel(-1);
    else if (k >= "1" && k <= "5") view.loadLevel(Number(k) - 1);
    else if (k === "]") view.speed = view.speed >= 4 ? 1 : view.speed * 2;
  });
}
