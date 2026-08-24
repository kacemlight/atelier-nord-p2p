import { describe, it, expect } from 'vitest';
import { getProjectsByCategory } from '../../src/lib/getProjectsByCategory';
import { PROJECTS } from '../../src/data/projects';

describe('getProjectsByCategory', () => {
  it('returns all projects when category is "All" (AC-04)', () => {
    const result = getProjectsByCategory('All');
    expect(result).toHaveLength(PROJECTS.length);
  });

  it('returns all projects when no category is supplied', () => {
    // @ts-expect-error intentional call without args to test fallback
    const result = getProjectsByCategory();
    expect(result).toHaveLength(PROJECTS.length);
  });

  it('returns only Residential projects (AC-04)', () => {
    const result = getProjectsByCategory('Residential');
    expect(result.length).toBeGreaterThan(0);
    result.forEach((p) => expect(p.category).toBe('Residential'));
  });

  it('returns only Hospitality projects (AC-04)', () => {
    const result = getProjectsByCategory('Hospitality');
    expect(result.length).toBeGreaterThan(0);
    result.forEach((p) => expect(p.category).toBe('Hospitality'));
  });

  it('returns only Commercial projects (AC-04)', () => {
    const result = getProjectsByCategory('Commercial');
    expect(result.length).toBeGreaterThan(0);
    result.forEach((p) => expect(p.category).toBe('Commercial'));
  });

  it('Residential + Hospitality + Commercial counts sum to total (AC-04)', () => {
    const r = getProjectsByCategory('Residential').length;
    const h = getProjectsByCategory('Hospitality').length;
    const c = getProjectsByCategory('Commercial').length;
    expect(r + h + c).toBe(PROJECTS.length);
  });

  it('returns empty array for an unknown category string', () => {
    // @ts-expect-error deliberate bad category
    const result = getProjectsByCategory('Unknown');
    expect(result).toHaveLength(0);
  });

  it('does not mutate the original PROJECTS array', () => {
    const originalLength = PROJECTS.length;
    getProjectsByCategory('Residential');
    expect(PROJECTS).toHaveLength(originalLength);
  });
});
