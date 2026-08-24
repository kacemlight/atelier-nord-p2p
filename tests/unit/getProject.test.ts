/**
 * Unit tests for src/lib/getProject.ts
 * Tests the getProject(id) adapter against the actual project data.
 * Runner: Jest (ts-jest)
 */
import { getProject, projects } from '../../src/lib/getProject';

describe('getProject', () => {
  describe('happy path', () => {
    it('returns the correct project for a valid id', () => {
      const first = projects[0];
      const result = getProject(first.id);
      expect(result).toBeDefined();
      expect(result?.id).toBe(first.id);
      expect(result?.title).toBe(first.title);
    });

    it('finds each of the 6 seeded projects by id', () => {
      // The seed data has 6 projects; verify all are retrievable
      expect(projects).toHaveLength(6);
      projects.forEach((project) => {
        const result = getProject(project.id);
        expect(result).toBeDefined();
        expect(result?.id).toBe(project.id);
      });
    });

    it('returns a project with all required typed fields', () => {
      const result = getProject(projects[0].id);
      expect(result).toBeDefined();
      if (!result) return;
      expect(typeof result.id).toBe('string');
      expect(typeof result.slug).toBe('string');
      expect(typeof result.title).toBe('string');
      expect(['residential', 'hospitality', 'commercial']).toContain(result.category);
      expect(typeof result.year).toBe('number');
      expect(result.year).toBeGreaterThan(2000);
      expect(typeof result.location).toBe('string');
      expect(typeof result.description).toBe('string');
      expect(Array.isArray(result.deliverables)).toBe(true);
      expect(result.deliverables.length).toBeGreaterThanOrEqual(1);
    });

    it('returns a project with a boolean featured field', () => {
      const result = getProject(projects[0].id);
      expect(result).toBeDefined();
      expect(typeof result?.featured).toBe('boolean');
    });

    it('returns a project with a valid imageAspect field', () => {
      const result = getProject(projects[0].id);
      expect(['16/9', '4/3', '3/4']).toContain(result?.imageAspect);
    });
  });

  describe('edge cases', () => {
    it('returns undefined for an unknown id', () => {
      const result = getProject('does-not-exist');
      expect(result).toBeUndefined();
    });

    it('returns undefined for an empty string id', () => {
      const result = getProject('');
      expect(result).toBeUndefined();
    });

    it('is case-sensitive — uppercase id does not match', () => {
      const first = projects[0];
      const result = getProject(first.id.toUpperCase());
      // Ids are lowercase slugs; uppercase lookup should not match
      expect(result).toBeUndefined();
    });
  });

  describe('data integrity', () => {
    it('every project has a non-empty slug', () => {
      projects.forEach((p) => {
        expect(p.slug).toBeTruthy();
        expect(p.slug.length).toBeGreaterThan(0);
      });
    });

    it('every project year is a plausible recent year', () => {
      projects.forEach((p) => {
        expect(p.year).toBeGreaterThanOrEqual(2015);
        expect(p.year).toBeLessThanOrEqual(new Date().getFullYear());
      });
    });

    it('category values match the ProjectCategory union type', () => {
      const validCategories = ['residential', 'hospitality', 'commercial'];
      projects.forEach((p) => {
        expect(validCategories).toContain(p.category);
      });
    });
  });
});
