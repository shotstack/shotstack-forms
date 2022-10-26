<script lang="ts">
	import Label from './Label.svelte';
	import Input from './Input.svelte';
	import type { MergeField } from '$lib/ShotstackEditTemplate/types';
	export let field: MergeField;
	export let handleFormInput: (field: MergeField, fieldReference?: MergeField) => void;
</script>

<div data-cy="label-input">
	<Label find={field.find} />
	<Input find={field.find} replace={field.replace} {field} {handleFormInput} />
</div>
