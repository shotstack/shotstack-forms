<script lang="ts">
	import type { Placeholder } from '../../../ShotstackEditTemplate/types';
	import type { SourceFieldsCallback } from './utils';
	import { highOrderHandleChange } from './utils';
	import Source from './Source.svelte';
	export let sources: Placeholder[];
	export let handleSourceFieldUpdate: SourceFieldsCallback;
</script>

<div data-cy="source-container" class:hidden={sources.length < 1}>
	<h1 class="text-teal-400 px-1">Update sources</h1>
	<div class="border p-4 mb-6">
		{#each sources as source}
			<Source
				label={source.placeholder}
				handleChange={highOrderHandleChange(source.asset, handleSourceFieldUpdate)}
				value={source.asset.src}
				asset={source.asset}
			/>
		{/each}
	</div>
</div>
