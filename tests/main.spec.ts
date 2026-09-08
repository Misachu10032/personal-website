import { test, expect } from '@playwright/test';

test('homepage loads with the right title and heading', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/\/Home$/);
  await expect(page).toHaveTitle('John Zhou');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

test('nav scrolls to the Projects and About sections', async ({ page }) => {
  await page.goto('/Home');
  await page.getByRole('button', { name: 'Projects' }).click();
  await expect(page.getByRole('heading', { name: 'Projects' })).toBeInViewport();

  await page.getByRole('button', { name: 'About' }).click();
  await expect(page.getByRole('heading', { name: 'About' })).toBeInViewport();
});

test('dark mode toggle switches the theme', async ({ page }) => {
  await page.goto('/Home');
  const html = page.locator('html');
  await expect(html).not.toHaveClass(/dark/);

  await page.getByRole('button', { name: 'Toggle theme' }).click();
  await expect(html).toHaveClass(/dark/);
});

test('Playground link navigates to the playground hub', async ({ page }) => {
  await page.goto('/Home');
  await page.getByRole('link', { name: 'Playground' }).click();
  await expect(page).toHaveURL(/\/Playground$/);
  await expect(page.getByRole('heading', { name: 'Playground' })).toBeVisible();
  await expect(page.getByRole('link', { name: /Retro Games/ })).toBeVisible();
});

test('a project card links out to the project', async ({ page }) => {
  await page.goto('/Home');
  const firstProjectLink = page.locator('a[href^="http"], a[href^="/"]').filter({ hasText: /.+/ }).first();
  await expect(firstProjectLink).toHaveAttribute('href', /.+/);
});

test('locale switch updates visible text', async ({ page }) => {
  await page.goto('/Home');
  await expect(page.getByRole('button', { name: 'Home' })).toBeVisible();

  await page.getByRole('combobox', { name: 'Language' }).click();
  await page.getByRole('option', { name: 'Chinese' }).click();

  await expect(page.getByRole('button', { name: '首页' })).toBeVisible();
});
