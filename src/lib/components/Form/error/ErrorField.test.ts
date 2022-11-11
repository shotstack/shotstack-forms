import '@testing-library/jest-dom';
import { render, waitFor, fireEvent } from '@testing-library/svelte';
import ErrorField from './ErrorField.svelte';

describe('error/ErrorField.svelte', () => {
	let onClick: () => void;
	let error: Error | null;
	let message: string;

	test('Should render ErrorField component', () => {
		const errorField = render(ErrorField, { props: { onClick, error } });
		expect(errorField.getByRole('button')).toBeInTheDocument();
	});
	test('should click button', async () => {
		const onClick = jest.fn();
		const errorField = render(ErrorField, { props: { onClick, error } });
		const button = errorField.getByText('Reset');
		await waitFor(() => {
			fireEvent.click(button);
		});
		expect(onClick).toBeCalled();
	});
	test('Should add the hidden class when ErrorField doesnt have error', async () => {
		const errorField = render(ErrorField, { props: { onClick, error } });
		expect(errorField.container.querySelector('[data-cy=error-container]')).toHaveClass('hidden');
	});
	test('Should remove the hidden class when ErrorField have error', async () => {
		const mockedError = new Error(message);
		const errorField = render(ErrorField, { props: { onClick, error: mockedError } });
		expect(errorField.container.querySelector('[data-cy=error-container]')).not.toHaveClass(
			'hidden'
		);
	});
});
