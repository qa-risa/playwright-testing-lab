import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/base-page';
import { RegisterPageLocators } from '../locators/register-page-locators';

export class RegisterPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async inputAccountInformation(): Promise<void> {
    // first name
    let locator: Locator = this.page.locator(RegisterPageLocators.FIRST_NAME);
    await locator.click();
    await this.page.waitForTimeout(1000);
    await locator.fill('test_first_name');
    await this.page.waitForTimeout(1000);

    // last name
    locator = this.page.locator(RegisterPageLocators.LAST_NAME);
    await locator.click();
    await this.page.waitForTimeout(1000);
    await locator.fill('test_last_name');
    await this.page.waitForTimeout(1000);

    // email
    locator = this.page.locator(RegisterPageLocators.EMAIL);
    await locator.click();
    await this.page.waitForTimeout(1000);
    await locator.fill('test@unittest202611112233.com');
    await this.page.waitForTimeout(1000);

    // telephone
    locator = this.page.locator(RegisterPageLocators.TELEPHONE);
    await locator.click();
    await this.page.waitForTimeout(1000);
    await locator.fill('012345678');
    await this.page.waitForTimeout(1000);

    // password
    locator = this.page.locator(RegisterPageLocators.PASSWORD);
    await locator.click();
    await this.page.waitForTimeout(1000);
    await locator.fill('P@ssw0rd');
    await this.page.waitForTimeout(1000);

    // password confirm
    locator = this.page.locator(RegisterPageLocators.PASSWORD_CONFIRM);
    await locator.click();
    await this.page.waitForTimeout(1000);
    await locator.fill('P@ssw0rd');
    await this.page.waitForTimeout(1000);

    // newsletter
    locator = this.page.locator(RegisterPageLocators.NEWSLETTER);
    await locator.click();
    await this.page.waitForTimeout(1000);

    // privacy policy
    locator = this.page.locator(RegisterPageLocators.PRIVACY_POLICY);
    await locator.click();
    await this.page.waitForTimeout(1000);

    // click on the continue button
    locator = this.page.locator(RegisterPageLocators.CONTINUE_BUTTON);
    await locator.click();
    await this.page.waitForTimeout(2000);
  }
}
