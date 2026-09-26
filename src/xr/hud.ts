// Desktop HUD: a DOM control panel over the canvas. It drives the same App and GameView the 3D menu does, so a
// judge with a mouse sees every feature. In a headset the DOM is not visible; the in-world menu covers the same ground.
import { LEVELS } from "../sim/levels.js";
import { CONCEPTS } from "../game/concepts.js";
import { totalStars } from "../game/storage.js";
import { isDaily } from "../game/daily.js";
import type { App } from "./app.js";
import type { GameView } from "./game-view.js";

export interface HudOpts { enterVR: () => Promise<void>; cardCanvas: () => HTMLCanvasElement }

const h = <K extends keyof HTMLElementTagNameMap>(tag: K, attrs: Record<string, string> = {}, ...kids: (Node | string)[]): HTMLElementTagNameMap[K] => {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) k === "class" ? (e.className = v) : e.setAttribute(k, v);
  for (const c of kids) e.append(c);
  return e;
};

export function mountHud(app: App, view: GameView, opts: HudOpts) {
  const hud = document.getElementById("hud")!;
  hud.innerHTML = "";
  const g = app.game;

  const head = h("div", { class: "row head" }, h("h1", {}, "System Design Sandbox"), h("button", { id: "collapse", title: "Collapse", "aria-label": "Collapse panel" }, "-"));
  const tabs = h("div", { class: "row tabs", role: "tablist" });
  const tabDefs: [string, () => void][] = [["Campaign", () => view.loadLevel(Math.max(0, g.index))], ["Sandbox", () => view.loadSandbox()], ["Daily", () => view.loadDaily()]];
  const tabBtns = tabDefs.map(([l, fn]) => { const b = h("button", { role: "tab" }, l); b.onclick = fn; tabs.append(b); return b; });
  const levels = h("div", { class: "levels" });
  const run = h("div", { class: "row" });
  const mk = (label: string, id: string, fn: () => void, title = "") => { const b = h("button", { id, title }, label); b.onclick = fn; return b; };
  const play = mk("Play", "play", () => (view.status === "running" ? view.stop() : view.start()), "Space");
  run.append(play, mk("Reset", "reset", () => { view.stop(); g.reset(); view.refreshLevel(); }, "R"),
    mk("Undo", "undo", () => { g.undo(); }, "Ctrl+Z"), mk("Redo", "redo", () => { g.redo(); }, "Ctrl+Y"),
    mk("Hint", "hint", () => view.showHint(), "H"), mk("Speed", "speed", () => { view.speed = view.speed >= 4 ? 1 : view.speed * 2; }, "]"));
  const sandbox = h("div", { class: "sandbox" });
  const rps = h("input", { type: "range", min: "50", max: "3000", step: "50", value: "500", id: "rps", "aria-label": "Requests per second" });
  const mix = h("input", { type: "range", min: "0", max: "100", step: "5", value: "20", id: "mix", "aria-label": "Write percentage" });
  const rpsL = h("span", {}, "500"), mixL = h("span", {}, "20%");
  const onLoad = () => { view.setLoad(Number(rps.value), Number(mix.value) / 100); rpsL.textContent = rps.value; mixL.textContent = mix.value + "%"; };
  rps.oninput = onLoad; mix.oninput = onLoad;
  sandbox.append(h("label", {}, "Load ", rpsL, " rps", rps), h("label", {}, "Writes ", mixL, mix), mk("Burst x3", "burst", () => { const b = view.sim; if (!b) { view.toast("Press Play first."); return; } view.setLoad(Number(rps.value) * 3, Number(mix.value) / 100); setTimeout(() => onLoad(), 4000); }),
    h("small", {}, "While it runs, click any part to kill it. Click again to revive."));
  const tools = h("div", { class: "row" }, mk("Save", "save", () => app.save()), mk("Load", "load", () => { app.load(); view.refreshLevel(); }), mk("Share", "share", () => openShare()), mk("Glossary", "glossary", () => openGlossary()), mk("Menu", "menu", () => view.menu.toggle(), "M"));
  const toggles = h("div", { class: "toggles" });
  const enter = h("button", { id: "enter-vr", hidden: "" }, "Enter VR"); enter.onclick = async () => { enter.disabled = true; enter.textContent = "Loading VR..."; try { await opts.enterVR(); } catch (e) { view.toast("Could not start VR: " + ((e as Error).message ?? e)); } enter.disabled = false; enter.textContent = "Enter VR"; };
  const info = h("small", { class: "help" }, "Drag a part from the shelf onto the board. Drag from a part's right-hand dot to wire it. Click a wire's red dot to cut it. Click a cache to change its eviction. Drop a part on DELETE to remove it. In VR the same actions are a pinch (ray) or fingertip poke.");
  const stars = h("div", { class: "stars" });

  const body = h("div", { class: "body" }, tabs, levels, run, sandbox, tools, toggles, enter, stars, info);
  hud.append(head, body);
  document.getElementById("collapse")!.onclick = () => { body.hidden = !body.hidden; (document.getElementById("collapse") as HTMLElement).textContent = body.hidden ? "+" : "-"; };

  const toggleDefs: [string, () => boolean, () => void][] = [
    ["Sound", () => !app.settings.muted, () => app.set("muted", !app.settings.muted)],
    ["Reduced motion", () => app.settings.reducedMotion, () => { app.set("reducedMotion", !app.settings.reducedMotion); view.applySettings(); }],
    ["Large targets", () => app.settings.largeTargets, () => { app.set("largeTargets", !app.settings.largeTargets); view.applySettings(); }],
    ["Left-handed", () => app.settings.hand === "left", () => { app.set("hand", app.settings.hand === "left" ? "right" : "left"); view.applySettings(); }],
    ["Hints", () => app.settings.hints, () => app.set("hints", !app.settings.hints)],
    ["Haptics", () => app.settings.haptics, () => app.set("haptics", !app.settings.haptics)],
  ];
  const togBtns = toggleDefs.map(([label, get, fn]) => { const b = h("button", { class: "tog", role: "switch" }, label); b.onclick = () => { fn(); refresh(); }; toggles.append(b); return { b, get, label }; });
  toggles.append(h("label", { class: "vol" }, "Volume", (() => { const v = h("input", { type: "range", min: "0", max: "100", value: String(Math.round(app.settings.volume * 100)), "aria-label": "Volume" }); v.oninput = () => app.set("volume", Number(v.value) / 100); return v; })()));

  // ----- dialogs -----
  const dlg = h("div", { id: "dlg", hidden: "" }); document.body.append(dlg);
  const close = () => { dlg.hidden = true; dlg.innerHTML = ""; };
  const modal = (title: string, ...kids: (Node | string)[]) => {
    dlg.innerHTML = ""; dlg.hidden = false;
    const card = h("div", { class: "card", role: "dialog", "aria-label": title }, h("div", { class: "row head" }, h("h2", {}, title), (() => { const x = h("button", { "aria-label": "Close" }, "x"); x.onclick = close; return x; })()), ...kids);
    dlg.append(card);
  };
  addEventListener("keydown", (e) => { if (e.key === "Escape" && !dlg.hidden) close(); });
  const download = (name: string, blob: Blob) => { const a = h("a", { download: name }); a.href = URL.createObjectURL(blob); a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 4000); };
  const copy = async (text: string) => { try { await navigator.clipboard.writeText(text); view.toast("Copied to the clipboard.", false); } catch { view.toast("Copy blocked by the browser. Select the text and copy it manually."); } };

  function openShare() {
    const code = h("textarea", { readonly: "", rows: "3", "aria-label": "Share link" }); code.value = app.shareUrl();
    const paste = h("textarea", { rows: "3", placeholder: "Paste a share link, code or JSON here", "aria-label": "Import design" });
    const msg = h("p", { class: "msg" }, "");
    const b = (label: string, fn: () => void) => { const x = h("button", {}, label); x.onclick = fn; return x; };
    modal("Share your design",
      h("p", {}, "Send this link. Opening it loads your design on the same level."), code,
      h("div", { class: "row" }, b("Copy link", () => copy(code.value)), b("Copy JSON", () => copy(app.exportJson())),
        b("Download JSON", () => download("design.json", new Blob([app.exportJson()], { type: "application/json" }))),
        b("Download image", async () => { const bl = await app.cardBlob(); if (bl) download("my-system-design.png", bl); })),
      h("h3", {}, "Import"), paste,
      h("div", { class: "row" }, b("Import", () => { const err = app.importText(paste.value); view.refreshLevel(); msg.textContent = err ?? "Imported. Undo restores your previous board."; if (!err) setTimeout(close, 700); })), msg);
  }
  function openGlossary() {
    const list = h("dl", { class: "gloss" });
    for (const c of CONCEPTS) list.append(h("dt", {}, c.term), h("dd", {}, `${c.short} ${c.why}`));
    modal("Glossary", list);
  }

  // ----- refresh -----
  function refresh() {
    tabBtns.forEach((b, i) => { const on = ["campaign", "sandbox", "daily"][i] === g.mode; b.classList.toggle("on", on); b.setAttribute("aria-selected", String(on)); });
    levels.hidden = g.mode !== "campaign"; sandbox.hidden = g.mode !== "sandbox";
    levels.innerHTML = "";
    LEVELS.forEach((l, i) => {
      const s = app.progress[l.id] ?? 0;
      const b = h("button", { class: g.mode === "campaign" && g.index === i ? "on" : "", title: `${l.title}${s ? " (" + s + " stars)" : ""}` }, String(l.id), h("i", {}, "*".repeat(s)));
      b.onclick = () => view.loadLevel(i); levels.append(b);
    });
    stars.textContent = g.mode === "daily" ? `Daily ${app.daily.key}: par cost ${app.daily.par}. Best: ${app.dailyScores[0]?.score ?? "none yet"}` : `Stars ${totalStars(app.progress)} / ${LEVELS.length * 3}`;
    for (const t of togBtns) { const on = t.get(); t.b.classList.toggle("on", on); t.b.setAttribute("aria-checked", String(on)); }
    (document.getElementById("undo") as HTMLButtonElement).disabled = !g.canUndo;
    (document.getElementById("redo") as HTMLButtonElement).disabled = !g.canRedo;
    (document.getElementById("load") as HTMLButtonElement).disabled = !app.hasSave;
    document.title = isDaily(g.level) ? "System Design Sandbox VR: Daily" : "System Design Sandbox VR";
  }
  const light = () => {
    (document.getElementById("undo") as HTMLButtonElement).disabled = !g.canUndo;
    (document.getElementById("redo") as HTMLButtonElement).disabled = !g.canRedo;
  };
  app.onChange(refresh); g.onChange(light); view.onLevelChange = refresh;
  setInterval(() => { play.textContent = view.status === "running" ? "Stop" : "Play"; play.classList.toggle("stop", view.status === "running"); (document.getElementById("speed") as HTMLElement).textContent = `Speed ${view.speed}x`; }, 200);
  refresh();

  if (navigator.xr) navigator.xr.isSessionSupported("immersive-vr").then((ok) => { if (ok) enter.hidden = false; }).catch(() => {});
  const toast = document.getElementById("toast")!; let tt: number;
  view.onToast = (m) => { toast.textContent = m; toast.style.display = "block"; clearTimeout(tt); tt = window.setTimeout(() => (toast.style.display = "none"), 3500); };
  void opts.cardCanvas;
}
