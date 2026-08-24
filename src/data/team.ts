import type { Founder, PressMention } from '@/types';

export const founders: Founder[] = [
  {
    id: 'claire-moreau',
    name: 'Claire Moreau',
    role: 'Co-founder & Creative Director',
    bio: 'Claire studied architecture at the École des Beaux-Arts in Paris before spending six years at a leading residential studio in London, where she developed a practice rooted in material research and the slow craft of spatial storytelling. She returned to Paris in 2015 and co-founded Atelier Nord with the conviction that beautiful interiors are never accidental — they are the result of sustained attention, honest materials, and an absolute refusal to rush. Her projects have been published in AD France, Wallpaper*, and Elle Décoration, and she is a regular speaker at Maison & Objet.',
    expertise: [
      'Residential design',
      'Material research',
      'Bespoke furniture design',
      'Art advisory',
      'Listed building projects',
    ],
  },
  {
    id: 'julien-fabre',
    name: 'Julien Fabre',
    role: 'Co-founder & Project Director',
    bio: 'Julien began his career in hospitality design in Singapore and Abu Dhabi, where the scale and complexity of large hotel commissions gave him an unusually rigorous understanding of construction sequencing, contractor management, and the intersection of design intention with operational reality. He joined forces with Claire in 2015, bringing the complementary skills that allow Atelier Nord to move fluently between intimate apartments and full hotel programmes. His particular interest is in the overlap between craft and technology — specifically, the ways digital fabrication can serve traditional making.',
    expertise: [
      'Hospitality design',
      'Project management',
      'Contractor coordination',
      'Digital fabrication',
      'Commercial interiors',
    ],
  },
];

export const pressMentions: PressMention[] = [
  {
    publication: 'AD France',
    title: "Les Intérieurs de l'Année",
    year: 2023,
  },
  {
    publication: 'Wallpaper*',
    title: 'Rising Studios to Watch',
    year: 2022,
  },
  {
    publication: 'Elle Décoration',
    title: 'Carte Blanche: Warm Minimalism in Paris',
    year: 2023,
  },
  {
    publication: 'Dezeen',
    title: 'Hôtel Le Caillou Named in Best New Hotels',
    year: 2022,
  },
  {
    publication: 'Architectural Digest',
    title: 'Studios Redefining French Interior Design',
    year: 2024,
  },
  {
    publication: 'Monocle',
    title: 'Quality of Life Special: French Interiors',
    year: 2021,
  },
];

export const studioPhilosophy = {
  headline: 'Design that earns its place.',
  body: [
    'Atelier Nord was founded on a single conviction: that interior design is most powerful when it is least visible. Our work does not announce itself. It settles into the life of the people who inhabit it, revealing its intelligence slowly — in the way light moves across a surface at four in the afternoon, in the unexpected comfort of a chair that took three prototypes to get right, in the quietude of a room that holds nothing unnecessary.',
    'After nine years and projects across France and beyond, that conviction has only deepened. We remain a small studio by choice. Every project receives the direct, sustained attention of both founders. We do not subcontract our thinking.',
    'Our aesthetic draws from warm minimalism, natural materials, and the tradition of French craft — but we are not attached to style. We are attached to quality: of material, of making, and of the relationship we build with our clients over the course of a project.',
  ],
};
