/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// export {} is required to make this a module

declare global {
	namespace Cypress {
		interface Chainable {
			/**
			Vite SSR creates issues when testing e2e with cypress, due to cypress
			running the tests before vite has a chance to hydrate, making the tests flaky.
			Potential solutions involve waiting until hydration finishes. Current solution
			implements setting a timeout. Another option would be to intercept component
			files and wait until they finish downloading.			
			*/
			waitForHydrationThenVisit(): Chainable<void>;
		}
	}
}
Cypress.Commands.add('waitForHydrationThenVisit', () => {
	cy.visit('localhost:5173', {
		onBeforeLoad(win) {
			//We stub the console.error
			cy.stub(win.console, 'error').as('consoleError');
		}
	});
	// cy.wait('@svelte');
	cy.wait(1000);
});
export {};
