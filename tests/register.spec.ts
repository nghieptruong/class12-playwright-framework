import test from "@playwright/test";

test('Verify Register Function', async ({ page }) => {
    //Step 1: Go to https://demo1.cybersoft.edu.vn/
    await page.goto("https://demo1.cybersoft.edu.vn/");

    //Step 2: Click on 'Đăng Ký' link on the top right
    await page.getByRole('link', { name: 'Đăng Ký' }).click();

    //Step 3: Enter account name
    await page.getByRole('textbox', { name: 'Tài Khoản' }).click();
    await page.getByRole('textbox', { name: 'Tài Khoản' }).fill('johntesting121');

    //Step 4: Enter password
    await page.getByRole('textbox', { name: 'Mật Khẩu', exact: true }).click();
    await page.getByRole('textbox', { name: 'Mật Khẩu', exact: true }).fill('Test123456@');

    //Step 5: Re-enter password
    await page.getByRole('textbox', { name: 'Nhập lại mật khẩu' }).click();
    await page.getByRole('textbox', { name: 'Nhập lại mật khẩu' }).fill('Test123456@');

    //Step 6: Enter full name
    await page.getByRole('textbox', { name: 'Họ Tên' }).click();
    await page.getByRole('textbox', { name: 'Họ Tên' }).fill('john');
    
    //Step 7: Enter email
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('johntesting121@example.com');

    //Step 8: Click 'Đăng Ký' button
    await page.getByRole('button', { name: 'Đăng ký' }).click();

    //Step 9: Verify that registration is successful by checking the success message
    //VP1 (Verify Point): Check 'Đăng Ký Thành Công' message display

    //VP2: Check login successfully by login with the registered account
})
