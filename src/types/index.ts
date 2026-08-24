// ─── Project Domain Types ──────────────────────────────────────────────────

export type ProjectCategory = 'residential' | 'hospitality' | 'commercial';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: number;
  scope: string;
  description: string;
  shortDescription: string;
  /** Square metres of the space */
  area?: number;
  /** Ordered list of deliverables / phases */
  deliverables: string[];
  /** Hero image aspect ratio hint for the placeholder */
  imageAspect: '16/9' | '4/3' | '3/4';
  featured: boolean;
}

// ─── Service Domain Types ──────────────────────────────────────────────────

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  process: ProcessStep[];
}

// ─── Team Domain Types ─────────────────────────────────────────────────────

export interface PressMention {
  publication: string;
  title: string;
  year: number;
  url?: string;
}

/** Used by src/data/press.ts */
export interface PressItem {
  id: string;
  publication: string;
  title: string;
  year: number;
  url?: string;
}

export interface Founder {
  id: string;
  name: string;
  /** Display title, e.g. "Co-Founder & Design Director" */
  title: string;
  bio: string;
  expertise: string[];
}

// ─── Contact / Inquiry Domain Types ───────────────────────────────────────

export type ProjectType =
  | 'full-interior-design'
  | 'renovation-consulting'
  | 'furniture-curation'
  | 'other';

export type BudgetRange =
  | 'under-50k'
  | '50k-150k'
  | '150k-500k'
  | '500k-plus'
  | 'to-discuss';

/** Form state used by InquiryForm component */
export interface InquiryForm {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  projectType: ProjectType | '';
  budgetRange: BudgetRange | '';
  location: string;
  message: string;
}

/** Field-level validation errors for InquiryForm */
export interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  projectType?: string;
  budgetRange?: string;
  location?: string;
  message?: string;
}

/** Legacy alias kept for backwards compat */
export type InquiryFormData = InquiryForm;
export type InquiryFormErrors = FormErrors;

// ─── Navigation Types ──────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}
