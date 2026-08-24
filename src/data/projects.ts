import type { Project } from '@/types';

/**
 * Seed data for the Atelier Nord portfolio.
 * 6 realistic projects spanning the three categories.
 */
export const projects: Project[] = [
  {
    id: 'proj-01',
    slug: 'villa-sainte-helene',
    title: 'Villa Sainte-Hélène',
    category: 'residential',
    location: 'Saint-Tropez, France',
    year: 2023,
    scope: 'Full Interior Design',
    shortDescription:
      'A Provençal villa reimagined through warm stone, aged oak, and a palette drawn directly from the surrounding garrigue.',
    description:
      'Commissioned by a private collector family seeking a primary summer residence, Villa Sainte-Hélène required a complete transformation of a 1970s farmhouse into a refined yet utterly liveable retreat. Our response was material-led: raw plaster walls in a sun-warmed ivory, bespoke cabinetry in hand-oiled oak, and a furniture edit sourced across artisan workshops in the Luberon and Marseille. Every room opens onto a specific landscape view, and the interior palette — sage, terracotta, warm white — amplifies that connection to place. The project also included a pool terrace design, a 900-bottle wine cellar, and a library-salon conceived around the client\'s collection of 20th-century French painting.',
    area: 620,
    deliverables: [
      'Spatial planning and concept development',
      'Material and finish specifications',
      'Bespoke furniture design and procurement',
      'Art placement consulting',
      'Pool terrace and outdoor dining areas',
      'Wine cellar design',
      'Site visits and contractor coordination',
    ],
    imageAspect: '4/3',
    featured: true,
  },
  {
    id: 'proj-02',
    slug: 'hotel-le-caillou',
    title: 'Hôtel Le Caillou',
    category: 'hospitality',
    location: 'Corsica, France',
    year: 2022,
    scope: 'Full Interior Design',
    shortDescription:
      'A twelve-room boutique hotel on the Cap Corse coast — every space speaks of island craft, the sea, and unhurried luxury.',
    description:
      'Hôtel Le Caillou was a complete interior design commission for a family-owned property on the wild northern tip of Corsica. The brief was demanding in its specificity: no continental clichés, deep respect for local craft, and a guest experience that would feel both distinctive and deeply restful. We responded with a material language rooted in the island itself — granite from a local quarry, hand-woven linen from a Bastelica artisan, and ceramics fired in Ajaccio. The twelve rooms each carry a distinct character while sharing a tonal vocabulary of pale aqua, chalk white, and driftwood grey. Common areas include a breakfast terrace, a reading lounge with an open fireplace, and a bar whose back wall is entirely clad in cork.',
    area: 980,
    deliverables: [
      'Concept direction and brand alignment',
      'All 12 guest room designs',
      'Bar, lounge, and dining area design',
      'Material and finish schedules',
      'Local artisan sourcing and coordination',
      'FF&E procurement management',
      'Pre-opening site supervision',
    ],
    imageAspect: '16/9',
    featured: true,
  },
  {
    id: 'proj-03',
    slug: 'appartement-marais',
    title: 'Appartement du Marais',
    category: 'residential',
    location: 'Paris 4e, France',
    year: 2023,
    scope: 'Renovation Consulting & Furniture Curation',
    shortDescription:
      'A 17th-century Marais apartment navigated between its historic bones — exposed beams, Versailles parquet — and the demands of contemporary family life.',
    description:
      'This 180 m² apartment in a classified Haussmann building presented a challenge as much archival as spatial: how to honour three centuries of accumulated character while making a home that functions for a young family today. Our consulting mandate covered the full renovation sequence — structural assessments, listed-building compliance, trade coordination — while our design remit focused on preserving what is irreplaceable (the 17th-century ceiling beams, the original stone fireplace, the wide-plank parquet de Versailles) and introducing what is contemporary (a kitchen designed as a furniture object, a home office tucked behind a pivoting bookcase wall, and a children\'s floor that treats primary colours with the same restraint as the rest of the apartment).',
    area: 180,
    deliverables: [
      'Renovation sequence consulting',
      'Listed-building compliance guidance',
      'Kitchen design as custom furniture object',
      'Pivoting bookcase / home office installation',
      'Full furniture edit and procurement',
      'Textile and lighting specification',
    ],
    imageAspect: '4/3',
    featured: false,
  },
  {
    id: 'proj-04',
    slug: 'maison-annecy',
    title: 'Maison Annecy',
    category: 'residential',
    location: 'Annecy, France',
    year: 2021,
    scope: 'Full Interior Design',
    shortDescription:
      'A lakeside house of glass and concrete, softened through layers of natural texture: raw linen, smoked oak, hand-thrown ceramic.',
    description:
      "Designed by an architect known for rigorous modernism, this 480 m² lakeside house arrived to us as a shell of polished concrete and floor-to-ceiling glazing. Our role was to humanise that precision without softening its intention. The answer was texture rather than colour: raw linen curtains that pool on the floors, a dining table in solid smoked oak, walls of hand-finished microcement, and a bedroom suite lined in tactile bouclé panels. The material palette — off-white, charcoal, driftwood — never competes with the extraordinary views of Lac d'Annecy. A bespoke lighting scheme, designed in collaboration with a Lyon atelier, articulates the architecture at night.",
    area: 480,
    deliverables: [
      'Concept development and mood direction',
      'Furniture design and specification',
      'Textile and surface finish specification',
      'Bespoke lighting design collaboration',
      'Art advisory and placement',
      'Full procurement management',
    ],
    imageAspect: '16/9',
    featured: true,
  },
  {
    id: 'proj-05',
    slug: 'showroom-objet',
    title: 'Showroom Objet',
    category: 'commercial',
    location: 'Paris 8e, France',
    year: 2022,
    scope: 'Full Interior Design',
    shortDescription:
      'A concept showroom for an independent French ceramics brand — the space is itself a display case, a workshop, and a gallery in equal measure.',
    description:
      "Objet is a Paris-based ceramics brand whose founders wanted a showroom that would function simultaneously as retail space, creative workshop, and cultural venue for small evening events. The 260 m² ground-floor space on the Avenue Montaigne had been a jeweller for forty years. We stripped it to its concrete bones, introduced raw steel shelving systems (designed for maximum flexibility and minimum visual noise), and finished the floors in a pale, slightly chalky terrazzo that references the brand's signature clay tones. A working kiln area — visible through a full-height glass wall — anchors the rear of the space and gives customers a direct sightline into the making process.",
    area: 260,
    deliverables: [
      'Concept and spatial strategy',
      'Retail display system design',
      'Workshop area planning and specification',
      'Event-hosting adaptability design',
      'Terrazzo floor and surface specifications',
      'Bespoke steel shelving design',
      'Lighting design for retail and gallery modes',
    ],
    imageAspect: '3/4',
    featured: false,
  },
  {
    id: 'proj-06',
    slug: 'chalet-megeve',
    title: 'Chalet Mégève',
    category: 'hospitality',
    location: 'Mégève, France',
    year: 2024,
    scope: 'Full Interior Design',
    shortDescription:
      'An alpine chalet stripped of rustic convention — reborn as a quietly glamorous retreat for a discerning rental market.',
    description:
      'The client brief for this seven-bedroom chalet in the Mont-Blanc massif was bracingly clear: no hunting trophies, no tartan, no antlers. They wanted an alpine property that felt as refined as their Paris apartment, yet entirely at home in its mountain setting. Our solution began with the structure: heavy hand-hewn beams retained and limed to pale silver-grey, stone walls repointed and left bare, deep-set windows enlarged to capture the peak views. Into this architectural shell we introduced a palette of cashmere, aged brass, and deep forest green — warm, layered, and luxurious without artifice. The project included seven en-suite bedrooms, a 12-seat dining room, a cinema room, a wellness suite with hammam, and a dedicated ski room designed as a precision-fitted equipment library.',
    area: 840,
    deliverables: [
      'Full concept and spatial planning',
      'Seven en-suite bedroom designs',
      'Dining room, cinema, and wellness areas',
      'Bespoke ski room / equipment library',
      'Stone and timber restoration specifications',
      'Luxury FF&E procurement',
      'Contractor management across 18 months',
    ],
    imageAspect: '4/3',
    featured: true,
  },
];

// ─── Utility functions (pure, unit-testable) ───────────────────────────────

/**
 * Return all projects, optionally filtered by category.
 */
export function getProjects(category?: string): Project[] {
  if (!category || category === 'all') return projects;
  return projects.filter((p) => p.category === category);
}

/**
 * Return a single project by slug, or undefined if not found.
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/**
 * Return all unique slugs — used for Next.js static params generation.
 */
export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/**
 * Return featured projects, up to `limit` items.
 */
export function getFeaturedProjects(limit = 3): Project[] {
  return projects.filter((p) => p.featured).slice(0, limit);
}

/**
 * Return the label for a given category key.
 */
export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    all: 'All Work',
    residential: 'Residential',
    hospitality: 'Hospitality',
    commercial: 'Commercial',
  };
  return labels[category] ?? category;
}
