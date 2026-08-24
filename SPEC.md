# Atelier Nord — Product Specification

> **Revision:** 1.0  
> **Author:** Omar (strategist)  
> **Status:** Approved for implementation

---

## 1. Scope Cut

### Ships
| # | Feature | Notes |
|---|---------|-------|
| 1 | **Home page** | Hero, studio tagline, short brand statement, 3 featured project teasers, CTA strip |
| 2 | **Portfolio page** | Filterable grid (Residential / Hospitality / Commercial), 6 seed projects |
| 3 | **Project detail page** | Description, scope, year, material palette tags, styled placeholder image area |
| 4 | **Services page** | 3 offers, process steps per offer, deliverables list |
| 5 | **About page** | Two founder bios, studio philosophy, 3 press mention placeholders |
| 6 | **Contact page** | Inquiry form (project type, budget range, name, email, message) with client-side validation + studio details |
| 7 | **Dark mode** | System-preference-aware, toggle persisted in localStorage |
| 8 | **Mobile-first responsive layout** | Breakpoints: 375 px, 768 px, 1280 px |
| 9 | **Performance** | Lighthouse ≥ 90 on all four scores for the production URL |
| 10 | **Repository scaffold** | README, SPEC, ARCHITECTURE, DECISIONS, REVIEW, BUILD_REPORT, test suite |

### Explicitly Out of Scope
- CMS / admin panel (copy is hard-coded seed data)
- Backend form submission (form validates client-side; submit triggers a `console.log` + success state; no email transport)
- Authentication / user accounts
- E-commerce or payment
- Multi-language (English only)
- Animation library (CSS transitions only, no Framer Motion)
- Analytics integration
- Real photography assets (all image areas use styled placeholders with aspect-ratio boxes)

---

## 2. User-Visible Behaviour

### 2.1 Home (`/`)
- Hero section: full-viewport-height, studio name in large serif, one-line tagline, two CTAs — "View our work" → `/portfolio`, "Get in touch" → `/contact`.
- Studio statement: 2–3 sentence brand paragraph.
- Featured projects strip: 3 cards pulled from the first 3 projects in the portfolio data, each linking to its detail page.
- Footer: nav links, studio address, social handles (Instagram, LinkedIn — links to `#` for now).

### 2.2 Portfolio (`/portfolio`)
- Filter bar: All | Residential | Hospitality | Commercial. Default: All.
- Project grid: masonry-style, 1 col mobile / 2 col tablet / 3 col desktop.
- Each card: placeholder image, project name, category badge, year.
- Filter is instantaneous (no network call), implemented with client-side state.
- Clicking a card navigates to `/portfolio/[slug]`.

### 2.3 Project Detail (`/portfolio/[slug]`)
- Full-width placeholder image area (16:9 aspect ratio).
- Sidebar or below-image block: name, category, year, location, scope (bullet list), material palette (tag chips).
- Project description: 3–5 paragraphs of refined copy.
- Back link: ← All Projects.
- If slug not found → 404 page.

### 2.4 Services (`/services`)
- Three service cards, each expandable to show process steps:
  1. Full Interior Design — Discovery → Concept → Design Development → Execution
  2. Renovation Consulting — Audit → Brief → Partner Coordination → Sign-off
  3. Furniture Curation — Lifestyle Brief → Sourcing → Presentation → Delivery
- Each card lists what the client receives (deliverables).
- CTA at the bottom → `/contact`.

### 2.5 About (`/about`)
- Two founder profiles: portrait placeholder, name, role, short bio (3–4 sentences).
- Studio philosophy section: 3 principles, each with a title and one-paragraph statement.
- Press section: 3 publication mentions — outlet name, article title, year (linked to `#`).

### 2.6 Contact (`/contact`)
- Form fields:
  - Name (text, required)
  - Email (email, required, valid-email format)
  - Project Type (select: Residential / Hospitality / Commercial / Other)
  - Budget Range (select: Under €50k / €50k–€150k / €150k–€500k / €500k+)
  - Message (textarea, required, min 20 chars)
- Validation: inline error messages per field on blur + on submit attempt.
- Submit: success banner "Thank you — we will be in touch within 48 hours." No network call.
- Studio details aside: address, email, phone, working hours.

### 2.7 Dark Mode
- `prefers-color-scheme` media query sets the initial theme.
- Toggle button in the nav persists the choice to `localStorage` under key `atelier-nord-theme`.
- Token set: `--color-bg`, `--color-surface`, `--color-text`, `--color-text-muted`, `--color-accent`, `--color-border`.

### 2.8 Navigation
- Sticky top nav: logo (wordmark), links (Portfolio, Services, About, Contact), dark-mode toggle.
- On mobile: hamburger → full-screen overlay menu.
- Active link highlighted.

---

## 3. Acceptance Criteria

| ID | Feature | Criterion | Verified by |
|----|---------|-----------|-------------|
| AC-01 | Home | Hero renders with studio name, tagline, and both CTAs; CTAs navigate to correct pages | Priya / manual |
| AC-02 | Home | Featured projects strip shows exactly 3 cards linked to portfolio detail pages | Priya / unit test |
| AC-03 | Portfolio | Filter buttons update visible cards without page reload | Priya / unit test |
| AC-04 | Portfolio | All 6 seed projects appear under "All"; correct subset under each category | Priya / unit test |
| AC-05 | Project Detail | Navigating to `/portfolio/[slug]` for each of the 6 projects renders all data fields | Priya / integration |
| AC-06 | Project Detail | Unknown slug renders a 404 page | Priya / integration |
| AC-07 | Services | Three service cards render with process steps and deliverables visible | Priya / visual |
| AC-08 | About | Two founder bios and 3 press mentions render | Priya / visual |
| AC-09 | Contact | Empty submit shows inline errors on all required fields | Priya / unit test |
| AC-10 | Contact | Valid submit shows success banner; form clears | Priya / unit test |
| AC-11 | Dark mode | Toggle switches theme; preference persists on reload | Priya / unit test |
| AC-12 | Mobile | No horizontal scroll at 375 px viewport on any page | Priya / visual |
| AC-13 | Performance | Lighthouse ≥ 90 all four scores on production URL | Yara / Lighthouse |
| AC-14 | 404 | Unknown routes render a branded 404 page with home link | Priya / manual |
| AC-15 | Build | `npm run build` exits 0 with zero TypeScript errors | CI / Vercel |

---

## 4. Copy & Seed Data Contract

All site copy and project seed data is authored inline in the data module (`src/data/`). Marco owns the copy strings. The data module exports typed objects that the interface layer consumes — no runtime fetching, no environment variables required.

Seed projects (6 total):

| Slug | Name | Category | Year | Location |
|------|------|----------|------|----------|
| `villa-thorvald` | Villa Thorvald | Residential | 2023 | Oslo, Norway |
| `hotel-des-lames` | Hôtel des Lames | Hospitality | 2022 | Marseille, France |
| `atelier-bergerac` | Atelier Bergerac | Commercial | 2023 | Paris, France |
| `maison-solberg` | Maison Solberg | Residential | 2021 | Bergen, Norway |
| `le-refuge-hotel` | Le Refuge | Hospitality | 2023 | Chamonix, France |
| `studio-caillebotte` | Studio Caillebotte | Commercial | 2022 | Lyon, France |

---

## 5. Non-Functional Requirements

- **Load time:** First Contentful Paint < 1.5 s on 4G (achieved via Next.js static export + image placeholders).
- **Accessibility:** Semantic HTML, `alt` attributes on all placeholder images, keyboard-navigable nav and form.
- **Maintainability:** All design tokens in `src/styles/tokens.css`; all copy in `src/data/`; zero magic strings in components.
- **Test coverage:** Unit tests for data helpers and form validation; Playwright smoke tests for navigation and form flows.
