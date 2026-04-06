import { TimeOutConstants } from "../../constants/TimeOutConstants";
import { BasePage } from "../BasePage";
import { Locator, Page } from "@playwright/test";

export class TopBarNavigation extends BasePage {

    private lnkRegister: Locator;

    constructor(page: Page) {
        super(page);
        this.lnkRegister = page.locator("xpath=//a[@href='/sign-up']");
    }

    async navigateToRegisterPage(timeout: number = TimeOutConstants.DEFAULT_TIMEOUT) {
        await this.click(this.lnkRegister, timeout)
    }
}