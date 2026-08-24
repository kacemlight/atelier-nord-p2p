import type { NavLink } from '@/types';

export const navLinks: NavLink[] = [
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const studioInfo = {
  name: 'Atelier Nord',
  tagline: 'Interior Design Studio',
  address: {
    line1: '14 Rue des Abbesses',
    line2: '75018 Paris, France',
  },
  email: 'bonjour@ateliernord.fr',
  phone: '+33 1 42 55 87 20',
  hours: 'Monday – Friday, 9h – 18h',
  social: {
    instagram: 'https://instagram.com/ateliernord',
    linkedin: 'https://linkedin.com/company/atelier-nord',
  },
};
