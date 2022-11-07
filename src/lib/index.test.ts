import { describe, expect } from '@jest/globals';
import Shotstack from './index';
import defaultJsonInput from '../lib/components/Form/defaultMerge.json';
import type {
	Asset,
	Clip,
	IParsedEditSchema,
	MergeField,
	Timeline,
	Track
} from './ShotstackEditTemplate/types';


beforeEach(() => {
	//Since window.URL.createObjectURL is not (yet) available in jest-dom,
	//we need to provide a mock implementation for it.
	window.URL.createObjectURL = jest.fn();
});
describe('Testing Shotstack module entry point', () => {
	it('Shotstack.renderForm() should deploy the app inside target element', () => {
		const element = document.createElement('div');
		const shotstackFormService = new Shotstack();
		shotstackFormService.renderForm(element);
		expect(element).toMatchSnapshot();
	});

	it('When passed a JSON template as a parameter, the template service should parse it correctly', () => {
		const stringifiedJson = JSON.stringify(defaultJsonInput);
		const shotstackService = new Shotstack(stringifiedJson);
		expect(shotstackService.templateService.template).toEqual(defaultJsonInput);
	});

	it("When .on(event, fn) is called, it should add a 'fn' handler for that particular 'event'", () => {
		const shotstackService = new Shotstack();
		const mockChange = jest.fn();
		const find = 'Hello';
		const replace = 'World';
		const newReplace = 'New World';
		const mergeEntry = { find, replace };
		const replacedEntry = { find, replace: newReplace };
		const jsonTemplate: IParsedEditSchema = { merge: [mergeEntry] };
		const expectedResultTemplate: IParsedEditSchema = { merge: [replacedEntry] };

		shotstackService.on('change', mockChange);
		shotstackService.templateService.setTemplateSource(JSON.stringify(jsonTemplate));
		expect(mockChange).toHaveBeenCalledWith(jsonTemplate);

		shotstackService.templateService.updateResultMergeFields(replacedEntry);
		expect(mockChange).toHaveBeenCalledWith(expectedResultTemplate);
		expect(mockChange).toHaveBeenCalledTimes(2);

		const mockSubmit = jest.fn();
		shotstackService.on('submit', mockSubmit);
		shotstackService.submit();
		expect(mockSubmit).toHaveBeenCalled();
		expect(mockSubmit).toHaveBeenCalledWith(expectedResultTemplate);
	});
	it('When .off(event, callback) is called, it should remove a function from the event handler array', () => {
		const shotstackService = new Shotstack({ merge: [{ find: 'foo', replace: 'bar' }] });
		const mock = jest.fn();
		shotstackService.on('submit', mock);
		shotstackService.off('submit', mock);
		shotstackService.submit();
		expect(mock).not.toHaveBeenCalled();
	});
	it('When .off is called, it should remove a function without affecting any of the other handlers', () => {
		const shotstackService = new Shotstack({ merge: [{ find: 'foo', replace: 'bar' }] });
		const mockSubmit = jest.fn();
		const mockChange = jest.fn();
		const anotherMockSubmit = jest.fn();
		shotstackService.on('submit', mockSubmit);
		shotstackService.on('submit', anotherMockSubmit);
		shotstackService.on('change', mockChange);
		shotstackService.off('submit', mockSubmit);
		//Update with shotstack.load()
		shotstackService.templateService.setTemplateSource({
			merge: [{ find: 'foo', replace: 'baz' }]
		});
		shotstackService.submit();
		expect(mockSubmit).not.toHaveBeenCalled();
		expect(anotherMockSubmit).toHaveBeenCalled();
		expect(mockChange).toHaveBeenCalled();
	});
});

describe('Testing Shotstack methods', () => {
	it('Shotstack.display(), container element should have property display = "block" ', () => {
		const newContainer = document.createElement('div');
		const shotstackService = new Shotstack(defaultJsonInput);
		shotstackService.renderForm(newContainer);
		shotstackService.display();
		expect(newContainer).toMatchSnapshot();
	});

	it('Shotstack.hide(), container element should have property display = "none"', () => {
		const newContainer = document.createElement('div');
		const shotstackService = new Shotstack(defaultJsonInput);
		shotstackService.renderForm(newContainer);
		shotstackService.hide();
		expect(newContainer).toMatchSnapshot();
	});

	it('Shotstack.attach(), when passed a new container it should render cleaning previous container', () => {
		const previousContainer = document.createElement('div');
		previousContainer.id = 'previous-container';
		const newContainer = document.createElement('div');
		newContainer.id = 'new-container';
		const shotstackService = new Shotstack(defaultJsonInput);
		shotstackService.renderForm(previousContainer);
		shotstackService.attach(newContainer);
		expect(previousContainer.childNodes).toHaveLength(0);
		expect(newContainer).toMatchSnapshot();
	});

	it('Shotstack.remove(), should remove content of the container where the component is rendered on', () => {
		const newContainer = document.createElement('div');
		const shotstackService = new Shotstack(defaultJsonInput);
		shotstackService.renderForm(newContainer);
		shotstackService.remove();
		expect(newContainer.childNodes).toHaveLength(0);
		expect(newContainer).toMatchSnapshot();
	});
	it('Shotstack.container should return container where the component is being rendered on', () => {
		const containerElement = document.createElement('div');
		containerElement.id = 'container-element';
		const shotstackService = new Shotstack(defaultJsonInput);
		shotstackService.renderForm(containerElement);
		expect(shotstackService.container).toBe(containerElement);
	});

	it('Shotstack.merge(), should return merged JSON template', () => {
		const shotstackService = new Shotstack();

		const find = 'Hello';
		const replace = 'World';
		const newReplace = 'New World';
		const mergeEntry = { find, replace };
		const replacedEntry = { find, replace: newReplace };
		const jsonTemplate: IParsedEditSchema = { merge: [mergeEntry] };
		const expectedResultTemplate: IParsedEditSchema = { merge: [replacedEntry] };

		shotstackService.templateService.setTemplateSource(JSON.stringify(jsonTemplate));
		shotstackService.templateService.updateResultMergeFields(replacedEntry);

		expect(shotstackService.merge()).toEqual(expectedResultTemplate);
	});

	it('Shotstack.load(), should replace the source JSON template with a new one', () => {
		const prevJson = { merge: [{ find: 'foo', replace: 'bar' }] };
		const newJson = { merge: [{ find: 'foo', replace: 'baz' }] };
		const shotstackService = new Shotstack(prevJson);
		shotstackService.load(newJson);
		expect(shotstackService.merge()).toEqual(newJson);
	});

	it('Shotstack.load(), should trigger onchange effects', () => {
		const prevJson = { merge: [{ find: 'foo', replace: 'bar' }] };
		const newJson = { merge: [{ find: 'foo', replace: 'baz' }] };
		const shotstackService = new Shotstack(prevJson);
		const mock = jest.fn();
		shotstackService.on('change', mock);
		shotstackService.load(newJson);
		expect(mock).toHaveBeenCalled();
		expect(mock).toHaveBeenCalledWith(newJson);
	});

	it('addMergeField should add an entry on the source template and the result template', () => {
		const validJson = { merge: [{ find: 'foo', replace: 'baz' }] };
		const find = 'fizz';
		const replace = 'buzz';
		const validMergeField = { find, replace };
		const mergedJson = { ...validJson, merge: [...validJson.merge, validMergeField] };
		const service = new Shotstack(validJson);
		service.addField(find, replace);
		expect(service.templateService.template).toEqual(mergedJson);
		expect(service.merge()).toEqual(mergedJson);
	});

	it('If correct, it should trigger onChange events', () => {
		const validJson = { merge: [{ find: 'foo', replace: 'baz' }] };
		const service = new Shotstack(validJson);
		const mock = jest.fn();
		service.on('change', mock);
		service.addField('fizz', 'buzz');
		expect(mock).toHaveBeenCalled();
	});

	it('getField should return a reference from the merge property', () => {
		const field = { find: 'foo', replace: 'bar' };
		const validJson = { merge: [field] };
		const service = new Shotstack(validJson);
		const item = service.getField({ find: 'foo' });
		const itemByReplace = service.getField({ replace: 'bar' });
		expect(item).toEqual(field);
		expect(item).toBe(service.templateService.result.merge[0]);
		expect(itemByReplace).toEqual(field);
		expect(itemByReplace).toBe(service.templateService.result.merge[0]);
	});

	it('if no reference is found, should return undefined', () => {
		const field = { find: 'foo', replace: 'bar' };
		const validJson = { merge: [field] };
		const service = new Shotstack(validJson);
		const item = service.getField({ find: 'fizz' });
		expect(item).toEqual(undefined);
	});

	it('if an empty collection is provided, should return undefined', () => {
		const field = { find: 'foo', replace: 'bar' };
		const validJson = { merge: [field] };
		const service = new Shotstack(validJson);
		const item = service.getField({});
		expect(item).toEqual(undefined);
	});

	it('if multiple items are found, should return the first', () => {
		const field = { find: 'foo', replace: 'bar' };
		const repeatedField = { find: 'foo', replace: 'baz' };
		const validJson = { merge: [field, repeatedField] };
		const service = new Shotstack(validJson);
		const item = service.getField({ find: 'foo' });
		expect(item).toEqual(field);
		expect(item).toBe(service.templateService.result.merge[0]);
		expect(item).not.toBe(service.templateService.result.merge[1]);
	});

	it('if a replace argument is present, should also check for replace property equality', () => {
		const field = { find: 'foo', replace: 'bar' };
		const repeatedField = { find: 'foo', replace: 'baz' };
		const validJson = { merge: [field, repeatedField] };
		const service = new Shotstack(validJson);
		const item = service.getField({ find: 'foo', replace: 'baz' });
		expect(item).toEqual(repeatedField);
		expect(item).toBe(service.templateService.result.merge[1]);
		expect(item).not.toBe(service.templateService.result.merge[0]);
	});

	it('removeField should remove an entry from the merge property', () => {
		const validJson = {
			merge: [
				{ find: 'foo', replace: 'baz' },
				{ find: 'fizz', replace: 'buzz' }
			]
		};
		const service = new Shotstack(validJson);
		const item = service.getField({ find: 'foo' }) as MergeField;
		service.removeField(item);
		expect(service.merge()).toEqual({ merge: [{ find: 'fizz', replace: 'buzz' }] });
	});

	it('removeField should trigger onChange events', () => {
		const validJson = {
			merge: [
				{ find: 'foo', replace: 'baz' },
				{ find: 'fizz', replace: 'buzz' }
			]
		};
		const service = new Shotstack(validJson);
		const item = service.getField({ find: 'foo' }) as MergeField;
		const mock = jest.fn();
		service.on('change', mock);
		service.removeField(item);
		expect(mock).toHaveBeenCalled();
	});
});

describe('Testing Shotstack render methods', () => {
	const merge = [
		{ find: 'foo', replace: 'bar' },
		{ find: 'fizz', replace: 'buzz' },
		{ find: 'a', replace: 'b' },
		{ find: 'b', replace: 'c' }
	];
	const shotstack = new Shotstack({ merge });
	it('getInputs should return an HTMLCollection of div containers tags', () => {
		const collection = shotstack.getInputs();
		expect(collection).toBeInstanceOf(HTMLCollection);
		const inputs = Array.from(collection);
		inputs.forEach((input) => expect(input).toBeInstanceOf(HTMLDivElement));
	});
	it('For each merge field, should return a div with a label and an input', () => {
		const collection = shotstack.getInputs();
		Array.from(collection).forEach((divContainer) => {
			const [label, input] = Array.from(divContainer.children) as [
				HTMLLabelElement,
				HTMLInputElement
			];
			expect(label).toBeInstanceOf(HTMLLabelElement);
			expect(input).toBeInstanceOf(HTMLInputElement);
		});
	});
	it('renderElements should render a div container with an input field and a label for each merge field', () => {
		const container = document.createElement('div');
		const findValues = shotstack.merge().merge.map((el) => el.find);
		const replaceValues = shotstack.merge().merge.map((el) => el.replace);

		shotstack.renderElements(container);
		const children = container.children as HTMLCollectionOf<HTMLDivElement>;
		const divContainer = Array.from<HTMLDivElement>(children);
		expect(divContainer.length).toBeGreaterThan(0);
		expect(divContainer.length).toEqual(replaceValues.length);

		divContainer.forEach((el) => {
			const [label, input] = Array.from(el.children) as [HTMLLabelElement, HTMLInputElement];
			expect(label).toBeInstanceOf(HTMLLabelElement);
			expect(input).toBeInstanceOf(HTMLInputElement);
			expect(findValues).toContain(label.textContent);
			expect(replaceValues).toContain(input.value);
		});
	});
	it('if an after argument is provided, should render the fields after that element', () => {
		const container = document.createElement('div');
		const p1 = document.createElement('p');
		const p2 = document.createElement('p');
		const p3 = document.createElement('p');
		container.append(p1, p2, p3);
		shotstack.renderElements(container, p1);
		const children = container.children;
		expect(children.item(0)).toBe(p1);
		expect(children.item(1)).not.toBe(p2);
		expect(children.item(1)).toBeInstanceOf(HTMLDivElement);
		expect(children.item(merge.length)).toBeInstanceOf(HTMLDivElement);
		expect(children.item(merge.length + 1)).toBe(p2);
	});
});

describe('Testing Shotstack render methods getInputs and renderSourceFields', () => {
	const clip1: Clip = { asset: { src: '{{VALUE}}' } };
	const clip2: Clip = { asset: { src: '{{ANOTHER_VALUE}}' } };
	const asset: Asset = { src: 'http://localhost' };
	const clip: Clip = { asset };
	const track: Track = { clips: [clip, clip1, clip2] };
	const timeline: Timeline = { tracks: [track] };

	const template: IParsedEditSchema = { timeline, merge: [] };

	const shotstack = new Shotstack(template);

	it('getInput should return and HTLMElement ', () => {
		const collection = shotstack.getInputs();
		expect(collection).toBeInstanceOf(HTMLCollection);
	});
	it('For each asset with placeholder, should return a div with a label and two input', () => {
		const collection = shotstack.getInputs();
		Array.from(collection).forEach((divContainer) => {
			const [label, input, input2] = Array.from(divContainer.children) as [
				HTMLLabelElement,
				HTMLInputElement,
				HTMLInputElement
			];
			expect(label).toBeInstanceOf(HTMLLabelElement);
			expect(input).toBeInstanceOf(HTMLInputElement);
			expect(input2).toBeInstanceOf(HTMLInputElement);

			const labels = ['VALUE', 'ANOTHER_VALUE'];
			expect(labels).toContainEqual(label.textContent);
			const inputs = ['{{VALUE}}', '{{ANOTHER_VALUE}}'];
			expect(inputs).toContainEqual(input.value);
		});
	});
});
