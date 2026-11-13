import { chromium } from 'playwright';

async function githubSearch() {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://github.com/');
    // ① トップページを保存（フォルダが無ければ自動で作られる）
    await page.screenshot({ path: 'screenshots/01-top.png' });

    await page.getByRole('button', { name: /search/i }).first().click();
    await page.waitForTimeout(5000);

    const searchBox = page.getByRole('combobox', { name: /search/i });
    await page.waitForTimeout(5000);
    await searchBox.fill('Playwright');
    // ② 検索欄に入力した状態を保存
    await page.screenshot({ path: 'screenshots/02-input.png' });

    await page.waitForTimeout(5000);
    await searchBox.press('Enter');
    await page.waitForTimeout(5000);
    // ③ 検索結果を保存
    await page.screenshot({ path: 'screenshots/03-results.png' });

    const playwrightLink = page.locator('a:has-text("Playwright")').first();
    await playwrightLink.click();
    await page.waitForTimeout(5000);
    // ④ 開いたページを保存
    await page.screenshot({ path: 'screenshots/04-repo.png' });

    await page.close();
    await browser.close();
}

githubSearch();
