<script lang="ts">
	import './Form.css';
	import './styles.css';

	import { ShotstackEditTemplateService } from '../../ShotstackEditTemplate/ShotstackEditTemplateService';
	import defaultJSONInput from './defaultMerge.json';
	import type { Asset, IParsedEditSchema, MergeField } from '../../ShotstackEditTemplate/types';
	import Fields from './fields/Fields.svelte';
	import ErrorField from './error/ErrorField.svelte';
	import SourceFields from './source/SourceFields.svelte';
	import Template from './template/Template.svelte';
	import Result from './result/Result.svelte';

	export let editTemplateService = new ShotstackEditTemplateService(defaultJSONInput);

	let template = editTemplateService.template;
	let result = editTemplateService.result;
	let error: Error | null = null;
	let sources = editTemplateService.getSrcPlaceholders();

	function handleTemplateInput(value: string) {
		editTemplateService.setTemplateSource(value);
		template = editTemplateService.template;
		result = editTemplateService.result;
		error = editTemplateService.error;
		sources = editTemplateService.getSrcPlaceholders();
	}

	function handleFormInput(mergeField: MergeField, fieldReference?: MergeField) {
		editTemplateService.updateResultMergeFields(mergeField, fieldReference);
		result = editTemplateService.result;
	}

	function makeBlob(template: IParsedEditSchema) {
		if (typeof window !== 'undefined') {
			const blob = new Blob([JSON.stringify(template, null, 2)], {
				type: 'text/plain'
			});
			return URL.createObjectURL(blob);
		} else return null;
	}

	function submit() {
		editTemplateService.submit();
		window.alert('Form successfully submitted!');
	}

	$: download = makeBlob(result) || '';

	function addField(input: MergeField) {
		editTemplateService.addMergeField(input);
		template = editTemplateService.template;
		result = editTemplateService.result;
		error = editTemplateService.error;
	}

	function removeField(field: MergeField) {
		const ref = editTemplateService.getMergeFieldItem(field);
		editTemplateService.removeMergeField(ref as MergeField);
		template = editTemplateService.template;
		result = editTemplateService.result;
		error = editTemplateService.error;
	}

	function resetSourceTemplate() {
		editTemplateService.setTemplateSource(editTemplateService.result);
		template = editTemplateService.template;
		result = editTemplateService.result;
		error = editTemplateService.error;
	}

	async function handleSourceFieldUpdate(file: FileList | null, asset: Asset) {
		await editTemplateService.updateSrc(file, asset);
		template = editTemplateService.template;
		result = editTemplateService.result;
	}
</script>

<div class="shotstack-mergefield-form">
	<section data-cy="form-container" class="max-w-lg my-4 mx-auto border rounded-xl px-7 py-4">
		<form>
			<Template {template} {handleTemplateInput} />
			<ErrorField {error} onClick={resetSourceTemplate} />
			<Fields fields={result.merge} {handleFormInput} {addField} {removeField} {error} />
			<SourceFields {sources} {handleSourceFieldUpdate} />
		</form>
		<Result {submit} {download} {result} {error} />
	</section>
</div>

<style src="./styles.css">
</style>
