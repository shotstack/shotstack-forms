import '@testing-library/jest-dom';
import type { IParsedEditSchema } from '../../../ShotstackEditTemplate/types';
import { fireEvent, render } from '@testing-library/svelte';
import Template from './Template.svelte';

describe('template/Template.svelte', () => {
	const template: IParsedEditSchema = { merge: [] };
	const mock = jest.fn();
	const handleTemplateInput = (input: string) => {
		mock(input);
	};
	it('Should render the component', () => {
		const $template = render(Template, { template, handleTemplateInput });
		expect($template.getByText('Paste template')).toBeInTheDocument();
	});
	it('Should render a textbox with an indented template', () => {
		const $template = render(Template, { template, handleTemplateInput });
		expect($template.getByRole('textbox')).toHaveValue(JSON.stringify(template, null, 2));
	});
	it('Typing in the textbox should trigger the handleInput function', async () => {
		const $template = render(Template, { template, handleTemplateInput });
		const newTemplate = JSON.stringify({ merge: [{ find: 'find', replace: 'replace' }] });
		const area = $template.getByRole('textbox');
		fireEvent.input(area, { target: { value: newTemplate } });
		expect(mock).toHaveBeenCalledTimes(1);
		expect(mock).toHaveBeenCalledWith(newTemplate);
	});
});
