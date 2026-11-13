import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main-page';
import { RegisterPage } from '../pages/register-page';
import { RegisterResultsPage } from '../pages/register-results-page';

test('register account', async ({ page }) => {
  await page.goto('https://tutorialsninja.com/demo');

  const mainPage = new MainPage(page);
  await mainPage.clickAccountOptions();

  const registerPage = new RegisterPage(page);
  await registerPage.inputAccountInformation();

  const registerResultsPage = new RegisterResultsPage(page);
  const result = await registerResultsPage.isAccountCreated();

  expect(result).toBe(true);
});
