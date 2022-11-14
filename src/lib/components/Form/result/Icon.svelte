<script lang="ts">
	import { copyToClipboardAndAlert } from './utils';
	import copyRegular from '../copy-regular.svg';
	import type { IParsedEditSchema } from '../../../ShotstackEditTemplate/types';
	export let result: IParsedEditSchema;
</script>

<abbr title="Copy to clipboard">
	<img
		src={copyRegular}
		alt="copy-button"
		class="h-4 cursor-pointer inline mb-1"
		on:click={() => copyToClipboardAndAlert(result)}
	/>
</abbr>
