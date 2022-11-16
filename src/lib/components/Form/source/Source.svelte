<script lang="ts">
	import type { Asset } from '../../../ShotstackEditTemplate/types';
	import { removeCurlyBraces } from '../../../ShotstackEditTemplate/validate';
	export let asset: Asset;
	export let value: string;
	export let label: string;
	export let handleChange: (files: FileList | null) => Promise<void>;
	let loading = false;
	$: disabled = loading;
	let loadFile = async (files: FileList | null) => {
		loading = true;
		try {
			await handleChange(files);
			value = asset.src;
		} catch (error) {
			console.log(error);
		} finally {
			loading = false;
		}
	};
</script>

<div data-cy="source-input">
	<label class="block mb-2 monospace" for="input">{removeCurlyBraces(label)}</label>
	<input
		aria-label="Current source value"
		class="border w-full mb-3 pl-2 py-1 text-stone-500"
		type="text"
		{value}
		disabled
	/>
	<input
		{disabled}
		role="button"
		aria-label="File upload"
		on:change={(e) => loadFile(e.currentTarget.files)}
		class="border w-full mb-3 pl-2 py-1 text-stone-500"
		type="file"
	/>
</div>
