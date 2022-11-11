import SubmitArea from './SubmitArea.svelte';
import '@testing-library/jest-dom';
import { render, waitFor, screen } from '@testing-library/svelte';

describe('submit/SubmitArea.svelte', () => {
	const download = `blob:${escape(JSON.stringify({ merge: [] }))}`;
	const submit = jest.fn();
	it('Should render a container for the ButtonDownload and Button Submit components', () => {
		const submitArea = render(SubmitArea, { download, submit });
		expect(submitArea.getByText('Download')).toBeInTheDocument();
		expect(submitArea.getByText('Submit')).toBeInTheDocument();
	});
	it('Should call the submit function when the Submit button is pressed', async () => {
		const submitArea = render(SubmitArea, { download, submit });
		const submitButton = submitArea.getByText('Submit');
		await waitFor(() => submitButton.click());
		expect(submit).toHaveBeenCalled();
	});
	it('Download button href value should be equal to download prop', () => {
		render(SubmitArea, { download, submit });
		const submitButton = screen.getByText<HTMLAnchorElement>('Download');
		expect(submitButton.href).toEqual(download);
	});
});
