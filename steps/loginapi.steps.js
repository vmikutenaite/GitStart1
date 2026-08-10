// const { createBdd } = require('playwright-bdd');
// const { expect } = require('@playwright/test');


// const { Given, When, Then } = createBdd();


// Given('I am on the login page', async ({ page }) => {
// await page.goto('https://automationexercise.com');

// try{
// await page.locator('button.fc-cta-consent').waitFor({ state: 'visible', timeout: 5000 });
// await page.locator('button.fc-cta-consent').click();
// }
//  catch (error){
//     console.log('Consent button not found:', error);
//  };

// await page.locator('a[href="/login"]').click();
// });

// When('I enter email and password', async ({ page }) => {
// await page.locator('[data-qa="login-email"]').fill('test@test.com');
// await page.locator('[data-qa="login-password"]').fill('password');
// });

// Then('I click the login button', async ({ page }) => {
// await page.locator('[data-qa="login-button"]').click();
// await page.locator("//h2[contains(text(),'Login to your account')]/following::p[contains(text(),'Your email or password is incorrect!')]");
// });