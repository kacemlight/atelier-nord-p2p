import { test, expect } from '@playwright/test';

const SEED_SLUGS = [
  'villa-thorvald',
  'hotel-des-lames',
  'atelier-bergerac',
  'maison-solberg',
  'le-refuge-hotel',
  'studio-caillebotte',
];

test.describe('Project detail pages — AC-05, AC-06', () => {
  for (const slug of SEED_SLUGS) {
    test(`/${slug} renders all required data fields`, async ({ page }) => {
      await page.goto(`/portfolio/${slug}`);
      // Name / heading must appear
      const heading = page.getByRole('heading', { level: 1 });
      await expect(heading).toBeVisible();
      // Category badge
      await expect(
        page.locator('[data-testid="project-category"]').or(
          page.getByText(/residential|hospitality|commercial/i)
        )
      ).toBeVisible();
      // Year
      await expect(
        page.locator('[data-testid="project-year"]').or(
          page.getByText(/202[0-9]/)
        )
      ).toBeVisible();
      // Location
      await expect(
        page.locator('[data-testid="project-location"]').or(
          page.getByText(/france|norway/i)
        )
      ).toBeVisible();
      // Back link
      await expect(page.getByRole('link', { name: /all projects/i })).toBeVisible();
    });
  }

  test('unknown slug renders 404 page (AC-06)', async ({ page }) => {
    await page.goto('/portfolio/project-that-does-not-exist');
    // 404 page must have a home link
    await expect(page.getByRole('link', { name: /home/i })).toBeVisible();
  });

  test('back link on detail page returns to /portfolio', async ({ page }) => {
    await page.goto(`/portfolio/${SEED_SLUGS[0]}`);
    await page.getByRole('link', { name: /all projects/i }).click();
    await expect(page).toHaveURL(/\/portfolio/);
  });
});
