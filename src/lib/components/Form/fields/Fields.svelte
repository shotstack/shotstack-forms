<script lang="ts">
	import type { MergeField } from '$lib/ShotstackEditTemplate/types';
	import Add from './Add.svelte';
	import Badge from './Badge.svelte';
	export let error: Error | null;
	console.log(error);
	export let fields: MergeField[] = [];
	export let handleFormInput: (field: MergeField) => void;
	export let addField: (field: MergeField) => void;
	export let removeField: (field: MergeField) => void;
</script>

<div class:hidden={error}>
	<div data-cy="merge-fields-input-section">
		<h1 class="text-teal-400 px-1">Modify Merge Values</h1>
		<div class="border p-4 mb-6">
			{#each fields as field}
				<div data-cy="label-input" class="relative">
					<label for={field.find} class="block mb-2 monospace">
						{field.find}
					</label>
					<input
						role="textbox"
						class="border w-full mb-3 pl-2 py-1 text-stone-500"
						type="text"
						value={field.replace}
						on:input={(e) => handleFormInput({ find: field.find, replace: e.currentTarget.value })}
					/>

					<Badge onClick={() => removeField(field)} />
				</div>
			{/each}
		</div>
	</div>
	<Add {addField} />
</div>
