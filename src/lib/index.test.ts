import { describe, expect } from '@jest/globals';
import Shotstack from './index';
import defaultJsonInput from '../lib/components/Form/defaultMerge.json';
import type { IParsedEditSchema } from './ShotstackEditTemplate/types';
describe('Testing Shotstack module entry point', () => {
	it('Shotstack.render() should deploy the app inside target element', () => {
		const element = document.createElement('div');
		const shotstackFormService = new Shotstack();
		shotstackFormService.render(element);
		expect(element).toMatchSnapshot();
	});

	it("On initialization, should render the form inside the an element with id 'shotstack-form-field' if any", () => {
		const element = document.createElement('div');
		element.id = 'shotstack-form-field';
		document.body.append(element);
		new Shotstack();
		expect(element).toMatchSnapshot();
	});

	it('When passed a JSON template as a parameter, the template service should parse it correctly', () => {
		const stringifiedJson = JSON.stringify(defaultJsonInput);
		const shotstackService = new Shotstack(stringifiedJson);
		expect(shotstackService.templateService.template).toEqual(defaultJsonInput);
	});

	it("When .on(event, fn) is called, it should add a 'fn' handler for that particular 'event'", () => {
		const shotstackService = new Shotstack();
		const defaultMergeField = shotstackService.templateService.result;
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
		expect(mockChange).toHaveBeenCalledWith(jsonTemplate, defaultMergeField);

		shotstackService.templateService.updateResultMergeFields(replacedEntry);
		expect(mockChange).toHaveBeenCalledWith(expectedResultTemplate, jsonTemplate);
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
		const shotstackService = new Shotstack(defaultJsonInput, newContainer);
		shotstackService.display();
		expect(newContainer).toMatchSnapshot();
	});

	it('Shotstack.hide(), container element should have property display = "none"', () => {
		const newContainer = document.createElement('div');
		const shotstackService = new Shotstack(defaultJsonInput, newContainer);
		shotstackService.hide();
		expect(newContainer).toMatchSnapshot();
	});

	it('Shotstack.attach(), when passed a new container it should render cleaning previous container', () => {
		const previousContainer = document.createElement('div');
		previousContainer.id = 'previous-container';
		const newContainer = document.createElement('div');
		newContainer.id = 'new-container';
		const shotstackService = new Shotstack(defaultJsonInput, previousContainer);
		shotstackService.attach(newContainer);
		expect(previousContainer.childNodes).toHaveLength(0);
		expect(newContainer).toMatchSnapshot();
	});

	it('Shotstack.remove(), should remove content of the container where the component is rendered on', () => {
		const newContainer = document.createElement('div');
		const shotstackService = new Shotstack(defaultJsonInput, newContainer);
		shotstackService.remove();
		expect(newContainer.childNodes).toHaveLength(0);
		expect(newContainer).toMatchSnapshot();
	});
	it('Shotstack.container should return container where the component is being rendered on', () => {
		const containerElement = document.createElement('div');
		containerElement.id = 'container-element';
		const shotstackService = new Shotstack(defaultJsonInput, containerElement);
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
		expect(mock).toHaveBeenCalledWith(newJson, prevJson);
	});
});
