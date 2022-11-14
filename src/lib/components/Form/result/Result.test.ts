import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import type { IParsedEditSchema } from '../../../ShotstackEditTemplate/types';
import Result from './Result.svelte';

describe('result/Result.svelte', () => {
	const result: IParsedEditSchema = { merge: [] };
	const download: string | undefined = '';
	const submit: () => void = jest.fn();
	const error: Error | null = null;
	it('Should render the result section', () => {
		const $result = render(Result, { result, download, submit, error });
		expect($result.getByText('Result')).toBeInTheDocument();
	});
	it('Should render the result template with proper indentation', () => {
		render(Result, { result, download, submit, error });
		const el = screen.getByText<HTMLParagraphElement>(/.+merge.+/);
		expect(el.textContent).toEqual(JSON.stringify(result, null, 2));
	});
	it('Should render an Icon that copies to the clipboard', async () => {
		const $result = render(Result, { result, download, submit, error });
		const button = $result.getByAltText('copy-button');
		expect(button).toBeInTheDocument();
	});
	it('Should render a Submit and Download button', () => {
		const $result = render(Result, { result, download, submit, error });
		expect($result.getByText('Download')).toBeInTheDocument();
		expect($result.getByText('Submit')).toBeInTheDocument();
	});
});
