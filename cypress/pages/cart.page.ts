class CartPage {
  elements = {
    textItemNameList: () => cy.get('[class="inventory_item_name"]'),
    btnCOUT: () => cy.get('#checkout'),
    errorMsg: () => cy.get('#error-checkout')
  };
}

export const cartPage = new CartPage();