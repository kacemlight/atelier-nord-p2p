/**
 * validateContact — adapter over validateInquiryForm that matches
 * the simplified ContactFormData shape used in the test suite.
 *
 * This module bridges the legacy test interface with the real
 * validateInquiryForm implementation from src/lib/validation.ts.
 */
import { isValidEmail } from '@/lib/validation';

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budgetRange: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  budgetRange?: string;
  message?: string;
}

/**
 * Validate the contact inquiry form.
 * Returns an errors object — empty object means the form is valid.
 */
export function validateContact(data: Partial<ContactFormData>): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name || data.name.trim().length < 1) {
    errors.name = 'Please enter your full name.';
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.projectType || data.projectType.trim() === '') {
    errors.projectType = 'Please select a project type.';
  }

  if (!data.budgetRange || data.budgetRange.trim() === '') {
    errors.budgetRange = 'Please select a budget range.';
  }

  if (!data.message || data.message.trim().length < 20) {
    errors.message = 'Please tell us more about your project (at least 20 characters).';
  }

  return errors;
}
