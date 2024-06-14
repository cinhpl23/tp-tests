// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('button is red', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  const btnColor = await page.evaluate(() => {
    const button = document.getElementById('btnEqual');
    if (button) {
      return getComputedStyle(button).color;
    }
    return null;
  })

  expect(btnColor).toBe('red');
})

test('reset button works', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.click('.btnReset');
  const screenText = await page.$eval('div[name="screen"]', el => el.textContent);
  expect(screenText).toBe('0');
});

/*
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/