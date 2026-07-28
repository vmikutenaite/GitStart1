import { test, expect } from '@playwright/test';
import { LoginPage } from '../page_objects/LoginPage';
import { AddCartPage } from '../page_objects/AddCartPage';
import { CheckoutPage } from '../page_objects/CheckoutPage';
import { LogoutPage } from '../page_objects/LogoutPage';

test('pirmas testas', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const addCartPage = new AddCartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const logoutPage = new LogoutPage(page);


loginPage.userLoginWithPassword('standard_user', 'secret_sauce');
addCartPage.addToCart();
checkoutPage.checkoutStepOne();
checkoutPage.checkoutStepTwo('Viktorija','Mik','08741');
checkoutPage.checkoutComplete();

// const burga = page.locator('#logout_sidebar_link');
// burga.isVisible();

logoutPage.userLogout();

    // await  userName.fill('standard_user');
    // await  password.fill('secret_sauce');
    // await  loginButton.click();

    // await page.waitForURL('https://www.saucedemo.com/inventory.html');


    // const addItem = page.locator('#add-to-cart-sauce-labs-backpack');
    // const cart = page.locator('.shopping_cart_link');
    // const checkoutButton = page.locator('#checkout');

    // await addItem.click();
    // await cart.click();

    // await page.waitForURL('https://www.saucedemo.com/cart.html');

    // await checkoutButton.click();
    // await page.waitForURL('https://www.saucedemo.com/checkout-step-one.html');

    // const firstName = page.locator('#first-name');
    // const lastName = page.locator('#last-name');
    // const zipCode = page.locator('#postal-code');
    // const ContinueButton = page.locator('#continue');

    // await firstName.fill('Viktorija');
    // await lastName.fill('Mik');
    // await zipCode.fill('08741');
    // await ContinueButton.click();
    // await page.waitForURL('https://www.saucedemo.com/checkout-step-two.html');

    // const finishButton = page.locator('#finish');

    // await finishButton.click();
    // await page.waitForURL('https://www.saucedemo.com/checkout-complete.html');

    // const burgerMenu = page.locator('#react-burger-menu-btn');
    // const logout = page.locator('#logout_sidebar_link');

    // await burgerMenu.click();
    // await logout.click();
    
     await page.pause();
}
);

test('teksto tikrinimas', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.userLoginWithPassword('standard_user', 'secret_sauce');
    
    const backpack = page.locator('[data-test="inventory-item-name"]').first();
    await expect(backpack).toHaveText('Sauce Labs Backpack');

    // const addToCartNumber = page.locator('.btn.btn_primary.btn_small.btn_inventory').count();
    // console.log('Gautas skaičius' + addToCartNumber);
    // const backPackAddButton = page.locator('.btn.btn_primary.btn_small.btn_inventory').first();

    // for (let i=1; i<=addToCartNumber; i++){
    // await backPackAddButton.click();
    // }

    const addCartPage = new AddCartPage(page);
    await addCartPage.addAllItems('.btn.btn_primary.btn_small.btn_inventory');
}
);
