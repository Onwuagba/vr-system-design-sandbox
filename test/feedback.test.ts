import { test } from "node:test";
import assert from "node:assert/strict";
import { Sound } from "../src/xr/audio.js";
import { haptic, supportsHaptics } from "../src/xr/haptics.js";

function fakeCtx() {
  const made: string[] = [];
  const node = (kind: string) => () => { made.push(kind); return { connect() {}, start() {}, stop() {}, frequency: { setValueAtTime() {}, exponentialRampToValueAtTime() {}, value: 0 }, gain: { setValueAtTime() {}, exponentialRampToValueAtTime() {}, value: 0 }, positionX: { value: 0 }, positionY: { value: 0 }, positionZ: { value: 0 } }; };
  const ctx: any = { createOscillator: node("osc"), createGain: node("gain"), createPanner: node("panner"), destination: {}, currentTime: 0, state: "suspended", resumed: 0, resume() { this.resumed++; return Promise.resolve(); } };
  return { ctx, made };
}

test("audio: silent until unlocked, honours mute, positions board sounds with a panner", () => {
  const { ctx, made } = fakeCtx();
  const s = new Sound(() => ctx);
  s.play("place"); assert.equal(s.played, 0, "no sound before a user gesture");
  s.unlock(); assert.equal(ctx.resumed, 1); assert.equal(s.ready, true);
  s.play("place"); assert.equal(s.played, 1);
  s.play("overload", { x: -0.3, y: 0.1 }); assert.ok(made.includes("panner"), "spatialised");
  s.setMuted(true); s.play("success"); assert.equal(s.played, 2, "muted sounds are not started");
  s.setMuted(false); s.setVolume(0); s.play("success"); assert.equal(s.played, 2);
  s.setVolume(0.5); s.play("success"); assert.equal(s.played, 3);
});

test("audio: throttling keeps repeated alarms from piling up; missing WebAudio is harmless", () => {
  const { ctx } = fakeCtx();
  const s = new Sound(() => ctx); s.unlock();
  for (let i = 0; i < 10; i++) s.play("overload", { x: 0, y: 0 }, 1000, "overload:api1");
  assert.equal(s.played, 1);
  const none = new Sound(() => undefined); none.unlock(); none.play("place");
  assert.equal(none.ready, false);
  const broken = new Sound(() => { throw new Error("no audio"); }); broken.unlock(); broken.play("place");
});

test("haptics: pulses controllers with either API, skips bare hands, respects the setting and handedness", () => {
  const pulses: number[][] = [], rumbles: any[] = [];
  const oldStyle = { handedness: "right", gamepad: { hapticActuators: [{ pulse: (i: number, ms: number) => pulses.push([i, ms]) }] } };
  const newStyle = { handedness: "left", gamepad: { vibrationActuator: { playEffect: (t: string, o: any) => { rumbles.push([t, o]); return Promise.resolve(); } } } };
  const hand = { handedness: "right" };
  const session = { inputSources: [oldStyle, newStyle, hand] };
  assert.equal(supportsHaptics(session), true);
  assert.equal(supportsHaptics({ inputSources: [hand] }), false);
  assert.equal(supportsHaptics(null), false);
  assert.equal(haptic(session, "confirm"), 2);
  assert.deepEqual(pulses[0], [0.5, 30]); assert.equal(rumbles[0][0], "dual-rumble");
  assert.equal(haptic(session, "tap", "right"), 1);
  assert.equal(haptic(session, "tap", "right", false), 0);
  assert.equal(haptic({ inputSources: [hand] }, "error"), 0, "hand tracking has no haptics");
  assert.equal(haptic(undefined, "error"), 0);
  const throwing = { handedness: "right", gamepad: { hapticActuators: [{ pulse() { throw new Error("x"); } }] } };
  assert.doesNotThrow(() => haptic({ inputSources: [throwing] }, "error"));
});
