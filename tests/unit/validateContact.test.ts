import { describe, it, expect } from 'vitest';
import { validateContact, type ContactFormData } from '../../src/lib/validateContact';

const validData: ContactFormData = {
  name: 'Marie Dupont',
  email: 'marie@example.com',
  projectType: 'Residential',
  budgetRange: '€50k–€150k',
  message: 'We are looking to redesign our apartment in the 7th arrondissement.',
};

describe('validateContact — happy path (AC-10)', () => {
  it('returns no errors for valid data', () => {
    const errors = validateContact(validData);
    expect(Object.keys(errors)).toHaveLength(0);
  });
});

describe('validateContact — name field (AC-09)', () => {
  it('errors when name is empty', () => {
    const errors = validateContact({ ...validData, name: '' });
    expect(errors.name).toBeDefined();
  });

  it('errors when name is only whitespace', () => {
    const errors = validateContact({ ...validData, name: '   ' });
    expect(errors.name).toBeDefined();
  });

  it('no error when name has at least 1 character', () => {
    const errors = validateContact({ ...validData, name: 'A' });
    expect(errors.name).toBeUndefined();
  });
});

describe('validateContact — email field (AC-09)', () => {
  it('errors when email is empty', () => {
    const errors = validateContact({ ...validData, email: '' });
    expect(errors.email).toBeDefined();
  });

  it('errors when email is not a valid format', () => {
    const errors = validateContact({ ...validData, email: 'not-an-email' });
    expect(errors.email).toBeDefined();
  });

  it('errors when email has no domain', () => {
    const errors = validateContact({ ...validData, email: 'user@' });
    expect(errors.email).toBeDefined();
  });

  it('no error for valid email formats', () => {
    const validEmails = [
      'user@example.com',
      'user+tag@sub.domain.fr',
      'firstname.lastname@company.org',
    ];
    validEmails.forEach((email) => {
      const errors = validateContact({ ...validData, email });
      expect(errors.email, `Expected no error for email: ${email}`).toBeUndefined();
    });
  });
});

describe('validateContact — message field (AC-09)', () => {
  it('errors when message is empty', () => {
    const errors = validateContact({ ...validData, message: '' });
    expect(errors.message).toBeDefined();
  });

  it('errors when message is shorter than 20 characters', () => {
    const errors = validateContact({ ...validData, message: 'Too short.' });
    expect(errors.message).toBeDefined();
  });

  it('no error when message is exactly 20 characters', () => {
    const errors = validateContact({ ...validData, message: '12345678901234567890' });
    expect(errors.message).toBeUndefined();
  });

  it('no error when message is longer than 20 characters', () => {
    const errors = validateContact({ ...validData, message: 'This message is definitely long enough to pass validation.' });
    expect(errors.message).toBeUndefined();
  });
});

describe('validateContact — projectType field (AC-09)', () => {
  it('errors when projectType is empty or unselected', () => {
    const errors = validateContact({ ...validData, projectType: '' });
    expect(errors.projectType).toBeDefined();
  });

  it('no error for valid project types', () => {
    const types = ['Residential', 'Hospitality', 'Commercial', 'Other'];
    types.forEach((t) => {
      const errors = validateContact({ ...validData, projectType: t });
      expect(errors.projectType).toBeUndefined();
    });
  });
});

describe('validateContact — budgetRange field (AC-09)', () => {
  it('errors when budgetRange is empty or unselected', () => {
    const errors = validateContact({ ...validData, budgetRange: '' });
    expect(errors.budgetRange).toBeDefined();
  });

  it('no error for valid budget ranges', () => {
    const ranges = ['Under €50k', '€50k–€150k', '€150k–€500k', '€500k+'];
    ranges.forEach((r) => {
      const errors = validateContact({ ...validData, budgetRange: r });
      expect(errors.budgetRange).toBeUndefined();
    });
  });
});

describe('validateContact — multiple simultaneous errors (AC-09)', () => {
  it('reports all invalid fields at once on an empty submission', () => {
    const errors = validateContact({
      name: '',
      email: '',
      projectType: '',
      budgetRange: '',
      message: '',
    });
    expect(errors.name).toBeDefined();
    expect(errors.email).toBeDefined();
    expect(errors.projectType).toBeDefined();
    expect(errors.budgetRange).toBeDefined();
    expect(errors.message).toBeDefined();
  });
});
