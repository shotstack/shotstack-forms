import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import SourceFields from './SourceFields.svelte';
import type { Placeholder } from '../../../ShotstackEditTemplate/types';
import { jest } from '@jest/globals';

describe('source/SourceFields.svelte', () => {
	const value = '{{ VALUE }}';
	const anotherValue = '{{ ANOTHER_VALUE }}';
	const sources: Placeholder[] = [
		{ asset: { src: value }, placeholder: value },
		{ asset: { src: anotherValue }, placeholder: anotherValue }
	];
	const mock = jest.fn();
	const handleSourceFieldUpdate = async () => {
		mock;
	};
	it('Should render SourceFields', () => {
		const sourceFields = render(SourceFields, { sources, handleSourceFieldUpdate });
		expect(sourceFields.getByText('Update sources')).toBeInTheDocument();
	});
	it('Should render a source component for each element in sources prop', () => {
		const sourceFields = render(SourceFields, { sources, handleSourceFieldUpdate });
		expect(sourceFields.getAllByRole('button')).toHaveLength(2);
		expect(sourceFields.getByText('VALUE')).toBeInTheDocument();
		expect(sourceFields.getByText('ANOTHER_VALUE')).toBeInTheDocument();
	});
	it("Should add a 'hidden' class when sources array is empty", () => {
		const sources: Placeholder[] = [];
		const sourceFields = render(SourceFields, { sources, handleSourceFieldUpdate });
		expect(sourceFields.container.querySelector('[data-cy=source-container]')).toHaveClass(
			'hidden'
		);
	});
});
