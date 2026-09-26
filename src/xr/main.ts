// Entry point. Kept small on purpose: it paints the page immediately, builds the board with plain three.js (no XR
// runtime), and only downloads the IWSDK/VR layer when the player asks to enter VR. Desktop and headset browsers
// both see a playable board in about the time it takes to fetch three.js.
import { AmbientLight, Color, DirectionalLight, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { App } from "./app.js";
import { GameView, placeBoard } from "./game-view.js";
import { attachKeys, attachPointer } from "./desktop.js";
import { LEVELS } from "../sim/levels.js";
import { extractCode } from "../game/share.js";

const params = new URLSearchParams(location.search);
const container = document.getElementById("app")!;
const boot = document.getElementById("boot");

function fatal(e: unknown) {
  console.error(e);
  const t = document.getElementById("toast");
  if (t) { t.textContent = "Failed to start: " + ((e as Error)?.message ?? e); t.style.display = "block"; }
  boot?.remove();
}

async function main() {
  const startLevel = Math.max(0, Math.min(LEVELS.length - 1, Number(params.get("level") ?? 1) - 1));
  const app = new App(undefined, startLevel);
  const mode = params.get("mode");
  if (mode === "sandbox") app.startSandbox(); else if (mode === "daily") app.startDaily();
  const scene = new Scene();
  scene.background = new Color(0x070b18);
  scene.add(new AmbientLight(0xffffff, 1.6));
  const sun = new DirectionalLight(0xffffff, 1.2); sun.position.set(0.5, 2, 1); scene.add(sun);
  const camera = new PerspectiveCamera(55, innerWidth / innerHeight, 0.05, 50);
  camera.position.set(0, 1.4, 1.0); camera.lookAt(0, 0.98, -0.72);

  const renderer = new WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(innerWidth, innerHeight);
  container.appendChild(renderer.domElement);

  const view = new GameView(app);
  view.endpoint = params.get("review");
  placeBoard(view.root, app.settings.heightOffset);
  scene.add(view.root);
  view.onBoardMoved = () => { if (!app.xrSession) placeBoard(view.root, app.settings.heightOffset); };

  const fit = () => {
    renderer.setSize(innerWidth, innerHeight); camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
    // The board plus its side panels is ~2.3 m wide; back the camera off on narrow windows so nothing is cropped.
    const usable = innerWidth > 900 ? (innerWidth - 350) / innerHeight : camera.aspect;
    const d = Math.max(1.72, 2.3 / (2 * Math.tan((55 * Math.PI) / 360) * usable) * 1.02);
    camera.position.set(0, 1.4 + (d - 1.72) * 0.25, 1.0 + (d - 1.72));
    camera.lookAt(0, 0.98, -0.72);
    // Leave room for the HUD panel on wide windows by sliding the picture to the right.
    const hudW = innerWidth > 900 ? 350 : 0;
    if (hudW) camera.setViewOffset(innerWidth, innerHeight, -hudW / 2, 0, innerWidth, innerHeight); else camera.clearViewOffset();
  };
  addEventListener("resize", fit); fit();

  let last = performance.now(), plain = true;
  const frame = () => {
    const now = performance.now(), dt = Math.min(0.1, (now - last) / 1000); last = now;
    view.update(dt);
    renderer.render(scene, camera);
  };
  renderer.setAnimationLoop(() => { if (plain) frame(); });
  const detach = attachPointer(view, renderer.domElement, camera);
  attachKeys(view);

  // A shared link opens straight into the design.
  const hash = extractCode(location.hash.slice(1));
  if (hash && location.hash.includes("d=")) {
    const err = app.importText(location.hash);
    view.refreshLevel();
    view.toast(err ?? "Opened a shared design.", !!err === true);
  }

  const { mountHud } = await import("./hud.js");
  mountHud(app, view, {
    enterVR: async () => {
      const vr = await import("./vr.js");
      await vr.enterXR({
        view, container,
        handOver: () => { plain = false; renderer.setAnimationLoop(null); detach(); scene.remove(view.root); renderer.domElement.style.display = "none"; },
      });
    },
    cardCanvas: () => renderer.domElement,
  });
  (window as any).__sds = { app, view, state: app.game, renderer, scene, camera };
  boot?.remove();
  console.log("[sds] ready");
}

main().catch(fatal);
