import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Subtitle from './Subtitle.svelte';

describe('result/Subtitle.svelte', () => {
	it('Should render an label component', () => {
		const subtitle = render(Subtitle);
		expect(subtitle.container.querySelector('label')).toBeInTheDocument();
	});
});
