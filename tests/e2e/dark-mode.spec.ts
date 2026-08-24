import { test, expect } from '@playwright/test';

test.describe('Dark mode — AC-11', () => {
  test('toggle button is visible in the nav', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('[data-testid="theme-toggle"]');
    await expect(toggle).toBeVisible();
  });

  test('clicking toggle switches data-theme attribute on <html>', async ({ page }) => {
    await page.goto('/');
    const initialTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
    await page.locator('[data-testid="theme-toggle"]').click();
    const newTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
    expect(newTheme).not.toBe(initialTheme);
  });

  test('theme preference persists after page reload (AC-11)', async ({ page }) => {
    await page.goto('/');
    // Click toggle to switch
    await page.locator('[data-testid="theme-toggle"]').click();
    const themeAfterToggle = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
    // Reload
    await page.reload();
    const themeAfterReload = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
    expect(themeAfterReload).toBe(themeAfterToggle);
  });

  test('localStorage key atelier-nord-theme is set after toggle', async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-testid="theme-toggle"]').click();
    const stored = await page.evaluate(() => localStorage.getItem('atelier-nord-theme'));
    expect(stored).toBeTruthy();
    expect(['light', 'dark']).toContain(stored);
  });
});
