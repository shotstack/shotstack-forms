import { describe, expect } from '@jest/globals';
import Shotstack from './index';
describe('Testing Shotstack module entry point', () => {
	it('Shotstack.render() should deploy the app inside target element', () => {
		const element = document.createElement('div');
		Shotstack.render(element);
		expect(element).toMatchSnapshot();
	});
});
