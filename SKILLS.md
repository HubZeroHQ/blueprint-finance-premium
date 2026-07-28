# AI Skills

Blueprint Base ships a small, curated library of reusable AI assistant skills. Every blueprint cloned from Blueprint Base inherits this library automatically — there is nothing to install per-project.

Skills are **implementation infrastructure, not knowledge**. They help an AI assistant execute well during implementation, design, and review. They do not define HubZero's principles, standards, architecture, or design languages, and they can never override `.hubzero`.

> **Blueprint Core always wins.** If anything in this document, or in any skill's own instructions, conflicts with `.hubzero`, `.hubzero` takes precedence. See `.hubzero/README.md` — Reusable Skills, and `.hubzero/agents/AGENTS.md` — Reusable AI Skills.

---

## Where skills live

```
.agents/skills/    canonical skill content (source of truth)
.claude/skills/    per-skill symlinks into .agents/skills/
skills-lock.json   provenance: source repo, path, and content hash per skill
```

`.claude/skills/<name>` is a symlink to `.agents/skills/<name>`, not a copy. There is exactly one copy of each skill's content on disk; editing it in one location edits it everywhere it's referenced. This keeps Claude Code and other assistants that read `.agents/skills/` (Codex and compatible agents) in sync by construction, so there is no manual step to keep the two directories consistent.

> **Windows note:** git only preserves these as real symlinks in the repository when `core.symlinks` is `true` (and, for non-admin accounts, Windows Developer Mode is enabled). With the default `core.symlinks=false`, a commit made from that machine silently flattens each symlink into an independent duplicate file, defeating the single-source-of-truth design above. If you're setting up or cloning this repo on Windows, run `git config core.symlinks true` before committing changes under `.agents/skills/` or `.claude/skills/`, then re-stage (`git rm -r --cached .claude/skills && git add .claude/skills`) and confirm with `git ls-files -s .claude/skills/<any-skill>` that the mode reads `120000`, not `100644`.

`skills-lock.json` records where each skill came from (`source`, `sourceType`, `skillPath`) and a `computedHash` of the vendored content, the same way a package lockfile pins a dependency. It exists so a future update can detect whether an upstream skill has changed since it was vendored, and so removals and additions are auditable in git history rather than silent.

---

## Supported assistants

| Directory | Consumed by |
| --- | --- |
| `.agents/skills/` | Codex and other agent tooling that reads the generic `.agents/skills` convention |
| `.claude/skills/` | Claude Code |

A skill written for one assistant is generally readable by any of them — these are markdown instructions, not assistant-specific code. Two skills call out assistant-specific behavior explicitly where it matters (see `image-to-code` below).

---

## The curated set

Six third-party skills were reviewed. One was removed as redundant and conflicting; five remain.

### Design & Frontend Craft

**`design-taste-frontend`** — Anti-AI-slop frontend design skill for landing pages, portfolios, and redesigns.
- **Purpose:** Stops an assistant from defaulting to templated, generic-looking output (purple gradients, three equal feature cards, Inter everywhere, em-dashes, fake stock-screenshot divs). Reads the brief first, infers a design direction, and only then applies concrete Tailwind/React conventions.
- **Strengths:** Contextual, not dogmatic — every rule has a stated override path (e.g. accessibility-first, public-sector, or brand-mandated exceptions). Explicitly scopes itself out of dashboards, data tables, and admin UI, so it won't misfire outside marketing/portfolio surfaces. Its default stack assumptions (Next.js, Server Components, Tailwind v4) match Blueprint Base's actual stack.
- **When to use:** Building or redesigning marketing pages, landing pages, and portfolio-style surfaces during the Implementation and Design Review stages.
- **Relationship to `.hubzero`:** This skill's "dials" (`DESIGN_VARIANCE`, `MOTION_INTENSITY`, `VISUAL_DENSITY`) are an *execution* aid, not a design-direction source. The actual visual identity of a blueprint is decided by `.hubzero/design/principles.md` and the chosen document under `.hubzero/design/languages/`. Use this skill to implement that choice well, not to decide it — HubZero's own principle is that "two HubZero projects should never feel interchangeable," so its brief-inference step should be fed the blueprint's actual Design Language, not left to invent one.

### Motion & Animation

**`animation-vocabulary`** — Reverse-lookup glossary for motion terminology ("the bouncy thing when a popover opens" → *Pop in*).
- **Purpose:** Lets an assistant (or the user, through it) name an effect precisely instead of guessing.
- **When to use:** Whenever a motion effect needs to be discussed or specified precisely — writing a design spec, briefing another tool, or disambiguating a request.
- **Conflicts:** None. Pure reference content.

**`find-animation-opportunities`** — Read-only sweep of a codebase or UI for places that would genuinely benefit from motion, with an equally strict filter for places that should stay static.
- **Purpose:** Prevents both under-animation (dead UI) and over-animation (the more common failure). Every candidate must pass a four-question gate (frequency, purpose, speed budget, function); at least 2-5 rejected candidates are required in the output alongside the surviving suggestions.
- **Strengths:** Restraint is the design center of the skill, not an afterthought — it explicitly refuses to suggest motion for keyboard-driven, 100+/day actions. This lines up directly with `.hubzero/design/principles.md` — "Motion Should Reinforce Understanding."
- **When to use:** During Design Review, or when asked "what could be animated here."
- **Note:** It hands off implementation to a skill named `improve-animations`, which is referenced but not part of this library. Treat that handoff line as informational; build suggestions manually or via `design-taste-frontend` instead.

**`review-animations`** (+ `STANDARDS.md`) — Reviews motion code against a strict, numeric craft bar (sub-300ms UI durations, GPU-only properties, no `scale(0)`, mandatory `prefers-reduced-motion`, interruptibility rules).
- **Purpose:** Catches sluggish, jank-prone, or inaccessible motion before it ships.
- **Strengths:** Concrete, citable values (exact cubic-beziers, duration tables, spring configs) rather than vague taste. Defaults to blocking; approval is earned. Aligned with HubZero's motion principles and its general "default to flagging" review posture.
- **When to use:** Engineering Review of any diff that touches animation or transition code. `disable-model-invocation: true` is set upstream — it must be invoked deliberately, it will not fire automatically.

### Visual Reference Generation

**`image-to-code`** — For assistants with an image-generation tool available, generates section-specific design reference images first, deeply analyzes them, and only then implements the frontend.
- **Purpose:** Counters the tendency to jump straight to generic coded layouts by forcing a visual-reference step first, with explicit rules against cropping old images, compressing too many sections into one unreadable board, or under-generating.
- **Limitations:** Its workflow only activates "when image generation is available." In a Claude Code session without an image-generation tool wired in, this skill has little to act on beyond its analysis discipline (typography/spacing/color extraction) — it will not silently substitute a worse workflow. It explicitly names Codex in several rules; treat those as guidance for Codex-based sessions specifically.
- **When to use:** Visually significant builds (hero sections, landing pages, portfolios) in an environment where image generation is actually available.

---

## Removed: `high-end-visual-design`

One skill, `high-end-visual-design` (installed from `Leonxlnx/taste-skill`, path `skills/soft-skill/SKILL.md`), was removed after review. It is not part of this repository; this section exists so future maintainers understand why it isn't here rather than assuming it was missed.

**Why it was removed:**

1. **Redundant.** It covers the same ground as `design-taste-frontend` — from the same upstream author/repository — but with no brief-inference step and no override paths. Both skills had no `disable-model-invocation` flag and overlapping descriptions, so an assistant could invoke either non-deterministically for the same request and get contradictory guidance.
2. **Conflicts with HubZero's design principles.** It mandates a single narrow aesthetic ("Awwwards-tier," "$150k+ agency," a fixed `Vanguard_UI_Architect` persona) as the universal target for all output, with no carve-out for accessibility-first, public-sector, or brand-mandated cases. `.hubzero/design/principles.md` is explicit that "two HubZero projects should never feel interchangeable" and that "elegance is not luxury" — a skill whose entire premise is a single luxury-agency look, applied unconditionally, pulls directly against that.
3. **Stricter bans with no escape hatch.** It bans fonts like Inter, Roboto, and Arial outright with no exception, where `design-taste-frontend` allows the same fonts for accessibility-first or brand-mandated cases. Keeping both active risked the stricter, less flexible skill winning by chance.

If a future need arises for a more opinionated "agency-tier" mode, it should be expressed as a documented override *within* `design-taste-frontend`'s existing dial system, not as a second competing skill.

---

## Installation

Nothing to do — this library is part of Blueprint Base and is inherited the moment a blueprint is cloned or synced from it. `hz sync` / `hz update` (from `@hubzero/blueprint`) manage `.hubzero`; they do not touch `.agents/skills/`, `.claude/skills/`, or `skills-lock.json`, which are plain files tracked in git like any other repository content.

## Updating a skill

1. Re-fetch the skill's `SKILL.md` (and any supporting files, e.g. `STANDARDS.md`) from the `source` / `skillPath` recorded in `skills-lock.json`.
2. Diff it against the vendored copy in `.agents/skills/<name>/`. Re-review it against this document's Skill Audit criteria (purpose, strengths, limitations, overlap, conflicts with `.hubzero`) before accepting the update — an upstream change can introduce a new conflict just as easily as the original install did.
3. Recompute and update `computedHash` in `skills-lock.json`.
4. Do not touch `.claude/skills/<name>` — it is a symlink and updates automatically.

## Adding a new skill

Only add a skill if it clears the same bar applied above: a distinct responsibility not already covered, no direct conflict with `.hubzero`, and a clear answer to "when should this be used." Prefer a small, curated collection over a large one — an unused or overlapping skill is a maintenance cost and a source of non-deterministic behavior, not a free addition.

## Maintenance

Periodically re-run the audit in this document (purpose, strengths, limitations, overlap, conflicts, retain-or-remove) against the current skill set, especially after any upstream skill update or before a Blueprint Core version bump that touches the "Reusable Skills" contract in `.hubzero`.
