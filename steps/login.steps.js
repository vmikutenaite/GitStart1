const { createBdd } = require('playwright-bdd');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../page_objects/LoginPage');

const { Given, When, Then } = createBdd();

Given('I am on the login page', async ({ page }) => {
await page.goto('https://www.saucedemo.com/');
});

When('I enter username {string} and password {string}', async ({ page }, username, password) => {
const loginPage = new LoginPage(page);
await loginPage.userName.fill(username);
await loginPage.password.fill(password);
});

Then('I click the submit button', async ({ page }) => {
const loginPage = new LoginPage(page);
await loginPage.loginButton.click();
});