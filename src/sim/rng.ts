// Seeded randomness so a design always gets the same verdict (fair puzzles, stable tests).
export type Rng = () => number;

export function mulberry32(seed: number): Rng {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Poisson-distributed count: Knuth for small lambda, normal approximation for large. */
export function poisson(lambda: number, rng: Rng): number {
  if (lambda <= 0) return 0;
  if (lambda > 30) {
    const u1 = Math.max(rng(), 1e-12), u2 = rng();
    const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
    return Math.max(0, Math.round(lambda + Math.sqrt(lambda) * z));
  }
  const L = Math.exp(-lambda);
  let k = 0, p = 1;
  do { k++; p *= rng(); } while (p > L);
  return k - 1;
}

/** Zipf sampler over keys 0..n-1 (key 0 is hottest). */
export class Zipf {
  private cdf: Float64Array;
  constructor(public n: number, public s: number) {
    this.cdf = new Float64Array(n);
    let sum = 0;
    for (let i = 0; i < n; i++) { sum += 1 / Math.pow(i + 1, s); this.cdf[i] = sum; }
    for (let i = 0; i < n; i++) this.cdf[i] /= sum;
  }
  sample(rng: Rng): number {
    const u = rng();
    let lo = 0, hi = this.n - 1;
    while (lo < hi) { const m = (lo + hi) >> 1; if (this.cdf[m] < u) lo = m + 1; else hi = m; }
    return lo;
  }
  /** Probability mass of the k hottest keys. */
  topMass(k: number): number { return k <= 0 ? 0 : this.cdf[Math.min(k, this.n) - 1]; }
}

export function percentile(sorted: number[], p: number): number {
  if (!sorted.length) return 0;
  const idx = Math.min(sorted.length - 1, Math.max(0, Math.ceil((p / 100) * sorted.length) - 1));
  return sorted[idx];
}
