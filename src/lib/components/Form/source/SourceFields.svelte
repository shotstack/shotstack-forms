<script lang="ts">
	import type { Asset } from '$lib/ShotstackEditTemplate/types';
	import Source from './Source.svelte';
	export let sources: { placeholder: string; asset: Asset }[];
	export let handleSourceFieldUpdate: (files: FileList | null, asset: Asset) => void;
	const highOrderHandleChange = (asset: Asset) => (files: FileList | null) =>
		handleSourceFieldUpdate(files, asset);
</script>

<div data-cy="source-container" class:hidden={sources.length < 1}>
	<h1 class="text-teal-400 px-1">Update sources</h1>
	<div class="border p-4 mb-6">
		{#each sources as source}
			<Source label={source.placeholder} handleChange={highOrderHandleChange(source.asset)} />
		{/each}
	</div>
</div>
