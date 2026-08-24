import type { TeamMember, PressMention } from '@/types';

export const teamMembers: TeamMember[] = [
  {
    id: 'claire',
    name: 'Claire Fontaine',
    role: 'Co-founder & Creative Director',
    bio: 'Claire trained at the École Camondo before working with two of Paris's most respected residential practices for eight years. She founded Atelier Nord with Julien in 2015, drawn by the possibility of a studio small enough to know every project intimately. Her approach begins with materials — she believes a room is defined by what you touch before what you see. She lives between Paris and Brittany, and keeps a notebook of found objects that inform every scheme.',
    image: '/images/placeholder-team-1.svg'
  },
  {
    id: 'julien',
    name: 'Julien Marchand',
    role: 'Co-founder & Technical Director',
    bio: 'Julien studied architecture at the École Nationale Supérieure d\'Architecture de Paris-Belleville and spent six years in hospitality design — a grounding in the discipline of spaces that must function at scale without losing their warmth. At Atelier Nord he oversees technical delivery: the relationship between what is drawn and what is built. He is fluent in the language of contractors and craftspeople, which means the studio's projects arrive on site as they were conceived.',
    image: '/images/placeholder-team-2.svg'
  }
];

export const pressMentions: PressMention[] = [
  {
    id: 'pm1',
    publication: 'Architectural Digest France',
    title: 'The New Minimalism: Ten Studios Redefining French Interiors',
    year: 2024
  },
  {
    id: 'pm2',
    publication: 'Elle Décoration',
    title: 'Maison du Luberon: When Less Is Everything',
    year: 2023
  },
  {
    id: 'pm3',
    publication: 'Wallpaper*',
    title: 'Hôtel Brise and the Return of the Considered Hotel',
    year: 2023
  },
  {
    id: 'pm4',
    publication: 'Côté Maison',
    title: 'Atelier Nord: Nine Years, No Compromises',
    year: 2024
  }
];
