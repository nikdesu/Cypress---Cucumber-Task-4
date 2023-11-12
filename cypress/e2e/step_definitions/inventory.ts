import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/login.page";
import { inventoryPage } from "@pages/inventory.page";
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

When("Goes back to inventory page", () => {
  inventoryPage.elements.btnAllItems().click();
});

When("Clicks on logout button", () => {
  inventoryPage.elements.btnLogout().click();
});

When("User adds any product to cart", () => {
  inventoryPage.elements.btnAddToCartBackPack().click();
});

When("Goes to cart", () => {
  inventoryPage.elements.btnCart().click();
});

When("User clicks on the dropdown sorting menu and picks any of the sorting {string}", (methods) => {
  if (methods == "Low-High") {
    inventoryPage.elements.btnSort().select(0);
  } else if (methods == "High-Low") {
    inventoryPage.elements.btnSort().select(1);
  } else if (methods == "A-Z") {
    inventoryPage.elements.btnSort().select(2);
  } else if (methods == "Z-A") {
    inventoryPage.elements.btnSort().select(3);
  }
});

Then("Items should be sorted due to picked {string}", (methods) => {
  if (methods == "Low-High") {
    inventoryPage.elements.items().eq(0).should("contain", inventory_items.backpack);
  } else if (methods == "High-Low") {
    inventoryPage.elements.items().eq(0).should("contain", inventory_items.redShirt);
  } else if (methods == "A-Z") {
    inventoryPage.elements.items().eq(0).should("contain", inventory_items.onesie);
  } else if (methods == "Z-A") {
    inventoryPage.elements.items().eq(0).should("contain", inventory_items.jacket);
  }
});

When("User clicks on {string} button", (socials) => {
  if (socials == "Twitter") {
    inventoryPage.elements.btnTwitter().invoke("removeAttr", "target").click();
  } else if (socials == "Facebook") {
    inventoryPage.elements.btnFB().invoke("removeAttr", "target").click();
  } else if (socials == "LinkedIn") {
    inventoryPage.elements.btnLI().invoke("removeAttr", "target").click();
  }
});

Then("Gets redirected to {string} page and confirms that user was redirected to correspondent page", (socials) => {
  if (socials == "Twitter") {
    cy.url().should("contain", endpoints.twitter);
  } else if (socials == "Facebook") {
    cy.url().should("contain", endpoints.facebook);
  } else if (socials == "LinkedIn") {
    cy.url().should("contain", endpoints.linkedin);
  }
});
