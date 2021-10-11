import * as faker from 'faker';
import { LoginPage } from '../pages/login';
import { credentials, errorMessages} from '../testData'

describe('Login Scenarios', () => {
    beforeEach(() => {
        LoginPage.navigate();
    })

    afterEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    })

    it('Should redirects the to home with valid username and password', () => {
        LoginPage.login(credentials.email, credentials.password);
        cy.url().should('eq', `${Cypress.config().baseUrl}/Home`);
    })

    it('Should display an error message with existing email & invalid password', () => {
        LoginPage.login(credentials.email, faker.random.alphaNumeric());
        LoginPage.elements.errorMsg().should('have.text', errorMessages.invalidCredentials);
    })

    it('Should display return error response with non-existing email address', () => {
        LoginPage.login(faker.internet.email(), faker.random.alphaNumeric());
        LoginPage.elements.errorMsg().should('have.text', errorMessages.nonExistingUser);
    })

    it('Should display an error message when clicking on login while email and password fields are empty', () => {
        LoginPage.clickLoginBtn();
        LoginPage.elements.errorMsg().should('have.text', errorMessages.missingRequiredField);
    })

    it('Should display an error message when clicking on login with missing email', () => {
        LoginPage.setEmail(faker.internet.email());
        LoginPage.clickLoginBtn();
        LoginPage.elements.errorMsg().should('have.text', errorMessages.missingRequiredField);
    })

    it('Should display an error message when clicking on login with missing password', () => {
        LoginPage.setPassword(faker.internet.password());
        LoginPage.clickLoginBtn();
        LoginPage.elements.errorMsg().should('have.text', errorMessages.missingRequiredField);
    })
})
