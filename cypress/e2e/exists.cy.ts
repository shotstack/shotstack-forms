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
});

describe('Template input section', () => {
	it('Shows template error if invalid JSON template passed to template textarea input', () => {
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

describe('Merge inputs section', () => {
	it('Shows a label containing the "find" value and a input field containing the "replace" value for every merge object found inside the merge array of the template JSON input', () => {
		// Arrange
		cy.visit('localhost:5173');

		// Act
		cy.get(templateInput)
			.click()
			.clear()
			.type('{{} "merge": [ {{} "find": "TEST", "replace" : "foo" } ] } ');

		// Assert
		cy.get(mergeFieldsInputSection + ' input').should('have.length', 1);
		cy.get(mergeFieldsInputSection + ' label').contains('TEST');
		cy.get(mergeFieldsInputSection + ' input').should('have.value', 'foo');

		// Act
		cy.get(templateInput)
			.click()
			.clear()
			.type(
				'{{} "merge": [ {{} "find": "FOO", "replace" : "foo" } , {{} "find": "BAR", "replace" : "bar" } ] }'
			);

		// Assert
		cy.get(mergeFieldsInputSection + ' input').should('have.length', 2);
		cy.get(mergeFieldsInputSection + ' label')
			.eq(0)
			.contains('FOO');
		cy.get(mergeFieldsInputSection + ' input')
			.eq(0)
			.should('have.value', 'foo');
		cy.get(mergeFieldsInputSection + ' label')
			.eq(1)
			.contains('BAR');
		cy.get(mergeFieldsInputSection + ' input')
			.eq(1)
			.should('have.value', 'bar');
	});
});

export {};
