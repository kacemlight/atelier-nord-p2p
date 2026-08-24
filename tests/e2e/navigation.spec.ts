import { test, expect } from '@playwright/test';

test.describe('Navigation — all pages reachable (AC-01, AC-05, AC-07, AC-08, AC-14)', () => {
  test('home page renders studio name and CTAs', async ({ page }) => {
    await page.goto('/');
    // Hero must contain studio name
    await expect(page.getByRole('heading', { name: /atelier nord/i })).toBeVisible();
    // CTA buttons
    const portfolioCTA = page.getByRole('link', { name: /view our work/i });
    const contactCTA = page.getByRole('link', { name: /get in touch/i });
    await expect(portfolioCTA).toBeVisible();
    await expect(contactCTA).toBeVisible();
  });

  test('home CTA "View our work" navigates to /portfolio (AC-01)', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /view our work/i }).click();
    await expect(page).toHaveURL(/\/portfolio/);
  });

  test('home CTA "Get in touch" navigates to /contact (AC-01)', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /get in touch/i }).click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test('nav link Portfolio navigates to /portfolio', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('navigation').getByRole('link', { name: /portfolio/i }).click();
    await expect(page).toHaveURL(/\/portfolio/);
  });

  test('nav link Services navigates to /services', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('navigation').getByRole('link', { name: /services/i }).click();
    await expect(page).toHaveURL(/\/services/);
  });

  test('nav link About navigates to /about', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('navigation').getByRole('link', { name: /about/i }).click();
    await expect(page).toHaveURL(/\/about/);
  });

  test('nav link Contact navigates to /contact', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('navigation').getByRole('link', { name: /contact/i }).click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test('services page renders three service cards (AC-07)', async ({ page }) => {
    await page.goto('/services');
    // Each service name must appear
    await expect(page.getByText(/full interior design/i)).toBeVisible();
    await expect(page.getByText(/renovation consulting/i)).toBeVisible();
    await expect(page.getByText(/furniture curation/i)).toBeVisible();
  });

  test('about page renders two founder names (AC-08)', async ({ page }) => {
    await page.goto('/about');
    // Two founder profiles should be visible — at least 2 role="article" or heading elements
    const founders = page.locator('[data-testid="founder-card"]');
    await expect(founders).toHaveCount(2);
  });

  test('unknown slug renders 404 page with home link (AC-06, AC-14)', async ({ page }) => {
    await page.goto('/portfolio/this-project-does-not-exist');
    await expect(page.getByRole('link', { name: /home/i })).toBeVisible();
  });

  test('unknown top-level route renders 404 page (AC-14)', async ({ page }) => {
    await page.goto('/definitely-not-a-page');
    await expect(page.getByRole('link', { name: /home/i })).toBeVisible();
  });

  test('home page shows exactly 3 featured project cards (AC-02)', async ({ page }) => {
    await page.goto('/');
    const cards = page.locator('[data-testid="project-card"]');
    await expect(cards).toHaveCount(3);
  });
});
