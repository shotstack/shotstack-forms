import '@testing-library/jest-dom';
import { render, screen, waitFor, fireEvent } from '@testing-library/svelte';
import Source from './Source.svelte';
import type { Asset } from '../../../ShotstackEditTemplate/types';
import { jest } from '@jest/globals';

describe('source/Source.svelte', () => {
	const textInputAriaLabel = 'Current source value';
	const fileInputAriaLabel = 'File upload';
	const asset: Asset = {
		src: '{{ VALUE }}'
	};
	const value = asset.src;
	const label = asset.src;
	const mock = jest.fn();
	const handleChange = async (): Promise<void> => {
		mock();
	};
	test('Should render Source component', () => {
		const source = render(Source, { asset, label, handleChange, value });
		expect(source.getByRole('button')).toBeInTheDocument();
	});
	test('Should render the placeholder value as a label without curly braces', () => {
		const source = render(Source, { asset, label, handleChange, value });
		expect(source.getByText('VALUE')).toBeInTheDocument();
	});
	test('Should render a text input with placeholder value as node value', () => {
		render(Source, { asset, label, handleChange, value });
		const input: HTMLInputElement = screen.getByLabelText<HTMLInputElement>(textInputAriaLabel);
		expect(input.value).toEqual(value);
	});
	test('Should render a file input', () => {
		render(Source, { asset, label, handleChange, value });
		const input: HTMLInputElement = screen.getByLabelText<HTMLInputElement>(fileInputAriaLabel);
		expect(input).toBeInTheDocument();
		expect(input.type).toEqual('file');
	});
	test('When file data is changed, it should call the handleChange function', async () => {
		render(Source, { asset, label, handleChange, value });
		const input: HTMLInputElement = screen.getByLabelText<HTMLInputElement>(fileInputAriaLabel);
		const file = new File(['Image mockup'], 'image.png', { type: 'image/png' });
		await waitFor(() =>
			fireEvent.change(input, {
				target: { files: [file] }
			})
		);
		expect(mock).toHaveBeenCalled();
	});
	test('File input should be disabled until handleChange finishes working', async () => {
		const mock = jest.fn();
		const handleChange = () =>
			new Promise<void>((resolve) => {
				setTimeout(() => {
					mock();
					resolve();
				}, 1000);
			});
		render(Source, { asset, label, handleChange, value });
		const input: HTMLInputElement = screen.getByLabelText<HTMLInputElement>(fileInputAriaLabel);
		const file = new File(['Image mockup'], 'image.png', { type: 'image/png' });
		await waitFor(() =>
			fireEvent.change(input, {
				target: { files: [file] }
			})
		);
		expect(input.disabled).toBe(true);
		await new Promise((r) => setTimeout(r, 1000));
		expect(input.disabled).toBe(false);
	});
	test('on file change, input value should update to latest asset.src value', async () => {
		const initialValue = '{{ VALUE }}';
		const modifiedValue = 'http://localhost';
		const asset: Asset = { src: initialValue };
		const mock = jest.fn();
		const handleChange = async () => {
			asset.src = modifiedValue;
			mock();
		};
		render(Source, { asset, label, handleChange, value });
		const textInput: HTMLInputElement = screen.getByLabelText<HTMLInputElement>(textInputAriaLabel);
		const fileInput: HTMLInputElement = screen.getByLabelText<HTMLInputElement>(fileInputAriaLabel);
		const file = new File(['Image mockup'], 'image.png', { type: 'image/png' });
		await waitFor(() =>
			fireEvent.change(fileInput, {
				target: { files: [file] }
			})
		);
		expect(textInput.value).not.toEqual(initialValue);
		expect(textInput.value).toEqual(modifiedValue);
	});
});
