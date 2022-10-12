<script lang="ts">
	import type { MergeField } from '$lib/ShotstackEditTemplate/types';
	import Add from './Add.svelte';
	export let fields: MergeField[] = [];
	export let handleFormInput: (field: MergeField) => void;
	export let addField: (field: MergeField) => void;
</script>

<div>
	<div data-cy="merge-fields-input-section">
		<h1 class="text-teal-400 px-1">Modify Merge Values</h1>
		<div class="border p-4 mb-6">
			{#each fields as field}
				<div data-cy="label-input">
					<label for={field.find} class="block mb-2 monospace">
						{field.find}
					</label>
					<input
						class="border w-full mb-3 pl-2 py-1 text-stone-500"
						id={field.find}
						type="text"
						value={field.replace}
						on:input={(e) => handleFormInput({ find: field.find, replace: e.currentTarget.value })}
					/>
				</div>
			{/each}
		</div>
	</div>
	<Add {addField} />
</div>
