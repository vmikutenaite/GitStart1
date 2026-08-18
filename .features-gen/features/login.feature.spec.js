// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Slider', () => {

  test('Slider', async ({ Given, When, page }) => { 
    await Given('I am on the data form page', null, { page }); 
    await When('I use slider', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given I am on the data form page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When I use slider","stepMatchArguments":[]}]},
]; // bdd-data-end