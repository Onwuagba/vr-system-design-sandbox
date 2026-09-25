import { CanvasTexture, Mesh, MeshBasicMaterial, PlaneGeometry, SRGBColorSpace } from "three";

export interface TextStyle { font?: string; color?: string; bg?: string; align?: CanvasTextAlign; pad?: number; lineHeight?: number; radius?: number }

/** A plane that shows wrapped canvas text; readable in VR without a font pipeline. */
export class TextPlane extends Mesh {
  private ctx: CanvasRenderingContext2D;
  private tex: CanvasTexture;
  private last = "";
  constructor(public wM: number, public hM: number, private pxPerM = 900, private style: TextStyle = {}) {
    const canvas = document.createElement("canvas");
    canvas.width = Math.ceil(wM * pxPerM); canvas.height = Math.ceil(hM * pxPerM);
    const tex = new CanvasTexture(canvas);
    tex.colorSpace = SRGBColorSpace;
    super(new PlaneGeometry(wM, hM), new MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false }));
    this.tex = tex;
    this.ctx = canvas.getContext("2d")!;
    this.setText("");
  }
  setText(text: string, style: TextStyle = {}) {
    const key = text + JSON.stringify(style);
    if (key === this.last) return;
    this.last = key;
    const s = { font: "bold 44px system-ui, sans-serif", color: "#ffffff", bg: "", align: "left" as CanvasTextAlign, pad: 24, lineHeight: 1.25, radius: 24, ...this.style, ...style };
    const { ctx } = this, W = ctx.canvas.width, H = ctx.canvas.height;
    ctx.clearRect(0, 0, W, H);
    if (s.bg) {
      ctx.fillStyle = s.bg; ctx.beginPath(); ctx.roundRect(0, 0, W, H, s.radius); ctx.fill();
    }
    ctx.font = s.font; ctx.fillStyle = s.color; ctx.textAlign = s.align; ctx.textBaseline = "top";
    const px = parseInt(/(\d+)px/.exec(s.font)?.[1] ?? "40", 10);
    const x = s.align === "center" ? W / 2 : s.align === "right" ? W - s.pad : s.pad;
    let y = s.pad;
    for (const para of text.split("\n")) {
      let line = "";
      for (const word of para.split(" ")) {
        const test = line ? `${line} ${word}` : word;
        if (ctx.measureText(test).width > W - 2 * s.pad && line) { ctx.fillText(line, x, y); y += px * s.lineHeight; line = word; } else line = test;
      }
      ctx.fillText(line, x, y); y += px * s.lineHeight;
    }
    this.tex.needsUpdate = true;
  }
}
