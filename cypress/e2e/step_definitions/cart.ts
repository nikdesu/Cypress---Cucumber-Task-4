import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/login.page";
import { inventoryPage } from "@pages/inventory.page";
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

When("Checks that item added before is there and clicks on 'Checkout' button", () => {
  cartPage.elements.textItemNameList().should("contain", inventory_items.backpack);
  cartPage.elements.btnCOUT().click();
});

When("Enters all needed info and clicks on 'Finish' button", () => {
  checkoutPage.inputInfo(faker.person.firstName(), faker.person.lastName(), faker.location.zipCode());
  checkoutPage.elements.btnFinish().click();
});

When("Removes newly added product", () => {
  cartPage.elements.btnRemove().click();
});

When("Clicks on 'Checkout' button", () => {
  cartPage.elements.btnCOUT().click();
});

Then("Confirms that checkout is complete and goes back to inventory page", () => {
  cy.url().should("contain", endpoints.checkout_success);
  checkoutPageComp.elements.btnHome().click();
});

Then("Goes to cart again and checks if item is still there", () => {
  inventoryPage.elements.btnCart().click();
  cartPage.elements.textItemNameList().should("contain", inventory_items.backpack);
});

Then("Confirms that cart is empty", () => {
  cartPage.elements.textItemNameList().should("not.exist");
});

Then("Error 'Cart is empty' appears", () => {
  cartPage.elements.errorMsg().should("contain", "Cart is empty");
});
