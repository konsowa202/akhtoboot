# Akhtoboot — Design System & Brand Guidelines
### أخطبوط · "Octopus"

Akhtoboot is a bilingual (Arabic-first) content brand. Its personality lives at the meeting point of two
references the founder supplied:

- **Thmanyah (ثمانية)** — elegant, high-contrast **serif display** typography, set heavy and confident,
  usually black on white. This gives Akhtoboot its *editorial gravity*.
- **Habbar (حبّار)** — a friendly, **non-detailed sea-creature mascot**: a rounded dome head, two simple dot
  eyes, playful brush-stroke tentacles. This gives Akhtoboot its *warmth and approachability*.

Akhtoboot fuses them: a **serious serif wordmark** beside a **soft, minimal octopus mark**. Smart but not stiff;
friendly but not childish. The octopus is the through-line — many arms, one curious mind: a brand that reaches
into many topics from a single point of view.

> **Brand name:** Akhtoboot · أخطبوط (the Arabic word for *octopus*)

---

## Sources & provenance
Materials supplied by the founder (stored in `assets/`):
- **Fonts:** `Thmanyah Serif Display` — Light / Regular / Medium / Bold / Black (`assets/fonts/*.woff2`). Supports
  Arabic **and** Latin at every weight.
- **Inspiration:** `assets/inspiration/habbar.jpg` (the Habbar squid mascot), `assets/inspiration/thmanyah-logo.png`
  (the Thmanyah serif wordmark).
- No product codebase or Figma file was provided — this is a **brand-first** system. The single UI screen under
  `ui_kits/` is a *brand-in-use demonstration*, not a recreation of an existing product.

---

## Brand colors
| Role | Token | Hex | Use |
|---|---|---|---|
| **Primary — Octopus Purple** | `--brand` / `--purple-500` | `#6B1FB5` | Primary actions, links, the mark, key emphasis. |
| **Secondary — Deep Sea** | `--accent` / `--teal-500` | `#377ea2` | Secondary actions, supporting accents, info. |
| **Sub-secondary — Foam** | `--foam` / `--teal-100` | `#d5e5f0` | Soft fills, tints, quiet backgrounds, tags. |
| **Ink** | `--ink-900` | `#1A1426` | Body text and near-black surfaces (a warm, faintly-purple black). |

Full 10-step scales exist for purple, teal, and neutral ink (`tokens/colors.css`). **Always reach for the
semantic aliases** (`--brand`, `--accent`, `--text-strong`, `--surface-card`…) rather than raw steps.

---

## CONTENT FUNDAMENTALS — how Akhtoboot writes

**Voice:** curious, generous, plain-spoken. Akhtoboot is the knowledgeable friend who makes a hard subject feel
easy — never the lecturer. Arabic leads; English supports.

- **Person:** Speak *to* the listener as **you / أنت**; speak as **we / نحن** for the brand. Avoid corporate "the
  user".
- **Casing (Latin):** Sentence case for everything — headlines, buttons, labels. Never ALL-CAPS prose. The only
  uppercase is the tracked **eyebrow/overline** label (`.ak-eyebrow`, e.g. `NEW EPISODE`).
- **Arabic:** Modern Standard Arabic, warm register. Short sentences. Tashkeel only where it prevents ambiguity
  (e.g. حبّار). Default text direction is **RTL**; Latin runs inside are LTR.
- **Numbers:** Arabic-Indic digits (٠١٢٣) in Arabic contexts, Western digits (0123) in English ones.
- **Tone examples:**
  - Heading: *"حبرٌ من أعماق المعرفة"* / *"Ideas with eight arms."*
  - Button: *"استمع الآن"* / *"Listen now"* — verbs, not nouns.
  - Empty state: *"لا شيء هنا بعد — ابدأ أول حلقة."* — kind, points to the next action.
  - Error: *"تعذّر الحفظ. جرّب مرة أخرى."* — short, blameless, actionable.
- **Emoji:** **Not used** in product UI or brand copy. The octopus mark carries all the personality we need.
- **Punctuation:** the em-dash — for asides; Arabic comma (،) in Arabic text.

---

## VISUAL FOUNDATIONS

**Type.** Two families, clear division of labour:
- **Thmanyah Serif Display** — every heading, the wordmark, pull-quotes, big numbers. High-contrast serif; set it
  **Black (900)** for hero display, **Bold (700)** for headings, with tight tracking (`-0.02em`). Give it air and
  scale — it is the brand's voice.
- **Thmanyah Sans** — body, UI labels, captions, long-form, **and the Latin wordmark**. A clean geometric
  bilingual sans (Arabic + Latin) from the same family — the brand's official companion face. Weights 300–900.
- Never set long body copy in Thmanyah Serif; never set hero display in the sans. The **Arabic wordmark** is set
  in Thmanyah Serif, the **Latin wordmark** (Akhtoboot) in Thmanyah Sans Black.

**Color & vibe.** Light, airy, paper-white surfaces (`--surface-page` `#faf9fc`) with **purple as the single
loud voice** and **teal as the calm second**. Foam (`#d5e5f0`) handles quiet fills. Imagery skews **cool and
clean** — deep-sea blues and violets, never warm/orange. High contrast, generous whitespace; the page should feel
like clear water, not a busy reef.

**Backgrounds.** Predominantly flat solid surfaces. Permitted feature backgrounds: solid **purple** or **teal**
panels (with the white/knockout logo), and a *subtle* deep-sea vertical gradient (`--ink-900 → --teal-900`) for
hero footers. **Avoid** generic bluish-purple SaaS gradients, noise textures, and busy patterns. No drop-in
stock gradients.

**Shape & radii.** Rounded and friendly — echoing the octopus dome. Cards `--radius-lg` (20px), inputs/buttons
`--radius-md` (14px), pills/badges fully round. Nothing sharp-cornered.

**Borders.** Hairline `1px` in `--ink-200`. Emphasis via a `3px` brand-purple **top** edge on accent cards
(never a colored left-border-only "alert" look). Inputs use a `1px` border that turns purple on focus.

**Elevation / shadows.** Soft, low, cool-tinted — shadows are a *tide*, never harsh. `--shadow-sm` for resting
cards, `--shadow-md`/`lg` on hover. Primary buttons carry a colored **brand glow** (`--shadow-brand`) that sits at
rest and disappears when pressed. No hard black drop shadows, no neumorphism.

**Motion.** Calm and buoyant. Transitions 120–360ms. Default easing `--ease-out`; use `--ease-buoyant` (a slight
overshoot, like floating up) for entrances and playful affordances. Fades and gentle rises — **no** bouncing,
spinning, or infinite decorative loops. Respect `prefers-reduced-motion`.

**Hover / press states.**
- *Hover:* primary/secondary darken one step (`--brand-hover`); ghost/outline gain a tinted fill
  (`--brand-subtle`); cards rise `-2px` and deepen their shadow.
- *Press:* the element shifts down `+1px` and its glow drops — a tactile "click".
- *Focus:* a 3px translucent purple ring (`--focus-ring`), always visible for keyboard users.

**Transparency & blur.** Used sparingly — a translucent white blur (`backdrop-filter`) only for sticky headers
over content. Tints elsewhere are solid, not alpha.

**Layout.** Containers cap at 1080–1280px. 4px spacing grid. RTL-first: lay out for Arabic, mirror for English.
Generous vertical rhythm; let headings breathe.

---

## ICONOGRAPHY
Akhtoboot has **no bespoke icon font**. The system standardizes on **[Lucide](https://lucide.dev)** (load from
CDN: `https://unpkg.com/lucide@latest`) — its **rounded-cap, even-stroke** line style is the closest match to the
soft, friendly geometry of the octopus dome.

- **Style rules:** line icons only, `1.75–2px` stroke, `currentColor`, sized on the 4px grid (16/20/24px).
  Match icon color to adjacent text (`--text-body` / `--text-muted`); use `--brand` only for active/selected.
- **The octopus mark is not an icon** — never substitute it for a UI glyph. It appears only as the logo/avatar
  fallback.
- **Emoji & unicode glyphs:** not used as icons.
- **SVG assets** live in `assets/logo/` (the mark in purple / teal / black / white-knockout variants) — copy these
  out for any brand placement; they recolor via `fill` or, for the inline React `OctopusMark`, `currentColor`.
- *(Substitution flag: Lucide is an external choice, not a supplied set — swap it if Akhtoboot adopts a house icon
  library.)*

---

## Index / manifest
**Root**
- `styles.css` — the one file consumers link (import-list only).
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter for use in Claude Code.

**Tokens** (`tokens/`) — `colors.css`, `typography.css` (+ `@font-face`), `spacing.css`, `effects.css`, `base.css`.

**Assets** (`assets/`)
- `fonts/` — Thmanyah woff2 (5 weights).
- `logo/` — `octopus-mark.svg` (currentColor) + `octopus-{purple,teal,black,white}.svg`.
- `inspiration/` — Habbar + Thmanyah references.

**Components** (`components/`) — namespace `window.AkhtobootDesignSystem_1e74e8`
- `brand/` — `Logo`, `OctopusMark`.
- `core/` — `Button`, `Input`, `Badge`, `Card`, `Avatar`.

**Guidelines** (`guidelines/`) — specimen cards for the Design System tab (Type · Colors · Spacing · Brand).

**UI kits** (`ui_kits/`)
- `web/` — a brand-in-use landing screen for Akhtoboot as an audio-content platform (demonstration).

---

## Caveats
- **Octopus mark is an original interpretation** of the brief (non-detailed octopus, Habbar-inspired) — now a
  clean eyeless dome silhouette with four tentacle lobes. Happy to iterate on the head shape or tentacle count.
- **Lucide icons** are an external default, not a supplied set.
