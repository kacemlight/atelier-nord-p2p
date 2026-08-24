/**
 * Unit tests for src/lib/getProjectsByCategory.ts
 * Tests category filtering against the actual project data.
 * Runner: Jest (ts-jest)
 */
import { getProjectsByCategory, projects } from '../../src/lib/getProjectsByCategory';

describe('getProjectsByCategory', () => {
  describe('returns all projects (AC-04)', () => {
    it('returns all projects when category is "all"', () => {
      const result = getProjectsByCategory('all');
      expect(result).toHaveLength(projects.length);
    });

    it('returns all projects when no category is supplied', () => {
      const result = getProjectsByCategory();
      expect(result).toHaveLength(projects.length);
    });

    it('returns all projects when category is undefined explicitly', () => {
      const result = getProjectsByCategory(undefined);
      expect(result).toHaveLength(projects.length);
    });
  });

  describe('category filtering (AC-04)', () => {
    it('returns only residential projects', () => {
      const result = getProjectsByCategory('residential');
      expect(result.length).toBeGreaterThan(0);
      result.forEach((p) => expect(p.category).toBe('residential'));
    });

    it('returns only hospitality projects', () => {
      const result = getProjectsByCategory('hospitality');
      expect(result.length).toBeGreaterThan(0);
      result.forEach((p) => expect(p.category).toBe('hospitality'));
    });

    it('returns only commercial projects', () => {
      const result = getProjectsByCategory('commercial');
      expect(result.length).toBeGreaterThan(0);
      result.forEach((p) => expect(p.category).toBe('commercial'));
    });

    it('residential + hospitality + commercial counts sum to total', () => {
      const r = getProjectsByCategory('residential').length;
      const h = getProjectsByCategory('hospitality').length;
      const c = getProjectsByCategory('commercial').length;
      expect(r + h + c).toBe(projects.length);
    });
  });

  describe('edge cases', () => {
    it('returns empty array for an unknown category string', () => {
      // @ts-expect-error deliberate bad category
      const result = getProjectsByCategory('unknown');
      expect(result).toHaveLength(0);
    });

    it('does not mutate the original projects array', () => {
      const originalLength = projects.length;
      getProjectsByCategory('residential');
      expect(projects).toHaveLength(originalLength);
    });

    it('returns a new array reference each call (no shared mutation risk)', () => {
      const a = getProjectsByCategory('all');
      const b = getProjectsByCategory('all');
      expect(a).not.toBe(b); // different array references
      expect(a).toEqual(b);  // same contents
    });
  });

  describe('result shape', () => {
    it('each returned project has the expected shape', () => {
      const result = getProjectsByCategory('all');
      result.forEach((p) => {
        expect(typeof p.id).toBe('string');
        expect(typeof p.slug).toBe('string');
        expect(typeof p.title).toBe('string');
        expect(['residential', 'hospitality', 'commercial']).toContain(p.category);
        expect(typeof p.year).toBe('number');
        expect(Array.isArray(p.deliverables)).toBe(true);
      });
    });
  });
});
