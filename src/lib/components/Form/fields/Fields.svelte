<script lang="ts">
	import type { MergeField } from '$lib/ShotstackEditTemplate/types';
	import Add from './Add.svelte';
	import Badge from './Badge.svelte';
	import Input from './Input.svelte';
	export let error: Error | null;
	export let fields: MergeField[] = [];
	export let handleFormInput: (field: MergeField, fieldReference?: MergeField) => void;
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
					<Input find={field.find} replace={field.replace} {field} {handleFormInput} />
					<Badge onClick={() => removeField(field)} />
				</div>
			{/each}
		</div>
	</div>
	<Add {addField} />
</div>
