import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { SearchPage } from '../pages/searchPage';
import * as fs from 'fs';
import { error } from 'console';

// Interface for test data
interface SearchData {
  query: string;
  expectedResults: string;
}

// Load test data from JSON
const testData: SearchData[] = JSON.parse(fs.readFileSync('./data/searchData.json', 'utf-8'));

test.describe('Search Functionality', () => {
  testData.forEach(({ query, expectedResults }) => {
    test(`Search for ${query}`, async ({ page }) => {
      const homePage = new HomePage(page);
      const searchPage = new SearchPage(page);

      // Navigate to the homepage
      await homePage.goto();

      // Go to the products page
      await homePage.goToProductsPage();

      // Perform the search and validate results
      await searchPage.searchAndValidate(query, expectedResults);
    });
  });
});
