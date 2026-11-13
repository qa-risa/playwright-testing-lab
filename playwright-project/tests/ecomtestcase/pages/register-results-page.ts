import { Page } from '@playwright/test';
import { BasePage } from '../base/base-page';

export class RegisterResultsPage extends BasePage {
  constructor(page: Page) { 
    super(page); 
  }

  async isAccountCreated(): Promise<boolean> {
    const content = await this.page.content();
    const result = content.includes('Your Account Has Been Created!');
    await this.page.waitForTimeout(2000);
    return result;
  }
}