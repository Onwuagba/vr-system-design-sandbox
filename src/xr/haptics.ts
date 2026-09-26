// Controller haptics through WebXR input sources. Hand tracking has no gamepad, so on bare hands this quietly does
// nothing. Two APIs exist in the wild: the older gamepad.hapticActuators[0].pulse(intensity, ms) (Quest Browser,
// Chrome) and gamepad.vibrationActuator.playEffect("dual-rumble", ...). We try both.
export type Pattern = "tap" | "confirm" | "warn" | "error" | "success";

const PATTERNS: Record<Pattern, [number, number][]> = {   // [intensity 0..1, ms], played back to back
  tap: [[0.25, 15]], confirm: [[0.5, 30]], warn: [[0.7, 60], [0, 40], [0.7, 60]], error: [[0.9, 120]],
  success: [[0.4, 40], [0, 50], [0.6, 40], [0, 50], [0.9, 90]],
};

export interface HapticSource { handedness?: string; gamepad?: any }
export interface HapticSession { inputSources?: Iterable<HapticSource> | ArrayLike<HapticSource> }

export function supportsHaptics(session?: HapticSession | null): boolean {
  return listSources(session).some((s) => !!(s.gamepad?.hapticActuators?.[0]?.pulse || s.gamepad?.vibrationActuator?.playEffect));
}

function listSources(session?: HapticSession | null): HapticSource[] {
  try { return session?.inputSources ? Array.from(session.inputSources as ArrayLike<HapticSource>) : []; } catch { return []; }
}

/** Returns the number of controllers that were pulsed. `hand` restricts to one side (your dominant hand). */
export function haptic(session: HapticSession | null | undefined, pattern: Pattern, hand?: "left" | "right", enabled = true): number {
  if (!enabled) return 0;
  let n = 0;
  for (const s of listSources(session)) {
    if (hand && s.handedness && s.handedness !== hand && s.handedness !== "none") continue;
    const g = s.gamepad;
    if (!g) continue;
    let t = 0, ok = false;
    for (const [i, ms] of PATTERNS[pattern]) {
      const start = t;
      t += ms;
      if (i <= 0) continue;
      const fire = () => {
        try {
          if (g.hapticActuators?.[0]?.pulse) g.hapticActuators[0].pulse(i, ms);
          else if (g.vibrationActuator?.playEffect) void g.vibrationActuator.playEffect("dual-rumble", { duration: ms, strongMagnitude: i, weakMagnitude: i * 0.7 });
        } catch { /* never let feedback break input */ }
      };
      if (start === 0) fire(); else setTimeout(fire, start);
      ok = true;
    }
    if (ok && (g.hapticActuators?.[0]?.pulse || g.vibrationActuator?.playEffect)) n++;
  }
  return n;
}
