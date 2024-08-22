import { Page, expect } from '@playwright/test';
import { randomInt } from 'crypto';

export class SearchPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Getter for the search input element
  get searchBar() {
    return this.page.locator('#search_product');
  }

  // Getter for the submit search button
  get searchButton() {
    return this.page.locator('#submit_search');
  }

  // Getter for the product titles after search
  get productTitles() {
    return this.page.locator('.productinfo p');
  }

  
  // Generate a random integer between min (inclusive) and max (inclusive)
  private getRandomInt(max: number): number {
    return Math.floor(Math.random() * (max + 1)); // Random integer between 0 and max
  }

  // Locator for the view cart button with a random integer
  get viewProductButton() {
    const randomInt = this.getRandomInt(43); // Random integer between 0 and 43
    return this.page.locator(`a[href="/product_details/30"]`);
  }

   





  // Perform a search and validate results
  async searchAndValidate(query: string, expectedResults: string) {
    await this.searchBar.fill(query);
    await this.searchButton.click();

    const productCount = await this.productTitles.count();

    for (let i = 0; i < productCount; i++) {
      const productTitle = await this.productTitles.nth(i).textContent();

      if (productTitle && typeof productTitle === 'string') {
        const normalizedTitle = productTitle.toLowerCase();
        const normalizedExpected = expectedResults.toLowerCase();

        // Debugging output
        console.log(`Product ${i + 1}: ${productTitle}`);

        // Assertion
        expect(normalizedTitle).toContain(normalizedExpected);
      } else {
        console.error(`Product title at index ${i} is null or not a string`);
      }
    }
  }
}
