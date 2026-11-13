import { Page } from '@playwright/test';
import { BasePage } from '../base/base-page';

export class SearchResultsPage extends BasePage{
    constructor(page: Page) {
        super(page);
    }

    async isResultsFound(): Promise<boolean> {
        const content = await this.page.content();
        return !content.includes('No results found.');
    }
}
