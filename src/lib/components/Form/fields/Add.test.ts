import '@testing-library/jest-dom';
import type { MergeField } from '../../../ShotstackEditTemplate/types';
import { fireEvent, render } from '@testing-library/svelte';
import Add from './Add.svelte';

describe('fields/Add.svelte', () => {
	const mock = jest.fn();
	const addField = (field: MergeField) => {
		mock(field);
	};
	it('Should render a section to add Merge Fields to the template', () => {
		const add = render(Add, { addField });
		expect(add.getByText('Add a new merge field')).toBeInTheDocument();
	});
	it('Should render two inputs, one for the find prop and another for the replace prop', () => {
		const add = render(Add, { addField });
		expect(add.getAllByRole('textbox')).toHaveLength(2);
	});
	it('Should render a button that, when pressed, calls the addField function', () => {
		const add = render(Add, { addField });
		const button = add.getByRole('button');
		button.click();
		expect(mock).toHaveBeenCalled();
	});
	it('Updating the input values should call the addField function with the new values', () => {
		const find = 'foo';
		const replace = 'bar';
		const mock = jest.fn();
		const addField = (field: MergeField) => {
			mock(field);
		};
		const add = render(Add, { addField });
		const fieldInput = add.getByLabelText('MergeField.find');
		const replaceInput = add.getByLabelText('MergeField.replace');
		const button = add.getByRole('button');
		fireEvent.input(fieldInput, { target: { value: find } });
		fireEvent.input(replaceInput, { target: { value: replace } });
		button.click();
		expect(mock).toHaveBeenCalledWith({ find, replace });
	});
	it('Focusing on the input boxes should clear the content', () => {
		const mock = jest.fn();
		const addField = (field: MergeField) => {
			mock(field);
		};
		const add = render(Add, { addField });
		const fieldInput = add.getByLabelText('MergeField.find');
		const replaceInput = add.getByLabelText('MergeField.replace');
		const button = add.getByRole('button');
		fieldInput.focus();
		replaceInput.focus();
		button.click();
		expect(mock).toHaveBeenCalledWith({ find: '', replace: '' });
	});
});
