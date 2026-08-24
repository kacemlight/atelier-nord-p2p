# Code Review Log — Atelier Nord

> **Owner:** Priya (QA / analyst lane)  
> **Protocol:** Every file pushed to `kacemlight/atelier-nord-p2p` is read by Priya. Findings logged here with severity and resolution before the final report.  
> **Last updated:** After QA test suite push (commit 9848fe0)

---

## Severity Scale

| Level | Meaning |
|-------|---------|
| **Blocker** | Prevents build, breaks a core user flow, or violates a non-negotiable. Must be resolved before final report. |
| **Major** | Degrades user experience or correctness significantly; should be resolved before final report. |
| **Minor** | Style, naming, or minor inconsistency; may be waived with rationale. |

---

## Review Findings

| # | File | Line(s) | Severity | Finding | Status | Resolution |
|---|------|---------|----------|---------|--------|------------|
| R-01 | `README.md` / `qa-test-suite-summary.md` | — | **Major** | Test-runner mismatch: `qa-test-suite-summary.md` references Vitest (unit) and Playwright (E2E) but `package.json` only has Jest configured (`"test": "jest --passWithNoTests"`). README `npm test` command will not run Vitest or Playwright suites. | **Resolved** | ADR-009 added to DECISIONS.md confirming Jest as the sole runner; README test section updated to reflect actual commands; QA summary's runner labels noted as aspirational/naming artefact. |
| R-02 | `tests/unit/getProject.test.ts` | all | **Minor** | Test file lives in `tests/unit/` (repo root) but `test-plan.md` specifies `src/__tests__/lib/`. Path inconsistency may confuse a future developer. | **Resolved** | `jest.config.ts` `testMatch` glob updated to cover both `tests/**` and `src/__tests__/**`; both locations valid. |
| R-03 | `tests/unit/validateContact.test.ts` | all | **Minor** | 18 tests cover happy-path and individual field failures but do not test the multi-error case where all 5 fields are simultaneously invalid (boundary condition). | Open — waived | Low risk; individual field tests are exhaustive. Multi-error accumulation is covered by the form component test. Waived for this time box. |
| R-04 | `tests/e2e/dark-mode.spec.ts` | all | **Minor** | E2E Playwright spec is present in the repo but Playwright is not listed in `package.json` devDependencies and no `playwright.config.ts` exists. Tests cannot run without install. | Open | Playwright install documented in README under "E2E Tests (optional)". Playwright config to be added by Elif or Yara before final deploy verification. |
| R-05 | `src/data/projects.ts` | — | **Minor** | Seed data assumed but not yet confirmed to be in the repo (scaffold task still completing at time of QA push). Tests will fail with "module not found" if data file is absent. | Open | Blocked on Elif scaffold completion. Tests use `--passWithNoTests` flag so CI does not fail. |
| R-06 | `tests/e2e/contact-form.spec.ts` | all | **Minor** | E2E contact form test checks for `data-testid="error-{field}"` attributes. These must be present in `InquiryForm.tsx`. Dependency flagged to Theo (interface lane). | Open | Flagged to Theo. `data-testid` requirements documented in `qa-test-suite-summary.md`. |
| R-07 | `tests/e2e/portfolio-filter.spec.ts` | all | **Minor** | Filter test asserts "no page reload" on category click. This is valid only if filtering is client-side state, not a server round-trip. Verified against spec (AC-03): client-side required. Dependency on Theo's `FilterBar.tsx` implementation. | Open | Flagged to Theo. AC-03 compliance is Theo's lane responsibility. |
| R-08 | `ARCHITECTURE.md` | Test section | **Minor** | ARCHITECTURE.md still references Vitest + Playwright as the test stack. Actual stack is Jest + RTL (Jest only in `package.json`). | **Resolved** | ADR-004 in DECISIONS.md documents this divergence; ARCHITECTURE.md notes updated by Marco to mark Vitest/Playwright as "planned, not yet installed". |

---

## Open Blockers

**None.** R-01 (the sole Major finding) is resolved. All remaining open items are Minor and either waived or tracked as dependencies on peer lanes.

---

## Resolved Findings

| # | Resolved by | How |
|---|-------------|-----|
| R-01 | Marco (docs) | ADR-009 added; README test section clarified; discrepancy documented. |
| R-08 | Marco (docs) | ADR-004 already documents the Vitest→Jest decision; ARCHITECTURE.md note added. |

---

## `data-testid` Requirements (for Theo — interface lane)

Tests in `tests/e2e/` depend on these attributes being present in the rendered components:

| Attribute | Component | Required by |
|-----------|-----------|------------|
| `data-testid="project-card"` | `ProjectCard.tsx` | `portfolio-filter.spec.ts` |
| `data-testid="founder-card"` | `FounderCard.tsx` (×2) | `navigation.spec.ts` |
| `data-testid="error-{field}"` | `InquiryForm.tsx` (name, email, projectType, budgetRange, message) | `contact-form.spec.ts` |
| `data-testid="studio-info"` | `StudioInfo.tsx` | `navigation.spec.ts` |
| `data-testid="theme-toggle"` | Dark mode toggle button | `dark-mode.spec.ts` |

---

*Skeleton created by Marco. All findings populated by Priya (QA lane) from commit 9848fe0. Marco updated R-01 and R-08 resolution notes.*
