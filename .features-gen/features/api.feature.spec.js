// Generated from: features\api.feature
import { test } from "playwright-bdd";

test.describe('Api', () => {

  test('Create account', async ({ Given }) => { 
    await Given('I am creating new account'); 
  });

  test('Login account', async ({ Given, When, Then, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('I enter email and password', null, { page }); 
    await Then('I can login', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\api.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am creating new account","stepMatchArguments":[]}]},
  {"pwTestLine":10,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When I enter email and password","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I can login","stepMatchArguments":[]}]},
]; // bdd-data-end