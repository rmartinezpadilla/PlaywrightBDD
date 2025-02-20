// Generated from: tests/features/ecomlogin.feature
import { test } from "../../../tests/fixtures/fixture.js";

test.describe('Verify login', () => {

  test('Verify user is able to login with valid credentials', { tag: ['@login'] }, async ({ Given, ecomLoginPage, And, When, Then, page }) => { 
    await Given('I navigate to "https://ecommerce-playground.lambdatest.io/"', null, { ecomLoginPage }); 
    await And('I click on My account', null, { ecomLoginPage }); 
    await And('I enter E-Mail Address "pranav@testroverautomation.com"', null, { ecomLoginPage }); 
    await And('I enter password "Test1234"', null, { ecomLoginPage }); 
    await When('I click on submit button', null, { ecomLoginPage }); 
    await Then('I should verify url contains "route=account/account"', null, { page }); 
  });

  test.describe('Verify user is not able login with following credentails', () => {

    test('Example #1', { tag: ['@login'] }, async ({ Given, ecomLoginPage, And, When, Then, page }) => { 
      await Given('I navigate to "https://ecommerce-playground.lambdatest.io/"', null, { ecomLoginPage }); 
      await And('I click on My account', null, { ecomLoginPage }); 
      await And('I enter E-Mail Address "xzy@gmail.com"', null, { ecomLoginPage }); 
      await And('I enter password "TesMeTest"', null, { ecomLoginPage }); 
      await When('I click on submit button', null, { ecomLoginPage }); 
      await Then('I should verify user is not able to login and url contains "route=account/login"', null, { page }); 
    });

    test('Example #2', { tag: ['@login'] }, async ({ Given, ecomLoginPage, And, When, Then, page }) => { 
      await Given('I navigate to "https://ecommerce-playground.lambdatest.io/"', null, { ecomLoginPage }); 
      await And('I click on My account', null, { ecomLoginPage }); 
      await And('I enter E-Mail Address "srk@testroverautomation.com"', null, { ecomLoginPage }); 
      await And('I enter password "Jawan123"', null, { ecomLoginPage }); 
      await When('I click on submit button', null, { ecomLoginPage }); 
      await Then('I should verify user is not able to login and url contains "route=account/login"', null, { page }); 
    });

    test('Example #3', { tag: ['@login'] }, async ({ Given, ecomLoginPage, And, When, Then, page }) => { 
      await Given('I navigate to "https://ecommerce-playground.lambdatest.io/"', null, { ecomLoginPage }); 
      await And('I click on My account', null, { ecomLoginPage }); 
      await And('I enter E-Mail Address "testerrgreat@123.com"', null, { ecomLoginPage }); 
      await And('I enter password "Tesrxzy123"', null, { ecomLoginPage }); 
      await When('I click on submit button', null, { ecomLoginPage }); 
      await Then('I should verify user is not able to login and url contains "route=account/login"', null, { page }); 
    });

    test('Example #4', { tag: ['@login'] }, async ({ Given, ecomLoginPage, And, When, Then, page }) => { 
      await Given('I navigate to "https://ecommerce-playground.lambdatest.io/"', null, { ecomLoginPage }); 
      await And('I click on My account', null, { ecomLoginPage }); 
      await And('I enter E-Mail Address "srk_jawan@test.com"', null, { ecomLoginPage }); 
      await And('I enter password "great123"', null, { ecomLoginPage }); 
      await When('I click on submit button', null, { ecomLoginPage }); 
      await Then('I should verify user is not able to login and url contains "route=account/login"', null, { page }); 
    });

    test('Example #5', { tag: ['@login'] }, async ({ Given, ecomLoginPage, And, When, Then, page }) => { 
      await Given('I navigate to "https://ecommerce-playground.lambdatest.io/"', null, { ecomLoginPage }); 
      await And('I click on My account', null, { ecomLoginPage }); 
      await And('I enter E-Mail Address "SalmanDabang@gmail.com"', null, { ecomLoginPage }); 
      await And('I enter password "test 123"', null, { ecomLoginPage }); 
      await When('I click on submit button', null, { ecomLoginPage }); 
      await Then('I should verify user is not able to login and url contains "route=account/login"', null, { page }); 
    });

  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks, browser }) => $runBeforeAllHooks(test, { browser }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});
test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests/features/ecomlogin.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":8,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"And I click on My account","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"And I enter E-Mail Address \"pranav@testroverautomation.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"pranav@testroverautomation.com\"","children":[{"start":24,"value":"pranav@testroverautomation.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"And I enter password \"Test1234\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Test1234\"","children":[{"start":18,"value":"Test1234","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I click on submit button","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then I should verify url contains \"route=account/account\"","stepMatchArguments":[{"group":{"start":29,"value":"\"route=account/account\"","children":[{"start":30,"value":"route=account/account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":17,"pickleLine":26,"tags":["@login"],"steps":[{"pwStepLine":18,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"And I click on My account","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"And I enter E-Mail Address \"xzy@gmail.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"xzy@gmail.com\"","children":[{"start":24,"value":"xzy@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"And I enter password \"TesMeTest\"","stepMatchArguments":[{"group":{"start":17,"value":"\"TesMeTest\"","children":[{"start":18,"value":"TesMeTest","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When I click on submit button","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then I should verify user is not able to login and url contains \"route=account/login\"","stepMatchArguments":[{"group":{"start":59,"value":"\"route=account/login\"","children":[{"start":60,"value":"route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":27,"tags":["@login"],"steps":[{"pwStepLine":27,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"And I click on My account","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"And I enter E-Mail Address \"srk@testroverautomation.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"srk@testroverautomation.com\"","children":[{"start":24,"value":"srk@testroverautomation.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"And I enter password \"Jawan123\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Jawan123\"","children":[{"start":18,"value":"Jawan123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When I click on submit button","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then I should verify user is not able to login and url contains \"route=account/login\"","stepMatchArguments":[{"group":{"start":59,"value":"\"route=account/login\"","children":[{"start":60,"value":"route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":35,"pickleLine":28,"tags":["@login"],"steps":[{"pwStepLine":36,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":37,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"And I click on My account","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"And I enter E-Mail Address \"testerrgreat@123.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"testerrgreat@123.com\"","children":[{"start":24,"value":"testerrgreat@123.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":39,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"And I enter password \"Tesrxzy123\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Tesrxzy123\"","children":[{"start":18,"value":"Tesrxzy123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":40,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When I click on submit button","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then I should verify user is not able to login and url contains \"route=account/login\"","stepMatchArguments":[{"group":{"start":59,"value":"\"route=account/login\"","children":[{"start":60,"value":"route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":44,"pickleLine":29,"tags":["@login"],"steps":[{"pwStepLine":45,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":46,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"And I click on My account","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"And I enter E-Mail Address \"srk_jawan@test.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"srk_jawan@test.com\"","children":[{"start":24,"value":"srk_jawan@test.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":48,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"And I enter password \"great123\"","stepMatchArguments":[{"group":{"start":17,"value":"\"great123\"","children":[{"start":18,"value":"great123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":49,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When I click on submit button","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then I should verify user is not able to login and url contains \"route=account/login\"","stepMatchArguments":[{"group":{"start":59,"value":"\"route=account/login\"","children":[{"start":60,"value":"route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":53,"pickleLine":30,"tags":["@login"],"steps":[{"pwStepLine":54,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":55,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"And I click on My account","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"And I enter E-Mail Address \"SalmanDabang@gmail.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"SalmanDabang@gmail.com\"","children":[{"start":24,"value":"SalmanDabang@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":57,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"And I enter password \"test 123\"","stepMatchArguments":[{"group":{"start":17,"value":"\"test 123\"","children":[{"start":18,"value":"test 123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":58,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When I click on submit button","stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then I should verify user is not able to login and url contains \"route=account/login\"","stepMatchArguments":[{"group":{"start":59,"value":"\"route=account/login\"","children":[{"start":60,"value":"route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end