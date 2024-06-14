// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

// Test button color doesn't work
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

// Test reset button work
test('reset button', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.click('.btnReset');
  const screenText = await page.$eval('div[name="screen"]', el => el.textContent);
  expect(screenText).toBe('0');
});

// Test button and display are different
test('button click number', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.click('#1');
  const screenText = await page.$eval('div[name="screen"]', el => el.textContent);
  expect(screenText).toBe('1');
})

// To do

// Test soustraction
// Test addition
// Test multiplication
// Test sum

// There is a bug when we click on the number, it doesn't display the good number (3, 5)
// Soustraction and addition doesn't work
// Multiplication seem correct 