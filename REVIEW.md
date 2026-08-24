# Code Review Log — Atelier Nord

> Owner: Priya (analyst)  
> Protocol: Every file pushed to `kacemlight/atelier-nord-p2p` is adversarially reviewed.  
> Severity: **blocker** (must resolve before deploy) | **major** (must resolve before done) | **minor** (resolve or waive with rationale)  
> Status: `open` | `resolved` | `waived`

---

## Review Round 1 — SPEC.md + ARCHITECTURE.md

**Files reviewed:** `SPEC.md`, `ARCHITECTURE.md`  
**Reviewer:** Priya  
**Commit:** `4fd84e2`

| # | File | Location | Severity | Finding | Status |
|---|------|----------|----------|---------|--------|
| R-01 | `ARCHITECTURE.md` | Testing section | **major** | Testing stack lists **Vitest + Playwright**, but `README-draft.md` (Marco) says **Jest + React Testing Library**. These must align before scaffold is merged — wrong test runner config will break CI. Test suite is being written for Vitest. | open — routing to Marco to update README draft |
| R-02 | `ARCHITECTURE.md` | Module 3.4 | **minor** | States "No direct data imports inside components" but does not specify how `ThemeProvider` receives initial theme from `localStorage` on first render (SSR concern: `localStorage` is unavailable server-side). Needs a comment or guard in `ThemeProvider` implementation. | open — routing to Elif/Theo |
| R-03 | `SPEC.md` | AC-13 | **minor** | AC-13 (Lighthouse ≥ 90) is assigned to Yara but has no fallback if score is 89 on one metric. SPEC should clarify whether a single point below is a blocker or a waive-with-rationale. | open — routing to Omar |
| R-04 | `ARCHITECTURE.md` | Section 1 | **minor** | `output: 'export'` in `next.config.js` disables server-side features. The spec's 404 handling (`not-found.tsx`) works differently in static export mode — Next.js generates a `404.html` file, but this requires `trailingSlash: true` to be set. ARCHITECTURE already notes `trailingSlash: true` — confirm Elif sets both flags. | open — routing to Elif |
| R-05 | `SPEC.md` | Section 4 (seed data) | **minor** | 6 seed projects have slugs and metadata but no `tagline` field defined in the table. ARCHITECTURE's data model includes `tagline: string` as required. Marco needs to author taglines for all 6 projects in `src/data/projects.ts`. | open — routing to Marco |

---

## Review Round 2 — Test Suite (self-review)

**Files reviewed:** `tests/unit/*.test.ts`, `tests/e2e/*.spec.ts`  
**Reviewer:** Priya  
**Commit:** this commit

| # | File | Location | Severity | Finding | Status |
|---|------|----------|----------|---------|--------|
| R-06 | `tests/e2e/contact-form.spec.ts` | line ~30 | **minor** | E2e error selectors use `.or()` chaining as a resilience fallback since `data-testid` attributes depend on Theo implementing them. If Theo omits `data-testid="error-*"`, tests fall back to text matching — acceptable but fragile. Theo should add `data-testid` attributes to all error spans and interactive elements. | open — routing to Theo |
| R-07 | `tests/e2e/navigation.spec.ts` | founder test | **minor** | Founder test relies on `data-testid="founder-card"` (count=2). Theo must add this attribute to the two `<FounderCard>` renders. | open — routing to Theo |
| R-08 | `tests/unit/getProjectsByCategory.test.ts` | line 10 | **minor** | `@ts-expect-error` used to test no-arg call. If `getProjectsByCategory` is typed with a default param this will cause a TS error in strict mode. Elif should type the param as `category: ProjectCategory \| 'All' = 'All'` to make the default explicit without suppression. | open — routing to Elif |

---

## Open Findings Summary

| ID | Severity | Owner | Status |
|----|----------|-------|--------|
| R-01 | major | Marco | open |
| R-02 | minor | Elif / Theo | open |
| R-03 | minor | Omar | open |
| R-04 | minor | Elif | open |
| R-05 | minor | Marco | open |
| R-06 | minor | Theo | open |
| R-07 | minor | Theo | open |
| R-08 | minor | Elif | open |

**Blockers:** 0  
**Majors open:** 1 (R-01 — README test-runner mismatch)  
**Minors open:** 7  

> No unresolved blockers at this time. R-01 must be resolved before final report.

---

## Findings Log (resolved)

_None yet._
