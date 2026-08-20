---
name: akhtoboot-design
description: Use this skill to generate well-branded interfaces and assets for Akhtoboot (أخطبوط), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, the octopus logo, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill first — it is the full brand guideline (voice, color, type, motion, iconography). Then explore the other files:

- `styles.css` — link this one file to inherit every token and webfont.
- `tokens/` — colors, typography (+ `@font-face` for Thmanyah), spacing, effects, base.
- `assets/logo/` — the octopus mark (purple / teal / black / white-knockout SVGs); `assets/fonts/` — Thmanyah woff2.
- `components/` — React primitives (`Logo`, `OctopusMark`, `Button`, `Input`, `Badge`, `Card`, `Avatar`) under `window.AkhtobootDesignSystem_1e74e8`.
- `ui_kits/web/` — a brand-in-use landing screen example.
- `guidelines/` — visual specimen cards.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and produce static HTML files for the user to view. If working on production code, copy the assets and apply the rules here to design as a brand expert.

If the user invokes this skill without other guidance, ask what they want to build, ask a few clarifying questions, then act as an expert Akhtoboot designer who outputs HTML artifacts _or_ production code as the need dictates.

Brand essentials: **Octopus Purple `#6B1FB5`** (primary), **Deep-Sea Teal `#377ea2`** (secondary), **Foam `#d5e5f0`** (sub-secondary), ink `#1A1426`. Headlines + Arabic wordmark in **Thmanyah Serif Display** (Black/Bold); body, UI, and the Latin wordmark in **Thmanyah Sans**. Arabic-first, RTL. Friendly but editorial. No emoji. Lucide for icons.
