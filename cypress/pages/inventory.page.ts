class InventoryPage {
  elements = {
    btnMenu: () => cy.get("#react-burger-menu-btn"),
    btnLogout: () => cy.get("#logout_sidebar_link"),
    btnCart: () => cy.get('[class="shopping_cart_link"]'),
    btnAddToCartBackPack: () => cy.get("#add-to-cart-sauce-labs-backpack"),
    btnTwitter: () => cy.get('[class="social_twitter"]'),
    btnFB: () => cy.get('[class="social_facebook"]'),
    btnLI: () => cy.get('[class="social_linkedin"]'),
  };

  logOut() {
    this.elements.btnMenu().click();
    this.elements.btnLogout().click();
  }
}

export const inventoryPage = new InventoryPage();