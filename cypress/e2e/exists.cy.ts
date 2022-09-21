/// <reference types="Cypress"/>

const formContainer = '[data-cy=form-container]';
const templateInputSection = '[data-cy=template-input-section]';
const templateInput = '[data-cy=template-input]';
const templateInputError = '[data-cy=template-input-error]';
const mergeFieldsInputSection = '[data-cy=merge-fields-input-section]';
const mergeFieldsInputError = '[data-cy=merge-fields-input-error]';
const resultSection = '[data-cy=result-section]';

describe('Form component', () => {
	it('Renders properly', () => {
		// Arrange
		cy.visit('localhost:5173');

		//Assert
		cy.get(formContainer).should('be.visible');
		cy.get(templateInputSection).should('be.visible');
		cy.get(templateInputError).should('not.exist');
		cy.get(mergeFieldsInputSection).should('be.visible');
		cy.get(mergeFieldsInputError).should('not.exist');
		cy.get(resultSection).should('be.visible');
	});

	it('Shows error if invalid JSON template passed to template textarea input', () => {
		// Arrange
		cy.visit('localhost:5173');

		// Act
		cy.get(templateInput).click().clear();

		// Assert
		cy.get(templateInputError).should('exist');
		cy.get(mergeFieldsInputSection).should('not.exist');
		cy.get(resultSection).should('not.exist');

		// Act
		cy.get(templateInput).click().clear().type(' 23 ');

		// Assert
		cy.get(templateInputError).should('exist');
		cy.get(mergeFieldsInputSection).should('not.exist');
		cy.get(resultSection).should('not.exist');

		// Act
		cy.get(templateInput).click().clear().type(' asd ');

		// Assert
		cy.get(templateInputError).should('exist');
		cy.get(mergeFieldsInputSection).should('not.exist');
		cy.get(resultSection).should('not.exist');

		// Act
		cy.get(templateInput).click().clear().type('{{} message: "wrong json" } ');

		// // Assert
		cy.get(templateInputError).should('exist');
		cy.get(mergeFieldsInputSection).should('not.exist');
		cy.get(resultSection).should('not.exist');
	});
});

export {};
