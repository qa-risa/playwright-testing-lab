import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main-page';
import { SearchResultsPage } from '../pages/search-results-page';

test('search document', async ({ page }) => {
    await page.goto('https://www.python.org/');

    const mainPage = new MainPage(page);
    await mainPage.inputTextBox();
    await mainPage.clickGoButton();

    const searchResultsPage = new SearchResultsPage(page);
    const result = await searchResultsPage.isResultsFound();

    expect(result).toBe(true);
});
