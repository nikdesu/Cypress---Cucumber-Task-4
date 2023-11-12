class InventoryPage {
  elements = {
    btnMenu: () => cy.get("#react-burger-menu-btn"),
    btnLogout: () => cy.get("#logout_sidebar_link"),
    btnCart: () => cy.get('[class="shopping_cart_link"]'),
    btnAddToCartBackPack: () => cy.get("#add-to-cart-sauce-labs-backpack"),
    btnTwitter: () => cy.get('[class="social_twitter"] a'),
    btnFB: () => cy.get('[class="social_facebook"] a'),
    btnLI: () => cy.get('[class="social_linkedin"] a'),
    btnSort: () => cy.get('[data-test="product_sort_container"'),
    sortAZ: () => cy.get('[value="az"]'),
    sortZA: () => cy.get('[value="za"]'),
    sortLOHI: () => cy.get('[value="lohi"]'),
    sortHILO: () => cy.get('[value="hilo"]'),
    items: () => cy.wrap('[class="inventory_item"]'),
  };

  logOut() {
    this.elements.btnMenu().click();
    this.elements.btnLogout().click();
  }
}

export const inventoryPage = new InventoryPage();
