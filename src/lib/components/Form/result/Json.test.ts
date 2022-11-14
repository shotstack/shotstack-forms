import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Json from './Json.svelte';

describe('result/Json.svelte', () => {
	const text = JSON.stringify({ merge: [] });
	it('Should render the result template', () => {
		const json = render(Json, { text });
		expect(json.getByText(text)).toBeInTheDocument();
	});
});
