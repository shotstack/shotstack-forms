<script lang="ts">
	let urlFile = '';
	export let label: string;
	export let handleChange: (files: FileList | null) => void;
</script>

<div data-cy="source-input">
	<label class="block mb-2 monospace" for="input">{label.slice(2, -2).trim()}</label>
	<input class="border w-full mb-3 pl-2 py-1 text-stone-500" type="text" value={urlFile} disabled />
	<input
		on:change={(e) => handleChange(e.currentTarget.files)}
		class="border w-full mb-3 pl-2 py-1 text-stone-500"
		type="file"
	/>
</div>
