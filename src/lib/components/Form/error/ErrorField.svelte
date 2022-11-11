<script lang="ts">
	import Reset from './Reset.svelte';
	export let onClick: () => void;
	export let error: Error | null;
	$: message = (error && error.message) || '';
</script>

<div data-cy="error-container" class:hidden={!error}>
	<p data-cy="template-input-error" class="bg-rose-200 rounded py-2 my-4 px-4">
		<span class="monospace text-orange-900">
			{message}
		</span>
	</p>
	<div class="flex flex-row-reverse ">
		<Reset {onClick} />
	</div>
</div>
