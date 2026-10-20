// Import your own architecture (docker-compose, Mermaid flowchart or JSON) and turn it into an incident drill.
// Pure: no rendering. Anything it cannot map is reported in `warnings`, never guessed silently.
import type { Design, Edge, Kind, Node, Workload } from "../sim/model.js";
import { COST, cost, node } from "../sim/model.js";
import { canConnect, validate } from "../sim/validate.js";
import type { Level } from "../sim/levels.js";

export const DRILL_ID = 101;

export interface ParsedStack { design: Design; warnings: string[]; labels: Record<string, string> }

// Order matters: first match wins. Tested against "<service name> <image>" lowercased.
const KIND_RULES: [RegExp, Kind][] = [
  [/\b(replica|read-?only|standby|follower)\b/, "replica"],
  [/\b(cloudfront|fastly|cdn|akamai|varnish)\b/, "cdn"],
  [/\b(rate[- ]?limit|limiter|throttl)\b/, "limiter"],
  [/\b(nginx|haproxy|traefik|envoy|lb|load[- ]?balancer|alb|elb|ingress|gateway)\b/, "lb"],
  [/\b(redis|memcached?|elasticache|valkey|cache)\b/, "cache"],
  [/\b(kafka|rabbitmq|nats|sqs|pubsub|pulsar|broker|rabbit)\b/, "broker"],
  [/\b(worker|celery|sidekiq|consumer|job|cron)\b/, "worker"],
  [/\b(queue)\b/, "queue"],
  [/\b(shard|vitess|router|mongos)\b/, "shard"],
  [/\b(postgres(ql)?|mysql|mariadb|mongo(db)?|cockroach(db)?|dynamo(db)?|cassandra|sqlite|database|db|rds|aurora)\b/, "db"],
  [/\b(users?|clients?|browser|mobile|internet|traffic|customers?)\b/, "client"],
  [/\b(api|app|web|server|service|backend|frontend|php|node|django|rails|flask|spring|fastapi|express|go|java)\b/, "api"],
];

export function inferKind(name: string, image = ""): Kind | undefined {
  const s = `${name} ${image}`.toLowerCase().replace(/[_./:]/g, " ");
  for (const [re, k] of KIND_RULES) if (re.test(s)) return k;
  return undefined;
}

const slug = (s: string) => s.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "node";

class Builder {
  nodes: Node[] = []; edges: Edge[] = []; warnings: string[] = []; labels: Record<string, string> = {};
  private counts: Partial<Record<Kind, number>> = {};
  has(id: string) { return this.nodes.some((n) => n.id === id); }
  add(rawId: string, kind: Kind, label: string, over: Partial<Node> = {}): string {
    let id = slug(rawId); if (this.has(id)) return id;
    if (kind === "client") id = "users";
    if (this.has(id)) return id;
    this.counts[kind] = (this.counts[kind] ?? 0) + 1;
    this.nodes.push(node(id, kind, over)); this.labels[id] = label;
    return id;
  }
  link(from: string, to: string) {
    if (from === to || this.edges.some((e) => e.from === from && e.to === to)) return;
    this.edges.push({ from, to });
  }
}

function finish(b: Builder): ParsedStack {
  // One entry door. Anything nothing feeds into (and that can receive from users) is a root.
  if (!b.nodes.some((n) => n.kind === "client")) b.add("users", "client", "Users");
  const users = b.nodes.find((n) => n.kind === "client")!;
  const incoming = new Set(b.edges.map((e) => e.to));
  const roots = b.nodes.filter((n) => n.id !== users.id && !incoming.has(n.id) && canConnect("client", n.kind));
  const rootsPref = roots.filter((n) => n.kind === "cdn" || n.kind === "limiter" || n.kind === "lb");
  const entry = rootsPref.length ? rootsPref : roots;
  if (b.edges.every((e) => e.from !== users.id)) {
    for (const r of entry.slice(0, 1)) b.link(users.id, r.id);
    if (entry.length > 1) {
      // Users enter through one door; fan out through a generated load balancer rather than dropping services.
      const lb = b.add("lb", "lb", "Load balancer (added)");
      b.edges = b.edges.filter((e) => e.from !== users.id);
      b.link(users.id, lb);
      for (const r of entry) if (canConnect("lb", r.kind)) b.link(lb, r.id);
      b.warnings.push("Several entry points found, so a load balancer was added in front of them.");
    }
  }
  // Compose and diagrams rarely draw cache -> database. A cache, queue, broker or worker with nowhere to send work gets
  // the stack's data store, and the user is told it was inferred.
  const store = b.nodes.find((n) => n.kind === "shard") ?? b.nodes.find((n) => n.kind === "db");
  if (store) for (const n of b.nodes) {
    if (["cache", "queue", "broker", "worker"].includes(n.kind) && !b.edges.some((e) => e.from === n.id) && canConnect(n.kind, store.kind)) {
      b.link(n.id, store.id); b.warnings.push(`Assumed ${b.labels[n.id] ?? n.id} sends misses and work on to ${b.labels[store.id] ?? store.id}.`);
    }
  }
  // Drop edges the simulator cannot route, and say so.
  const byId = new Map(b.nodes.map((n) => [n.id, n]));
  b.edges = b.edges.filter((e) => {
    const a = byId.get(e.from), c = byId.get(e.to);
    if (!a || !c) return false;
    if (canConnect(a.kind, c.kind)) return true;
    b.warnings.push(`Skipped ${b.labels[a.id] ?? a.id} -> ${b.labels[c.id] ?? c.id}: ${a.kind} cannot send traffic to ${c.kind} in this model.`);
    return false;
  });
  const design: Design = { nodes: b.nodes, edges: b.edges };
  for (const i of validate(design)) if (i.severity === "error") b.warnings.push(i.message);
  return { design, warnings: [...new Set(b.warnings)], labels: b.labels };
}

// ---------- JSON ----------
function parseJson(text: string): ParsedStack {
  const j = JSON.parse(text) as { nodes?: unknown[]; edges?: unknown[] };
  const b = new Builder();
  for (const raw of j.nodes ?? []) {
    const n = (typeof raw === "string" ? { id: raw } : raw) as Partial<Node> & { id: string; type?: string; label?: string };
    const kind = (n.kind ?? (n.type as Kind) ?? inferKind(n.id, n.label ?? "")) as Kind | undefined;
    if (!kind) { b.warnings.push(`Could not tell what "${n.id}" is; treated as an API server.`); }
    const { id: _i, kind: _k, type: _t, label, ...rest } = n as any;
    b.add(n.id, kind ?? "api", label ?? n.id, rest);
  }
  for (const raw of j.edges ?? []) {
    const e = Array.isArray(raw) ? { from: String(raw[0]), to: String(raw[1]) } : (raw as Edge);
    b.link(slug(e.from), slug(e.to));
  }
  return finish(b);
}

// ---------- Mermaid ----------
const SHAPE = /^([A-Za-z0-9_.-]+)\s*(?:\[\(?"?([^\]"]*)"?\)?\]|\(\(?"?([^)"]*)"?\)?\)|\{"?([^}"]*)"?\}|>"?([^\]"]*)"?\])?$/;
function parseMermaid(text: string): ParsedStack {
  const b = new Builder(); const ids = new Map<string, string>();
  // A node may be drawn bare (A --> B) before its label appears (B[Database]); read every label first so ids are readable.
  const labelOf = new Map<string, string>();
  for (const m of text.matchAll(/([A-Za-z0-9_.-]+)\s*(?:\[\(?"?([^\]"]*)"?\)?\]|\(\(?"?([^)"]*)"?\)?\)|\{"?([^}"]*)"?\})/g)) {
    const l = (m[2] ?? m[3] ?? m[4] ?? "").trim(); if (l && !labelOf.has(m[1])) labelOf.set(m[1], l);
  }
  const ensure = (token: string): string | undefined => {
    const m = token.trim().match(SHAPE); if (!m) return undefined;
    const raw = m[1], label = (m[2] ?? m[3] ?? m[4] ?? m[5] ?? labelOf.get(m[1]) ?? "").trim();
    if (!ids.has(raw) || (label && b.labels[ids.get(raw)!] === raw)) {
      let kind = inferKind(label || raw);
      if (!kind) { kind = "api"; b.warnings.push(`Could not tell what "${label || raw}" is; treated as an API server.`); }
      const id = ids.get(raw) ?? b.add(label || raw, kind, label || raw);
      ids.set(raw, id);
      if (label) b.labels[id] = label;
      const nd = b.nodes.find((n) => n.id === id); if (nd && label && nd.kind !== kind) Object.assign(nd, node(id, kind));
    }
    return ids.get(raw);
  };
  for (let line of text.split(/\r?\n/)) {
    line = line.replace(/%%.*$/, "").trim();
    if (!line || /^(graph|flowchart|subgraph|end|classDef|class |style |linkStyle|direction)/i.test(line)) continue;
    const parts = line.split(/\s*(?:-->|---|==>|-\.->|--[ox]|<-->)\s*(?:\|[^|]*\|\s*)?/).filter(Boolean);
    const seq = parts.map((p) => ensure(p.replace(/;$/, "")));
    for (let i = 0; i < seq.length - 1; i++) if (seq[i] && seq[i + 1]) b.link(seq[i]!, seq[i + 1]!);
  }
  return finish(b);
}

// ---------- docker-compose (the small YAML subset compose files use) ----------
interface Svc { name: string; image: string; deps: string[]; replicas: number; ports: boolean }
function parseCompose(text: string): ParsedStack {
  const lines = text.split(/\r?\n/).map((l) => l.replace(/\s+#.*$/, "").replace(/\t/g, "  ")).filter((l) => l.trim() && !l.trim().startsWith("#"));
  const indent = (l: string) => l.length - l.trimStart().length;
  const svcs: Svc[] = [];
  let i = lines.findIndex((l) => /^services\s*:/.test(l));
  if (i < 0) throw new Error("no services: section");
  const base = indent(lines[i + 1] ?? "");
  for (i += 1; i < lines.length; i++) {
    const l = lines[i]; if (indent(l) < base) break;
    if (indent(l) === base && /^[A-Za-z0-9_.-]+\s*:/.test(l.trim())) {
      const s: Svc = { name: l.trim().replace(/\s*:.*$/, ""), image: "", deps: [], replicas: 1, ports: false };
      let j = i + 1;
      for (; j < lines.length && indent(lines[j]) > base; j++) {
        const t = lines[j].trim();
        const im = t.match(/^image\s*:\s*(.+)$/); if (im) s.image = im[1].replace(/["']/g, "");
        const rp = t.match(/^replicas\s*:\s*(\d+)/); if (rp) s.replicas = Math.min(6, Math.max(1, Number(rp[1])));
        if (/^ports\s*:/.test(t)) s.ports = true;
        if (/^depends_on\s*:/.test(t)) {
          const inlineList = t.match(/\[(.*)\]/);
          if (inlineList) s.deps.push(...inlineList[1].split(",").map((x) => x.trim().replace(/["']/g, "")).filter(Boolean));
          const di = indent(lines[j]);
          for (let k = j + 1; k < lines.length && indent(lines[k]) > di; k++) {
            const d = lines[k].trim();
            const li = d.match(/^-\s*(.+)$/); if (li) s.deps.push(li[1].replace(/["']/g, "").trim());
            else if (indent(lines[k]) === indent(lines[j + 1] ?? "") && /^[A-Za-z0-9_.-]+\s*:/.test(d)) s.deps.push(d.replace(/\s*:.*$/, ""));
          }
        }
      }
      svcs.push(s); i = j - 1;
    }
  }
  const b = new Builder(); const group = new Map<string, string[]>();
  for (const s of svcs) {
    let kind = inferKind(s.name, s.image);
    if (!kind) { kind = "api"; b.warnings.push(`Could not tell what "${s.name}" is; treated as an API server.`); }
    const n = kind === "api" ? s.replicas : 1; const ids: string[] = [];
    for (let r = 1; r <= n; r++) ids.push(b.add(n > 1 ? `${s.name}-${r}` : s.name, kind, n > 1 ? `${s.name} ${r}` : s.name));
    group.set(s.name, ids);
  }
  // depends_on means "needs": api depends_on db => traffic flows api -> db.
  for (const s of svcs) for (const d of s.deps) for (const f of group.get(s.name) ?? []) for (const t of group.get(d) ?? []) b.link(f, t);
  // A service that sits in front (an lb) is usually depended on by nothing and depends on nothing: connect it to the apis.
  const lb = b.nodes.find((n) => n.kind === "lb");
  if (lb && !b.edges.some((e) => e.from === lb.id)) for (const n of b.nodes) if (n.kind === "api") b.link(lb.id, n.id);
  return finish(b);
}

export function parseStack(text: string): ParsedStack {
  const t = text.trim();
  if (!t) throw new Error("Paste a docker-compose file, a Mermaid flowchart or JSON.");
  let out: ParsedStack;
  if (t.startsWith("{")) out = parseJson(t);
  else if (/^services\s*:/m.test(t)) out = parseCompose(t);
  else out = parseMermaid(t);
  if (out.design.nodes.filter((n) => n.kind !== "client").length === 0) throw new Error("No services found in that text.");
  return out;
}

// ---------- incident drills ----------
export interface Drill { id: string; title: string; story: string; brief: (rps: number) => string; lesson: string; concepts: string[]; workload: (rps: number, d: Design) => Workload }

const base = { writeFraction: 0.1, keyspace: 1000, zipfS: 1, warmCaches: true };
const firstOf = (d: Design, k: Kind) => d.nodes.find((n) => n.kind === k)?.id;

export const DRILLS: Drill[] = [
  { id: "spike", title: "Traffic spike", story: "A launch post goes viral and traffic triples for a few seconds.",
    brief: (rps) => `Normal load is ${rps} rps. It jumps to ${rps * 3} for six seconds. Stay up.`, lesson: "Headroom and queues absorb a burst. Averages hide the peak.", concepts: ["headroom", "overload"],
    workload: (rps) => ({ ...base, phases: [{ untilSec: 5, rps }, { untilSec: 11, rps: rps * 3 }, { untilSec: 24, rps }] }) },
  { id: "hotkey", title: "Hot key", story: "One product page is suddenly most of your traffic.",
    brief: (rps) => `${rps * 2} rps and most of it hits one key.`, lesson: "A tiny cache in front of the hot key beats sharding.", concepts: ["hot-key", "cache"],
    workload: (rps) => ({ ...base, keyspace: 300, zipfS: 1.5, writeFraction: 0.005, phases: [{ untilSec: 20, rps: rps * 2 }] }) },
  { id: "failover", title: "Database failover", story: "The primary database dies in the middle of a busy morning.",
    brief: (rps) => `At ${rps} rps the database crashes at 8 seconds. Survive it.`, lesson: "A replica and a queue hide the gap while a standby takes over.", concepts: ["failover", "replica"],
    workload: (rps, d) => ({ ...base, writeFraction: 0.2, phases: [{ untilSec: 24, rps }], events: [{ atSec: 8, kill: firstOf(d, "db") ?? "db" }] }) },
  { id: "stampede", title: "Cache stampede", story: "A deploy flushes the cache and every request now misses at once.",
    brief: (rps) => `At ${rps * 2} rps the cache empties at 8 seconds. The database takes the full load.`, lesson: "Coalescing misses and warm caches stop the herd.", concepts: ["thundering-herd", "coalescing"],
    workload: (rps) => ({ ...base, writeFraction: 0.02, phases: [{ untilSec: 24, rps: rps * 2 }], events: [{ atSec: 8, flushCache: true }] }) },
  { id: "serverloss", title: "Lose a server", story: "One of your API servers falls over.",
    brief: (rps) => `At ${rps} rps an API server dies at 8 seconds.`, lesson: "Redundancy only helps if there is headroom left when one is lost.", concepts: ["spof", "health-check"],
    workload: (rps, d) => ({ ...base, phases: [{ untilSec: 22, rps }], events: [{ atSec: 8, kill: firstOf(d, "api") ?? "api1" }] }) },
];

/** A load that the stack comfortably handles when healthy, so the drill (not the baseline) is what breaks it. */
export function baselineRps(d: Design): number {
  const apis = d.nodes.filter((n) => n.kind === "api"), dbs = d.nodes.filter((n) => n.kind === "db");
  const front = apis.reduce((s, n) => s + n.capacityRps, 0), back = dbs.reduce((s, n) => s + n.capacityRps, 0) || front;
  return Math.max(100, Math.round((Math.min(front, back * 2) * 0.45) / 50) * 50);
}

export function drillLevel(parsed: ParsedStack, drillId = "spike", rps?: number): Level {
  const dr = DRILLS.find((x) => x.id === drillId) ?? DRILLS[0];
  const load = rps ?? baselineRps(parsed.design);
  const start = structuredClone(parsed.design);
  const palette = (Object.keys(COST) as Kind[]).filter((k) => k !== "client");
  return {
    id: DRILL_ID, chapter: "Drill", title: `Drill: ${dr.title}`, story: dr.story, brief: `${dr.brief(load)} Your stack costs ${cost(start)}; fix it for as little as you can.`,
    lesson: dr.lesson, concepts: dr.concepts, workload: dr.workload(load, start), start, palette,
    goal: { maxErrorRate: 0.02, maxP99Ms: 400, maxEndBacklog: 60, requires: [] }, starBudget: Math.ceil(cost(start) * 1.3),
    solutions: [{ name: "Your stack as imported", build: () => structuredClone(parsed.design) }],
  };
}

export const isDrill = (l: Level) => l.id === DRILL_ID;

/** Hands-only presets for the headset, where nothing can be pasted. */
export const SAMPLE_STACKS: { id: string; title: string; text: string }[] = [
  { id: "monolith", title: "Monolith + Postgres", text: "graph LR\n  U[Users] --> A[App server]\n  A --> D[(Postgres)]" },
  { id: "saas", title: "Typical SaaS", text: "graph LR\n  U[Users] --> L[nginx]\n  L --> A1[api 1]\n  L --> A2[api 2]\n  A1 --> C[Redis]\n  A2 --> C\n  C --> D[(Postgres)]\n  A1 --> D\n  A2 --> D" },
  { id: "queue", title: "Queue-backed checkout", text: "graph LR\n  U[Users] --> L[load balancer]\n  L --> A1[api 1]\n  L --> A2[api 2]\n  A1 --> Q[RabbitMQ]\n  A2 --> Q\n  Q --> W[worker]\n  W --> D[(Postgres)]\n  A1 --> D\n  A2 --> D" },
  { id: "compose", title: "Compose file", text: "services:\n  lb:\n    image: nginx\n    ports: ['80:80']\n  api:\n    image: myapp\n    deploy:\n      replicas: 2\n    depends_on: [cache, db]\n  cache:\n    image: redis:7\n  db:\n    image: postgres:16\n" },
];
