// Immersive VR layer, loaded only when the player presses "Enter VR" (it pulls in the IWSDK runtime, physics and
// fonts, which is most of the download). The board itself is plain three.js, so it simply moves into the IWSDK world.
import { World, SessionMode, RayInteractable, PokeInteractable, ReferenceSpaceType, createSystem, launchXR } from "@iwsdk/core";
import { AmbientLight, Color, DirectionalLight, Vector3, type Group } from "three";
import type { GameView } from "./game-view.js";
import { placeBoard } from "./game-view.js";
import { attachPointer } from "./desktop.js";

export interface VrHost {
  view: GameView;
  container: HTMLElement;
  /** Stop the lightweight renderer and detach the board from its scene. */
  handOver(): void;
}

let started: Promise<World> | undefined;

export function startXR(host: VrHost): Promise<World> {
  if (started) return started;
  started = (async () => {
    const { view } = host;
    const world = await World.create(host.container, {
      xr: {
        sessionMode: SessionMode.ImmersiveVR,
        referenceSpace: { type: ReferenceSpaceType.LocalFloor, fallbackOrder: [ReferenceSpaceType.Local, ReferenceSpaceType.Viewer] },
        features: { handTracking: true },   // optional, so controllers still work; the game only needs pinch (select)
      },
      input: { canvasPointerEvents: false },  // mouse is handled by desktop.ts, identical with or without a session
      render: { fov: 55, camera: { position: [0, 1.4, 1.0], lookAt: [0, 0.98, -0.72] } },
      features: { locomotion: false, grabbing: false },
    });
    host.handOver();
    world.scene.background = new Color(0x070b18);
    world.scene.add(new AmbientLight(0xffffff, 1.6));
    const sun = new DirectionalLight(0xffffff, 1.2); sun.position.set(0.5, 2, 1); world.scene.add(sun);
    placeBoard(view.root, view.app.settings.heightOffset);
    const entity = world.createTransformEntity(view.root as Group);
    entity.addComponent(RayInteractable);   // pinch ray from afar
    entity.addComponent(PokeInteractable);  // fingertip poke up close

    class BoardSystem extends createSystem() { update(delta: number) { view.update(Math.min(delta, 0.1)); } }
    world.registerSystem(BoardSystem);
    attachPointer(view, world.renderer.domElement, world.camera, () => world.renderer.xr.isPresenting);

    // Seated calibration: put the board 0.75 m in front of the head, chest height, facing the player.
    view.recenter = () => {
      const head = world.camera.getWorldPosition(new Vector3());
      const dir = world.camera.getWorldDirection(new Vector3()); dir.y = 0; dir.normalize();
      const y = Math.max(0.6, head.y - 0.4);
      view.root.position.set(head.x + dir.x * 0.75, y, head.z + dir.z * 0.75);
      view.root.rotation.set(-0.55, Math.atan2(-dir.x, -dir.z), 0, "YXZ");
    };
    world.renderer.xr.addEventListener("sessionstart", () => { view.app.xrSession = world.renderer.xr.getSession() as any; view.app.unlockAudio(); view.recenter?.(); });
    world.renderer.xr.addEventListener("sessionend", () => { view.app.xrSession = null; placeBoard(view.root, view.app.settings.heightOffset); });
    (window as any).__sdsVr = { world };
    return world;
  })();
  started.catch(() => { started = undefined; });
  return started;
}

export async function enterXR(host: VrHost) {
  const world = await startXR(host);
  launchXR(world);
}
export { SessionMode };
