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
});
