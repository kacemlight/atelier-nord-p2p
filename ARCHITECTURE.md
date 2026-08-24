# Atelier Nord — Architecture Document

> Version 1.0 — authored by Omar (strategist lane)  
> Repository: `kacemlight/atelier-nord-p2p`

---

## 1. Stack Decision

| Layer | Choice | Rationale |
|-------|--------|----------|
| Framework | Next.js 14 (App Router) | Vercel-native, static export capable, built-in `<Image>`, `<Metadata>` API |
| Language | TypeScript (strict) | Type safety for data contracts; future-developer-friendly |
| Styling | CSS Modules + CSS custom properties | Zero runtime overhead; dark mode via `[data-theme]` attribute; no UI library dependency |
| Data | Static TypeScript files (`/src/data/`) | No backend needed; single source of truth for copy and projects |
| Testing | Jest + React Testing Library | Standard; works with Next.js; test core logic and key UI interactions |
| Deployment | Vercel (linked to GitHub repo) | Automatic deploy on push; no config beyond `framework: nextjs` |

**No external UI library** (per SOUL.md engineering principles).

---

## 2. Repository Structure

```
atelier-nord-p2p/
├── public/
│   └── fonts/                  # Self-hosted fonts (if any)
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout: theme provider, nav, footer
│   │   ├── page.tsx            # Home
│   │   ├── portfolio/
│   │   │   ├── page.tsx        # Portfolio gallery + filter
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Project detail
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── components/             # Shared UI components
│   │   ├── Nav.tsx             # Site navigation (with dark mode toggle)
│   │   ├── Footer.tsx
│   │   ├── ProjectCard.tsx     # Portfolio grid card
│   │   ├── PortfolioFilter.tsx # Filter tabs (client component)
│   │   ├── ContactForm.tsx     # Form with client-side validation
│   │   ├── ServiceCard.tsx
│   │   └── ThemeToggle.tsx     # Dark/light mode button
│   ├── data/
│   │   ├── projects.ts         # 6 seeded portfolio projects
│   │   ├── services.ts         # 3 service definitions
│   │   └── founders.ts         # Founder bios, press mentions
│   ├── lib/
│   │   ├── theme.ts            # Theme detection + localStorage persistence
│   │   └── validation.ts       # Contact form validation functions (pure, testable)
│   ├── styles/
│   │   ├── globals.css         # CSS custom properties (light + dark tokens)
│   │   └── *.module.css        # Per-component styles
│   └── types/
│       └── index.ts            # Shared TypeScript interfaces
├── __tests__/
│   ├── validation.test.ts      # Unit tests for form validation
│   ├── projects.test.ts        # Unit tests for project data integrity
│   └── components/
│       ├── ContactForm.test.tsx
│       └── PortfolioFilter.test.tsx
├── SPEC.md
├── ARCHITECTURE.md
├── REVIEW.md
├── DECISIONS.md
├── BUILD_REPORT.md
├── README.md
├── next.config.ts
├── tsconfig.json
├── jest.config.ts
└── package.json
```

---

## 3. Module Boundaries & Interfaces

### 3.1 Data Layer (`/src/data/`)

Owner: **Elif (engineer)**

This layer is the single source of truth. All data is statically typed and imported directly by pages and components. No runtime fetching.

#### `projects.ts`
```typescript
export interface Project {
  slug: string;           // URL-safe identifier
  name: string;           // Display name
  category: 'Residential' | 'Hospitality' | 'Commercial';
  location: string;
  year: number;
  scope: string;          // Short scope label
  shortDescription: string; // 1–2 sentences for card
  description: string[];  // Array of paragraphs for detail page
  featured: boolean;      // Show on home page (max 3)
  imageCount: number;     // Number of placeholder image slots on detail page
}

export const projects: Project[] = [ /* 6 entries per SPEC.md § 3 */ ];

export function getProjectBySlug(slug: string): Project | undefined
export function getProjectsByCategory(cat: Project['category'] | 'All'): Project[]
export function getFeaturedProjects(): Project[]  // returns projects where featured === true
```

#### `services.ts`
```typescript
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  steps: ProcessStep[];
  deliverables: string[];
}

export const services: Service[] = [ /* 3 entries */ ];
```

#### `founders.ts`
```typescript
export interface Founder {
  name: string;
  title: string;
  bio: string[];          // Array of paragraphs
}

export interface PressItem {
  publication: string;
  quote: string;
  year: number;
}

export const founders: Founder[];
export const pressItems: PressItem[];
export const philosophyStatement: string[];
```

---

### 3.2 Library Layer (`/src/lib/`)

Owner: **Elif (engineer)**

#### `validation.ts` — Pure functions, zero DOM dependency
```typescript
export interface ContactFormData {
  name: string;
  email: string;
  projectType: 'Residential' | 'Hospitality' | 'Commercial' | 'Other';
  budgetRange: '<€50k' | '€50k–150k' | '€150k–500k' | '€500k+';
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
}

export function validateContactForm(data: ContactFormData): ValidationResult
export function validateEmail(email: string): boolean
```

#### `theme.ts`
```typescript
export type Theme = 'light' | 'dark';
export function getInitialTheme(): Theme      // reads localStorage, falls back to prefers-color-scheme
export function applyTheme(theme: Theme): void // sets data-theme on <html>, writes localStorage
export function toggleTheme(current: Theme): Theme
```

---

### 3.3 Component Layer (`/src/components/`)

Owner: **Theo (designer)**

Components consume data via props typed against the interfaces in `§ 3.1`. They never import from `/src/data/` directly — pages pass data down.

**Exception**: `PortfolioFilter.tsx` is a Client Component (`'use client'`) that receives `projects: Project[]` and manages filter state internally.

| Component | Props interface | Notes |
|-----------|----------------|-------|
| `Nav` | `{ currentPath: string }` | Includes `ThemeToggle` |
| `Footer` | `{}` | Static content |
| `ProjectCard` | `{ project: Project }` | Links to `/portfolio/[slug]` |
| `PortfolioFilter` | `{ projects: Project[] }` | Client component, manages active filter |
| `ServiceCard` | `{ service: Service }` | Renders steps + deliverables |
| `ContactForm` | `{}` | Client component; uses `validateContactForm` |
| `ThemeToggle` | `{ theme: Theme; onToggle: () => void }` | |

---

### 3.4 Page Layer (`/src/app/`)

Owner: **Theo (designer)**

Pages are Server Components by default. They import from `/src/data/` and pass typed props to components.

| Page | Data imported | Key responsibility |
|------|--------------|--------------------|
| `/` | `getFeaturedProjects()`, `services` | Hero, featured grid, service teasers |
| `/portfolio` | `projects` | Passes all projects to `PortfolioFilter` |
| `/portfolio/[slug]` | `getProjectBySlug(slug)`, `projects` | Detail view, prev/next nav |
| `/services` | `services` | Renders 3 `ServiceCard` instances |
| `/about` | `founders`, `pressItems`, `philosophyStatement` | Founder profiles, press |
| `/contact` | (none) | Renders `ContactForm` |

**`generateStaticParams`** must be exported from `/portfolio/[slug]/page.tsx` to enable static generation of all 6 detail pages.

---

### 3.5 Style System (`/src/styles/globals.css`)

Owner: **Theo (designer)**

```css
:root {
  /* Colour tokens — light */
  --color-bg: #FAF9F7;
  --color-surface: #F0EDE8;
  --color-text-primary: #1A1816;
  --color-text-secondary: #5C5754;
  --color-accent: #8B6F5E;       /* warm terracotta */
  --color-border: #DDD9D3;

  /* Typography */
  --font-heading: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-size-base: 1rem;

  /* Spacing scale (4px base) */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-8: 2rem;
  --space-16: 4rem;
  --space-24: 6rem;
}

[data-theme='dark'] {
  --color-bg: #141210;
  --color-surface: #1E1C1A;
  --color-text-primary: #F0EDE8;
  --color-text-secondary: #A09890;
  --color-accent: #C4A882;       /* lighter warm gold in dark mode */
  --color-border: #2E2B27;
}
```

---

## 4. Theme System

1. `layout.tsx` runs an inline `<script>` (before hydration) that calls `getInitialTheme()` and sets `document.documentElement.dataset.theme`. This prevents flash of wrong theme.
2. `ThemeToggle` component dispatches an event or calls a callback that updates state in `Nav` and re-calls `applyTheme()`.
3. CSS variables update automatically via `[data-theme='dark']` selector.

---

## 5. Routing & Static Generation

- All pages are **statically generated** at build time.
- `/portfolio/[slug]` uses `generateStaticParams` returning `projects.map(p => ({ slug: p.slug }))`.
- No dynamic server-side rendering; `output: 'standalone'` is NOT set — default Next.js static + serverless is used.
- `next.config.ts` sets no special overrides beyond image domains (none needed — all placeholders are local CSS).

---

## 6. Testing Strategy

Owner: **Priya (analyst)**

| Test file | What it covers | Type |
|-----------|---------------|------|
| `__tests__/validation.test.ts` | `validateContactForm`, `validateEmail` — all branches | Unit |
| `__tests__/projects.test.ts` | All 6 projects have required fields; `getProjectBySlug` and `getProjectsByCategory` work | Unit |
| `__tests__/components/ContactForm.test.tsx` | Renders; shows errors on empty submit; shows success on valid submit | Integration |
| `__tests__/components/PortfolioFilter.test.tsx` | Filter tabs toggle; correct projects shown per category | Integration |

Test runner: **Jest** with `ts-jest` transformer and `@testing-library/react`.

---

## 7. Deployment

Owner: **Yara (devops)**

- Vercel project linked to `kacemlight/atelier-nord-p2p`, framework preset: `nextjs`.
- Every push to `main` triggers an automatic deploy.
- Build command: `npm run build` (default Next.js).
- No environment variables required (all data is static).
- Production URL to be recorded in `BUILD_REPORT.md`.

---

## 8. Key Decisions Log Pointer

Detailed decision rationale lives in `DECISIONS.md`. Architecture changes require an update to this document.

---

## 9. Handoff Checklist for Elif (engineer)

1. Scaffold Next.js 14 + TypeScript project at repo root.
2. Install: `next`, `react`, `react-dom`, `typescript`, `@types/react`, `@types/node`, `jest`, `ts-jest`, `@testing-library/react`, `@testing-library/jest-dom`.
3. Implement `/src/data/projects.ts`, `/src/data/services.ts`, `/src/data/founders.ts` with types matching `§ 3.1`.
4. Implement `/src/lib/validation.ts` and `/src/lib/theme.ts` with exports matching `§ 3.2`.
5. Expose `generateStaticParams` on the slug page stub.
6. Confirm `npm run build` exits 0 before handing to Theo.
