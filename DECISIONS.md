# DECISIONS.md — Atelier Nord Studio Website

_Significant architectural and scope choices, with engineering rationale. Updated as decisions are made._

---

## D-001 · Framework: Next.js 14 (App Router) + TypeScript

**Decision:** Use Next.js 14 with the App Router, TypeScript strict mode, deployed to Vercel.

**Rationale:**
- Vercel-native — zero configuration required for deployment
- App Router enables per-page rendering strategies (static by default, dynamic where needed)
- TypeScript catches interface mismatches early across a multi-agent codebase
- `next/image` provides optimised, responsive images out of the box (critical for a design-portfolio site)

**Alternatives considered:** Astro (excellent for static, but team familiarity is lower), Vite+React (no built-in routing or image optimisation).

---

## D-002 · No external UI library

**Decision:** Bespoke CSS only — no Tailwind, no shadcn/ui, no MUI.

**Rationale:**
- Brief explicitly requires no external UI library
- Full palette and typographic control without purge configuration or class bloat
- Theming via CSS custom properties is simpler and faster than Tailwind's dark-mode variant system at this scale
- A future developer inherits a small, readable stylesheet rather than a utility-class dependency

---

## D-003 · CSS custom properties for dark mode

**Decision:** `prefers-color-scheme` media query sets CSS vars; an `<html data-theme>` attribute overrides for a manual toggle. An inline `<script>` in `layout.tsx` sets the attribute before first paint to prevent flash of wrong theme.

**Rationale:**
- Zero JavaScript overhead for default (OS-preference-driven) dark mode
- Tokens swap atomically — no style recalculation cascade
- Enables a future user preference toggle without architectural change

---

## D-004 · Portfolio data in a TypeScript module (`/src/data/projects.ts`)

**Decision:** All six portfolio projects are seeded as typed records in a TypeScript file — no database, no CMS.

**Rationale:**
- At six projects the data volume is trivial; a database adds operational overhead with no benefit
- Typed records catch copy typos and missing fields at build time
- A future developer can replace the import with a CMS fetch (Contentful, Sanity) by changing one function — the interface is the same
- Keeps the production build fully static (no API routes needed)

---

## D-005 · Typography: Cormorant Garamond + Inter via next/font

**Decision:** Display/headings in Cormorant Garamond; body/UI in Inter; both loaded via `next/font/google`.

**Rationale:**
- `next/font` self-hosts fonts at build time — no external network request, no FOUT, improved CLS score
- Cormorant Garamond carries the editorial, European luxury register the brand requires
- Inter is neutral and highly legible at caption sizes on all screens

---

## D-006 · Contact form: client-side validation only

**Decision:** The inquiry form validates on the client (required fields, email format, budget selection). No server-side handler or third-party form service at launch.

**Rationale:**
- Time box: a server endpoint or email integration (Resend, Formspree) would add scope and a billable dependency
- Client-side validation still prevents blank submissions and guides users
- The form can be wired to a backend in one file change; the component API is already designed for it
- Noted as a known cut in BUILD_REPORT.md

---

## D-007 · Static export strategy

**Decision:** The site is deployed as a Next.js application (not `output: 'export'` static HTML) to preserve `next/image` optimisation and the ability to add API routes later.

**Rationale:**
- Vercel runs Next.js natively — no static-export tradeoffs needed
- `next/image` with Vercel's image optimisation CDN handles responsive images without manual resizing
- Future pages (e.g. a contact API route) require no architecture change

---

## D-008 · Placeholder image strategy

**Decision:** Project image areas use styled `<div>` elements with aspect-ratio constraints and a subtle gradient, not stock photography.

**Rationale:**
- No rights-cleared photography exists at project start
- An elegant geometric placeholder signals "image intentionally deferred" without looking broken
- Consistent aspect ratios ensure layout stability (no CLS)
- A future developer replaces the `<div>` with `<Image>` and the layout is unchanged

---

## D-009 · Project slugs aligned between SPEC and copy

**Decision:** The 6 canonical project slugs are those defined in SPEC.md §3, used in `projects.ts` and URL routing. Marco's site copy maps to these slugs.

| Slug | Name in copy |
|------|-------------|
| `maison-vernet` | Maison Vernet |
| `hotel-les-graines` | Hôtel Les Graines |
| `appartement-bastille` | Appartement Bastille |
| `boutique-marechal` | Boutique Maréchal |
| `villa-sainte-victoire` | Villa Sainte-Victoire |
| `auberge-du-moulin` | Auberge du Moulin |

**Rationale:** Slugs are URL identifiers and must be stable. Copy project names can be display-formatted freely; slugs must match `generateStaticParams` output exactly.

---

## D-010 · Test runner split: Jest (core CI) + Playwright (optional E2E)

**Date:** Post-QA-push  
**Status:** Accepted  
**Decided by:** Marco (docs) after Priya (QA) flagged REVIEW.md R-01

**Context:**  
Priya's `qa-test-suite-summary.md` referenced Vitest (for unit tests) and Playwright (for E2E) in its runner labels. However, `package.json` only has Jest 29 configured (`"test": "jest --passWithNoTests"`). ARCHITECTURE.md's earlier aspiration included Vitest. This created a three-way inconsistency between the QA summary, the architecture doc, and the actual repo.

**Decision:**  
- **`npm test`** runs Jest 29 + React Testing Library only. This is the canonical CI command and the only test command a stranger needs to know.  
- **Playwright** E2E specs (in `tests/e2e/`) are present in the repo for future extension. They are not installed in `devDependencies` by default. A developer installs Playwright locally with `npx playwright install` when needed.  
- **Vitest** is not used in this project. The reference in `qa-test-suite-summary.md` was a naming artefact from the QA plan draft; the final test files were written in Jest syntax.  
- ARCHITECTURE.md's reference to Vitest is understood as aspirational/planned; the actual implementation is Jest.

**Rationale:**  
- Migrating from Jest to Vitest inside a 24-hour time box is a scope-expansion risk with no customer-visible benefit.  
- Playwright E2E tests are valuable for regression testing but are not required for a static marketing site launch; they are left as a "next developer" extension point.  
- Keeping `npm test` as the single required command keeps CI configuration minimal.

**Consequences:**  
- REVIEW.md R-01 (Major) is resolved by this ADR and the README update that accompanies it.  
- A future developer wishing to add Playwright to CI should add it to `devDependencies` and create a `playwright.config.ts`.

---

_This file is maintained by Marco (writer). Engineering decisions from Elif and Theo are added here on handoff._
