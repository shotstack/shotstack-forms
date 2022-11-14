<script lang="ts">
	import type { MergeField } from '../../../../lib/ShotstackEditTemplate/types';
	export let field: MergeField;
	export let find: string;
	export let replace: string;
	export let handleFormInput: (updatedField: MergeField, fieldReference: MergeField) => void;
</script>

<input
	role="textbox"
	class="border w-full mb-3 pl-2 py-1 text-stone-500"
	type="text"
	value={replace}
	label={find}
	on:input={(e) => handleFormInput({ find, replace: e.currentTarget.value }, field)}
/>
