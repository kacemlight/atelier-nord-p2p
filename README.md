# Atelier Nord — Studio Website

> A high-end marketing site for a Paris-based interior design studio.  
> Built with Next.js 14 + TypeScript, deployed on Vercel.

---

## Live Site

**Production URL:** _(recorded in BUILD_REPORT.md once first deploy is READY)_

---

## Quick Start (10 minutes or less)

### Prerequisites

- Node.js 18 or later
- npm 9+
- Git

### Install & Run

```bash
# 1. Clone the repository
git clone https://github.com/kacemlight/atelier-nord-p2p.git
cd atelier-nord-p2p

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

### Run Tests

**Unit & component tests** (Jest + React Testing Library — runs in every CI/CD pipeline):

```bash
npm test
```

This executes all `*.test.ts` / `*.test.tsx` files under `src/__tests__/` and `__tests__/` using Jest 29 with `jest-environment-jsdom`. The flag `--passWithNoTests` prevents CI failure when a module's test file is pending. Coverage spans:

- Core data / logic: `src/lib/projects.ts`, `src/lib/validation.ts`, `src/data/founders.ts`
- Interface components: `ContactForm`, `PortfolioFilter`, `ProjectCard`, `ServiceCard`, `Nav`
- Page integration: Home, Portfolio, Services, About, Contact

**E2E tests** (Playwright — optional, not required for core CI):

```bash
npx playwright install   # first time only
npx playwright test
```

Playwright specs live in `tests/e2e/` and cover: navigation, portfolio filter, contact-form validation, and dark-mode toggle. Playwright is not listed in `devDependencies` by default; install it locally when full end-to-end verification is needed. See DECISIONS.md D-010 for the rationale.

### Lint

```bash
npm run lint
```

---

## Project Structure

```
atelier-nord-p2p/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Root layout — fonts, theme, nav, footer
│   │   ├── page.tsx              # Home
│   │   ├── portfolio/
│   │   │   ├── page.tsx          # Portfolio gallery + filter
│   │   │   └── [slug]/page.tsx   # Project detail
│   │   ├── services/page.tsx
│   │   ├── about/page.tsx
│   │   └── contact/page.tsx
│   ├── components/               # Shared UI components
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── PortfolioFilter.tsx
│   │   ├── ContactForm.tsx
│   │   ├── ServiceCard.tsx
│   │   └── ThemeToggle.tsx
│   ├── data/                     # Static typed content
│   │   ├── projects.ts           # 6 portfolio projects
│   │   ├── services.ts           # 3 service definitions
│   │   └── founders.ts           # Founder bios, press mentions
│   ├── lib/
│   │   ├── validation.ts         # Pure form validation functions
│   │   └── theme.ts              # Theme detection + persistence
│   ├── styles/
│   │   └── globals.css           # Design tokens (light + dark)
│   └── types/
│       └── index.ts              # Shared TypeScript interfaces
├── __tests__/                    # Jest unit + component tests
│   ├── validation.test.ts
│   ├── projects.test.ts
│   └── components/
│       ├── ContactForm.test.tsx
│       └── PortfolioFilter.test.tsx
├── tests/
│   └── e2e/                      # Playwright E2E specs (optional)
│       ├── navigation.spec.ts
│       ├── portfolio-filter.spec.ts
│       ├── contact-form.spec.ts
│       └── dark-mode.spec.ts
├── SPEC.md                       # Scope and feature requirements
├── ARCHITECTURE.md               # Module boundaries, interfaces, style tokens
├── DECISIONS.md                  # Key technical choices with rationale
├── REVIEW.md                     # Code review findings (Priya, QA lane)
└── BUILD_REPORT.md               # What shipped, what was cut, production URL
```

---

## Design System

### Colour Tokens

| Token | Light | Dark | Usage |
|---|---|---|---|
| `--color-bg` | `#FAF9F7` | `#141210` | Page background |
| `--color-surface` | `#F0EDE8` | `#1E1C1A` | Cards, panels |
| `--color-border` | `#DDD9D3` | `#2E2B27` | Dividers |
| `--color-text-primary` | `#1A1816` | `#F0EDE8` | Body, headings |
| `--color-text-secondary` | `#5C5754` | `#A09890` | Meta, captions |
| `--color-accent` | `#8B6F5E` | `#C4A882` | Links, CTA, active states |

### Typography

- **Display / Headings:** *Cormorant Garamond* — editorial, warm, authoritative
- **Body / UI:** *Inter* — legible at small sizes, neutral
- Both loaded via `next/font/google` (self-hosted at build time, no FOUT)

### Dark Mode

Detected from `prefers-color-scheme`; manually toggled via the header button. Preference persisted in `localStorage`. An inline script in `layout.tsx` applies the theme before first paint — no flash.

---

## Pages

| Route | Summary |
|---|---|
| `/` | Hero, brand values, featured projects, services teaser |
| `/portfolio` | Filterable gallery — All / Residential / Hospitality / Commercial |
| `/portfolio/[slug]` | Project detail — description, scope, year, image areas |
| `/services` | Three offers with process steps and deliverables |
| `/about` | Two founders, philosophy, press mentions |
| `/contact` | Inquiry form with project-type selector, budget range, validation |

---

## Adding Content (for future developers)

1. **New portfolio project:** add an entry to `src/data/projects.ts` matching the `Project` interface. The gallery, filter, and detail page are fully data-driven.
2. **Update copy:** page text lives in the page components; reusable copy constants in `src/data/`.
3. **Add a service:** extend the array in `src/data/services.ts`.
4. **New page:** follow App Router conventions; add a nav link in `src/components/Nav.tsx`.
5. **Enable form email transport:** replace the `handleSubmit` stub in `InquiryForm.tsx` with a `fetch` to a Next.js API route or third-party service (Resend, Formspree).

---

## Deployment

Auto-deploys on every push to `main` via the Vercel GitHub integration.

- **Framework:** Next.js 14
- **Build command:** `npm run build`
- **Node version:** 18.x
- **Environment variables:** none required for the static site

---

## Licence

Proprietary. All rights reserved — Atelier Nord, Paris.
