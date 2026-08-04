
import { test } from "playwright-bdd";

test.describe('Add To Cart', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('I am logged in', null, { page }); 
  });
  
  test('Adding items to cart and reviewing cart', async ({ Given, When, Then, page }) => { 
    await Given('I add backpack item in inventory page', null, { page }); 
    await When('I click on Cart icon', null, { page }); 
    await Then('I see added items in the cart', null, { page }); 
  });

});



test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\cart.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ 
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am logged in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I add backpack item in inventory page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click on Cart icon","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I see added items in the cart","stepMatchArguments":[]}]},
];