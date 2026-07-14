export class LogoutPage {
    constructor(page){
        this.page = page;

        this.burgerMenu = page.locator('#react-burger-menu-btn');
        this.logout = page.locator('#logout_sidebar_link');
    }

    userLogout = async () => {
        await this.burgerMenu.hover();
        await this.burgerMenu.click();
        await this.logout.hover();
        await this.logout.click();
    }
}