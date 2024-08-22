import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get signUpEmailField() {
    return this.page.locator('[data-qa="signup-email"]');
  }

  get signUpNameField() {
    return this.page.locator('[data-qa="signup-name"]');
  }
  get loginEmailField() {
    return this.page.locator('[data-qa="login-email"]');
  }

  get loginPasswordField() {
    return this.page.locator('[data-qa="login-password"]');
  }

  get signUpButton() {
    return this.page.locator('[data-qa="signup-button"]');
  }

  get loginButton() {
    return this.page.locator('[data-qa="login-button"]');
  }
}