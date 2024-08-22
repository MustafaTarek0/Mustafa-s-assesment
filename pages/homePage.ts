import { Page , defineConfig} from '@playwright/test';
import {baseUrl} from '../playwright.config'
export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Getter for the "Products" link element
  get productsLink() {
    return this.page.locator('a[href="/products"]');
  }

  // Navigate to the Home page
  async goto() {
    await this.page.goto(baseUrl);
    
  }

  // Navigate to the products page
  async goToProductsPage() {
    await this.productsLink.click();
  }
  get loginSignUpButton() {
    return this.page.locator('a[href="/login"]');
  }
  get logOutButton() {
    return this.page.locator('a[ href="/logout"]');
  } 

}