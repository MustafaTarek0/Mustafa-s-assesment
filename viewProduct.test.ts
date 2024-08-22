import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { SearchPage } from '../pages/searchPage';
import { ProductDetailsPage } from '../pages/productDetailsPage';
import * as fs from 'fs';

// Interface for test data
interface SearchData {
  query: string;
  expectedResults: string;
}

// Load test data from JSON
const testData: SearchData[] = JSON.parse(fs.readFileSync('./data/searchData.json', 'utf-8'));

test.describe('View Product', () => {
  testData.forEach(({ query, expectedResults }) => {
    test(`Search for ${query}`, async ({ page }) => {
      const homePage = new HomePage(page);
      const searchPage = new SearchPage(page);
      const productDetailsPage = new ProductDetailsPage(page);
      // Navigate to the homepage
      await homePage.goto();

      // Go to the products page
      await homePage.goToProductsPage();

      // Perform the search and validate results
      await searchPage.searchAndValidate(query, expectedResults);

      await searchPage.viewProductButton.click();
     
      // Assert that the current URL is the expected URL
      expect( page.url()).toBe('https://automationexercise.com/product_details/30');

      await productDetailsPage.productInfo.isVisible();

    });
  });
});
