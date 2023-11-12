import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/login.page";
import { inventoryPage } from "@pages/inventory.page";
import { cartPage } from "@pages/cart.page";
import { faker } from "@faker-js/faker";
import { checkoutPage } from "@pages/checkOut.page";
import { checkoutPageComp } from "@pages/checkOutComp.page";
import credentials from "../../fixtures/credentials.json";
import endpoints from "../../fixtures/endpoints.json";
import inventory_items from "../../fixtures/inventory_items.json";

Given("User is logged in and inventory page is opened", () => {
  loginPage.visitLoginPage();
  loginPage.logIn(credentials.username, credentials.password);
  cy.url().should("contain", endpoints.inventory);
});

When("Opens sidebar menu", () => {
  inventoryPage.elements.btnMenu().click();
});

When("Clicks on logout button", () => {
  inventoryPage.elements.btnLogout().click();
});

When("User clicks on {string} button", (Socials) => {
  if (Socials == "Twitter") {
    inventoryPage.elements.btnTwitter().click();
  } else if (Socials == "Facebook") {
    inventoryPage.elements.btnFB().click();
  } else if (Socials == "LinkedIn") {
    inventoryPage.elements.btnLI().click();
  }
});

When("User adds any product to cart", () => {
  inventoryPage.elements.btnAddToCartBackPack().click();
});

When("Goes to cart", () => {
  inventoryPage.elements.btnCart().click();
});
