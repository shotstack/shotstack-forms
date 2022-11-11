<script lang="ts">
	import { formatJson } from '../common/helpers';
	import type { IParsedEditSchema } from '../../../ShotstackEditTemplate/types';
	export let handleTemplateInput: (input: string) => void;
	export let template: IParsedEditSchema;
</script>

<textarea
	data-cy="template-input"
	class="w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none"
	id="json-input"
	on:input={(e) => handleTemplateInput(e.currentTarget.value)}
	value={formatJson(template)}
/>
