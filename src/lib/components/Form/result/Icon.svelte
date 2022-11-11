<script lang="ts">
	import { copyToClipboardAndAlert } from './utils.ts';
	import copyRegular from '../copy-regular.svg';
</script>

<abbr title="Copy to clipboard">
	<img
		src={copyRegular}
		alt="copy-button"
		class="h-4 cursor-pointer inline mb-1"
		on:click={copyToClipboardAndAlert}
	/>
</abbr>
