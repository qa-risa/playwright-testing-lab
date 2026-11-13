import { chromium } from 'playwright';

async function githubSearch() {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://github.com/');

    // 検索ボタンを、役割（button）と名前で探してクリックする
    await page.getByRole('button', { name: /search/i }).first().click();

    // const searchButton = page.locator('.header-search-button');
    await page.waitForTimeout(5000);
    // await searchButton.click();

    // 検索ボックスに入力して Enter を押す
    const searchBox = page.getByRole('combobox', { name: /search/i });

    // const searchBox = page.locator('#query-builder-test');
    await page.waitForTimeout(5000);
    await searchBox.fill('Playwright');
    await page.waitForTimeout(5000);
    await searchBox.press('Enter');

    const playwrightLink = page.locator('a:has-text("Playwright")').first();
    await page.waitForTimeout(5000);
    await playwrightLink.click();

    await page.waitForTimeout(10000);
    await page.close();
    await browser.close();
}

githubSearch();
