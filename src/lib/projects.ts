export type ProjectCategory = 'Residential' | 'Hospitality' | 'Commercial';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: number;
  area: string;
  description: string;
  longDescription: string;
  scope: string[];
  coverColor: string;
}

export const categories: ProjectCategory[] = ['Residential', 'Hospitality', 'Commercial'];

export const projects: Project[] = [
  {
    id: 'maison-leroux',
    title: 'Maison Leroux',
    category: 'Residential',
    location: 'Paris 7e, France',
    year: 2023,
    area: '210 m\u00b2',
    description: 'A Haussmann-era apartment transformed through careful material restraint — raw linen, aged brass, and smoke-tinted oak work in quiet dialogue.',
    longDescription: 'Commissioned by a Parisian art collector, Maison Leroux invited us to reconcile grand historic bones with a thoroughly contemporary domestic rhythm. We stripped back layers of accumulated decor to reveal the apartment\u2019s original proportions, then furnished the volumes with a deliberately limited palette: raw linen upholstery, aged brass hardware, and wide-plank smoke-tinted oak underfoot. Every object earns its place. The result is a home that feels both inherited and entirely new.',
    scope: ['Full interior design', 'Custom furniture specification', 'Lighting design', 'Contractor coordination'],
    coverColor: '#C9BFB0',
  },
  {
    id: 'villa-seraphine',
    title: 'Villa S\u00e9raphine',
    category: 'Residential',
    location: 'C\u00f4te d\u2019Azur, France',
    year: 2022,
    area: '480 m\u00b2',
    description: 'A clifftop villa where indoors dissolve into Mediterranean light — concrete, linen, and ceramic anchor the spaces while the sea provides the spectacle.',
    longDescription: 'Perched above the sea between Cassis and La Ciotat, Villa S\u00e9raphine demanded an interior that would never compete with its setting. We designed with subtraction in mind: board-formed concrete ceilings, floor-to-ceiling steel-framed glazing, and a furniture selection that keeps sightlines clean. Local ceramicists contributed hand-thrown tableware and bespoke tile work. The home breathes with the Mediterranean — open in summer, cocooning in winter.',
    scope: ['Full interior design', 'Landscape integration', 'Bespoke furniture commission', 'Art curation'],
    coverColor: '#A8BDB5',
  },
  {
    id: 'hotel-vauclaire',
    title: 'H\u00f4tel Vauclaire',
    category: 'Hospitality',
    location: 'Bordeaux, France',
    year: 2023,
    area: '1 840 m\u00b2 \u2014 22 rooms',
    description: 'A 19th-century merchant house restored as a 22-room boutique hotel celebrating the region\u2019s winemaking heritage through texture, tone, and terroir.',
    longDescription: 'H\u00f4tel Vauclaire occupies a classified merchant house in the heart of Bordeaux\u2019s Saint-Pierre quarter. The brief: a hotel that whispers rather than shouts its luxury. We worked with the building\u2019s existing stone, iron, and timber, introducing hand-plastered walls in a palette drawn from the region\u2019s vineyards — muted terracotta, vine-green, limestone white. Each of the 22 rooms is individually furnished; no two share the same floor plan. The bar program and cellar design were developed in collaboration with a Bordeaux-based sommelier.',
    scope: ['Concept to completion', 'FF&E specification', 'Brand environment design', 'F&B space design'],
    coverColor: '#8B7355',
  },
  {
    id: 'appartement-canal',
    title: 'Appartement Canal',
    category: 'Residential',
    location: 'Paris 10e, France',
    year: 2021,
    area: '95 m\u00b2',
    description: 'A compact canalside apartment that proves restraint scales down beautifully — every centimetre considered, nothing superfluous.',
    longDescription: 'The brief for Appartement Canal was deceptively simple: make 95 square metres feel generous without tricks. We opened the plan, aligned sight lines from front to rear, and built bespoke joinery that contains life invisibly. A single warm-white plaster tone flows throughout; texture comes from the materials — fluted glass cabinetry, honed Comblanchien stone, oiled walnut. The canal\u2019s ever-changing light does the rest.',
    scope: ['Space planning', 'Bespoke joinery design', 'Material specification', 'Furniture curation'],
    coverColor: '#B8C4C2',
  },
  {
    id: 'maison-du-cap',
    title: 'Maison du Cap',
    category: 'Hospitality',
    location: 'Cap Ferret, France',
    year: 2022,
    area: '320 m\u00b2 — 8 suites',
    description: 'An intimate guest house on the Atlantic shore where driftwood tones, rattan, and hand-woven textiles echo the landscape rather than escape it.',
    longDescription: 'Maison du Cap sits behind the dunes of Cap Ferret, an eight-suite guest house that operates more like a private home than a hotel. The owners wanted none of the expected seaside clich\u00e9s — no nautical blue, no anchors. Instead, we took our palette from the estuary at dawn: bleached timber, warm sand tones, the grey-green of sea grass. Rattan furniture commissioned from Portuguese artisans, hand-woven linen from Basque mills, and a single statement chandelier of twisted driftwood in the central salon give the space its quiet authority.',
    scope: ['Interior concept', 'FF&E procurement', 'Artisan sourcing', 'Styling and installation'],
    coverColor: '#C8B89A',
  },
  {
    id: 'bureau-eleven',
    title: 'Bureau Eleven',
    category: 'Commercial',
    location: 'Paris 2e, France',
    year: 2024,
    area: '650 m\u00b2',
    description: 'A creative agency\u2019s Paris headquarters where the workspace is both tool and statement — high-performance, architecturally rigorous, and entirely distraction-free.',
    longDescription: 'Bureau Eleven\u2019s founders came to us with a clear conviction: they refused the open-plan free-for-all. Our response was a workplace built on clearly defined zones — a library for deep focus, meeting rooms that reward conversation, and a collective kitchen that doubles as a presentation space. Materiality is consistent throughout: micro-cement floors, perforated steel acoustic panels, and custom oak shelving. The brand\u2019s own work becomes the only art on the walls.',
    scope: ['Workplace strategy', 'Full interior design', 'Acoustic design', 'Furniture specification'],
    coverColor: '#6B7280',
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
