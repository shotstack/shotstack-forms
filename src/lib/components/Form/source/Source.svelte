<script lang="ts">
	let urlFile = '';

	function handleChange(event: FileList | null) {
		if (!event) return;
		urlFile = event.item(0)?.name || '';
	}
</script>

<div data-cy="source-input">
	<label class="block mb-2 monospace" for="input">Upload src</label>
	<input class="border w-full mb-3 pl-2 py-1 text-stone-500" type="text" value={urlFile} disabled />

	<label class="block mb-2 monospace" for="input-files">Add your files</label>
	<input
		on:change={(e) => handleChange(e.currentTarget.files)}
		class="border w-full mb-3 pl-2 py-1 text-stone-500"
		type="file"
	/>
</div>
