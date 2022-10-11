<script lang="ts">
	import ButtonDownload from './ButtonDownload.svelte';
	import ButtonSubmit from './ButtonSubmit.svelte';
	export let download = '';
	export let submit: () => void;
</script>

<div class="flex justify-between pt-4">
	<ButtonDownload {download} />
	<ButtonSubmit {submit} />
</div>
