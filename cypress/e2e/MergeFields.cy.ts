/// <reference types="Cypress"/>

import { IParsedEditSchema } from '../../src/lib/ShotstackEditTemplate/types';

const templateInput = '[data-cy=template-input]';
const result = '[data-cy=result]';
const mergeFieldsInputSection = '[data-cy=merge-fields-input-section]';
const addMergeFieldSection = '[data-cy=add-merge-field-section]';
const sourceFieldSection = '[data-cy=source-container]';
const sourceFieldInput = '[data-cy=source-input]';

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
	it('Should show a button that, when pressed, adds a new MergeField', () => {
		//Arrange
		const findInput = 'input[aria-label="MergeField.find"]';
		const replaceInput = 'input[aria-label="MergeField.replace"]';

		// Act
		cy.get(templateInput)
			.click()
			.clear()
			.type(
				JSON.stringify({
					merge: []
				}),
				{ parseSpecialCharSequences: false }
			);

		// Assert
		cy.get(addMergeFieldSection).should('exist');

		cy.get(addMergeFieldSection).find(findInput).should('exist').click().type('fizz');

		cy.get(addMergeFieldSection).find(replaceInput).should('exist').click().type('buzz');
		cy.get(addMergeFieldSection).find('button').should('exist').click();

		cy.get(result).should(
			'have.text',
			JSON.stringify({ merge: [{ find: 'fizz', replace: 'buzz' }] }, null, 2)
		);
	});
});

describe('Source fields', () => {
	const placeholderValueOne = '{{ VALUE }}';
	const placeholderValueTwo = '{{ ANOTHER_VALUE }}';
	const labels = ['VALUE', 'ANOTHER_VALUE'];
	const inputs = [placeholderValueOne, placeholderValueTwo];
	const urlValue = 'http://localhost';
	const template: IParsedEditSchema = {
		merge: [],
		timeline: {
			tracks: [
				{
					clips: [
						{ asset: { src: placeholderValueOne } },
						{ asset: { src: placeholderValueTwo } },
						{ asset: { src: urlValue } }
					]
				}
			]
		}
	};
	it('Renders the Update Sources section', () => {
		cy.get(sourceFieldSection).should('exist');
	});
	it('If no placeholder value is found, it should not display the source section', () => {
		//Act
		cy.get(templateInput)
			.click()
			.clear()
			.type(JSON.stringify({ merge: [] }), { parseSpecialCharSequences: false });
		//Assert
		cy.get(sourceFieldSection).should('not.be.visible');
	});

	it('Shows a source field component for each src clip with a placeholder value and ignore the rest', () => {
		//Act
		cy.get(templateInput).click().clear().type(JSON.stringify(template), {
			parseSpecialCharSequences: false
		});

		//Assert
		cy.get(sourceFieldSection).should('be.visible').find(sourceFieldInput).should('have.length', 2);
		cy.get(sourceFieldSection)
			.find(sourceFieldInput)
			.find('label')
			.then((items) => {
				const list = Array.from(items, (item) => item.innerText);
				cy.wrap(list).should('eql', labels);
			});

		cy.get(sourceFieldSection)
			.find(sourceFieldInput)
			.find<HTMLInputElement>('input[type=text]')
			.then((items) => {
				const list = Array.from(items, (item) => item.value);
				cy.wrap(list).should('eql', inputs);
			});

		cy.get(sourceFieldSection)
			.find(sourceFieldInput)
			.find('input[type=file]')
			.should('have.length', 2);
	});
});
