import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/login.page";
import { cartPage } from "@pages/cart.page";
import { faker } from "@faker-js/faker";
import { checkoutPage } from "@pages/checkOut.page";
import { checkoutPageComp } from "@pages/checkOutComp.page";
import credentials from "../../fixtures/credentials.json";
import endpoints from "../../fixtures/endpoints.json";
import inventory_items from "../../fixtures/inventory_items.json";

When("Checks that item added before is there", () => {
  cartPage.elements.textItemNameList().should("contain", inventory_items.backpack);
});

When("Enters valid credentials", () => {
  loginPage.logIn(credentials.username, credentials.password);
});

When("Clicks on 'Checkout' button", () => {
  cartPage.elements.btnCOUT().click();
});

When("Enters all needed info", () => {
  checkoutPage.inputInfo(faker.person.firstName(), faker.person.lastName(), faker.location.zipCode());
});

When("Clicks on 'Finish' button", () => {
  checkoutPage.elements.btnFinish().click();
});

When("Removes newly added product", () => {
  cartPage.elements.btnRemove().click();
});

When("Confirms that checkout is complete", () => {
  cy.url().should("contain", endpoints.checkout_success);
});

Then("Goes back to inventory page", () => {
  checkoutPageComp.elements.btnHome().click();
});

Then("Confirms that cart is empty", () => {
  cartPage.elements.textItemNameList().should("not.exist");
});

Then("Error 'Cart is empty' appears", () => {
  cartPage.elements.errorMsg().should("contain", "Cart is empty");
});
