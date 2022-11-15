<script lang="ts">
	export let find: string;
	export let inputId: string;
</script>

<label for={inputId} class="block mb-2 monospace" aria-label="Current label">
	{find}
</label>
