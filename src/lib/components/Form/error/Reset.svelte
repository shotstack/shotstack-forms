<script lang="ts">
	export let onClick: () => void;
</script>

<button
	class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded align-self-end"
	on:click|preventDefault={onClick}
>
	Reset
</button>
