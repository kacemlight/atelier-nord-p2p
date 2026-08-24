/**
 * Unit tests for src/lib/validateContact.ts
 * Tests client-side form validation for the inquiry form (AC-09, AC-10).
 * Runner: Jest (ts-jest)
 */
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

  it('returns an empty object (not null/undefined) for valid data', () => {
    const errors = validateContact(validData);
    expect(errors).toBeDefined();
    expect(errors).not.toBeNull();
    expect(typeof errors).toBe('object');
  });
});

describe('validateContact — name field (AC-09)', () => {
  it('errors when name is empty string', () => {
    const errors = validateContact({ ...validData, name: '' });
    expect(errors.name).toBeDefined();
  });

  it('errors when name is only whitespace', () => {
    const errors = validateContact({ ...validData, name: '   ' });
    expect(errors.name).toBeDefined();
  });

  it('no error when name has at least 1 non-whitespace character', () => {
    const errors = validateContact({ ...validData, name: 'A' });
    expect(errors.name).toBeUndefined();
  });

  it('no error for a typical full name', () => {
    const errors = validateContact({ ...validData, name: 'Jean-Pierre Lefebvre' });
    expect(errors.name).toBeUndefined();
  });
});

describe('validateContact — email field (AC-09)', () => {
  it('errors when email is empty', () => {
    const errors = validateContact({ ...validData, email: '' });
    expect(errors.email).toBeDefined();
  });

  it('errors when email has no @ symbol', () => {
    const errors = validateContact({ ...validData, email: 'notanemail' });
    expect(errors.email).toBeDefined();
  });

  it('errors when email has no domain part', () => {
    const errors = validateContact({ ...validData, email: 'user@' });
    expect(errors.email).toBeDefined();
  });

  it('errors when email has no TLD', () => {
    const errors = validateContact({ ...validData, email: 'user@domain' });
    expect(errors.email).toBeDefined();
  });

  it('no error for standard email formats', () => {
    const validEmails = [
      'user@example.com',
      'user+tag@sub.domain.fr',
      'firstname.lastname@company.org',
      'contact@atelier-nord.studio',
    ];
    validEmails.forEach((email) => {
      const errors = validateContact({ ...validData, email });
      expect(errors.email).toBeUndefined();
    });
  });
});

describe('validateContact — projectType field (AC-09)', () => {
  it('errors when projectType is empty string', () => {
    const errors = validateContact({ ...validData, projectType: '' });
    expect(errors.projectType).toBeDefined();
  });

  it('errors when projectType is only whitespace', () => {
    const errors = validateContact({ ...validData, projectType: '   ' });
    expect(errors.projectType).toBeDefined();
  });

  it('no error for any non-empty project type string', () => {
    const types = ['Residential', 'Hospitality', 'Commercial', 'Other', 'full-interior-design'];
    types.forEach((t) => {
      const errors = validateContact({ ...validData, projectType: t });
      expect(errors.projectType).toBeUndefined();
    });
  });
});

describe('validateContact — budgetRange field (AC-09)', () => {
  it('errors when budgetRange is empty string', () => {
    const errors = validateContact({ ...validData, budgetRange: '' });
    expect(errors.budgetRange).toBeDefined();
  });

  it('errors when budgetRange is only whitespace', () => {
    const errors = validateContact({ ...validData, budgetRange: '   ' });
    expect(errors.budgetRange).toBeDefined();
  });

  it('no error for any non-empty budget range string', () => {
    const ranges = ['Under €50k', '€50k–€150k', '€150k–€500k', '€500k+', 'to-discuss'];
    ranges.forEach((r) => {
      const errors = validateContact({ ...validData, budgetRange: r });
      expect(errors.budgetRange).toBeUndefined();
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
    const errors = validateContact({
      ...validData,
      message: 'We would like to commission a full redesign of our Parisian pied-à-terre.',
    });
    expect(errors.message).toBeUndefined();
  });
});

describe('validateContact — multiple simultaneous errors (AC-09)', () => {
  it('reports all 5 invalid fields at once on a blank submission', () => {
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
    // Exactly 5 errors — no phantom keys
    expect(Object.keys(errors)).toHaveLength(5);
  });

  it('only reports errors for actually invalid fields', () => {
    // Name and email valid; rest invalid
    const errors = validateContact({
      name: 'Valid Name',
      email: 'valid@example.com',
      projectType: '',
      budgetRange: '',
      message: 'short',
    });
    expect(errors.name).toBeUndefined();
    expect(errors.email).toBeUndefined();
    expect(errors.projectType).toBeDefined();
    expect(errors.budgetRange).toBeDefined();
    expect(errors.message).toBeDefined();
  });
});

describe('validateContact — partial data (missing keys)', () => {
  it('handles partially supplied data without throwing', () => {
    expect(() => validateContact({ name: 'Only Name' })).not.toThrow();
  });

  it('reports errors for omitted fields', () => {
    const errors = validateContact({ name: 'Only Name' });
    expect(errors.email).toBeDefined();
    expect(errors.projectType).toBeDefined();
    expect(errors.budgetRange).toBeDefined();
    expect(errors.message).toBeDefined();
  });
});
