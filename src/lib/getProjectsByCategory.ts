/**
 * getProjectsByCategory — thin adapter over src/data/projects.ts
 * Returns all projects when category is 'all' or omitted.
 * Returns filtered projects for 'residential' | 'hospitality' | 'commercial'.
 * Pure function; no side effects; fully unit-testable.
 */
import { projects } from '@/data/projects';
import type { Project, ProjectCategory } from '@/types';

export type FilterCategory = ProjectCategory | 'all';

export function getProjectsByCategory(category?: FilterCategory): Project[] {
  if (!category || category === 'all') {
    return [...projects];
  }
  return projects.filter((p) => p.category === category);
}

export { projects };
