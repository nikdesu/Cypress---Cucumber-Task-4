class LoginPage {
  elements = {
    userNameInput: () => cy.get("#user-name"),
    passwordInput: () => cy.get("#password"),
    logInButton: () => cy.get("#login-button"),
    errorMsg: () => cy.get('[data-test="error"]'),
  };

  visitLoginPage() {
    cy.visit("https://www.saucedemo.com");
  }

  logIn(username: string, password: string) {
    this.elements.userNameInput().clear().type(username);
    this.elements.passwordInput().clear().type(password);
    this.elements.logInButton().click();
  }
}

export const loginPage = new LoginPage();
