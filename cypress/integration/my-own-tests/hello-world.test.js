/// <reference types="cypress" />

describe('Basic Tests', () => {
    it('The webpage loads, at least', () => {
        cy.visit("https://linkedin.com");
    })

    it.only('Login page looks good', () => {
        // cy.viewport(1280, 720);
        cy.visit("https://linkedin.com");

        // Sign in page
        cy.contains('Sign in').click();

        // Password reset page
        cy.contains('Forgot password').click();
        // cy.url().should('eq','https://www.linkedin.com/checkpoint/rp/request-password-reset?trk=guest_homepage-basic_nav-header-signin');

        // Verify page url
        cy.url().should('include', 'https://www.linkedin.com/checkpoint/rp/request-password-reset?trk=guest_homepage-basic_nav-header-signin');

        // Return to Sign in page
        cy.go('back');
    })
})