import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { TopBarNavigation } from "./components/TopBarNavigation";

export class CommonPage extends BasePage {

    private topBarNavigation: TopBarNavigation;

    constructor(page: Page) {
        super(page);
        this.topBarNavigation = new TopBarNavigation(page);
    }

    getTopBarNavigation(): TopBarNavigation {
        return this.topBarNavigation;
    }
}