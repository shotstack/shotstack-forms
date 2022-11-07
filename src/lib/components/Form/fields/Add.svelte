<script lang="ts">
	import type { MergeField } from '$lib/ShotstackEditTemplate/types';
	import { writable } from 'svelte/store';
	import type { Writable } from 'svelte/store';
	import AddInput from './AddInput.svelte';

	let find = writable('find');
	let replace = writable('replace');
	let clear = (element: Writable<string>) => element.set('');

	export let addField: (field: MergeField) => void;
</script>

<div data-cy="add-merge-field-section">
	<div>
		<h1 class="text-teal-400 px-1">Add a new merge field</h1>
		<div class="border p-4 mb-6">
			<AddInput label="MergeField.find" bind:value={$find} onFocus={() => clear(find)} />
			<AddInput label="MergeField.replace" bind:value={$replace} onFocus={() => clear(replace)} />
			<div class="flex flex-row-reverse">
				<button
					aria-label="Add field"
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end"
					on:click|preventDefault={() => addField({ find: $find, replace: $replace })}
				>
					Add
				</button>
			</div>
		</div>
	</div>
</div>
