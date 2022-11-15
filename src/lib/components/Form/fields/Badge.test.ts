import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Badge from './Badge.svelte';

describe('fields/Badge.svelte', () => {
	const onClick = jest.fn();
	const props = { onClick };
	it('Should render a button element', () => {
		const badge = render(Badge, props);
		expect(badge.getByRole('button')).toBeInTheDocument();
	});
	it('When pressed, the button should call onClick prop', () => {
		const badge = render(Badge, props);
		const button = badge.getByRole('button');
		button.click();
		expect(onClick).toHaveBeenCalled();
	});
	it('Should have a label that explains what the button does', () => {
		const badge = render(Badge, props);
		const button = badge.getByLabelText('Remove field');
		expect(button).toBeInTheDocument();
	});
});
