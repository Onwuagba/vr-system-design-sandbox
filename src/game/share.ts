// Share your design: a compact, validated snapshot that round-trips through JSON text, a URL hash or a saved slot.
// Imports are rebuilt from the part catalogue, so a shared file can never change a part's capacity.
import type { Design, Kind, Node } from "../sim/model.js";
import { KINDS, node } from "../sim/model.js";
import { edgeProblem } from "../sim/validate.js";

export interface Vec2 { x: number; y: number }
export interface Snapshot {
  v: 1; level: number;                 // level id (0 = sandbox, 100 = daily)
  nodes: { id: string; kind: Kind; policy?: string; size?: number; coalesce?: boolean; cap?: number }[];
  edges: [string, string][];
  pos: Record<string, [number, number]>;
  note?: string;
}

export function toSnapshot(level: number, d: Design, pos: Record<string, Vec2>, note?: string): Snapshot {
  return {
    v: 1, level,
    nodes: d.nodes.map((n) => ({ id: n.id, kind: n.kind,
      ...(n.kind === "cache" ? { policy: n.policy, size: n.cacheSize, coalesce: n.coalesce || undefined } : {}) })),
    edges: d.edges.map((e) => [e.from, e.to]),
    pos: Object.fromEntries(Object.entries(pos).map(([k, p]) => [k, [Math.round(p.x * 1000) / 1000, Math.round(p.y * 1000) / 1000]])),
    ...(note ? { note } : {}),
  };
}

export type Parsed = { ok: true; snapshot: Snapshot; design: Design; pos: Record<string, Vec2> } | { ok: false; error: string };

const POLICIES = ["lru", "lfu", "fifo"];
const ID = /^[A-Za-z][A-Za-z0-9_-]{0,23}$/;

/** Validate untrusted JSON and rebuild a Design from the part catalogue. */
export function parseSnapshot(raw: unknown): Parsed {
  if (!raw || typeof raw !== "object") return { ok: false, error: "That is not a design." };
  const s = raw as Partial<Snapshot>;
  if (s.v !== 1) return { ok: false, error: "Unknown design version." };
  if (!Array.isArray(s.nodes) || !Array.isArray(s.edges)) return { ok: false, error: "The design is missing parts or wires." };
  if (s.nodes.length > 60 || s.edges.length > 200) return { ok: false, error: "That design is too large." };
  const nodes: Node[] = [], ids = new Set<string>();
  for (const n of s.nodes) {
    if (!n || typeof n.id !== "string" || !ID.test(n.id)) return { ok: false, error: "A part has an invalid name." };
    if (!KINDS.includes(n.kind as Kind)) return { ok: false, error: `Unknown part type "${String(n.kind)}".` };
    if (ids.has(n.id)) return { ok: false, error: `Two parts are called ${n.id}.` };
    ids.add(n.id);
    const over: Partial<Node> = {};
    if (n.kind === "cache") {
      if (POLICIES.includes(n.policy as string)) over.policy = n.policy as Node["policy"];
      const size = Number(n.size);
      if (Number.isFinite(size)) over.cacheSize = Math.max(0, Math.min(2000, Math.round(size)));
      if (n.coalesce === true) over.coalesce = true;
    }
    nodes.push(node(n.id, n.kind as Kind, over));
  }
  const d: Design = { nodes, edges: [] };
  for (const e of s.edges) {
    if (!Array.isArray(e) || e.length !== 2 || typeof e[0] !== "string" || typeof e[1] !== "string") return { ok: false, error: "A wire is malformed." };
    if (!ids.has(e[0]) || !ids.has(e[1])) return { ok: false, error: "A wire points at a missing part." };
    const problem = edgeProblem(d, e[0], e[1]);
    if (problem) return { ok: false, error: `Bad wire ${e[0]} to ${e[1]}: ${problem}` };
    d.edges.push({ from: e[0], to: e[1] });
  }
  const pos: Record<string, Vec2> = {};
  for (const n of nodes) {
    const p = s.pos?.[n.id];
    pos[n.id] = Array.isArray(p) && Number.isFinite(p[0]) && Number.isFinite(p[1]) ? { x: Number(p[0]), y: Number(p[1]) } : { x: 0, y: 0 };
  }
  return { ok: true, snapshot: { ...(s as Snapshot) }, design: d, pos };
}

// base64url over UTF-8, no padding, safe in a URL hash.
export function encodeSnapshot(s: Snapshot): string {
  const bytes = new TextEncoder().encode(JSON.stringify(s));
  let bin = ""; for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
export function decodeSnapshot(text: string): Parsed {
  const t = text.trim();
  try {
    const json = t.startsWith("{") ? t : new TextDecoder().decode(Uint8Array.from(atob(t.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0)));
    return parseSnapshot(JSON.parse(json));
  } catch { return { ok: false, error: "Could not read that design." }; }
}

/** Accepts a full share URL, a bare code, or JSON text. */
export function extractCode(input: string): string {
  const m = /[#&?]d=([A-Za-z0-9_-]+)/.exec(input);
  return m ? m[1] : input;
}
