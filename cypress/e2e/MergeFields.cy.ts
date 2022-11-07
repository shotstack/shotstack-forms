/// <reference types="Cypress"/>
const templateInput = '[data-cy=template-input]';
const result = '[data-cy=result]';
const mergeFieldsInputSection = '[data-cy=merge-fields-input-section]';

beforeEach(() => {
	cy.waitForHydrationThenVisit();
});

describe('Merge inputs section', () => {
	it('Shows a label containing the "find" value and a input field containing the "replace" value for every merge object found inside the merge array of the template JSON input', () => {
		// Act
		cy.get(templateInput)
			.click()
			.clear()
			.type(JSON.stringify({ merge: [{ find: 'TEST', replace: 'foo' }] }), {
				parseSpecialCharSequences: false
			});

		// Assert
		cy.get(mergeFieldsInputSection).find("[role='textbox']").should('have.value', 'foo');
		cy.get(mergeFieldsInputSection).find('label').should('have.text', 'TEST');

		// Act
		cy.get(templateInput)
			.click()
			.clear()
			.type(
				JSON.stringify({
					merge: [
						{ find: 'FOO', replace: 'foo' },
						{ find: 'BAR', replace: 'bar' }
					]
				}),
				{ parseSpecialCharSequences: false }
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
	it('Shows a close button that, when pressed, should remove a merge field from the template', () => {
		// Act
		cy.get(templateInput)
			.click()
			.clear()
			.type(
				JSON.stringify({
					merge: [{ find: 'TEST', replace: 'foo' }]
				}),
				{
					parseSpecialCharSequences: false
				}
			);

		cy.get(mergeFieldsInputSection).find('button').click();

		// Assert
		cy.get(mergeFieldsInputSection).find('input').should('not.exist');
		cy.get(mergeFieldsInputSection).find('label').should('not.exist');
		cy.get(templateInput).should('have.value', JSON.stringify({ merge: [] }, null, 2));
		cy.get(result).should('have.text', JSON.stringify({ merge: [] }, null, 2));
	});
});
