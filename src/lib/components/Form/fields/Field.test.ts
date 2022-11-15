import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/svelte';
import type { MergeField } from '../../../ShotstackEditTemplate/types';
import Field from './Field.svelte';

describe('fields/Field.svelte', () => {
	const field: MergeField = { find: 'foo', replace: 'bar' };
	const mock = jest.fn();
	const handleFormInput = (field: MergeField, fieldReference?: MergeField) => {
		mock(field, fieldReference);
	};
	const inputId = 'mergefield-input-id-0';
	const props = { field, handleFormInput, inputId };
	it('Should render an input and a label', () => {
		const $field = render(Field, props);
		const label = $field.getByLabelText(field.find);
		const input = $field.getByRole('textbox');
		expect(label).toBeInTheDocument();
		expect(input).toBeInTheDocument();
	});
	it('Label text should be equal to field.find value', () => {
		const fieldName = 'baz';
		const $field = render(Field, { ...props, field: { find: fieldName, replace: 'bar' } });
		const label = $field.getByLabelText(fieldName);
		expect(label).toBeInTheDocument();
	});
	it('On input, it should call passed function prop with current field value and field reference', () => {
		render(Field, props);
		const newValue = 'baz';
		const input = screen.getByRole<HTMLInputElement>('textbox');
		fireEvent.input(input, { target: { value: newValue } });
		expect(mock).toHaveBeenCalledWith({ find: field.find, replace: newValue }, field);
	});
});
