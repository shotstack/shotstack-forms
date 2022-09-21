/// <reference types="Cypress"/>

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

		let mergeFieldsArrayResult: [];

		cy.get(templateInput)
			.click()
			.clear()
			.type(
				'{{}	"merge": [	{{} "find": "HELLO", "replace": "foo" },		{{} "find": "BYE", "replace": "bar" }	]}'
			);

		// Act
		// Get a parsed version of the merge array in the result
		cy.get(result).then((result) => {
			const JSONresult = result[0].innerText;
			const cleanJSONresult = JSONresult.replace('\\n', '');
			const parsedJSONresult = JSON.parse(cleanJSONresult);
			mergeFieldsArrayResult = parsedJSONresult.merge;
		});
		cy.get(mergeFieldsLabelInputContainer).then((labelInputContainers) => {
			// Loop through label/input pairs of the form
			for (let labelInputPair of labelInputContainers) {
				const label = <HTMLLabelElement>labelInputPair.children[0];
				const input = <HTMLInputElement>labelInputPair.children[1];

				// Filter the merge array to find a matching object between label/input values and find/replace props;
				const matchingMergeFieldObject: any = mergeFieldsArrayResult.find(
					(mergeFieldObject: any) =>
						label.innerText.includes(mergeFieldObject.find) &&
						input.value === mergeFieldObject.replace
				);

				// Assert
				// Check the existance of a matching object
				expect(matchingMergeFieldObject).not.to.be.undefined;
			}
		});

		// Act
		cy.get('#HELLO').click().clear().type('Edited HELLO value');

		cy.get(result).then((result) => {
			const JSONresult = result[0].innerText;
			const cleanJSONresult = JSONresult.replace('\\n', '');
			const parsedJSONresult = JSON.parse(cleanJSONresult);
			mergeFieldsArrayResult = parsedJSONresult.merge;
		});

		// Assert
		cy.get(mergeFieldsLabelInputContainer).then((labelInputContainers) => {
			// Loop through label/input pairs of the form
			for (let labelInputPair of labelInputContainers) {
				const label = <HTMLLabelElement>labelInputPair.children[0];
				const input = <HTMLInputElement>labelInputPair.children[1];

				// Filter the merge array to find a matching object between label/input values and find/replace props;
				const matchingMergeFieldObject: any = mergeFieldsArrayResult.find(
					(mergeFieldObject: any) =>
						label.innerText.includes(mergeFieldObject.find) &&
						input.value === mergeFieldObject.replace
				);

				// Assert
				// Check the existance of a matching object
				expect(matchingMergeFieldObject).not.to.be.undefined;
			}
		});
	});
});

export {};
