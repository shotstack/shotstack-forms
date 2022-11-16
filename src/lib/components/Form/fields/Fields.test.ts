import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/svelte';
import type { MergeField } from '../../../ShotstackEditTemplate/types';
import Fields from './Fields.svelte';

describe('fields/Fields.svelte.test', () => {
	const mockInput = jest.fn();
	const mockAdd = jest.fn();
	const mockRemove = jest.fn();
	const error: Error | null = null;
	const fields: MergeField[] = [
		{ find: '{{FOO}}', replace: 'bar' },
		{ find: '{{FIZZ}}', replace: 'baz' }
	];
	const handleFormInput = (field: MergeField, fieldReference?: MergeField) => {
		mockInput(field, fieldReference);
	};
	const addField = (field: MergeField) => {
		mockAdd(field);
	};
	const removeField = (field: MergeField) => {
		mockRemove(field);
	};
	const props = { error, fields, handleFormInput, addField, removeField };

	it('Should render a container with controlled inputs to update Merge Fields', () => {
		const fields = render(Fields, props);
		expect(fields.getByText('Modify Merge Values')).toBeInTheDocument();
	});
	it('Should render a component to add a Merge Field', () => {
		const $fields = render(Fields, props);
		const findInput = screen.getByLabelText<HTMLInputElement>('MergeField.find');
		const replaceInput = screen.getByLabelText<HTMLInputElement>('MergeField.replace');
		const button = $fields.getByLabelText('Add field');
		button.click();
		expect(mockAdd).toHaveBeenCalledWith({ find: findInput.value, replace: replaceInput.value });
	});
	it('For every Merge item, it should render a label with the find property', () => {
		const $fields = render(Fields, props);
		fields.forEach((field) => {
			expect($fields.getByLabelText(field.find)).toBeInTheDocument();
		});
	});
	it('For every Merge item, it should render an input element that calls handleFormInput when updated', () => {
		const $fields = render(Fields, props);
		fields.forEach((field) => {
			const $input = $fields.getByDisplayValue(field.replace);
			const newValue = 'biz';
			fireEvent.input($input, { target: { value: newValue } });
			expect($input).toBeInTheDocument();
			expect(mockInput).toHaveBeenCalledWith({ find: field.find, replace: newValue }, field);
		});
	});
	it('For every merge item, it should render a button that calls the removeField when clicked', () => {
		const $fields = render(Fields, props);
		const $badges = $fields.getAllByRole('button');
		$badges.forEach((badge) => badge.click());
		fields.forEach((field) => expect(mockRemove).toHaveBeenCalledWith(field));
	});
});
