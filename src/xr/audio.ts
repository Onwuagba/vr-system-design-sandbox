// Sound, synthesised with WebAudio so there is nothing to download. Positional (HRTF) for events that belong to a
// part on the board. Nothing plays until a user gesture unlocks the context, and mute/volume are honoured everywhere.
export type Sfx = "place" | "connect" | "error" | "delete" | "play" | "overload" | "drop" | "success" | "fail" | "kill" | "promote" | "click" | "star";

export interface AudioLike {
  createOscillator(): any; createGain(): any; createPanner?(): any; createBufferSource?(): any; createBuffer?(...a: any[]): any;
  createBiquadFilter?(): any; destination: any; currentTime: number; state?: string; resume?(): Promise<void>; sampleRate?: number;
  listener?: any;
}

export class Sound {
  private ctx?: AudioLike;
  private master?: any;
  private last = new Map<string, number>();
  private hum?: { gain: any };
  muted = false;
  volume = 0.6;
  /** Number of sounds actually started; lets tests and the UI confirm audio is live. */
  played = 0;
  constructor(private factory: () => AudioLike | undefined = defaultFactory) {}

  /** Must be called from a user gesture (pointer/key/XR select). Safe to call repeatedly. */
  unlock() {
    try {
      if (!this.ctx) {
        this.ctx = this.factory();
        if (!this.ctx) return;
        this.master = this.ctx.createGain();
        this.master.gain.value = this.volume;
        this.master.connect(this.ctx.destination);
      }
      if (this.ctx.state === "suspended") void this.ctx.resume?.();
    } catch { this.ctx = undefined; }
  }
  get ready(): boolean { return !!this.ctx; }

  setMuted(m: boolean) { this.muted = m; if (this.master) this.master.gain.value = m ? 0 : this.volume; if (m) this.setTraffic(0); }
  setVolume(v: number) { this.volume = Math.max(0, Math.min(1, v)); if (this.master && !this.muted) this.master.gain.value = this.volume; }

  /** `at` is a board-space position in metres (x right, y up); it places the sound in 3D. */
  play(name: Sfx, at?: { x: number; y: number }, minGapMs = 0, key: string = name) {
    if (this.muted || !this.ctx || this.volume <= 0) return;
    const now = performance.now();
    if (minGapMs && now - (this.last.get(key) ?? -1e9) < minGapMs) return;
    this.last.set(key, now);
    try { this.synth(name, at); this.played++; } catch { /* audio must never break the game */ }
  }

  private out(at?: { x: number; y: number }): any {
    const c = this.ctx!;
    if (!at || !c.createPanner) return this.master;
    const p = c.createPanner();
    p.panningModel = "HRTF"; p.distanceModel = "inverse"; p.refDistance = 1; p.rolloffFactor = 0.6;
    if (p.positionX) { p.positionX.value = at.x; p.positionY.value = 0.9 + at.y; p.positionZ.value = -0.7; } else p.setPosition?.(at.x, 0.9 + at.y, -0.7);
    p.connect(this.master);
    return p;
  }

  private tone(dest: any, type: string, f0: number, f1: number, t0: number, dur: number, vol: number) {
    const c = this.ctx!, o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(f0, t0);
    if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(Math.max(1, f1), t0 + dur);
    g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(vol, t0 + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(dest); o.start(t0); o.stop(t0 + dur + 0.02);
  }

  private noise(dest: any, t0: number, dur: number, vol: number, freq: number) {
    const c = this.ctx!;
    if (!c.createBuffer || !c.createBufferSource || !c.createBiquadFilter) return;
    const n = Math.floor((c.sampleRate ?? 44100) * dur), buf = c.createBuffer(1, n, c.sampleRate ?? 44100), d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n);
    const src = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
    src.buffer = buf; f.type = "bandpass"; f.frequency.value = freq; g.gain.value = vol;
    src.connect(f); f.connect(g); g.connect(dest); src.start(t0);
  }

  private synth(name: Sfx, at?: { x: number; y: number }) {
    const c = this.ctx!, t = c.currentTime, d = this.out(at);
    switch (name) {
      case "place": this.tone(d, "sine", 330, 660, t, 0.12, 0.35); break;
      case "connect": this.tone(d, "triangle", 520, 520, t, 0.08, 0.25); this.tone(d, "triangle", 780, 780, t + 0.07, 0.12, 0.25); break;
      case "error": this.tone(d, "sawtooth", 150, 110, t, 0.22, 0.22); break;
      case "delete": this.tone(d, "sine", 500, 120, t, 0.2, 0.3); break;
      case "click": this.tone(d, "sine", 700, 700, t, 0.04, 0.18); break;
      case "play": this.noise(d, t, 0.35, 0.3, 900); this.tone(d, "sine", 200, 500, t, 0.3, 0.15); break;
      case "overload": this.tone(d, "triangle", 320, 320, t, 0.14, 0.32); this.tone(d, "triangle", 320, 320, t + 0.22, 0.14, 0.32); break;
      case "drop": this.tone(d, "square", 900, 300, t, 0.04, 0.05); break;
      case "kill": this.tone(d, "sine", 110, 40, t, 0.5, 0.5); this.noise(d, t, 0.4, 0.4, 300); break;
      case "promote": this.tone(d, "sine", 523, 523, t, 0.15, 0.3); this.tone(d, "sine", 784, 784, t + 0.13, 0.25, 0.3); break;
      case "star": this.tone(d, "sine", 880, 1320, t, 0.18, 0.28); break;
      case "success": [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => this.tone(d, "triangle", f, f, t + i * 0.11, 0.35, 0.3)); break;
      case "fail": [392, 349.23, 293.66].forEach((f, i) => this.tone(d, "sine", f, f * 0.98, t + i * 0.16, 0.3, 0.28)); break;
    }
  }

  /** Quiet ambient hum that rises with traffic: you can hear the system get busy. 0 turns it off. */
  setTraffic(level: number) {
    if (!this.ctx) return;
    try {
      if (!this.hum) {
        if (level <= 0 || this.muted) return;
        const o = this.ctx.createOscillator(), g = this.ctx.createGain();
        o.type = "sine"; o.frequency.value = 70; g.gain.value = 0; o.connect(g); g.connect(this.master); o.start();
        this.hum = { gain: g };
      }
      this.hum.gain.gain.value = this.muted ? 0 : Math.min(0.06, level * 0.06);
    } catch { /* ignore */ }
  }
}

function defaultFactory(): AudioLike | undefined {
  const C = (globalThis as any).AudioContext ?? (globalThis as any).webkitAudioContext;
  return C ? new C() : undefined;
}
