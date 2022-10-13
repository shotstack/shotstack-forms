<script lang="ts">
	import type { MergeField } from '$lib/ShotstackEditTemplate/types';
	import AddInput from './AddInput.svelte';
	let find = 'find';
	let replace = 'replace';
	function clear(target: HTMLInputElement) {
		target.value = '';
	}
	export let addField: (field: MergeField) => void;
</script>

<div>
	<div>
		<h1 class="text-teal-400 px-1">Add a new merge field</h1>
		<div class="border p-4 mb-6">
			<AddInput bind:value={find} onFocus={clear} />
			<AddInput bind:value={replace} onFocus={clear} />
			<div class="flex flex-row-reverse">
				<button
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end"
					on:click|preventDefault={() => addField({ find, replace })}
				>
					Add
				</button>
			</div>
		</div>
	</div>
</div>
