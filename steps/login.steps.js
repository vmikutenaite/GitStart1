const { createBdd } = require('playwright-bdd');
const { expect } = require('@playwright/test');
// const { LoginPage } = require('../page_objects/LoginPage');

const { Given, When, Then } = createBdd();

// Given('I am on the login page', async ({ page }) => {
// await page.goto('https://www.saucedemo.com/');
// });

// When('I enter username {string} and password {string}', async ({ page }, username, password) => {
// const loginPage = new LoginPage(page);
// await loginPage.userName.fill(username);
// await loginPage.password.fill(password);
// });

// Then('I click the submit button', async ({ page }) => {
// const loginPage = new LoginPage(page);
// await loginPage.loginButton.click();
// });


Given('I am on the data form page', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
});

When('I enter all my data', async ({ page }) => {
await page.locator('#name').fill('Lucy Liu');
await page.locator('#email').fill('lucy@email.com');
await page.locator('#phone').fill('+37061122555');
await page.locator('#textarea').fill('Kauno 1-8, Vilnius');
await page.locator('#female').click();
await page.locator('#monday').check();
await page.locator('#tuesday').check();
await page.locator('#wednesday').check();
await page.locator('#country').selectOption('germany');
await page.locator('#colors').selectOption('green');
await page.locator('#animals').selectOption('dog');

const today = new Date().toLocaleDateString('en-US')
await page.locator('#datepicker').fill(today);
await page.locator('#datepicker').press('Enter');

const secondDate = new Date();
secondDate.setDate(secondDate.getDate() - 5);
const day = String(secondDate.getDate()).padStart(2, '0');
const month = String(secondDate.getMonth() + 1).padStart(2, '0');
const year = secondDate.getFullYear();
const formattedDate = `${day}/${month}/${year}`;
await page.locator('#txtDate').evaluate((el, data) => el.value = data, formattedDate);
await page.locator('#txtDate').dispatchEvent('change');

function getHTML5Date(dienuPokytis) {
  const thirdDate = new Date();
  thirdDate.setDate(thirdDate.getDate() + dienuPokytis);   
  const diena = String(thirdDate.getDate()).padStart(2, '0');
  const menuo = String(thirdDate.getMonth() + 1).padStart(2, '0');
  const metai = thirdDate.getFullYear(); 
  return `${metai}-${menuo}-${diena}`; 
}
const dataNuo = getHTML5Date(-3);
const dataIki = getHTML5Date(0);
await page.locator('#start-date').fill(dataNuo);
await page.locator('#end-date').fill(dataIki);
});

Then('I click the submit button with data picker', async ({ page }) => {
await page.locator('.submit-btn').click();
});