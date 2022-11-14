import '@testing-library/jest-dom';
import type { IParsedEditSchema } from '../../../ShotstackEditTemplate/types';
import { fireEvent, render } from '@testing-library/svelte';
import TextArea from './TextArea.svelte';

describe('template/TextArea.svelte', () => {
	const mock = jest.fn();
	const handleTemplateInput = (template: string) => {
		mock(template);
	};
	const template: IParsedEditSchema = { merge: [] };
	it('Should render a text box', () => {
		const textArea = render(TextArea, { handleTemplateInput, template });
		expect(textArea.getByRole('textbox')).toBeInTheDocument();
	});
	it('Text box should contain a correctly indentated', () => {
		const textArea = render(TextArea, { handleTemplateInput, template });
		expect(textArea.getByRole('textbox')).toHaveValue(JSON.stringify(template, null, 2));
	});
	it('Typing in the textbox should trigger the handleInput function', async () => {
		const textArea = render(TextArea, { handleTemplateInput, template });
		const newTemplate = JSON.stringify({ merge: [{ find: 'find', replace: 'replace' }] });
		const area = textArea.getByRole('textbox');
		fireEvent.input(area, { target: { value: newTemplate } });
		expect(mock).toHaveBeenCalledTimes(1);
		expect(mock).toHaveBeenCalledWith(newTemplate);
	});
});
