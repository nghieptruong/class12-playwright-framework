import { Locator } from "@playwright/test";
import { CommonPage } from "./CommonPage";
import { Page } from "@playwright/test";

export class RegisterPage extends CommonPage {

    private txtAccount: Locator;
    private txtPassword: Locator;
    private txtRePassword: Locator;
    private txtFullName: Locator;
    private txtEmail: Locator;
    private btnRegister: Locator;

    constructor(page: Page) {
        super(page);
        this.txtAccount = page.locator("#taiKhoan");
        this.txtPassword = page.getByRole('textbox', { name: 'Mật Khẩu', exact: true });
        this.txtRePassword = page.getByRole('textbox', { name: 'Nhập lại mật khẩu' });
        this.txtFullName = page.getByRole('textbox', { name: 'Họ Tên' });
        this.txtEmail = page.getByRole('textbox', { name: 'Email' });
        this.btnRegister = page.getByRole('button', { name: 'Đăng ký' });
    }

    async enterAccount(account: string) {
        await this.inputText(this.txtAccount, account);
    }

    async enterPassword(password: string) {
        await this.inputText(this.txtPassword, password);
    }

    async enterRePassword(password: string) {
        await this.inputText(this.txtRePassword, password);
    }

    async enterFullName(fullName: string) {
        await this.inputText(this.txtFullName, fullName);
    }

    async enterEmail(email: string) {
        await this.inputText(this.txtEmail, email);
    }

    async clickRegister() {
        await this.click(this.btnRegister);
    }

    async register(account: string, password: string, fullName: string, email: string) {
        await this.enterAccount(account);
        await this.enterPassword(password);
        await this.enterRePassword(password);
        await this.enterFullName(fullName);
        await this.enterEmail(email);
        await this.clickRegister();
    }
}