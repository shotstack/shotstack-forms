import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import Label from './Label.svelte';

describe('fields/Label.svelte', () => {
	const textLabelArialLabel = 'Current label';
	const find = 'text';
	const inputId = 'mergefield-input-id-0';
	const props = { find, inputId };
	test('Should render Label component', () => {
		const label = render(Label, props);
		expect(label.getByLabelText(textLabelArialLabel)).toBeInTheDocument();
	});
	test('Should return a new text when you change the prop find', () => {
		render(Label, props);
		const labelElement: HTMLLabelElement =
			screen.getByLabelText<HTMLLabelElement>(textLabelArialLabel);
		expect(labelElement.textContent).toEqual(find);
	});
});
