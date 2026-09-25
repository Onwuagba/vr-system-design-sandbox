import {
  World, createSystem, launchXR, SessionMode, RayInteractable, PokeInteractable, ReferenceSpaceType,
} from "@iwsdk/core";
import { AmbientLight, Color, DirectionalLight } from "three";
import { GameState } from "../game/state.js";
import { LEVELS } from "../sim/levels.js";
import { GameView, placeBoard } from "./game-view.js";
import { attachDesktop } from "./desktop.js";

const params = new URLSearchParams(location.search);
const container = document.getElementById("app")!;

async function main() {
  console.log("[sds] creating world");
  const world = await World.create(container, {
    xr: {
      sessionMode: SessionMode.ImmersiveVR,
      referenceSpace: { type: ReferenceSpaceType.LocalFloor, fallbackOrder: [ReferenceSpaceType.Local, ReferenceSpaceType.Viewer] },
      // Hand tracking is optional so controllers still work; the game only needs pinch (select).
      features: { handTracking: true },
      offer: "always",
    },
    // Desktop mouse is handled by desktop.ts so behaviour is identical with or without a session.
    input: { canvasPointerEvents: false },
    render: { fov: 55, camera: { position: [0, 1.4, 1.0], lookAt: [0, 0.98, -0.72] } },
    features: { locomotion: false, grabbing: false },
  });

  console.log("[sds] world ready");
  world.scene.background = new Color(0x070b18);
  world.scene.add(new AmbientLight(0xffffff, 1.6));
  const sun = new DirectionalLight(0xffffff, 1.2); sun.position.set(0.5, 2, 1); world.scene.add(sun);

  const startLevel = Math.max(0, Math.min(LEVELS.length - 1, Number(params.get("level") ?? 1) - 1));
  const state = new GameState(startLevel);
  const view = new GameView(state);
  view.endpoint = params.get("review"); // optional LLM proxy, e.g. ?review=https://example.com/review
  console.log("[sds] view built");
  placeBoard(view.root);
  const entity = world.createTransformEntity(view.root);
  // Whole-board interactables: pinch ray from afar, poke with a fingertip up close. Child meshes
  // with pointer listeners receive the events.
  entity.addComponent(RayInteractable);
  entity.addComponent(PokeInteractable);

  class BoardSystem extends createSystem() {
    update(delta: number) { view.update(Math.min(delta, 0.1)); }
  }
  world.registerSystem(BoardSystem);

  attachDesktop(view, world.renderer.domElement, world.camera, () => world.renderer.xr.isPresenting);
  (window as any).__sds = { world, view, state }; // debugging / automated tests

  // ---- DOM HUD ----
  const levels = document.getElementById("levels")!;
  const refreshLevels = () => {
    levels.innerHTML = "";
    LEVELS.forEach((l, i) => {
      const b = document.createElement("button");
      b.textContent = `${l.id}`; b.title = l.title; b.className = state.level === l ? "on" : "";
      b.onclick = () => view.loadLevel(i);
      levels.appendChild(b);
    });
  };
  view.onLevelChange = refreshLevels; refreshLevels();
  document.getElementById("play")!.onclick = () => (view.status === "running" ? view.stop() : view.start());
  document.getElementById("reset")!.onclick = () => { view.stop(); state.reset(); };
  const toast = document.getElementById("toast")!; let tt: number;
  view.onToast = (m) => { toast.textContent = m; toast.style.display = "block"; clearTimeout(tt); tt = window.setTimeout(() => (toast.style.display = "none"), 3000); };

  const enter = document.getElementById("enter-vr") as HTMLButtonElement;
  if (navigator.xr) {
    navigator.xr.isSessionSupported("immersive-vr").then((ok) => {
      if (!ok) return;
      enter.hidden = false;
      enter.onclick = () => launchXR(world);
    }).catch(() => {});
  }
}

main().catch((e) => {
  console.error(e);
  const t = document.getElementById("toast")!; t.textContent = "Failed to start: " + (e?.message ?? e); t.style.display = "block";
});
