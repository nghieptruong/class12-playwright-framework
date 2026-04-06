import {test, expect} from '../fixtures/custom-fixtures';

test('Verify Register Function', async ({ homePage, registerPage, page }) => {

    //Step 1: Go to https://demo1.cybersoft.edu.vn/
    await page.goto("https://demo1.cybersoft.edu.vn/");

    //Step 2: Click on 'Đăng Ký' link on the top right
    await homePage.getTopBarNavigation().navigateToRegisterPage();

    //Step 3: Enter account name
    const account = crypto.randomUUID();
    const fullName = 'john';
    const password = 'Test123456@';

    await registerPage.enterAccount(account);    

    //Step 4: Enter password
    await registerPage.enterPassword(password);

    //Step 5: Re-enter password
    await registerPage.enterRePassword(password);

    //Step 6: Enter full name
    await registerPage.enterFullName(fullName)
    
    //Step 7: Enter email
    await registerPage.enterEmail(`${account}@example.com`)

    //Step 8: Click 'Đăng Ký' button
    await registerPage.clickRegister();

    //Step 9: Verify that registration is successful by checking the success message
    //VP1 (Verify Point): Check 'Đăng Ký Thành Công' message display
    const lblRegisterSuccess = page.getByRole('heading', { name: 'Đăng ký thành công' });
    await expect(lblRegisterSuccess).toBeVisible();

    //VP2: Check login successfully by login with the registered account
})
