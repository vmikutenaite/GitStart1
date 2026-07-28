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

        addAllItems = async(selector) => {
        const addToCartNumber = this.page.locator(selector).count();
        const backPackAddButton = this.page.locator(selector).first();
        for (let i=1; i<=addToCartNumber; i++){
            await backPackAddButton.click();
        }
    }
}
