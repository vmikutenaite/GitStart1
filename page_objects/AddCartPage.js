export class AddCartPage {
    constructor(page){
        this.page = page;

        this.addItem = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cart = page.locator('.shopping_cart_link');
    }

    addToCart = async() => {
    await this.addItem.click();
    await this.cart.click();

    await this.page.waitForURL('https://www.saucedemo.com/cart.html');
    }
}
