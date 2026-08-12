// import { createBdd } from 'playwright-bdd';
// import { request, expect } from '@playwright/test';


// const { Given, When, Then } = createBdd();

// const randomNumber = Math.floor(Math.random() * 10000).toString();
// const randomEmail = (Math.floor(Math.random() * 10000).toString()) + '@gmail.com';

// Given('Run api call get productList', async function () {
//   const apiContext = await request.newContext();

//   const response = await apiContext.get(
//     'https://automationexercise.com/api/productsList'
//   );
//   expect(response.ok()).toBeTruthy();
//   const body = await response.json();
//   console.log(body);
//   await apiContext.dispose();
// });


// Given('I am creating new account', async function () {
//   const apiContext = await request.newContext();

//  const response = await apiContext.post(
//     'https://automationexercise.com/api/createAccount',
//     {
//       form: {
//         name: 'John Doe' + randomNumber,
//         email: randomEmail,
//         password: randomNumber,
//         title: 'Mr',
//         birth_date: '15',
//         birth_month: '05',
//         birth_year: '1990',
//         firstname: 'John',
//         lastname: 'Doe',
//         company: 'QA Corp',
//         address1: '123 Main Street',
//         address2: 'Apt 4B',
//         country: 'United States',
//         zipcode: '10001',
//         state: 'New York',
//         city: 'New York',
//         mobile_number: '1234567890'
//       }
//     }
//   ); 

//   expect(response.ok()).toBeTruthy();
//   const body = await response.json();
//   console.log('Response Body:', body);
//   expect(body.responseCode).toBe(201);
//   expect(body.message).toBe('User created!');
 
//   await apiContext.dispose();
// });

// Given('I am on the login page', async ({ page }) => {
// await page.goto('https://automationexercise.com/login');

// try{
// await page.locator('button.fc-cta-consent').waitFor({ state: 'visible', timeout: 5000 });
// await page.locator('button.fc-cta-consent').click();
// }
//  catch (error){
//     console.log('Consent button not found:', error);
//  };

// });

// When('I enter email and password', async ({ page }) => {
// await page.locator('[data-qa="login-email"]').fill(randomEmail);
// await page.locator('[data-qa="login-password"]').fill(randomNumber);
// });

// Then('I can login', async ({ page }) => {
// await page.locator('[data-qa="login-button"]').click();
// });