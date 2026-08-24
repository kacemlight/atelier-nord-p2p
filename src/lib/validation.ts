import type { InquiryFormData, InquiryFormErrors } from '@/types';

/**
 * Validate inquiry form data.
 * Returns an errors object — empty means valid.
 * Pure function; no side effects; fully unit-testable.
 */
export function validateInquiryForm(data: Partial<InquiryFormData>): InquiryFormErrors {
  const errors: InquiryFormErrors = {};

  // Name
  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please enter your full name.';
  }

  // Email
  if (!data.email || !isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  // Project type
  if (!data.projectType) {
    errors.projectType = 'Please select a project type.';
  }

  // Budget range
  if (!data.budgetRange) {
    errors.budgetRange = 'Please select a budget range.';
  }

  // Location
  if (!data.location || data.location.trim().length < 2) {
    errors.location = 'Please enter the project location.';
  }

  // Message
  if (!data.message || data.message.trim().length < 20) {
    errors.message =
      'Please tell us a little more about your project (at least 20 characters).';
  }

  return errors;
}

/**
 * Simple RFC-5321 email check.
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/**
 * Returns true if the form errors object has no keys.
 */
export function isFormValid(errors: InquiryFormErrors): boolean {
  return Object.keys(errors).length === 0;
}
