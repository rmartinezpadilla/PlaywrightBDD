import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

    Given('I navigate to {string}', async ({ page }, url) => {
    // Step: Given I navigate to "https://ecommerce-playground.lambdatest.io/"
    // From: tests/features/ecomlogin.feature:9:9
        await page.goto(url)
    });

    Given('I click on My account', async ({ page }) => {
    // Step: And I click on My account
    // From: tests/features/ecomlogin.feature:10:9
        await page.locator("//a[@role='button']//span[@class='title'][normalize-space()='My account']").click();
    });

    Given('I enter E-Mail Address {string}', async ({ page }, email) => {
    // Step: And I enter E-Mail Address "pranav@testroverautomation.com"
    // From: tests/features/ecomlogin.feature:11:9
        await page.getByPlaceholder('E-Mail Address').fill(email);
        
    });

    Given('I enter password {string}', async ({ page }, password) => {
    // Step: And I enter password "Test1234"
    // From: tests/features/ecomlogin.feature:12:9
    await page.getByPlaceholder('Password').fill(password);
    });

    When('I click on submit button', async ({ page }) => {
    // Step: When I click on submit button
    // From: tests/features/ecomlogin.feature:13:9
        await page.locator("//input[@value='Login']").click();
    });

    Then('I should verify url contains {string}', async ({ page }, path) => {
    // Step: Then I should verify url contains "route=account/account"
    // From: tests/features/ecomlogin.feature:14:9
        await expect(page).toHaveURL(new RegExp(path));   
    });
    
    Then('I should verify user is not able to login and url contains {string}', async ({ page }, login_url) => {
        await expect(page).toHaveURL(new RegExp(login_url));
    });