import ButtonSubmit from './ButtonSubmit.svelte';
import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/svelte';

describe('submit/ButtonSubmit.svelte', () => {
	const submit = jest.fn();
	it('Should render a button that accepts a submit prop', () => {
		const buttonSubmit = render(ButtonSubmit, { submit });
		expect(buttonSubmit.getByRole('button')).toBeInTheDocument();
	});
	it('On click, it should call the submit callback function', async () => {
		const buttonSubmit = render(ButtonSubmit, { submit });
		await waitFor(() => {
			const button = buttonSubmit.getByRole('button');
			button.click();
		});
		expect(submit).toHaveBeenCalledTimes(1);
	});
});
