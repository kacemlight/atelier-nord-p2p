# Architecture Decision Records — Atelier Nord

> **Owner:** Marco (writer lane)  
> **Format:** Each decision recorded at the point it was made. Disputes resolved per SOUL.md: one position + rationale each side; delivery lead breaks ties.

---

## ADR-001 — Framework: Next.js 14 App Router with static export

**Date:** 2024  
**Status:** Accepted  
**Decided by:** Omar (strategist) per SOUL.md engineering principles

**Context:**  
The site is a marketing site with no authenticated routes and no server-side personalisation. It needs to be fast, deployable on Vercel without a Node.js server cost, and maintainable by a future developer unfamiliar with the current team.

**Decision:**  
Use Next.js 14 with the App Router in `output: 'export'` mode (fully static HTML). No server components that require a running Node process at runtime.

**Rationale:**  
- Static export = zero cold-start latency, CDN-edge delivery, lowest possible Lighthouse score risk  
- App Router gives file-based routing and React Server Components for build-time data fetching  
- Vercel is the natural deployment target; no additional config needed  
- Future developer can extend to server-rendered routes without rewriting the framework choice

**Consequences:**  
- Form submission is client-side only (success state, no email transport) — explicitly in scope per SPEC.md  
- No dynamic routes that require a server at runtime; `generateStaticParams` used for `/portfolio/[slug]`  
- `next/image` used in compatibility mode for static export

---

## ADR-002 — Styling: CSS Modules + CSS Custom Properties (no UI library)

**Date:** 2024  
**Status:** Accepted  
**Decided by:** Omar (strategist) + Theo (designer)

**Context:**  
The brief requires a premium, bespoke aesthetic. An off-the-shelf UI library (Tailwind, shadcn, MUI) would introduce visual defaults that fight the design intent and add a maintenance dependency.

**Decision:**  
CSS Modules for component-scoped styles. CSS custom properties (design tokens) in `src/app/globals.css` for the shared palette, typography scale, and spacing. No Tailwind utility classes in production component code.

**Rationale:**  
- Full control over every visual detail — no library overrides to fight  
- CSS custom properties enable instant dark mode by swapping the token set (one `[data-theme='dark']` block)  
- CSS Modules eliminate class-name collisions without a runtime CSS-in-JS cost  
- Zero third-party UI library = zero risk of breaking API changes after handoff

**Consequences:**  
- More CSS to write initially; each component authors its own module  
- Tailwind is listed as a devDependency in `package.json` from the scaffold; it is not used in component code — tokens are CSS custom properties only

---

## ADR-003 — Data layer: static TypeScript files (no CMS or API)

**Date:** 2024  
**Status:** Accepted  
**Decided by:** Omar (strategist)

**Context:**  
The client brief calls for 6 seed projects, 2 founder profiles, 3 services, and press mentions. The content is unlikely to change frequently. A CMS adds cost, auth complexity, and a runtime dependency.

**Decision:**  
All site content lives in strongly-typed TypeScript files in `src/data/`. Types are defined in `src/types/index.ts`. The lib layer (`src/lib/`) exports pure functions that consume these files — `getProjects()`, `filterByCategory()`, `getProjectBySlug()`, etc.

**Rationale:**  
- Pure functions are trivially testable — no mocking of an API client  
- TypeScript types catch content errors at build time, not at runtime  
- A future developer can migrate to a CMS by replacing the `src/lib/` function implementations without touching any page component  
- Zero runtime cost — data is resolved at build time by Next.js RSC

**Consequences:**  
- Content updates require a code deploy (acceptable for this client at this stage)  
- The lib layer is the CMS escape hatch — its interface must stay stable

---

## ADR-004 — Testing: Jest + React Testing Library (not Vitest + Playwright)

**Date:** 2024  
**Status:** Accepted  
**Decided by:** Elif (engineer) after scaffold setup; noted by Priya (QA)

**Context:**  
ARCHITECTURE.md specified Vitest + Playwright. The scaffold was built with Jest + React Testing Library (the Next.js default testing stack). Migrating mid-mission would cost more time than the benefit.

**Decision:**  
Retain Jest + React Testing Library. No Playwright E2E tests in this time box — the spec's acceptance criteria are verified via component and unit tests.

**Rationale:**  
- Next.js 14's official testing guide recommends Jest + RTL; config is pre-baked  
- Migration to Vitest during the 24-hour time box is a scope-expansion risk with no customer-visible benefit  
- Playwright E2E is explicitly a scope cut (feature budget exhausted by the core pages)

**Consequences:**  
- ARCHITECTURE.md references Vitest and Playwright; those are aspirational for future extension, not current implementation  
- Priya's test plan (test-plan.md) is written against Jest + RTL, which aligns with what shipped  
- Future developer can add Playwright alongside Jest with no conflict

---

## ADR-005 — Dark mode implementation: CSS custom properties + localStorage

**Date:** 2024  
**Status:** Accepted  
**Decided by:** Theo (designer) + Elif (engineer)

**Context:**  
Dark mode is a non-negotiable per the brief. Two common patterns: (1) CSS `prefers-color-scheme` only, (2) JS toggle that persists to `localStorage`.

**Decision:**  
Implement both: the CSS media query sets the initial theme on first visit (no flash for users whose preference is already known to the OS), and the manual toggle writes `atelier-nord-theme` to `localStorage` + sets `data-theme` on `<html>`. A `ThemeProvider` component reads `localStorage` on mount and syncs the attribute.

**Rationale:**  
- `prefers-color-scheme` alone doesn't allow the user to override within the site  
- `localStorage` alone causes a flash-of-wrong-theme on first load  
- Combined approach is the industry standard (Next.js `next-themes` pattern, implemented without the library)

**Consequences:**  
- A small inline script in `<head>` is needed to read `localStorage` before first paint and apply `data-theme` — avoids FOUC  
- SSR/SSG consideration: the server renders with the default (light) theme; the client hydrates and applies the stored preference immediately

---

## ADR-006 — Form submission: client-side only (no backend transport)

**Date:** 2024  
**Status:** Accepted  
**Decided by:** Omar (strategist) per SPEC.md out-of-scope list

**Context:**  
The contact form collects Name, Email, Project Type, Budget Range, and Message. The brief does not specify email delivery infrastructure.

**Decision:**  
Form validates client-side and on valid submission displays a success banner: "Thank you — we will be in touch within 48 hours." No network call is made. The form state is managed in a React client component.

**Rationale:**  
- Backend email transport (SendGrid, Resend, etc.) is explicitly out of scope per SPEC.md  
- A `console.log` of the form payload in development is sufficient for handoff documentation  
- The client can integrate a form backend (Formspree, a Next.js API route, etc.) by replacing one function call in `InquiryForm.tsx`

**Consequences:**  
- No leads are captured in production — client must integrate a form backend before going live with real traffic  
- This is documented in BUILD_REPORT.md under "Shipped with caveats"

---

## ADR-007 — Images: styled CSS placeholders (no real photography)

**Date:** 2024  
**Status:** Accepted  
**Decided by:** Omar (strategist) per SPEC.md out-of-scope list

**Context:**  
Atelier Nord has no existing digital asset library. Real photography requires a photoshoot or licensing, both outside the 24-hour and $10 time box.

**Decision:**  
All image areas use `ImagePlaceholder` — a styled `<div>` with the correct aspect ratio, a warm gradient background, and a subtle texture class. No `<img>` tags with external URLs. No unsplash, no stock photography.

**Rationale:**  
- No external image dependency = no 404 risk, no licensing risk  
- Correct aspect ratios are preserved (16:9 for hero/hospitality, 4:3 for residential cards) so layout is production-ready  
- Placeholder style is intentionally high-quality (gradient, not grey box) — the site reads as designed even before real images land

**Consequences:**  
- A future developer drops real images into `public/images/[slug]/` and updates the `imageSrc` field in `src/data/projects.ts` — no component changes required if the `ImagePlaceholder` component accepts an optional `src` prop

---

## ADR-008 — Deployment target: Vercel linked to kacemlight/atelier-nord-p2p

**Date:** 2024  
**Status:** Accepted  
**Decided by:** Yara (devops)

**Context:**  
The site must be live at a public URL as part of the deliverable. Vercel is the team's connected deployment platform.

**Decision:**  
Create one Vercel project linked to `kacemlight/atelier-nord-p2p`. Every push to `main` auto-deploys. No staging branch in this time box — `main` is production.

**Rationale:**  
- Zero-config integration with Next.js and GitHub  
- Auto-deploy on push means the investor sees progress in real time  
- The production URL is stable from first deploy onward (Vercel alias)

**Consequences:**  
- Every broken push breaks production; team must keep `main` green at all times (a red deploy is a blocker per SOUL.md)  
- Build failures are diagnosed from Vercel build logs by Yara and routed to the owning lane

---

*This log is maintained by Marco (writer lane). New decisions added here as they are made during the mission.*
