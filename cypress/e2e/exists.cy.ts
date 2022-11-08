/// <reference types="Cypress"/>
import type { MergeField } from '../../src/lib/ShotstackEditTemplate/types';
const formContainer = '[data-cy=form-container]';
const templateInputSection = '[data-cy=template-input-section]';
const templateInput = '[data-cy=template-input]';
const templateInputError = '[data-cy=template-input-error]';
const mergeFieldsInputSection = '[data-cy=merge-fields-input-section]';
const mergeFieldsLabelInputContainer = '[data-cy=label-input]';
const resultSection = '[data-cy=result-section]';
const result = '[data-cy=result]';

beforeEach(() => {
	cy.visit('localhost:5173', {
		onBeforeLoad(win) {
			//We stub the console.error
			cy.stub(win.console, 'error').as('consoleError');
		}
	});
});

describe('Form component', () => {
	it('Renders properly', () => {
		//Assert
		cy.get(formContainer).should('be.visible');
		cy.get(templateInputSection).should('be.visible');
		cy.get(templateInputError).should('not.be.visible');
		cy.get(mergeFieldsInputSection).should('be.visible');
		cy.get(resultSection).should('be.visible');
	});
});

describe('Error logger', () => {
	it('When an error has been found, it should log the error in the console', () => {
		// Act
		cy.get(templateInput).click().clear();
		// Assert
		cy.get('@consoleError').should('be.calledOnce');
	});
});
describe('Template input section', () => {
	it('Shows template error if invalid JSON template passed to template textarea input', () => {
		// Act
		cy.get(templateInput).click().clear();

		// Assert
		cy.get(templateInputError).should('exist');
		cy.get(mergeFieldsInputSection).should('not.be.visible');
		cy.get(resultSection).should('not.exist');

		// Act
		cy.get(templateInput).click().clear().type(' 23 ');

		// Assert
		cy.get(templateInputError).should('exist');
		cy.get(mergeFieldsInputSection).should('not.be.visible');
		cy.get(resultSection).should('not.exist');

		// Act
		cy.get(templateInput).click().clear().type(' asd ');

		// Assert
		cy.get(templateInputError).should('exist');
		cy.get(mergeFieldsInputSection).should('not.be.visible');
		cy.get(resultSection).should('not.exist');

		// Act
		cy.get(templateInput).click().clear().type('{{} message: "wrong json" } ');

		// // Assert
		cy.get(templateInputError).should('exist');
		cy.get(mergeFieldsInputSection).should('not.be.visible');
		cy.get(resultSection).should('not.exist');
	});
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
});

describe('Result JSON', () => {
	it('Updates and displays an updated JSON template when the input values are changed', () => {
		// Arrange
		const sampleMergeFields = {
			merge: [
				{ find: 'HELLO', replace: 'foo' },
				{ find: 'BYE', replace: 'bar' },
				{ find: 'fizz', replace: 'BUZZ' }
			]
		};

		//Act
		cy.get(templateInput)
			.click()
			.clear()
			.type(JSON.stringify(sampleMergeFields), { parseSpecialCharSequences: false });

		// Assert
		// Parsed result template should equal to sample
		cy.get(result).then((res) => expect(JSON.parse(res[0].innerText)).to.eql(sampleMergeFields));

		// Grab label-input container
		cy.get(mergeFieldsLabelInputContainer).then((labelInputContainers) => {
			//For each label input container return an object where
			const mapped = labelInputContainers.map((index: number, el: HTMLElement) => {
				const label = el.children[0] as HTMLLabelElement;
				const input = el.children[1] as HTMLInputElement;
				// We extract the inner text of label without braces
				// We extract the input value
				// We build a MergeField object
				return { find: label.innerText, replace: input.value };
			});

			//Assert
			expect(sampleMergeFields.merge).to.eql(mapped.toArray());
		});

		// Arrange
		const TARGET = sampleMergeFields.merge[0].find;
		const EDITED_VALUE = 'a new value';
		// We deep clone our sample merge fields
		const clonedSampleMergeFields = JSON.parse(JSON.stringify(sampleMergeFields))
			.merge as MergeField[];
		// We find the target entry in our clone
		const modifiedField = clonedSampleMergeFields.find(
			(el: MergeField) => el.find === TARGET
		) as MergeField;
		// We modify the replace value
		modifiedField.replace = EDITED_VALUE;
		// We update target field value
		cy.get(mergeFieldsLabelInputContainer).find('input').first().click().clear().type(EDITED_VALUE);
		cy.get(mergeFieldsLabelInputContainer).then((labelInputContainers) => {
			//For each label input container return an object where
			const mapped = labelInputContainers.map((index: number, el: HTMLElement) => {
				const label = el.children[0] as HTMLLabelElement;
				const input = el.children[1] as HTMLInputElement;
				// We extract the inner text of label without braces and the input value
				const find = label.innerText;
				const replace = input.value;
				// We build a MergeField object and return it
				return { find, replace };
			});

			//Assert
			expect(clonedSampleMergeFields).to.eql(mapped.toArray());
		});
	});
	it('Replace values are cast into valid JSON types, or if invalid, into strings', () => {
		// Arrange
		const jsonValidTypes: { [key: string]: unknown } = {
			bNull: null,
			bFalse: false,
			bTrue: true,
			str: 'string',
			num: 123,
			objects: { a: 'a', b: 'b' },
			array: [1, '2', 3]
		};
		const jsonInvalidTypes: { [key: string]: unknown } = {
			fn: '() => {}',
			bUndefined: 'undefined',
			symbol: "Symbol('foo')",
			date: 'new Date()'
		};

		const fields = { ...jsonValidTypes, ...jsonInvalidTypes };
		const mergeFields = {
			merge: Object.keys(fields).map((key) => ({ find: key, replace: fields[key] }))
		};

		//Act
		cy.get(templateInput)
			.click()
			.clear()
			.type(JSON.stringify(mergeFields), { parseSpecialCharSequences: false });

		cy.get(mergeFieldsLabelInputContainer).then((labelInputContainers) => {
			//For each label input container return an object where
			const mapped = labelInputContainers.map((index: number, el: HTMLElement) => {
				const label = el.children[0] as HTMLLabelElement;
				const input = el.children[1] as HTMLInputElement;
				// We extract the inner text of label without braces
				// We extract the input value
				// We build a MergeField object
				return { find: label.innerText, replace: input.value };
			});

			// Assert
			const inputsMergeFieldArray: { find: string; replace: string }[] = mapped.toArray();
			inputsMergeFieldArray.forEach((field) => {
				switch (field.find in jsonValidTypes) {
					case true: {
						// We stringify every valid json type value
						const prop = jsonValidTypes[field.find];
						const stringifiedValue = typeof prop === 'string' ? prop : JSON.stringify(prop);
						// We check if input value equals stringified text
						expect(stringifiedValue).to.eql(field.replace);
						break;
					}
					default: {
						// Invalid types are already stringified
						const stringifiedValue = jsonInvalidTypes[field.find];
						// We check if input value equals stringified text
						expect(stringifiedValue).to.eql(field.replace);
						break;
					}
				}
			});

			// Act
			// We get the resulting json template and we parse to remove indentations
			// We get the merge field
			cy.get(result).then((res) => {
				// We parse the resulting template json so we can get the merge prop and
				// delete indentation and we stringify every non string value result of parsing
				const parsedJsonMergeFieldValues = JSON.parse(res[0].innerText).merge as MergeField[];
				const withStringifiedValues = parsedJsonMergeFieldValues.map((k) => ({
					find: k.find,
					replace: typeof k.replace === 'string' ? k.replace : JSON.stringify(k.replace)
				}));

				// Assert
				expect(withStringifiedValues).to.eql(inputsMergeFieldArray);
			});
		});
	});
});

export {};
