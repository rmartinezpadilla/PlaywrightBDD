// Generated from: tests/features/ecomlogin.feature
import { test } from "playwright-bdd";

test.describe('Verify login', () => {

  test('Verify user is able to login with valid credentials', { tag: ['@login'] }, async ({ Given, page, And, When, Then }) => { 
    await Given('I navigate to "https://ecommerce-playground.lambdatest.io/"', null, { page }); 
    await And('I click on My account', null, { page }); 
    await And('I enter E-Mail Address "pranav@testroverautomation.com"', null, { page }); 
    await And('I enter password "Test1234"', null, { page }); 
    await When('I click on submit button', null, { page }); 
    await Then('I should verify url contains "route=account/account"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests/features/ecomlogin.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":8,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"And I click on My account","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"And I enter E-Mail Address \"pranav@testroverautomation.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"pranav@testroverautomation.com\"","children":[{"start":24,"value":"pranav@testroverautomation.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"And I enter password \"Test1234\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Test1234\"","children":[{"start":18,"value":"Test1234","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I click on submit button","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then I should verify url contains \"route=account/account\"","stepMatchArguments":[{"group":{"start":29,"value":"\"route=account/account\"","children":[{"start":30,"value":"route=account/account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end