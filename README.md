# Atelier Nord — Studio Website

The official marketing website for **Atelier Nord**, a Paris-based interior design studio specialised in residential projects and boutique hotels. Built with Next.js 14, TypeScript, and CSS Modules. Deployed on Vercel.

**Live site:** _See [BUILD_REPORT.md](./BUILD_REPORT.md) for the production URL once the first deploy is READY._

---

## What this is

A five-page marketing site engineered for credibility, fast load times, and long-term maintainability:

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Hero, brand statement, 3 featured project teasers, CTAs |
| Portfolio | `/portfolio` | Filterable gallery — Residential / Hospitality / Commercial |
| Project Detail | `/portfolio/[slug]` | Per-project description, scope, year, location, deliverables |
| Services | `/services` | Three service offerings with process steps and deliverables |
| About | `/about` | Two founder bios, studio philosophy, press mentions |
| Contact | `/contact` | Inquiry form with client-side validation + studio details |

---

## Tech Stack

| Layer | Choice | Rationale |
|-------|--------|----------|
| Framework | Next.js 14 (App Router) | SSG, Vercel-native, file-based routing |
| Language | TypeScript (strict) | Type safety; future-developer friendliness |
| Styling | CSS Modules + CSS custom properties | No UI library; dark mode via `prefers-color-scheme` + localStorage toggle |
| Fonts | Playfair Display (display) + Inter (body) | Google Fonts, loaded via `next/font` |
| Data | Static TypeScript files in `src/data/` | No backend; fully static seed data |
| Testing | Jest + React Testing Library | Unit and component tests |
| Deployment | Vercel | Linked to `kacemlight/atelier-nord-p2p`; auto-deploys on push |

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9 (pnpm and yarn also work)

### Install

```bash
git clone https://github.com/kacemlight/atelier-nord-p2p.git
cd atelier-nord-p2p
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm run start
```

### Run tests

```bash
npm test
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
atelier-nord-p2p/
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── layout.tsx                # Root layout (fonts, metadata, ThemeProvider)
│   │   ├── page.tsx                  # Home
│   │   ├── portfolio/
│   │   │   ├── page.tsx              # Portfolio gallery (filterable)
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # Project detail page
│   │   ├── services/page.tsx         # Services
│   │   ├── about/page.tsx            # About
│   │   ├── contact/page.tsx          # Contact + inquiry form
│   │   └── not-found.tsx             # Branded 404
│   ├── components/                   # Shared UI components
│   │   ├── layout/                   # Header, Footer, Navigation
│   │   ├── home/                     # Hero, PhilosophySection, FeaturedProjects
│   │   ├── portfolio/                # ProjectGrid, FilterBar, ProjectCard
│   │   ├── services/                 # ServiceCard, ProcessSteps, Deliverables
│   │   ├── about/                    # FounderCard, PhilosophyBlock, PressGrid
│   │   ├── contact/                  # InquiryForm, StudioInfo
│   │   └── ui/                       # Button, ImagePlaceholder, SectionHeader, Tag
│   ├── data/                         # Static seed data (TypeScript)
│   │   ├── projects.ts               # 6 portfolio projects
│   │   ├── services.ts               # 3 service offerings
│   │   ├── founders.ts               # 2 founder profiles
│   │   ├── press.ts                  # Press mentions
│   │   └── team.ts                   # Studio team info
│   ├── lib/                          # Pure utility functions
│   │   ├── projects.ts               # getProjects, filterByCategory, getProjectBySlug
│   │   ├── services.ts               # getServices
│   │   └── validation.ts             # Contact form validation logic
│   ├── types/
│   │   └── index.ts                  # TypeScript interfaces (Project, Service, Founder…)
│   └── __tests__/                    # Jest test files (mirrors src structure)
├── public/                           # Static assets
├── SPEC.md                           # Scope and acceptance criteria (Omar)
├── ARCHITECTURE.md                   # Architecture decisions and module map (Omar)
├── DECISIONS.md                      # Architecture decision records (Marco)
├── REVIEW.md                         # Code review findings (Priya)
├── BUILD_REPORT.md                   # Ship report — what shipped, URL, cuts (Nadia)
├── jest.config.ts
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Pages & Features

### Home (`/`)
- Full-viewport hero with studio name in large serif, tagline, two CTAs
- Brand philosophy statement (2–3 sentences)
- Featured projects strip: 3 cards linking to detail pages
- Footer with nav links, studio address, social handles

### Portfolio (`/portfolio`)
- Filter bar: **All | Residential | Hospitality | Commercial**
- Instantaneous client-side filtering (no network call)
- Masonry-style grid: 1 col mobile / 2 col tablet / 3 col desktop
- Each card: styled image placeholder, project name, category badge, year

### Project Detail (`/portfolio/[slug]`)
- Full-width 16:9 image placeholder
- Metadata block: name, category, year, location, scope
- Deliverables list
- 3–5 paragraphs of refined project description
- ← Back to Portfolio link
- Unknown slug → branded 404 page

**Seed projects:**

| Slug | Title | Category | Year | Location |
|------|-------|----------|------|----------|
| `villa-sainte-helene` | Villa Sainte-Hélène | Residential | 2023 | Saint-Tropez, France |
| `hotel-le-caillou` | Hôtel Le Caillou | Hospitality | 2022 | Corsica, France |
| `appartement-marais` | Appartement du Marais | Residential | 2023 | Paris 4e, France |
| `maison-annecy` | Maison Annecy | Residential | 2021 | Annecy, France |
| `showroom-objet` | Showroom Objet | Commercial | 2022 | Paris 8e, France |
| `villa-thorvald` | Villa Thorvald | Residential | 2023 | Oslo, Norway |

### Services (`/services`)
Three offerings, each with a 4-step process and deliverables list:
1. **Full Interior Design** — Discovery → Concept → Design Development → Execution
2. **Renovation Consulting** — Audit → Brief → Partner Coordination → Sign-off
3. **Furniture Curation** — Lifestyle Brief → Sourcing → Presentation → Delivery

### About (`/about`)
- **Camille Arsenault** — Co-Founder & Design Director
- **Thomas Kervarrec** — Co-Founder & Project Director
- Studio philosophy: 3 principles with paragraph statements
- Press: 3 publication mentions (Architectural Digest France, Côté Maison, Le Monde de la Maison)

### Contact (`/contact`)
Inquiry form fields:
- Name (text, required)
- Email (email, required, valid-format validated)
- Project Type (select: Residential / Hospitality / Commercial / Other)
- Budget Range (select: Under €50k / €50k–€150k / €150k–€500k / €500k+)
- Message (textarea, required, min 20 chars)

Validation: inline error messages per field on blur and on submit attempt. On valid submit: success banner — no network call.

Studio aside: address, email, phone, working hours.

---

## Dark Mode

Dark mode is implemented via:
1. **System preference:** `prefers-color-scheme: dark` media query applies automatically
2. **Manual toggle:** `ThemeToggle` component in the nav writes `atelier-nord-theme` to `localStorage` and sets `data-theme="dark"` on `<html>`

All colours are CSS custom properties — switching themes flips a token set, never repaints components individually.

**Design tokens (abbreviated):**

```css
/* Light */
--color-bg:            #F7F5F0
--color-surface:       #FFFFFF
--color-text-primary:  #1C1C1A
--color-accent:        #C8A96E  /* warm gold — same in both modes */

/* Dark */
--color-bg:            #0F0F0D
--color-surface:       #1A1A17
--color-text-primary:  #F0EDE6
```

---

## Performance

- All pages statically generated at build time (`output: 'export'` in `next.config`)
- No client-side data fetching at runtime
- No external image dependencies (styled CSS placeholders with correct aspect ratios)
- Google Fonts loaded via `next/font` (self-hosted at build time)
- Target: Lighthouse ≥ 90 on all four scores for the production URL

---

## For Future Developers

**Adding a project:**
1. Add an entry to `src/data/projects.ts` — all fields are typed via `src/types/index.ts`
2. No other files need to change; the portfolio page and filter consume the data array directly

**Changing copy:**
- Page copy lives in the page components (`src/app/*/page.tsx`)
- Project descriptions, founder bios, service text are in `src/data/`
- No CMS required for updates at this scale

**Changing colours:**
- Edit CSS custom properties in `src/app/globals.css`
- Dark mode overrides are in the `[data-theme='dark']` selector block

**Adding a page:**
- Create `src/app/new-page/page.tsx` — Next.js App Router picks it up automatically

---

## Reference Documents

| Document | Owned by | Purpose |
|----------|----------|---------|
| [SPEC.md](./SPEC.md) | Omar | Scope, acceptance criteria, seed data contract |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | Omar | Module map, interfaces, design token contract |
| [DECISIONS.md](./DECISIONS.md) | Marco | Architecture decision records with rationale |
| [REVIEW.md](./REVIEW.md) | Priya | Code review findings, severity, resolution |
| [BUILD_REPORT.md](./BUILD_REPORT.md) | Nadia | What shipped, what was cut, production URL |

---

*Maintained by Marco (writer lane). All claims verified against the pushed code — if something doesn't match, open an issue.*
