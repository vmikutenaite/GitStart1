export class CheckoutPage {
    constructor(page){
        this.page = page;

        this.checkoutButton = page.locator('#checkout');

        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.zipCode = page.locator('#postal-code');
        this.ContinueButton = page.locator('#continue');

        this.finishButton = page.locator('#finish');
    }

    checkoutStepOne = async() => {
        await this.checkoutButton.click();
        await this.page.waitForURL('https://www.saucedemo.com/checkout-step-one.html');
    }

    checkoutStepTwo = async(firstname, lastname, zipcode) => {
        await this.firstName.fill(firstname);
        await this.lastName.fill(lastname);
        await this.zipCode.fill(zipcode);
        await this.ContinueButton.click();
        await this.page.waitForURL('https://www.saucedemo.com/checkout-step-two.html');
    }

    checkoutComplete = async() => {
        await this.finishButton.click();
        await this.page.waitForURL('https://www.saucedemo.com/checkout-complete.html');

    }
}