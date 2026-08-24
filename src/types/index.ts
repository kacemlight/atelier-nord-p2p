export type ProjectCategory = 'Residential' | 'Hospitality' | 'Commercial';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: number;
  scope: string;
  area: string;
  description: string;
  shortDescription: string;
  tags: string[];
  featured: boolean;
  coverAlt: string;
  imageCount: number;
}

export interface Founder {
  id: string;
  name: string;
  title: string;
  bio: string;
  expertise: string[];
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  process: ProcessStep[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface PressItem {
  id: string;
  publication: string;
  title: string;
  year: number;
  url?: string;
}

export type BudgetRange =
  | 'under-50k'
  | '50k-150k'
  | '150k-350k'
  | '350k-750k'
  | 'over-750k';

export type ProjectType =
  | 'residential-new'
  | 'residential-renovation'
  | 'hospitality'
  | 'commercial'
  | 'furniture-curation'
  | 'consulting';

export interface InquiryForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectType: ProjectType | '';
  budgetRange: BudgetRange | '';
  location: string;
  message: string;
}

export type FormErrors = Partial<Record<keyof InquiryForm, string>>;
