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

When("User types in an invalid password", () => {
  loginPage.logIn(credentials.username, faker.internet.password());
});

When("User types in an invalid username", () => {
  loginPage.logIn(faker.internet.password(), credentials.password);
});

Then("Confirm that user is logged in", () => {
  cy.url().should("include", endpoints.inventory);
});

Then("Confirm that error appeared", () => {
  loginPage.elements.errorMsg().should("exist");
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
