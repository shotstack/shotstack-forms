<script lang="ts">
	export let submit: () => void;
</script>

<button
	class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40"
	on:click={submit}
>
	Submit
</button>
