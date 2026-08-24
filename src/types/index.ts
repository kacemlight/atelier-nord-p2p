export type ProjectCategory = 'Residential' | 'Hospitality' | 'Commercial';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  year: number;
  location: string;
  scope: string[];
  description: string;
  shortDescription: string;
  area?: string;
  coverImage: string;
  images: string[];
  featured: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  processSteps: ProcessStep[];
  deliverables: string[];
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface PressMention {
  id: string;
  publication: string;
  title: string;
  year: number;
  url?: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  projectType: ProjectCategory | 'Other';
  budgetRange: BudgetRange;
  message: string;
}

export type BudgetRange =
  | 'Under €50k'
  | '€50k – €150k'
  | '€150k – €500k'
  | '€500k – €1M'
  | 'Above €1M';
