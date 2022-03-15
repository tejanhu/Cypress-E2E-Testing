/// <reference types="cypress" />

describe('Basic Tests', () => {
    it('The webpage loads, at least', () => {
        cy.visit("https://linkedin.com");
    })

    it.only('Login page looks good', () => {
        // cy.viewport(1280, 720);
        cy.visit("https://linkedin.com");

        cy.contains('Sign in').click();
        cy.contains('Password').should('exist');
        cy.contains('Sign in with Apple').should('exist');
    })
})