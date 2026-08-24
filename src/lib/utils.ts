import type { FormErrors, InquiryForm } from '@/types';

/**
 * Validate the inquiry form fields client-side.
 * Returns an object of field-level error messages.
 */
export function validateInquiryForm(values: InquiryForm): FormErrors {
  const errors: FormErrors = {};

  if (!values.firstName.trim()) {
    errors.firstName = 'First name is required.';
  }

  if (!values.lastName.trim()) {
    errors.lastName = 'Last name is required.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!values.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.projectType) {
    errors.projectType = 'Please select a project type.';
  }

  if (!values.budgetRange) {
    errors.budgetRange = 'Please select a budget range.';
  }

  if (!values.message.trim()) {
    errors.message = 'Please tell us about your project.';
  } else if (values.message.trim().length < 20) {
    errors.message = 'Please provide a bit more detail (at least 20 characters).';
  }

  return errors;
}

/**
 * Check whether a form errors object has any entries.
 */
export function hasErrors(errors: FormErrors): boolean {
  return Object.keys(errors).length > 0;
}

/**
 * Format a project area string for display.
 */
export function formatArea(area: string): string {
  return area;
}

/**
 * Generate a CSS class string from multiple optional classes.
 */
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
