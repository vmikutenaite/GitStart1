const { createBdd } = require('playwright-bdd');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../page_objects/LoginPage');
const { AddCartPage } = require('../page_objects/AddCartPage');

const { Given, When, Then } = createBdd();

Given('I am logged in', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('https://www.saucedemo.com/');
  await loginPage.userName.fill('standard_user');
  await loginPage.password.fill('secret_sauce!');
  await loginPage.loginButton.click();
});

Given('I add backpack item in inventory page', async ({ page }) => {
const addCartPage = new AddCartPage(page);
await addCartPage.addItem.click();
});

When('I click on Cart icon', async ({ page }) => {
const addCartPage = new AddCartPage(page);
await addCartPage.cart.click();
});

Then('I see added items in the cart', async ({ page }) => {
const addCartPage = new AddCartPage(page);
await expect(page.locator('.inventory_item_name', { hasText: 'Sauce Labs Backpack' })).toBeVisible();
});
