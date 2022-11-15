import '@testing-library/jest-dom';
import { render, waitFor, fireEvent } from '@testing-library/svelte';
import Reset from './Reset.svelte';

describe('error/Reset.svelte', () => {
	let onClick: () => void;
	test('Should render Reset component', () => {
		const reset = render(Reset, { props: { onClick } });
		expect(reset.getByRole('button')).toBeInTheDocument();
	});
	test('Should reset the inputs when you click the button', async () => {
		const onClick = jest.fn();
		const reset = render(Reset, { props: { onClick } });
		const button = reset.getByText('Reset');
		await waitFor(() => {
			fireEvent.click(button);
		});
		expect(onClick).toBeCalled();
	});
});
