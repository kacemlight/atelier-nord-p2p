import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'p1',
    slug: 'maison-saint-germain',
    title: 'Maison Saint-Germain',
    category: 'Residential',
    location: 'Paris 6e, France',
    year: 2023,
    scope: 'Full Interior Design',
    area: '210 m²',
    description:
      'A complete reimagining of a Haussmann apartment in the heart of Saint-Germain-des-Prés. The project stripped the space back to its essential volumes — original parquet, plaster moldings, tall windows — then layered in furniture and objects chosen for their quiet authority. Raw linen, aged oak, and matte plaster surfaces create a palette that shifts from warm amber in morning light to deep shadow by evening. Every piece earns its place.',
    shortDescription:
      'A Haussmann apartment stripped to its essential volumes, then furnished with quiet authority.',
    tags: ['Apartment', 'Haussmann', 'Natural Materials', 'Full Design'],
    featured: true,
    coverAlt: 'Maison Saint-Germain — Living room with natural linen and aged oak',
    imageCount: 6,
  },
  {
    id: 'p2',
    slug: 'hotel-le-brun',
    title: 'Hôtel Le Brun',
    category: 'Hospitality',
    location: 'Lyon, France',
    year: 2023,
    scope: 'Full Interior Design',
    area: '1,840 m²',
    description:
      'A 28-room boutique hotel occupying a 19th-century textile warehouse in Lyon's Presqu'île. We preserved the industrial bones — cast-iron columns, exposed brick, factory skylights — while introducing a guest experience of considered warmth. Each room category tells a distinct story through material, but the palette remains coherent: smoked oak, deep terracotta, hand-troweled plaster. The lobby functions as a working library and a place to linger, not just pass through.',
    shortDescription:
      '28 rooms of considered warmth inside a 19th-century textile warehouse.',
    tags: ['Hotel', 'Boutique', 'Industrial Heritage', 'Lyon', 'Full Design'],
    featured: true,
    coverAlt: 'Hôtel Le Brun — Lobby with cast-iron columns and smoked oak shelving',
    imageCount: 8,
  },
  {
    id: 'p3',
    slug: 'villa-cap-ferret',
    title: 'Villa Cap Ferret',
    category: 'Residential',
    location: 'Cap Ferret, France',
    year: 2022,
    scope: 'Full Interior Design',
    area: '320 m²',
    description:
      'A contemporary pine-forest villa designed around the idea of controlled informality — spaces that feel effortless rather than untouched. The interior reads as an extension of the landscape: bleached wood, rope, stone, and salt-air textiles. Indoor and outdoor living blur deliberately. Furniture was almost entirely custom-designed for the project, with two pieces later entering a small limited production run.',
    shortDescription:
      'A pine-forest villa where indoors and outdoors blur through bleached wood and salt-air textiles.',
    tags: ['Villa', 'Coastal', 'Custom Furniture', 'Full Design'],
    featured: false,
    coverAlt: 'Villa Cap Ferret — Open living room with bleached wood and pine forest views',
    imageCount: 5,
  },
  {
    id: 'p4',
    slug: 'atelier-marais',
    title: 'Atelier Marais',
    category: 'Commercial',
    location: 'Paris 3e, France',
    year: 2022,
    scope: 'Renovation Consulting & Furniture Curation',
    area: '95 m²',
    description:
      'A creative agency's new studio in a former artisan workshop in Le Marais. The brief asked for a space that could shift between deep-focus work and client presentation without a shift in atmosphere. We advised on the structural intervention, selected a tight material palette — raw concrete, steel, forest-green textiles — and curated every piece of furniture, including several vintage finds. The result is a studio that does not announce itself, but is immediately remembered.',
    shortDescription:
      'A former artisan workshop turned creative studio — flexible, focused, quietly distinctive.',
    tags: ['Studio', 'Office', 'Le Marais', 'Consulting', 'Curation'],
    featured: false,
    coverAlt: 'Atelier Marais — Creative studio with raw concrete and steel accents',
    imageCount: 4,
  },
  {
    id: 'p5',
    slug: 'residence-gambetta',
    title: 'Résidence Gambetta',
    category: 'Residential',
    location: 'Paris 20e, France',
    year: 2021,
    scope: 'Full Interior Design',
    area: '78 m²',
    description:
      'A compact apartment designed for a young literary editor who collects books and objects with the same discernment she applies to manuscripts. The challenge was density without clutter — a space that holds a large life in a modest footprint. Floor-to-ceiling bookshelves double as room dividers. A single curved banquette defines the social space. Every storage decision was made at the beginning, not the end, of the process.',
    shortDescription:
      'Seventy-eight square metres designed to hold a large life — books, objects, and all.',
    tags: ['Apartment', 'Compact', 'Bespoke Storage', 'Full Design'],
    featured: false,
    coverAlt: 'Résidence Gambetta — Floor-to-ceiling bookshelves and curved banquette',
    imageCount: 4,
  },
  {
    id: 'p6',
    slug: 'chalet-megeve',
    title: 'Chalet Mégève',
    category: 'Hospitality',
    location: 'Mégève, France',
    year: 2021,
    scope: 'Full Interior Design',
    area: '480 m²',
    description:
      'A private chalet redesigned as a rentable luxury retreat for a family who wanted to host without abandoning the feeling of home. We rejected the expected Alpine codes — no antler chandeliers, no hunting trophies — in favour of a quieter mountain language: local stone, heavy wool, hand-thrown ceramics, and fire. Six bedroom suites each have a distinct personality; the shared spaces feel generous, not hotel-like. Fully booked for its first three seasons.',
    shortDescription:
      'A luxury Alpine retreat that rejects expected chalet codes in favour of a quieter mountain language.',
    tags: ['Chalet', 'Mountain', 'Luxury', 'Hospitality', 'Full Design'],
    featured: true,
    coverAlt: 'Chalet Mégève — Stone fireplace with heavy wool textiles and mountain views',
    imageCount: 7,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'All') return projects;
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
