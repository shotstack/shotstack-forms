<script lang="ts">
	export let value: string;
	export let onFocus: (e: HTMLInputElement) => void;
</script>

<input
	class="border w-full mb-3 pl-2 py-1 text-stone-500"
	type="text"
	bind:value
	on:focus|once={(e) => onFocus(e.currentTarget)}
/>
