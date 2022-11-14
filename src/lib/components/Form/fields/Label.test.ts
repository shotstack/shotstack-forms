import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import Label from './Label.svelte';

describe('fields/Label.svelte', () => {
	const textLabelArialLabel = 'Current label Arial';
	const find = 'text';
	test('Should render Label component', () => {
		const label = render(Label, { find });
		expect(label.getByLabelText(textLabelArialLabel)).toBeInTheDocument();
	});
	test('Should return a new text when you change the prop find', () => {
		render(Label, { find });
		const labelElement: HTMLLabelElement =
			screen.getByLabelText<HTMLLabelElement>(textLabelArialLabel);
		expect(labelElement.textContent).toEqual(find);
	});
});
