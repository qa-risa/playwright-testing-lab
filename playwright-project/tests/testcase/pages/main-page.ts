import { Locator, Page } from '@playwright/test';
import { MainPageLocators } from '../locators/main-page-locators';
import { BasePage } from '../base/base-page';

export class MainPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async inputTextBox(): Promise<void> {
        const locator: Locator = this.page.locator(MainPageLocators.TEXT_BOX);
        await this.page.waitForTimeout(5000);
        await locator.fill('あああ');
    }

    async clickGoButton(): Promise<void> {
        const locator: Locator = this.page.locator(MainPageLocators.GO_BUTTON);
        await this.page.waitForTimeout(5000);
        await locator.click();
    }
}
