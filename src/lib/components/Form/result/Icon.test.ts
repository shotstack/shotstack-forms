import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/svelte';
import type { IParsedEditSchema } from '../../../ShotstackEditTemplate/types';
import Icon from './Icon.svelte';

Object.assign(navigator, {
	clipboard: {
		writeText: jest.fn()
	}
});

Object.assign(window, {
	alert: jest.fn()
});

describe('result/Icon.svelte', () => {
	const result: IParsedEditSchema = { merge: [] };
	it('Should render a button icon that copies the result to the clipboard', () => {
		const icon = render(Icon, { result });
		expect(icon.getByAltText('copy-button')).toBeInTheDocument();
	});
	it('On click, should copy the result template to the clipboard and alert', async () => {
		const icon = render(Icon, { result });
		jest.spyOn(navigator.clipboard, 'writeText');
		jest.spyOn(window, 'alert');
		await waitFor(() => {
			icon.getByAltText('copy-button').click();
		});
		expect(navigator.clipboard.writeText).toHaveBeenCalledWith(JSON.stringify(result));
		expect(window.alert).toHaveBeenCalledTimes(1);
	});
});
