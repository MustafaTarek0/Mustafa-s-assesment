import { Page } from '@playwright/test';

export class SignUpPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }


  get genderRadioButton() {
    return this.page.locator('#id_gender1');
  }
  get passwordField() {
    return this.page.locator('#password');
  }
  get firstNameField() {
    return this.page.locator('#first_name');
  }
  get lastNameField() {
    return this.page.locator('#last_name');
  }
  get addressField() {
    return this.page.locator('#address1');
  }
  get countryField() {
    return this.page.locator('#country');
  }
  get stateField() {
    return this.page.locator('#state')
  }
  get cityField() {
    return this.page.locator('#city')
  }
  get zipcodeField() {
    return this.page.locator('#zipcode')
  }
  get mobileNumberField() {
    return this.page.locator('#mobile_number')
  }
  get CreateAccountButton() {
    return this.page.locator('[data-qa="create-account"]')
  }
  get successMsg() {
    return this.page.locator('[data-qa="account-created"]')
  }
}