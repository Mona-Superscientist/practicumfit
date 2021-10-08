export class Login {
    url = '/';

    elements = {
        emailInput: () => cy.get('[id = "login-email"]'),
        passwordInput: () => cy.get('[ id = "login-password"]'),
        loginBtn: () => cy.get('[class = "MuiButtonBase-root MuiButton-root MuiButton-text jss40 jss41"]'),
        errorMsg: () => cy.get('[id = "formError"]')
    }

    navigate() {
        cy.visit(this.url);
    }

    setEmail(username: string) {
        this.elements.emailInput().type(username);
    }

    setPassword(password: string) {
        this.elements.passwordInput().type(password);
    }

    clickLoginBtn() {
        this.elements.loginBtn().click();
    }

    login(username: string, password: string) {
        this.setEmail(username);
        this.setPassword(password);
        this.clickLoginBtn();
    }
}

export const LoginPage = new Login();
