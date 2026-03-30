// tests/e2e/about.test.js
const { test, expect } = require('@playwright/test');

test('Перевірка заголовка сторінки "Про нас"', async ({ page }) => {
  await page.goto('http://localhost:3000/about.html');
  await expect(page.locator('h1')).toHaveText('Про наш тестовий проект');
});

test('Перевірка наявності посилання на головну', async ({ page }) => {
  await page.goto('http://localhost:3000/about.html');
  await expect(page.locator('a')).toHaveText('Повернутися на головну');
  await expect(page.locator('a')).toHaveAttribute('href', '/');
});

test('Перевірка title сторінки', async ({ page }) => {
  await page.goto('http://localhost:3000/about.html');
  await expect(page).toHaveTitle(/Про нас/);
});