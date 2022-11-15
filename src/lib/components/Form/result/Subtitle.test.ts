import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Subtitle from './Subtitle.svelte';

describe('result/Subtitle.svelte', () => {
	it('Should render an h1 component', () => {
		const subtitle = render(Subtitle);
		expect(subtitle.container.querySelector('h1')).toBeInTheDocument();
	});
});
