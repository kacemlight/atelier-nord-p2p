# Atelier Nord — Technical Specification

> Version 1.0 — authored by Omar (strategist lane)  
> Repository: `kacemlight/atelier-nord-p2p`

---

## 1. Mission Scope

Deliver a complete marketing website for Atelier Nord, a Paris-based interior design studio. The site must:

- Present a premium, high-end brand identity (warm minimalism, natural materials)
- Serve 5 pages: Home, Portfolio, Services, About, Contact
- Be fast-loading, flawlessly mobile-responsive, and support dark mode
- Ship as a clean, maintainable codebase a future developer can extend
- Be deployed to Vercel from `kacemlight/atelier-nord-p2p`

---

## 2. Pages & Feature Requirements

### 2.1 Home (`/`)
- Hero section: full-viewport, strong typographic statement, brand tagline
- Brief studio intro (2–3 sentences)
- Featured work grid: 3 selected portfolio projects (image placeholder + title + category)
- Services teaser: 3 cards linking to `/services`
- CTA strip: link to `/contact`
- Nav header (site-wide) and footer (site-wide)

### 2.2 Portfolio (`/portfolio`)
- Filterable gallery: filters = `All | Residential | Hospitality | Commercial`
- 6 seeded projects, each card shows: placeholder image, project name, location, year, category badge
- Filter state managed client-side (no network request)
- Each card links to `/portfolio/[slug]`

### 2.3 Portfolio Detail (`/portfolio/[slug]`)
- Hero image placeholder (full-width, styled elegantly)
- Project title, location, year, scope, category
- Long-form description (3–4 paragraphs)
- Secondary image grid (2–3 placeholder areas)
- Previous/Next project navigation

### 2.4 Services (`/services`)
- Three service offerings:
  1. Full Interior Design
  2. Renovation Consulting
  3. Furniture Curation
- Each service: title, description, process steps (3–4 steps), deliverables list
- Visual hierarchy distinguishes the three offers clearly

### 2.5 About (`/about`)
- Studio philosophy statement (2–3 paragraphs)
- Two founder profiles: name, title, portrait placeholder, bio
- Press mentions section (3–4 fictional but realistic publications)
- Studio timeline or values grid (optional, space-permitting)

### 2.6 Contact (`/contact`)
- Inquiry form with fields:
  - Name (required)
  - Email (required, format-validated)
  - Project Type selector: `Residential | Hospitality | Commercial | Other`
  - Budget Range selector: `< €50k | €50k–150k | €150k–500k | €500k+`
  - Message (required, min 20 chars)
- Client-side validation with inline error messages
- On submit: success state (no backend required — static toast or inline confirmation)
- Studio details: address, email, phone, studio hours

### 2.7 Global Shell
- **Navigation**: logo left, nav links right; mobile hamburger menu; active link indicated
- **Footer**: links, copyright, social stubs (Instagram, Pinterest)
- **Dark mode**: system-preference detected via `prefers-color-scheme`; manual toggle in header
- **SEO**: `<title>` and `<meta description>` per page via Next.js `<Head>` / `Metadata` API

---

## 3. Content Seed — Portfolio Projects

All 6 projects are fictional but realistic. Data lives in `/src/data/projects.ts`.

| Slug | Name | Category | Location | Year | Scope |
|------|------|----------|----------|------|-------|
| `maison-vernet` | Maison Vernet | Residential | Paris, 8e | 2023 | Full Interior Design |
| `hotel-les-graines` | Hôtel Les Graines | Hospitality | Lyon | 2022 | Full Interior Design |
| `appartement-bastille` | Appartement Bastille | Residential | Paris, 11e | 2023 | Renovation Consulting |
| `boutique-marechal` | Boutique Maréchal | Commercial | Bordeaux | 2022 | Furniture Curation |
| `villa-sainte-victoire` | Villa Sainte-Victoire | Residential | Aix-en-Provence | 2021 | Full Interior Design |
| `auberge-du-moulin` | Auberge du Moulin | Hospitality | Normandy | 2021 | Full Interior Design |

---

## 4. Copy Voice

- Language: English
- Tone: refined, confident, direct — no superlatives, no marketing fluff
- Register: the studio speaks to an informed, affluent client who values craft over hype
- Headlines: short, declarative, present tense
- Body: concise paragraphs, no passive constructions where avoidable

---

## 5. Non-Negotiables

| Requirement | Standard |
|-------------|----------|
| Mobile responsiveness | Flawless at 320px, 375px, 768px, 1280px, 1440px |
| Dark mode | System preference + manual toggle |
| Performance | No unoptimized images; use `next/image` with placeholder; target LCP < 2.5s |
| Accessibility | Semantic HTML; ARIA labels on interactive elements; focus states |
| Form validation | Client-side only; inline errors; no submit on invalid |
| Portfolio filter | Client-side; no page reload |
| Build | `npm run build` exits 0; no TypeScript errors |

---

## 6. Out of Scope

- CMS integration (copy is hardcoded in data files)
- Backend / form submission (client-side confirmation only)
- Authentication or user accounts
- E-commerce
- Animations beyond CSS transitions
- Internationalisation (English only)
- Real photography assets (elegant placeholder areas only)

---

## 7. Acceptance Criteria

1. All 5 pages + 6 portfolio detail pages render without errors.
2. Portfolio filter toggles work without page reload.
3. Contact form validates all fields client-side and shows success state.
4. Dark mode toggles correctly and persists via `localStorage`.
5. Site is READY on Vercel production URL.
6. `npm run build` exits 0 locally and in Vercel build logs.
7. TypeScript strict mode: zero type errors.
8. Tests pass: `npm test` exits 0.
9. README install instructions verified against cold clone.
