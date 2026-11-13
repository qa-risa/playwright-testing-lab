import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/base-page';
import { MainPageLocators } from '../locators/main-page-locators';

export class MainPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async clickAccountOptions(): Promise<void> {
    // account options
    let locator: Locator = this.page.locator(MainPageLocators.ACCOUNT_OPTIONS);
    await this.page.waitForTimeout(2000);
    await locator.click();

    // register
    locator = this.page.locator(MainPageLocators.REGISTER);
    // actions hover
    await this.page.waitForTimeout(2000);
    await locator.hover();
    await this.page.waitForTimeout(2000);
    await locator.click();
  }
}
