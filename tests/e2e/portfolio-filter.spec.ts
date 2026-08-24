import { test, expect } from '@playwright/test';

test.describe('Portfolio filter — AC-03, AC-04', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/portfolio');
  });

  test('shows all 6 projects by default', async ({ page }) => {
    const cards = page.locator('[data-testid="project-card"]');
    await expect(cards).toHaveCount(6);
  });

  test('filter buttons are visible: All, Residential, Hospitality, Commercial', async ({ page }) => {
    await expect(page.getByRole('button', { name: /^all$/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /residential/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /hospitality/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /commercial/i })).toBeVisible();
  });

  test('Residential filter shows only Residential projects (AC-03, AC-04)', async ({ page }) => {
    await page.getByRole('button', { name: /residential/i }).click();
    const cards = page.locator('[data-testid="project-card"]');
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
    // Each visible card should bear the Residential badge
    for (let i = 0; i < count; i++) {
      await expect(cards.nth(i).getByText(/residential/i)).toBeVisible();
    }
  });

  test('Hospitality filter shows only Hospitality projects (AC-03, AC-04)', async ({ page }) => {
    await page.getByRole('button', { name: /hospitality/i }).click();
    const cards = page.locator('[data-testid="project-card"]');
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      await expect(cards.nth(i).getByText(/hospitality/i)).toBeVisible();
    }
  });

  test('Commercial filter shows only Commercial projects (AC-03, AC-04)', async ({ page }) => {
    await page.getByRole('button', { name: /commercial/i }).click();
    const cards = page.locator('[data-testid="project-card"]');
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      await expect(cards.nth(i).getByText(/commercial/i)).toBeVisible();
    }
  });

  test('clicking All after a filter restores all 6 projects (AC-03)', async ({ page }) => {
    await page.getByRole('button', { name: /residential/i }).click();
    await page.getByRole('button', { name: /^all$/i }).click();
    const cards = page.locator('[data-testid="project-card"]');
    await expect(cards).toHaveCount(6);
  });

  test('no page reload occurs when switching filters (AC-03)', async ({ page }) => {
    let navigationCount = 0;
    page.on('framenavigated', () => navigationCount++);
    // Reset count after initial page load
    navigationCount = 0;
    await page.getByRole('button', { name: /residential/i }).click();
    await page.getByRole('button', { name: /hospitality/i }).click();
    await page.getByRole('button', { name: /^all$/i }).click();
    expect(navigationCount).toBe(0);
  });

  test('clicking a project card navigates to detail page (AC-05)', async ({ page }) => {
    const firstCard = page.locator('[data-testid="project-card"]').first();
    await firstCard.click();
    await expect(page).toHaveURL(/\/portfolio\/[a-z-]+/);
  });
});
