# Atelier Nord — Architecture

> **Revision:** 1.0  
> **Author:** Omar (strategist)  
> **Status:** Approved for implementation

---

## 1. Stack Decision

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | **Next.js 14 (App Router, static export)** | First-class Vercel deployment, file-system routing, zero-config TypeScript, `generateStaticParams` for portfolio slugs — one command to build a fully static site |
| Language | **TypeScript (strict)** | Catches interface mismatches between data and UI at compile time |
| Styling | **CSS Modules + CSS custom properties** | No runtime overhead, dark-mode via `data-theme` attribute + `prefers-color-scheme`, scoped by default — no external UI library needed |
| Testing | **Vitest** (unit) + **Playwright** (e2e smoke) | Vitest shares the Vite transform; Playwright covers navigation and form flows against a built site |
| Linting | **ESLint** (Next.js config) + **Prettier** | Standard Next.js scaffold defaults |
| Deployment | **Vercel** (linked to `kacemlight/atelier-nord-p2p`) | `next export` output served from the CDN edge; zero infra to manage |

`next.config.js` sets `output: 'export'` and `trailingSlash: true` so the static build drops into Vercel's static file hosting.

---

## 2. Repository Layout

```
atelier-nord-p2p/
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── layout.tsx              # Root layout — nav, footer, theme provider
│   │   ├── page.tsx                # Home (/)
│   │   ├── portfolio/
│   │   │   ├── page.tsx            # Portfolio list (/portfolio)
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # Project detail (/portfolio/[slug])
│   │   ├── services/
│   │   │   └── page.tsx            # Services (/services)
│   │   ├── about/
│   │   │   └── page.tsx            # About (/about)
│   │   ├── contact/
│   │   │   └── page.tsx            # Contact (/contact)
│   │   └── not-found.tsx           # 404
│   ├── components/
│   │   ├── Nav/                    # Nav + mobile hamburger + dark-mode toggle
│   │   ├── Footer/
│   │   ├── ProjectCard/            # Portfolio grid card
│   │   ├── FilterBar/              # Category filter buttons
│   │   ├── ServiceCard/            # Expandable service offer card
│   │   ├── FounderCard/            # About page founder profile
│   │   ├── ContactForm/            # Controlled form with validation
│   │   ├── ImagePlaceholder/       # Styled aspect-ratio box
│   │   └── ThemeProvider/          # Context + localStorage persistence
│   ├── data/
│   │   ├── projects.ts             # 6 seed projects (typed ProjectRecord[])
│   │   ├── services.ts             # 3 service objects (typed ServiceRecord[])
│   │   ├── founders.ts             # 2 founder objects (typed FounderRecord[])
│   │   ├── press.ts                # 3 press mentions (typed PressRecord[])
│   │   └── site.ts                 # Global copy: tagline, address, contact details
│   ├── lib/
│   │   ├── getProject.ts           # Helper: find project by slug
│   │   ├── getProjectsByCategory.ts# Helper: filter projects by category
│   │   └── validateContact.ts      # Pure validation logic (used by form + tests)
│   └── styles/
│       ├── tokens.css              # CSS custom properties (light + dark values)
│       ├── global.css              # Reset + base typography
│       └── *.module.css            # Component-scoped styles (co-located)
├── public/
│   └── fonts/                      # Self-hosted typefaces (if any; else system stack)
├── tests/
│   ├── unit/
│   │   ├── getProject.test.ts
│   │   ├── getProjectsByCategory.test.ts
│   │   └── validateContact.test.ts
│   └── e2e/
│       ├── navigation.spec.ts
│       └── contact-form.spec.ts
├── next.config.js
├── tsconfig.json
├── vitest.config.ts
├── playwright.config.ts
├── package.json
├── SPEC.md
├── ARCHITECTURE.md
├── DECISIONS.md
├── REVIEW.md
├── BUILD_REPORT.md
└── README.md
```

---

## 3. Module Responsibilities

### 3.1 `src/data/` — Seed Data Layer
Owned by: **Marco (writer)** for copy strings; **Elif (engineer)** for type definitions.  
Responsibility: Declares all static content as typed TypeScript constants. No async, no network. Every other module imports from here — it is the single source of truth for copy and project data. Changing a project record here is the only step needed to update it site-wide.

### 3.2 `src/lib/` — Pure Business Logic
Owned by: **Elif (engineer)**  
Responsibility: Provides pure, side-effect-free helper functions that the interface layer calls. These functions are the testable seam between data and UI — every acceptance criterion that involves data filtering or validation has a corresponding unit test targeting a lib function.

### 3.3 `src/app/` — Page Layer (Next.js App Router)
Owned by: **Theo (designer)**  
Responsibility: One file per route. Each page imports from `src/data/` and `src/lib/`, composes components, and returns server-rendered JSX. Portfolio detail pages call `generateStaticParams` to enumerate slugs at build time. No page contains business logic — it only orchestrates components.

### 3.4 `src/components/` — UI Component Library
Owned by: **Theo (designer)**  
Responsibility: Self-contained, prop-driven React components. Each component owns its CSS Module file. Components receive all data via props — no direct data imports inside components (this keeps them testable and reusable). All interactive state (filter selection, form fields, theme) lives here, isolated to the component that needs it.

### 3.5 `src/styles/` — Design Token System
Owned by: **Theo (designer)**  
Responsibility: `tokens.css` defines every color, spacing, typography, and radius value as a CSS custom property. Light/dark values live in `:root` and `[data-theme="dark"]` selectors respectively. `global.css` imports tokens and applies the base reset and type scale. No component hard-codes a color or spacing value — all reference tokens.

### 3.6 `tests/` — Quality Gate
Owned by: **Priya (analyst)**  
Responsibility: Unit tests (Vitest) cover every function in `src/lib/` and the ContactForm validation paths. E2e tests (Playwright) cover: full navigation across all 5 pages, portfolio filter interaction, and the contact form happy-path + error-path. Tests must pass in CI (`npm test`) before a PR is mergeable.

### 3.7 Root config files — Scaffold
Owned by: **Elif (engineer)**  
Responsibility: `next.config.js`, `tsconfig.json`, `vitest.config.ts`, `playwright.config.ts`, `package.json` set up the build pipeline. `output: 'export'` in next.config.js is mandatory for the static Vercel deployment.

---

## 4. Data Model

### 4.1 `ProjectRecord`
```ts
export type ProjectCategory = 'Residential' | 'Hospitality' | 'Commercial';

export interface ProjectRecord {
  slug: string;              // URL-safe identifier, e.g. 'villa-thorvald'
  name: string;              // Display name
  category: ProjectCategory;
  year: number;              // Four-digit year
  location: string;          // City, Country
  tagline: string;           // One-line card subtitle
  description: string[];     // Array of paragraphs (3–5)
  scope: string[];           // Bullet list of work performed
  materials: string[];       // Tag chips — e.g. ['Travertine', 'Oak', 'Linen']
  featured: boolean;         // true for the 3 cards shown on the Home page
  aspectRatio?: '16/9' | '4/3' | '3/2'; // Placeholder image shape; default '16/9'
}
```

### 4.2 `ServiceRecord`
```ts
export interface ProcessStep {
  title: string;
  description: string;
}

export interface ServiceRecord {
  id: string;                // 'full-design' | 'renovation-consulting' | 'furniture-curation'
  name: string;
  tagline: string;
  description: string;
  steps: ProcessStep[];      // 3–4 process steps
  deliverables: string[];    // What the client receives
}
```

### 4.3 `FounderRecord`
```ts
export interface FounderRecord {
  id: string;                // 'founder-1' | 'founder-2'
  name: string;
  role: string;              // e.g. 'Co-founder & Lead Designer'
  bio: string[];             // Array of sentences (3–4)
  initials: string;          // Used in portrait placeholder, e.g. 'ML'
}
```

### 4.4 `PressRecord`
```ts
export interface PressRecord {
  id: string;
  outlet: string;            // e.g. 'Architectural Digest'
  title: string;             // Article headline
  year: number;
  url: string;               // '#' for seed data
}
```

### 4.5 `SiteConfig`
```ts
export interface SiteConfig {
  studioName: string;        // 'Atelier Nord'
  tagline: string;
  statement: string;         // 2–3 sentence brand paragraph
  address: string;
  email: string;
  phone: string;
  hours: string;
  instagram: string;         // URL, '#' for now
  linkedin: string;          // URL, '#' for now
}
```

---

## 5. Interface Contracts (Core → Interface)

### 5.1 `getProject(slug: string): ProjectRecord | undefined`
```ts
// src/lib/getProject.ts
import { projects } from '@/data/projects';

export function getProject(slug: string): ProjectRecord | undefined {
  return projects.find(p => p.slug === slug);
}
```
Used by: `src/app/portfolio/[slug]/page.tsx`  
Test: returns correct record for known slug; returns `undefined` for unknown slug.

### 5.2 `getProjectsByCategory(category: ProjectCategory | 'All'): ProjectRecord[]`
```ts
// src/lib/getProjectsByCategory.ts
import { projects } from '@/data/projects';

export function getProjectsByCategory(
  category: ProjectCategory | 'All'
): ProjectRecord[] {
  if (category === 'All') return projects;
  return projects.filter(p => p.category === category);
}
```
Used by: `src/components/FilterBar/` (client component)  
Test: 'All' returns 6; 'Residential' returns 2; 'Hospitality' returns 2; 'Commercial' returns 2.

### 5.3 `validateContact(fields: ContactFields): ContactErrors`
```ts
// src/lib/validateContact.ts
export interface ContactFields {
  name: string;
  email: string;
  projectType: string;
  budgetRange: string;
  message: string;
}

export interface ContactErrors {
  name?: string;
  email?: string;
  projectType?: string;
  budgetRange?: string;
  message?: string;
}

export function validateContact(fields: ContactFields): ContactErrors {
  // Returns an object with error strings for each invalid field.
  // Empty object means no errors.
}
```
Rules:
- `name`: required (non-empty after trim)
- `email`: required + matches `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- `projectType`: required (non-empty)
- `budgetRange`: required (non-empty)
- `message`: required + length ≥ 20 chars after trim

Used by: `src/components/ContactForm/` (on blur per field + on submit)  
Test: each invalid field produces its error key; all valid produces `{}`.

### 5.4 `generateStaticParams` (Next.js convention)
```ts
// src/app/portfolio/[slug]/page.tsx
export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}
```
Ensures all 6 project pages are pre-rendered at build time. No runtime lookup needed.

### 5.5 Theme contract
- `ThemeProvider` wraps the root layout.
- Reads `localStorage.getItem('atelier-nord-theme')` on mount; falls back to `prefers-color-scheme`.
- Sets `document.documentElement.setAttribute('data-theme', theme)` where `theme` is `'light'` or `'dark'`.
- Exposes `useTheme(): { theme: 'light' | 'dark'; toggle: () => void }` via React context.
- The `Nav` component consumes `useTheme()` to render the toggle button.

---

## 6. Design Token Contract

```css
/* src/styles/tokens.css */
:root {
  /* Colours — light */
  --color-bg:           #F7F4EF;   /* warm off-white */
  --color-surface:      #EDEAE3;   /* card / nav surface */
  --color-text:         #1A1916;   /* near-black */
  --color-text-muted:   #6B6760;   /* secondary text */
  --color-accent:       #8B6F47;   /* warm terracotta-bronze */
  --color-border:       #D6D1C8;   /* subtle dividers */

  /* Typography */
  --font-serif:         'Cormorant Garamond', Georgia, serif;
  --font-sans:          'DM Sans', system-ui, sans-serif;
  --font-size-base:     1rem;       /* 16px */
  --font-size-lg:       1.25rem;
  --font-size-xl:       1.75rem;
  --font-size-2xl:      2.5rem;
  --font-size-hero:     clamp(3rem, 8vw, 7rem);

  /* Spacing scale (8px base) */
  --space-1:  0.25rem;
  --space-2:  0.5rem;
  --space-3:  0.75rem;
  --space-4:  1rem;
  --space-6:  1.5rem;
  --space-8:  2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;

  /* Radii */
  --radius-sm:  4px;
  --radius-md:  8px;
  --radius-lg: 16px;

  /* Transitions */
  --transition-base: 200ms ease;
}

[data-theme="dark"] {
  --color-bg:           #141210;
  --color-surface:      #1E1C19;
  --color-text:         #F0ECE4;
  --color-text-muted:   #9A948A;
  --color-accent:       #C4956A;
  --color-border:       #2E2B26;
}
```

---

## 7. Build & CI Pipeline

```
npm install
npm run lint          # eslint
npm test              # vitest run (unit tests)
npm run build         # next build (static export to ./out)
```

Vercel build settings (set by Yara):
- **Framework:** Next.js
- **Build command:** `npm run build`
- **Output directory:** `out`
- **Install command:** `npm install`

Playwright e2e tests run separately (`npm run test:e2e`) against the locally served `out/` directory using `npx serve out`; they are not part of the Vercel build step.

---

## 8. Ownership Summary

| File / Directory | Owning Lane |
|------------------|-------------|
| `SPEC.md`, `ARCHITECTURE.md` | Omar |
| `src/data/*.ts` | Marco (copy) + Elif (types) |
| `src/lib/*.ts` | Elif |
| `src/app/**/*.tsx` | Theo |
| `src/components/**` | Theo |
| `src/styles/` | Theo |
| `tests/unit/` | Priya |
| `tests/e2e/` | Priya |
| `package.json`, `next.config.js`, `tsconfig.json`, `vitest.config.ts` | Elif |
| `README.md`, `DECISIONS.md`, `BUILD_REPORT.md` | Marco |
| `REVIEW.md` | Priya |
| Vercel project & deploy monitoring | Yara |
