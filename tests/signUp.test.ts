import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import { HomePage } from '../pages/homePage';
import { SignUpPage } from '../pages/signUpPage';
import { LoginPage } from '../pages/loginPage';  // Make sure this import path is correct

// Interface for test data
interface TestData { name: string; email: string; password: string; address: string; firstName: string; lastName: string; state: string; city: string; zipCode: string; mobileNumber: string; }


// Load test data from JSON
const testData: TestData[] = JSON.parse(fs.readFileSync('./data/testData.json', 'utf-8'));

// Log test data to verify
console.log(testData);

test.describe('signUp', () => {
    testData.forEach(({ name, email, password, address, firstName, lastName, state, city, zipCode, mobileNumber }, index) => {
        test(`Register ${name} with email ${email} (${index + 1})`, async ({ page }) => {  // Unique title per test
            const homePage = new HomePage(page);
            const loginPage = new LoginPage(page);
            const signUpPage = new SignUpPage(page);

            // Navigate to the homepage
            await homePage.goto();

            // Go to login page
            await homePage.loginSignUpButton.click();

            // Generate a random number for unique identification
            function generateRandomNumber(): number {
                return Math.floor(Math.random() * 999);  // Random number between 0 and 7
            }
            const randomNumber = generateRandomNumber();

            // Fill the email and name fields using the data from JSON with the random number
            await loginPage.signUpEmailField.fill(`${randomNumber}${email}`);
            await loginPage.signUpNameField.fill(`${randomNumber}${name}`);
            await loginPage.signUpButton.click();

            // Fill the signup form with other details
            await signUpPage.genderRadioButton.click();
            await signUpPage.passwordField.fill(password);
            await signUpPage.firstNameField.fill(`${randomNumber}${firstName}`);
            await signUpPage.lastNameField.fill(`${randomNumber}${lastName}`);
            await signUpPage.addressField.fill(address);
            // Select a random option from the country dropdown
            await signUpPage.countryField.selectOption({ index: 4 });
            await signUpPage.cityField.fill(city);
            await signUpPage.mobileNumberField.fill(mobileNumber);
            await signUpPage.zipcodeField.fill(zipCode);
            await signUpPage.stateField.fill(state);
            await page.waitForTimeout(2000); // Pauses for 5 seconds
            await signUpPage.CreateAccountButton.click();
            const successMessage = await signUpPage.successMsg.textContent();
            await expect(successMessage).toContain('Account Created!')
            // Assert that the color is green
           // const color = await successMessage.evaluate((element) => getComputedStyle(element).color);
          //  await expect(color).toBe('rgb(0, 128, 0)');  // 'green' is 'rgb(0, 128, 0)' in CSS            // Continue filling the form...
        });
    });
});

