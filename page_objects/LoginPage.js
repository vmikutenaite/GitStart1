export class LoginPage {
    constructor(page){
        this.page = page;

        this.userName = page.locator('#user-name');
        this.password = page.locator('#password');

        this.usernameXpath1 = page.locator('xpath=//*[@id="user-name"]');
        this.passwordXpath1 = page.locator('xpath=//*[@id="password"]');

        this.usernameXpath2 = page.locator('xpath=//*[@placeholder="Username"]');
        this.passwordXpath2 = page.locator('xpath=//*[@placeholder="Password"]');
        
        this.usernameXpath3 = page.locator('xpath=//*[@type="text"]');
        this.passwordXpath3 = page.locator('xpath=//*[@type="password"]');

        this.usernameXpath4 = page.locator('xpath=//*[@data-test="username"]');
        this.passwordXpath4 = page.locator('xpath=//*[@data-test="password"]');

        this.usernameXpath4 = page.locator('xpath=//*[@name="user-name"]');
        this.passwordXpath4 = page.locator('xpath=//*[@name="password"]');

        this.usernameXpath5 = page.locator('xpath=//*[@class="input_error form_input"]').first();
        this.passwordXpath5 = page.locator('xpath=//*[@class="input_error form_input"]').nth(1);

        this.loginButton = page.locator ('#login-button');
    }

    userLoginWithPassword = async (username, password) => {
        await this.page.goto('https://www.saucedemo.com/');
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
        await this.page.waitForURL('https://www.saucedemo.com/inventory.html');
    }
}