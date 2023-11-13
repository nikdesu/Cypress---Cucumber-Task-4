import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/login.page";
import { inventoryPage } from "@pages/inventory.page";
import { faker } from "@faker-js/faker";
import credentials from "../../fixtures/credentials.json";
import endpoints from "../../fixtures/endpoints.json";

Given("Login page is opened", () => {
  loginPage.visitLoginPage();
});

When("User logs in", () => {
  loginPage.logIn(credentials.username, credentials.password);
});

When("User logs in with locked out user creds", () => {
  loginPage.logIn(credentials.locked_user, credentials.password);
});

When("User types in an invalid password", () => {
  loginPage.logIn(credentials.username, faker.internet.password());
});

When("User types in an invalid username", () => {
  loginPage.logIn(faker.internet.password(), credentials.password);
});

Then("Confirm that user is logged in", () => {
  cy.url().should("include", endpoints.inventory);
});

Then("Confirm that error 'Epic sadface: Username and password do not match any user in this service' appeared", () => {
  loginPage.elements
    .errorMsg()
    .should("contain", "Epic sadface: Username and password do not match any user in this service");
});

Then("Confirm that error 'Epic sadface: Sorry, this user has been locked out.' appeared", () => {
  loginPage.elements.errorMsg().should("contain", "Epic sadface: Sorry, this user has been locked out.");
});

When("User opens sidebar menu", () => {
  inventoryPage.elements.btnMenu().click();
});

When("User clicks on logout button", () => {
  inventoryPage.elements.btnLogout().click();
});

Then("Confirm that user has logged out", () => {
  loginPage.elements.userNameInput().should("exist");
  loginPage.elements.passwordInput().should("exist");
});
