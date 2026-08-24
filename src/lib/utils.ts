/**
 * Utility helpers — pure functions, zero side-effects.
 */

/**
 * Join class names, filtering out falsy values.
 * Usage: cn('base-class', condition && 'conditional-class')
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Format a year number for display.
 */
export function formatYear(year: number): string {
  return year.toString();
}

/**
 * Format an area in square metres.
 */
export function formatArea(area: number): string {
  return `${area} m²`;
}

/**
 * Slugify a string — lowercase, hyphens, no special characters.
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Truncate a string to a maximum length, appending ellipsis.
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength).trimEnd() + '…';
}
