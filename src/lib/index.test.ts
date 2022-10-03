import { describe, expect } from '@jest/globals';
import Shotstack from './index';

describe('Testing Shotstack module entry point', () => {
	it('Shotstack.render() should deploy the app inside target element', () => {
		const element = document.createElement('div');
		const shotstackFormService = new Shotstack();
		shotstackFormService.render(element);
		expect(element).toMatchSnapshot();
	});

	it.only("On initialization, should render the form inside the an element with id 'shotstack-form-field' if any", () => {
		const element = document.createElement('div');
		element.id = 'shotstack-form-field';
		document.body.append(element);
		new Shotstack();
		expect(element).toMatchSnapshot();
	});
});
