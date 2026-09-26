import type { EvictionPolicy } from "./model.js";

/** Real key/value-less cache with a selectable eviction policy, used by the simulator. */
export class Cache {
  private map = new Map<number, number>(); // key -> frequency
  hits = 0;
  misses = 0;
  constructor(public size: number, public policy: EvictionPolicy) {}

  get hitRate(): number { const t = this.hits + this.misses; return t ? this.hits / t : 0; }

  /** Returns true on hit. Does not insert on miss. */
  lookup(key: number): boolean {
    const f = this.map.get(key);
    if (f === undefined) { this.misses++; return false; }
    this.hits++;
    if (this.policy === "lru") { this.map.delete(key); this.map.set(key, f + 1); }
    else if (this.policy === "lfu") this.map.set(key, f + 1);
    return true;
  }

  insert(key: number): void {
    if (this.size <= 0 || this.map.has(key)) return;
    if (this.map.size >= this.size) this.evict();
    this.map.set(key, 1);
  }

  invalidate(key: number): void { this.map.delete(key); }
  clear(): void { this.map.clear(); }
  get count(): number { return this.map.size; }
  has(key: number): boolean { return this.map.has(key); }

  private evict(): void {
    if (this.policy === "lfu") {
      let victim = -1, best = Infinity;
      for (const [k, f] of this.map) if (f < best) { best = f; victim = k; }
      this.map.delete(victim);
    } else {
      // lru: oldest by recency (Map order); fifo: oldest by insertion (never reordered).
      this.map.delete(this.map.keys().next().value as number);
    }
  }
}
