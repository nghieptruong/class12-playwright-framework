import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { test as base } from '@playwright/test';

type MyFixtures = {
  homePage: HomePage;
  registerPage: RegisterPage;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    // Set up the fixture.
    const homePage = new HomePage(page);
    
    // Use the fixture value in the test.
    await use(homePage);
  },

  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
});
export { expect } from '@playwright/test';