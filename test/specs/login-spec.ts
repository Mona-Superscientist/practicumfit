import { LoginPage } from '../pages/login';
import * as credentials from '../testData/credentials'

describe('Login Scenarios', () => {
    beforeEach(() => {
        LoginPage.navigate();
    })

    it('Should return redirects to x with valid username and password', () => {
        LoginPage.login(credentials.email, credentials.password);
        cy.url().should('eq', `${Cypress.config().baseUrl}/Home`);
    })
})
