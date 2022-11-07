<script lang="ts">
	import CloseSvg from './CloseSVG.svelte';

	export let onClick: () => void;
</script>

<button
	class="bg-blue-400 hover:bg-blue-700 text-white font-bold absolute top-0 right-0 rounded-full w-4 h-4 p-1"
	aria-label="Remove field"
	on:click|preventDefault={onClick}
>
	<CloseSvg />
</button>
