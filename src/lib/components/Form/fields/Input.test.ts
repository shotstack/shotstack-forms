import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/svelte';
import type { MergeField } from '../../../ShotstackEditTemplate/types';
import Input from './Input.svelte';

describe('fields/Input.svelte', () => {
	const find = 'Hello';
	const replace = 'World';
	const newReplace = 'Fizz';
	const field: MergeField = { find, replace };
	const mock = jest.fn();
	const handleFormInput = (field: MergeField, fieldReference: MergeField) => {
		mock(field, fieldReference);
	};
	test('Should render Input components', () => {
		const input = render(Input, { props: { field, find, replace, handleFormInput } });
		expect(input.getByRole('textbox')).toBeInTheDocument();
		expect(input.getByRole('textbox')).toHaveValue(replace);
	});
	test('Should testing de handleformInput to receive the correct parameters ', () => {
		render(Input, { props: { field, find, replace, handleFormInput } });
		const inputElement: HTMLInputElement = screen.getByRole<HTMLInputElement>('textbox');
		fireEvent.input(inputElement, { target: { value: newReplace } });
		expect(mock).toHaveBeenCalledWith({ find: field.find, replace: newReplace }, field);
		expect(inputElement).toHaveValue(newReplace);
	});
});
