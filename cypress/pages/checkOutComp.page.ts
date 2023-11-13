class CheckoutPageComp {
  elements = {
    btnHome: () => cy.get("#back-to-products"),
  };
}

export const checkoutPageComp = new CheckoutPageComp();
