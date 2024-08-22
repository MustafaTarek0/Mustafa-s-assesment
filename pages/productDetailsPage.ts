import { Page } from '@playwright/test';

export class ProductDetailsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Getter for the "Products" link element
  get productsLink() {
    return this.page.locator('a[href="/products"]');
  }

 // Getter for the "Products" link element
 get productInfo() {
    return this.page.locator('product-information');
  }

  // Navigate to the products page
  async goToProductsPage() {
    await this.productsLink.click();
  }
}
