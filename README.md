# Playwright TypeScript Project

This project uses Playwright with TypeScript for end-to-end testing. It includes the following key functions:
- **Search**: Tests the search functionality of the application.
- **Login**: Tests the login functionality.
- **Register**: Tests the user registration process.
- **View Product**: Tests the functionality of viewing a product's details.

## Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/MustafaTarek0/Mustafa-s-assesment.git
   ```
2. **Install dependancies**

 ```bash
   npm install
 ```
 ```bash
   bun i 
   ```
 ```bash
   npx playwright install
   ```
3. **Run test**
 ```bash
   npx playwright test
   ```

4. **Folder Structure**
tests/: Contains all the test files.
utils/: Includes utility functions and helper methods.
playwright.config.ts: Playwright configuration file.
package.json: Project dependencies and scripts.


5. **Test Functions**
Search Function (search.test.ts): Verifies the search functionality of the application.
Login Function (login.test.ts): Verifies user login functionality.
Register Function (register.test.ts): Verifies user registration process.
View Product Function (view-product.test.ts): Verifies the functionality for viewing product details.


6. **Using Docker**

 ```bash
  docker build -t Mustafa'sassesment
   ```

 ```bash
  docker run -t Mustafa'sassesment
   ```



7. **License**
Feel free to adjust the repository URL, file names, and any other specifics according to your project's needs.

   
