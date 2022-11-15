import '@testing-library/jest-dom';
import { fireEvent, render,screen} from '@testing-library/svelte';
import AddInput from './AddInput.svelte';
import { jest } from '@jest/globals';

describe('fields/AddInput.svelte', () => {
	const value = "value"
	const label = "label"
	const newInput= "input"
	const mock = jest.fn();
    const onFocus = (e:HTMLInputElement) => {mock()}
    
	test('Should render AddInput component', () => {
		const addInput = render(AddInput, {value,label,onFocus});
		expect(addInput.getByRole('textbox')).toBeInTheDocument();
	});
	test("Sholud testing onFocus when the function receive a new value",() =>{
		render(AddInput, {value,label,onFocus});
		const inputElement: HTMLInputElement = screen.getByRole<HTMLInputElement>("textbox");
		inputElement.focus()
        expect(mock).toHaveBeenCalled()
	})
})
