// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Data Entry Form', () => {

  test('Data Entry Form', async ({ Given, When, Then, page }) => { 
    await Given('I am on the data form page', null, { page }); 
    await When('I enter all my data', null, { page }); 
    await Then('I click the submit button with data picker', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I am on the data form page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I enter all my data","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then I click the submit button with data picker","stepMatchArguments":[]}]},
]; // bdd-data-end