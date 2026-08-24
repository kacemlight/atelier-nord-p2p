/**
 * getProject — thin adapter over src/data/projects.ts
 * Looks up a project by its `id` field.
 * Pure function; no side effects; fully unit-testable.
 */
import { projects } from '@/data/projects';
import type { Project } from '@/types';

export function getProject(id: string): Project | undefined {
  if (!id) return undefined;
  return projects.find((p) => p.id === id);
}

export { projects };
