// Draws a shareable picture of a design onto any 2D canvas context (browser only; the layout math is pure).
import type { Design, Kind } from "../sim/model.js";
import type { Vec2 } from "./state.js";

export const CARD = { w: 1200, h: 630 };
const COLORS: Record<Kind, string> = { client: "#7c8cff", lb: "#b56cff", api: "#3ddc97", cache: "#ffb547", db: "#4fc3f7", queue: "#ff7ab8",
  replica: "#2ea6d9", cdn: "#ff8a3d", limiter: "#e05a5a", shard: "#8e7dff", broker: "#d94fb0", worker: "#9adf5a" };

/** Map board metres (1.5 x 0.8) to card pixels inside a content box. */
export function boardToCard(p: Vec2, box = { x: 60, y: 150, w: 1080, h: 420 }): Vec2 {
  return { x: box.x + ((p.x + 0.75) / 1.5) * box.w, y: box.y + ((0.4 - p.y) / 0.8) * box.h };
}

export function drawCard(ctx: CanvasRenderingContext2D, o: { title: string; subtitle: string; design: Design; pos: Record<string, Vec2>; stats?: string; stars?: number }) {
  const { w, h } = CARD;
  const g = ctx.createLinearGradient(0, 0, w, h); g.addColorStop(0, "#0b1020"); g.addColorStop(1, "#16204a");
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "#e8ecf8"; ctx.font = "bold 44px system-ui, sans-serif"; ctx.textBaseline = "top";
  ctx.fillText(o.title, 60, 36);
  ctx.fillStyle = "#9aa6d0"; ctx.font = "26px system-ui, sans-serif"; ctx.fillText(o.subtitle, 60, 96);
  if (o.stars !== undefined) { ctx.fillStyle = "#ffd166"; ctx.font = "bold 40px system-ui, sans-serif"; ctx.textAlign = "right"; ctx.fillText(`${o.stars} / 3 stars`, w - 60, 40); ctx.textAlign = "left"; }
  ctx.strokeStyle = "#6f7db8"; ctx.lineWidth = 3;
  const at = (id: string) => boardToCard(o.pos[id] ?? { x: 0, y: 0 });
  for (const e of o.design.edges) { const a = at(e.from), b = at(e.to); ctx.beginPath(); ctx.moveTo(a.x + 34, a.y); ctx.lineTo(b.x - 34, b.y); ctx.stroke(); }
  ctx.font = "bold 20px system-ui, sans-serif"; ctx.textAlign = "center";
  for (const n of o.design.nodes) {
    const p = at(n.id);
    ctx.fillStyle = COLORS[n.kind]; ctx.beginPath(); ctx.roundRect(p.x - 34, p.y - 26, 68, 52, 10); ctx.fill();
    ctx.fillStyle = "#0b1020"; ctx.fillText(n.kind === "client" ? "USERS" : n.kind.toUpperCase().slice(0, 6), p.x, p.y - 10);
    ctx.fillStyle = "#dfe6ff"; ctx.font = "16px system-ui, sans-serif"; ctx.fillText(n.id, p.x, p.y + 32); ctx.font = "bold 20px system-ui, sans-serif";
  }
  ctx.textAlign = "left";
  if (o.stats) { ctx.fillStyle = "#e8ecf8"; ctx.font = "24px system-ui, sans-serif"; ctx.fillText(o.stats, 60, h - 44); }
  ctx.fillStyle = "#6f7db8"; ctx.font = "18px system-ui, sans-serif"; ctx.textAlign = "right"; ctx.fillText("System Design Sandbox VR", w - 60, h - 40);
}
