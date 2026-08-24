export type ProjectCategory = 'Residential' | 'Hospitality' | 'Commercial';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: number;
  scope: string[];
  area: string;
  description: string;
  longDescription: string;
  coverColor: string;
  accentColor: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'maison-saint-germain',
    title: 'Maison Saint-Germain',
    category: 'Residential',
    location: 'Paris 6e, France',
    year: 2023,
    scope: ['Full Interior Design', 'Furniture Curation', 'Lighting Design'],
    area: '210 m²',
    description: 'A Haussmann-era apartment transformed into a serene family residence, honouring original mouldings while introducing a warm, contemporary material palette.',
    longDescription: 'This 210 m² Haussmann apartment in the heart of Saint-Germain-des-Prés presented a rare opportunity: original herringbone oak floors, plaster ceiling roses, and generous ceiling heights all intact. Our brief was to honour these bones while creating a home that feels entirely of the present. We stripped back decades of layered decoration and introduced a palette of limestone, aged brass, and woven linen. Custom joinery in pale oak defines the library and kitchen without competing with the architecture. Every piece of furniture was either bespoke or sourced from European artisans — nothing mass-produced crosses the threshold. The result is a home that breathes: calm, collected, and quietly confident.',
    coverColor: '#c9b89a',
    accentColor: '#8b6914',
    featured: true,
  },
  {
    id: 'hotel-le-cloitre',
    title: 'Hôtel Le Cloître',
    category: 'Hospitality',
    location: 'Arles, France',
    year: 2023,
    scope: ['Full Interior Design', 'FF&E Procurement', 'Art Direction'],
    area: '1 200 m²',
    description: 'A 12th-century cloister reimagined as a 22-room boutique hotel — where ancient stone walls meet hand-thrown ceramics and bespoke textile programmes.',
    longDescription: 'Le Cloître occupies a former convent in the historic core of Arles. The building’s 12th-century stone walls, vaulted corridors, and inner courtyard demanded an approach of restraint and deep respect. We collaborated with regional artisans throughout: each of the 22 rooms features hand-thrown ceramics from a potter in the Camargue, linen bedding woven in the Vaucluse, and ironwork by a blacksmith in Avignon. The colour palette draws from the Provençal landscape — sun-bleached limestone, terracotta, sage — without ever tipping into pastiche. Lighting was designed to shift with the rhythms of the day, warm and intimate by evening, luminous and open by morning. The hotel has received sustained editorial attention since opening.',
    coverColor: '#b89a7a',
    accentColor: '#8b5e2a',
    featured: true,
  },
  {
    id: 'appartement-marais',
    title: 'Appartement Marais',
    category: 'Residential',
    location: 'Paris 3e, France',
    year: 2022,
    scope: ['Renovation Consulting', 'Furniture Curation'],
    area: '85 m²',
    description: 'A compact Marais flat reconfigured for a young collector — every surface is a considered act; every object earns its place.',
    longDescription: 'The client, an art collector, came to us with 85 m² and a wish: a home that lives like a gallery but feels nothing like one. We reworked the layout entirely, removing a non-structural wall to create a single generous living space that can accommodate works of varying scale. The material register is deliberately spare — polished concrete floors, white-washed lime plaster walls, and blackened steel details — to ensure the art commands full attention. Furniture is low-profile and sculptural; storage is entirely concealed. The kitchen is a monolith of honed marble and matte lacquer. Small in footprint, enormous in presence.',
    coverColor: '#a8a09a',
    accentColor: '#4a4640',
    featured: false,
  },
  {
    id: 'villa-cap-ferret',
    title: 'Villa Cap Ferret',
    category: 'Residential',
    location: 'Cap Ferret, France',
    year: 2022,
    scope: ['Full Interior Design', 'Landscape Liaison', 'Furniture Curation'],
    area: '320 m²',
    description: 'A coastal retreat designed around the quality of Atlantic light — bleached woods, ocean-hued linens, and a studied informality that makes relaxation inevitable.',
    longDescription: 'This family house on the tip of the Cap Ferret peninsula is oriented entirely around light and landscape. The Atlantic-facing elevation is fully glazed; every room opens to a terrace or the pine-shaded garden. Our palette is elemental: whitened oak, pale stone, undyed linen, aged copper. We specified nothing that would look out of place wet from the sea. The furniture programme mixes French mid-century pieces with new commissions from emerging makers. A locally crafted ceramic tile, made to our specification, runs through the ground floor and into the outdoor showers. The house asked to be enjoyed, not admired — we obliged.',
    coverColor: '#9eb5c4',
    accentColor: '#2a6080',
    featured: false,
  },
  {
    id: 'librairie-pelletan',
    title: 'Librairie Pelletan',
    category: 'Commercial',
    location: 'Paris 7e, France',
    year: 2021,
    scope: ['Full Interior Design', 'Bespoke Joinery', 'Lighting Design'],
    area: '140 m²',
    description: 'A rare-book dealer’s atelier — floor-to-ceiling walnut shelving, directional gallery lighting, and a reading room that makes lingering a pleasure.',
    longDescription: 'Pelletan is one of Paris’s finest dealers in antique illustrated books and prints. The brief was to create a space that feels simultaneously like a private library, a gallery, and a place of serious scholarship. We lined every wall with floor-to-ceiling walnut shelving — hand-fitted with brass rail and sliding library ladders. The lighting scheme, developed with a specialist theatre-lighting consultant, allows individual volumes and prints to be spotlit without compromising the warmth of the room as a whole. A central reading table in solid walnut seats eight; a smaller anteroom serves as a viewing room for important pieces. The result is a destination in its own right, and press coverage has materially increased footfall since opening.',
    coverColor: '#8a7a6a',
    accentColor: '#4a3520',
    featured: false,
  },
  {
    id: 'chateau-de-minervois',
    title: 'Château de Minervois',
    category: 'Hospitality',
    location: 'Languedoc, France',
    year: 2024,
    scope: ['Full Interior Design', 'FF&E Procurement', 'Renovation Consulting'],
    area: '2 400 m²',
    description: 'An 18th-century wine estate converted into a 16-room relais — where the landscape, the vine, and the table are the true protagonists.',
    longDescription: 'Commissioned by a family that has farmed this Languedoc estate for four generations, Château de Minervois presented the most complex project of our practice to date. The câteau itself dates to 1743; the agricultural buildings were added over successive centuries. Our task was to convert the ensemble into a 16-room luxury relais while preserving both the architectural character and the working winery at its heart. We divided the programme across three buildings: the main câteau housing the finest suites and reception rooms, the former chai accommodating a wine-focused restaurant and cellar, and the converted bergerie providing six more intimate rooms. The palette is anchored in the land: raw plaster, terracotta, dark walnut, and the deep aubergine of aged wine. Every textile was sourced within 150 km of the estate. The property opened to international press in early 2024 and reached full bookings within the first month.',
    coverColor: '#7a6070',
    accentColor: '#5a2040',
    featured: true,
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export const categories: ProjectCategory[] = ['Residential', 'Hospitality', 'Commercial'];
