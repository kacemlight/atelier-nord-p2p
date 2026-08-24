import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'p1',
    slug: 'villa-lumiere-saint-tropez',
    title: 'Villa Lumière',
    category: 'Residential',
    year: 2023,
    location: 'Saint-Tropez, France',
    scope: ['Full Interior Design', 'Custom Furniture', 'Art Curation'],
    description:
      'A clifftop villa where bleached oak, raw linen, and Carrara marble dissolve into panoramic Mediterranean light. The brief asked for quiet luxury — spaces that feel inhabited rather than staged. We stripped every superfluous surface back to the material itself: travertine floors left honed, joinery detailed in a single profile, textiles chosen for hand feel before colour. The result is a home that shifts with the light, growing warmer at dusk and coolest at noon, never demanding attention it has not earned.',
    shortDescription:
      'Clifftop villa in Saint-Tropez where raw materials and Mediterranean light define every room.',
    area: '420 m²',
    coverImage: '/images/placeholder-residential-1.svg',
    images: ['/images/placeholder-residential-1.svg'],
    featured: true
  },
  {
    id: 'p2',
    slug: 'appartement-marais-paris',
    title: 'Appartement du Marais',
    category: 'Residential',
    year: 2022,
    location: 'Paris, France',
    scope: ['Renovation Consulting', 'Furniture Curation', 'Lighting Design'],
    description:
      'A 17th-century Marais apartment, structurally untouched but entirely reimagined. The owners wanted Parisian patina preserved — exposed timber beams, original parquet — paired with a contemporary sensibility that felt neither costume nor pastiche. We introduced furniture with clean silhouettes and deep upholstery, kept the palette to warm whites and aged brass, and let the architecture carry its own authority. A home for people who read and cook and host, not one that performs.',
    shortDescription:
      'Seventeenth-century Marais apartment: historic bones, a contemporary interior without compromise.',
    area: '185 m²',
    coverImage: '/images/placeholder-residential-2.svg',
    images: ['/images/placeholder-residential-2.svg'],
    featured: true
  },
  {
    id: 'p3',
    slug: 'hotel-brise-biarritz',
    title: 'Hôtel Brise',
    category: 'Hospitality',
    year: 2023,
    location: 'Biarritz, France',
    scope: ['Full Interior Design', 'FF&E Specification', 'Brand Environment'],
    description:
      'Twenty-two rooms above the Atlantic, each one a study in coastal restraint. The owners had acquired a 1930s building with good bones and a tired interior. Our directive was to surface what the building already knew — salt-bleached timber, the particular grey-green of Basque shutters, terrazzo rescued from the original bathrooms — and build a contemporary guest experience around it. Every room is slightly different; none is a replica of a mood board.',
    shortDescription:
      'A 22-room Biarritz boutique hotel: coastal materials, no pastiche, a distinct guest experience in every room.',
    area: '1 200 m²',
    coverImage: '/images/placeholder-hospitality-1.svg',
    images: ['/images/placeholder-hospitality-1.svg'],
    featured: true
  },
  {
    id: 'p4',
    slug: 'maison-luberon',
    title: 'Maison du Luberon',
    category: 'Residential',
    year: 2021,
    location: 'Ménerbes, France',
    scope: ['Full Interior Design', 'Garden Pavilion', 'Furniture Curation'],
    description:
      'A Provençal farmhouse restored without nostalgia. The stone walls stayed; everything else was reconsidered. We worked with the particular quality of light in the Luberon — intense by midday, golden at dusk — to place rooms, materials, and openings. Dining in shade, sleeping in morning sun, a library that faces north. Furniture was sourced from French ateliers and a handful of international makers whose work shares the same honesty of construction.',
    shortDescription:
      'Provençal farmhouse in Ménerbes restored with material honesty and light-led spatial planning.',
    area: '340 m²',
    coverImage: '/images/placeholder-residential-3.svg',
    images: ['/images/placeholder-residential-3.svg'],
    featured: false
  },
  {
    id: 'p5',
    slug: 'cabinet-architecture-lyon',
    title: 'Cabinet d\'Architecture Rivière',
    category: 'Commercial',
    year: 2022,
    location: 'Lyon, France',
    scope: ['Interior Design', 'Furniture Specification', 'Acoustic Treatment'],
    description:
      'An architecture practice that wanted offices as considered as the buildings they design. The brief was workspace, not showroom — a place to concentrate, to meet clients, and to pin drawings to walls. We designed custom storage that doubles as acoustic treatment, chose furniture that wears well over years of daily use, and kept the palette tight: raw concrete, black steel, aged oak. A studio that takes its own discipline seriously.',
    shortDescription:
      'Lyon architecture studio: workspaces designed for concentration, with custom acoustic storage and honest materials.',
    area: '210 m²',
    coverImage: '/images/placeholder-commercial-1.svg',
    images: ['/images/placeholder-commercial-1.svg'],
    featured: false
  },
  {
    id: 'p6',
    slug: 'residence-cap-ferret',
    title: 'Résidence Cap Ferret',
    category: 'Hospitality',
    year: 2024,
    location: 'Cap Ferret, France',
    scope: ['Full Interior Design', 'Landscape Integration', 'FF&E Specification'],
    description:
      'Five private villas on a pine-backed peninsula, each positioned for privacy and maximum contact with the basin light. The architectural language is contemporary vernacular — deep overhangs, natural render, Douglas fir shutters — and the interiors follow that logic inward. Rattan, linen, and smoked oak carry through every unit with enough variation to feel individual. Guests arrive at a place that understands where it is.',
    shortDescription:
      'Five private villas on Cap Ferret: contemporary vernacular architecture, interiors that understand their landscape.',
    area: '5 × 180 m²',
    coverImage: '/images/placeholder-hospitality-2.svg',
    images: ['/images/placeholder-hospitality-2.svg'],
    featured: false
  }
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
