/// <reference types="cypress" />

describe('Blank test', () => {
    it('test one', () => {
        cy.visit("https://linkedin.com");
        // mocha syntax
        cy.contains("Welcome").should("exist");
    })
})