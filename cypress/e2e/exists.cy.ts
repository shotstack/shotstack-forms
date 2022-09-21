/// <reference types="Cypress"/>

const formContainer = '[data-cy=form-container]';
const templateInputSection = '[data-cy=template-input-section]';
const templateInputError = '[data-cy=template-input-error]';
const mergeFieldsInputSection = '[data-cy=merge-fields-input-section]';
const mergeFieldsInputError = '[data-cy=merge-fields-input-error]';
const resultSection = '[data-cy=result-section]';

describe('Form component', () => {
	it('Renders properly', () => {
		cy.visit('localhost:5173');
		cy.get(formContainer).should('be.visible');
		cy.get(templateInputSection).should('be.visible');
		cy.get(templateInputError).should('not.exist');
		cy.get(mergeFieldsInputSection).should('be.visible');
		cy.get(mergeFieldsInputError).should('not.exist');
		cy.get(resultSection).should('be.visible');
	});
});

export {};
