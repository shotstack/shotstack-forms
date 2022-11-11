import ButtonDownload from './ButtonDownload.svelte';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';

describe('submit/ButtonDownload.svelte', () => {
	const download = 'http://localhost/';
	it('Should render the component', () => {
		const buttonDownload = render(ButtonDownload, { download });
		expect(buttonDownload.getByText('Download')).toBeInTheDocument();
	});
	it('Anchor tag href should download a text file', async () => {
		const blob = JSON.stringify({ merge: [] });
		const download = `blob:${escape(blob)}}`;
		render(ButtonDownload, { download });
		const anchorText = screen.getByText<HTMLAnchorElement>('Download').href;
		expect(anchorText).toEqual(download);
	});
});
