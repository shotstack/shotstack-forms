<script lang="ts">
	import type { MergeField } from '$lib/ShotstackEditTemplate/types';

	let find = 'FIND';
	let replace = 'REPLACE';
	function clear(target: HTMLInputElement) {
		target.value = '';
	}
	export let addField: (field: MergeField) => void;
</script>

<div class="flex">
	<div>
		<input
			class="border w-full mb-3 pl-2 py-1 text-stone-500"
			type="text"
			bind:value={find}
			on:focus|once={(e) => clear(e.currentTarget)}
		/>
		<input
			class="border w-full mb-3 pl-2 py-1 text-stone-500"
			type="text"
			bind:value={replace}
			on:focus|once={(e) => clear(e.currentTarget)}
		/>
	</div>
	<div
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-3xl"
		on:click={() => addField({ find, replace })}
	>
		+
	</div>
</div>
