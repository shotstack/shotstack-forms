<script lang="ts">
	import type { IParsedEditSchema } from '../../../ShotstackEditTemplate/types';
	import Subtitle from './Subtitle.svelte';
	import TextArea from './TextArea.svelte';
	export let template: IParsedEditSchema;
	export let handleTemplateInput: (input: string) => void;
</script>

<div data-cy="template-input-section" class="mb-6">
	<Subtitle>Paste template</Subtitle>
	<TextArea {template} {handleTemplateInput} />
</div>
