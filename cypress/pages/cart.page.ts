class CartPage {
  elements = {
    textItemNameList: () => cy.get('[class="inventory_item_name"]'),
    btnCOUT: () => cy.get("#checkout"),
    errorMsg: () => cy.get("#error-checkout"),
    btnRemove: () => cy.get('[class="btn btn_secondary btn_small cart_button"]'),
  };
}

export const cartPage = new CartPage();
