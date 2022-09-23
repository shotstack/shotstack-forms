/// <reference types="Cypress"/>
import type { MergeField } from '../../src/ShotstackEditTemplate/types'
const formContainer = '[data-cy=form-container]';
const templateInputSection = '[data-cy=template-input-section]';
const templateInput = '[data-cy=template-input]';
const templateInputError = '[data-cy=template-input-error]';
const mergeFieldsInputSection = '[data-cy=merge-fields-input-section]';
const mergeFieldsLabelInputContainer = '[data-cy=label-input]';
const mergeFieldsInputError = '[data-cy=merge-fields-input-error]';
const resultSection = '[data-cy=result-section]';
const result = '[data-cy=result]';

beforeEach(() => {
	// Vite SSR creates issues when testing e2e with cypress, due to cypress 
	// running the tests before vite has a chance to hydrate, making the tests flaky.
	// Potential solutions involve waiting until hydration finishes. Current solution
	// implements intercepting svelte file and wait until it finishes downloading.

	cy.intercept('+page.svelte?svelte&type=style&lang.css').as('svelte');
	cy.visit('localhost:5173');
	cy.wait('@svelte');
});

describe('Form component', () => {
	it('Renders properly', () => {
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

describe('Result JSON', () => {
	it('Updates and displays an updated JSON template when the input values are changed', () => {
		// Arrange
		let sampleMergeFields = {
			merge: [
				{ find: "HELLO", replace: "foo" },
				{ find: "BYE", replace: "bar" },
				{ find: "fizz", replace: "BUZZ" },
			]
		}

		//Act
		cy.get(templateInput)
			.click()
			.clear()
			.type(JSON.stringify(sampleMergeFields),
				{ parseSpecialCharSequences: false })

		// Assert
		// Parsed result template should equal to sample
		cy
			.get(result)
			.then(res => expect(JSON.parse(res[0].innerText)).to.eql(sampleMergeFields))

		// Grab label-input container
		cy.get(mergeFieldsLabelInputContainer)
			.then((labelInputContainers) => {
				//For each label input container return an object where
				let mapped = labelInputContainers
					.map((index: number, el: HTMLElement) => {
						let label = el.children[0] as HTMLLabelElement
						let input = el.children[1] as HTMLInputElement
						// We extract the inner text of label without braces
						// We extract the input value
						// We build a MergeField object
						return { find: label.innerText.slice(3, -3), replace: input.value }
					})

				//Assert
				expect(sampleMergeFields.merge).to.eql(mapped.toArray())
			});

		// Arrange
		const TARGET = sampleMergeFields.merge[0].find
		const EDITED_VALUE = "a new value"
		// We deep clone our sample merge fields
		let clonedSampleMergeFields = JSON.parse(JSON.stringify(sampleMergeFields)).merge as MergeField[]
		// We find the target entry in our clone
		let modifiedField = clonedSampleMergeFields.find((el: MergeField) => el.find === TARGET) as MergeField
		// We modify the replace value
		modifiedField.replace = EDITED_VALUE

		// We update target field value
		cy.get(`#${TARGET}`).click().clear().type(EDITED_VALUE);
		cy.get(mergeFieldsLabelInputContainer)
			.then((labelInputContainers) => {
				//For each label input container return an object where
				let mapped = labelInputContainers
					.map((index: number, el: HTMLElement) => {
						let label = el.children[0] as HTMLLabelElement
						let input = el.children[1] as HTMLInputElement
						// We extract the inner text of label without braces and the input value
						let find = label.innerText.slice(3, -3)
						let replace = input.value
						// We build a MergeField object and return it
						return { find, replace }
					})

				//Assert
				expect(clonedSampleMergeFields).to.eql(mapped.toArray())
			});
	});
});

export { };
