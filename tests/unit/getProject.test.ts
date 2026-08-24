import { describe, it, expect } from 'vitest';
import { getProject } from '../../src/lib/getProject';
import { PROJECTS } from '../../src/data/projects';

describe('getProject', () => {
  it('returns the correct project for a valid slug', () => {
    const first = PROJECTS[0];
    const result = getProject(first.slug);
    expect(result).toBeDefined();
    expect(result?.slug).toBe(first.slug);
    expect(result?.name).toBe(first.name);
  });

  it('returns undefined for an unknown slug', () => {
    const result = getProject('does-not-exist');
    expect(result).toBeUndefined();
  });

  it('returns undefined for an empty string slug', () => {
    const result = getProject('');
    expect(result).toBeUndefined();
  });

  it('returns a project with all required fields populated', () => {
    const result = getProject(PROJECTS[0].slug);
    expect(result).toBeDefined();
    if (!result) return;
    expect(typeof result.slug).toBe('string');
    expect(typeof result.name).toBe('string');
    expect(['Residential', 'Hospitality', 'Commercial']).toContain(result.category);
    expect(typeof result.year).toBe('number');
    expect(result.year).toBeGreaterThan(2000);
    expect(typeof result.location).toBe('string');
    expect(Array.isArray(result.description)).toBe(true);
    expect(result.description.length).toBeGreaterThanOrEqual(1);
    expect(Array.isArray(result.scope)).toBe(true);
    expect(Array.isArray(result.materials)).toBe(true);
  });

  it('finds each of the 6 seeded projects by slug (AC-04, AC-05)', () => {
    const expectedSlugs = [
      'villa-thorvald',
      'hotel-des-lames',
      'atelier-bergerac',
      'maison-solberg',
      'le-refuge-hotel',
      'studio-caillebotte',
    ];
    for (const slug of expectedSlugs) {
      const result = getProject(slug);
      expect(result, `Expected project with slug "${slug}" to exist`).toBeDefined();
    }
  });
});
