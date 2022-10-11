<script lang="ts">
	import DownloadSVG from './DownloadSVG.svelte';
	export let download = '';
</script>

<a
	href={download}
	download="result.json"
	class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center
	w-40 justify-center"
>
	<DownloadSVG />
	Download
</a>
