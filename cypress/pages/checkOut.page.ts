class CheckoutPage {
  elements = {
    inputFirstName: () => cy.get("#first-name"),
    inputLastName: () => cy.get("#last-name"),
    inputZIP: () => cy.get("#postal-code"),
    btnContinue: () => cy.get("#continue"),
    btnFinish: () => cy.get("#finish"),
  };

  inputInfo(firstname: string, lastname: string, postalCode: string) {
    this.elements.inputFirstName().type(firstname);
    this.elements.inputLastName().type(lastname);
    this.elements.inputZIP().type(postalCode);
    this.elements.btnContinue().click();
  }
}

export const checkoutPage = new CheckoutPage();
