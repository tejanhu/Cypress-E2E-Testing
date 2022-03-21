/// <reference types="cypress" />

describe('Basic Unauthenticated Desktop Tests', () => {

    // before(() => {
    //    Before hook done 
    // })

    beforeEach(() => {
        // bootstrapping external things
        cy.viewport(1280, 720);
        cy.visit("https://linkedin.com");
    })


    it('Login page looks good', () => {
      
        cy.log("going to sign in");

        // Sign in page
        cy.contains('Sign in').click();

        cy.log("going to forgot password");

        // Password reset page
        cy.contains('Forgot password').click();
        // cy.url().should('eq','https://www.linkedin.com/checkpoint/rp/request-password-reset?trk=guest_homepage-basic_nav-header-signin');

        // Doesn't work as Cypress works Asynchronously
        cy.log('Current (non-working) URL =', cy.url());

        cy.url().then(val => {
            cy.log('The current (working) real URL is: ', val);
        });

        // Doesn't show in browser this way
        cy.url().then(val => {
            cy.log('The URL: ' + cy.url());
        });

        // Appears only in browser
        cy.url().then(val => {
            console.log('The URL is: ', val);
        });

        // Verify page url
        cy.url().should('include', 'https://www.linkedin.com/checkpoint/rp/request-password-reset?trk=guest_homepage-basic_nav-header-signin');

        // Return to Sign in page
        cy.go('back');

        cy.log("going to join now");

        cy.contains("Join now").click();


        cy.url().should('include', '/signup');
    })

    it('Login should display correct error', () => {
        cy.contains('Sign in').click();
        cy.contains("Please enter a valid username").should("not.exist");
        cy.get('#username').type('user');
        cy.get('#password').type('password123');
        cy.get('.btn__primary--large').click();
        cy.contains("Please enter a valid username", {timeout: 1 * 3000}).should("exist");
    })

    it.only('Login should work fine', () => {
        cy.contains('Sign in').click();
        cy.get('#username').type('tejanahmedhu@gmail.com');
        cy.get('#password').type('hussein95');
        cy.get('.btn__primary--large').click();
        cy.url().should('include', 'https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin');
        cy.contains("Welcome, Hussein!", {timeout: 1 * 3000}).should("exist");
    })
})