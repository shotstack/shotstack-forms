import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import AddInput from './AddInput.svelte';
import { jest } from '@jest/globals';

describe('fields/AddInput.svelte', () => {
	const value = 'value';
	const label = 'label';
	const mock = jest.fn();
	const onFocus = (e: HTMLInputElement) => {
		mock(e);
	};

	test('Should render AddInput component', () => {
		const addInput = render(AddInput, { value, label, onFocus });
		expect(addInput.getByRole('textbox')).toBeInTheDocument();
	});
	test('Should call onFocus prop when element is focused', () => {
		render(AddInput, { value, label, onFocus });
		const inputElement: HTMLInputElement = screen.getByRole<HTMLInputElement>('textbox');
		inputElement.focus();
		expect(mock).toHaveBeenCalled();
	});
});
