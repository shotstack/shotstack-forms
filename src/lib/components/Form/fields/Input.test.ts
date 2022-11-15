import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/svelte';
import type { MergeField } from '../../../ShotstackEditTemplate/types';
import Input from './Input.svelte';

describe('fields/Input.svelte', () => {
	const find = 'Hello';
	const replace = 'World';
	const newReplace = 'Fizz';
	const field: MergeField = { find, replace };
	const inputId = 'mergefield-input-id-0';
	const mock = jest.fn();
	const handleFormInput = (field: MergeField, fieldReference: MergeField) => {
		mock(field, fieldReference);
	};
	const props = { field, find, replace, handleFormInput, inputId };
	test('Should render Input components', () => {
		const input = render(Input, props);
		expect(input.getByRole('textbox')).toBeInTheDocument();
		expect(input.getByRole('textbox')).toHaveValue(replace);
	});
	test('Should testing the handleformInput to receive the correct parameters ', () => {
		render(Input, props);
		const inputElement: HTMLInputElement = screen.getByRole<HTMLInputElement>('textbox');
		fireEvent.input(inputElement, { target: { value: newReplace } });
		expect(mock).toHaveBeenCalledWith({ find: field.find, replace: newReplace }, field);
		expect(inputElement).toHaveValue(newReplace);
	});
});
