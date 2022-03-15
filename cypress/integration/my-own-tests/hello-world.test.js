/// <reference types="cypress" />

describe('Blank test', () => {
    it('test one', () => {
        cy.visit("https://linkedin.com");
        // mocha syntax
        cy.contains("Welcome").should("exist");
        cy.get("div#artdeco-global-alerts-cls-offset").should("exist");
        // cy.get("div[id=artdeco-global-alerts-cls-offset]").should("exist");

        cy.get("div#noartdeco-global-alerts-cls-offset").should("not.exist");

        // Way 1 -> Brittle Method due to text possibly changing in future
        // cy.contains("Suggested Searches");

        // Way 2 -> Brittle Method due to class name i.e.: dummy class names (production) or element possibly changing in future
        // cy.get('.etta-caps-header > h2');

        // Way 3 -> Better way to use custom attribute
        cy.get('[data-test-id="pill-list-module__cta"]');
    })
})

describe('Basic Tests', () => {
    it('We have correct page title', () => {
        cy.visit("https://linkedin.com");

        // cy.contains('Welcome to your professional community').should('have.text', '\n          Welcome to your professional community\n        ');
        cy.contains('Welcome to your professional community').should('exist');
    })
})