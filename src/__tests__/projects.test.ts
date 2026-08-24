import {
  projects,
  getProjectBySlug,
  getProjectsByCategory,
  getFeaturedProjects
} from '@/data/projects';

describe('projects data', () => {
  it('exports 6 seed projects', () => {
    expect(projects).toHaveLength(6);
  });

  it('every project has required fields', () => {
    for (const p of projects) {
      expect(p.id).toBeTruthy();
      expect(p.slug).toBeTruthy();
      expect(p.title).toBeTruthy();
      expect(['Residential', 'Hospitality', 'Commercial']).toContain(p.category);
      expect(typeof p.year).toBe('number');
      expect(p.scope.length).toBeGreaterThan(0);
      expect(p.description.length).toBeGreaterThan(50);
    }
  });

  it('slugs are unique', () => {
    const slugs = projects.map((p) => p.slug);
    const unique = new Set(slugs);
    expect(unique.size).toBe(slugs.length);
  });
});

describe('getProjectBySlug', () => {
  it('returns the correct project', () => {
    const p = getProjectBySlug('villa-lumiere-saint-tropez');
    expect(p?.title).toBe('Villa Lumi\u00e8re');
  });

  it('returns undefined for unknown slug', () => {
    expect(getProjectBySlug('does-not-exist')).toBeUndefined();
  });
});

describe('getProjectsByCategory', () => {
  it('returns all projects for "All"', () => {
    expect(getProjectsByCategory('All')).toHaveLength(projects.length);
  });

  it('filters correctly by Residential', () => {
    const res = getProjectsByCategory('Residential');
    expect(res.length).toBeGreaterThan(0);
    res.forEach((p) => expect(p.category).toBe('Residential'));
  });

  it('filters correctly by Hospitality', () => {
    const res = getProjectsByCategory('Hospitality');
    expect(res.length).toBeGreaterThan(0);
    res.forEach((p) => expect(p.category).toBe('Hospitality'));
  });

  it('filters correctly by Commercial', () => {
    const res = getProjectsByCategory('Commercial');
    expect(res.length).toBeGreaterThan(0);
    res.forEach((p) => expect(p.category).toBe('Commercial'));
  });
});

describe('getFeaturedProjects', () => {
  it('returns only featured projects', () => {
    const featured = getFeaturedProjects();
    expect(featured.length).toBeGreaterThan(0);
    featured.forEach((p) => expect(p.featured).toBe(true));
  });
});
