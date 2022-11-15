<script lang="ts">
	import Label from './Label.svelte';
	import Input from './Input.svelte';
	import type { MergeField } from '../../../ShotstackEditTemplate/types';
	export let field: MergeField;
	export let inputId: string;
	export let handleFormInput: (field: MergeField, fieldReference?: MergeField) => void;
</script>

<div data-cy="label-input">
	<Label find={field.find} {inputId} />
	<Input find={field.find} replace={field.replace} {field} {handleFormInput} {inputId} />
</div>
