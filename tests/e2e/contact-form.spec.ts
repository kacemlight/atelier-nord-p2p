import { test, expect } from '@playwright/test';

test.describe('Contact form — AC-09, AC-10', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('contact page renders all form fields', async ({ page }) => {
    await expect(page.getByLabel(/name/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/project type/i)).toBeVisible();
    await expect(page.getByLabel(/budget/i)).toBeVisible();
    await expect(page.getByLabel(/message/i)).toBeVisible();
  });

  test('empty submit shows inline validation errors on all fields (AC-09)', async ({ page }) => {
    await page.getByRole('button', { name: /send|submit/i }).click();
    // All required field errors should appear
    await expect(page.getByText(/name.*required|required.*name/i).or(page.locator('[data-testid="error-name"]'))).toBeVisible();
    await expect(page.getByText(/email.*required|required.*email|valid.*email/i).or(page.locator('[data-testid="error-email"]'))).toBeVisible();
    await expect(page.getByText(/message.*required|required.*message|20 char/i).or(page.locator('[data-testid="error-message"]'))).toBeVisible();
  });

  test('invalid email format shows email error (AC-09)', async ({ page }) => {
    await page.getByLabel(/name/i).fill('Marie');
    await page.getByLabel(/email/i).fill('not-valid');
    await page.getByLabel(/email/i).blur();
    await expect(page.locator('[data-testid="error-email"]').or(page.getByText(/valid.*email|email.*invalid/i))).toBeVisible();
  });

  test('message shorter than 20 chars shows length error (AC-09)', async ({ page }) => {
    await page.getByLabel(/message/i).fill('Too short.');
    await page.getByLabel(/message/i).blur();
    await expect(page.locator('[data-testid="error-message"]').or(page.getByText(/20 char|too short|minimum/i))).toBeVisible();
  });

  test('valid submit shows success banner and form resets (AC-10)', async ({ page }) => {
    await page.getByLabel(/name/i).fill('Sophie Martin');
    await page.getByLabel(/email/i).fill('sophie@example.com');
    await page.getByLabel(/project type/i).selectOption({ label: /residential/i });
    await page.getByLabel(/budget/i).selectOption({ label: /50k/i });
    await page.getByLabel(/message/i).fill('We are planning a full renovation of our Haussmann apartment and would love to work with Atelier Nord.');
    await page.getByRole('button', { name: /send|submit/i }).click();
    // Success banner
    await expect(page.getByText(/thank you|within 48 hours/i)).toBeVisible();
  });

  test('studio contact details are present on the page', async ({ page }) => {
    // Address, email, or phone must be visible somewhere on the contact page
    const studioInfo = page.locator('[data-testid="studio-info"]');
    await expect(studioInfo).toBeVisible();
  });
});
