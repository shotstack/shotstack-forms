<script lang="ts">
	import './Form.css';
	import './styles.css';

	import copyRegular from './copy-regular.svg';
	import { ShotstackEditTemplateService } from '../../ShotstackEditTemplate/ShotstackEditTemplateService';
	import defaultJSONInput from './defaultMerge.json';
	import type { Asset, IParsedEditSchema, MergeField } from '$lib/ShotstackEditTemplate/types';
	import SubmitArea from './submit/SubmitArea.svelte';
	import Fields from './fields/Fields.svelte';
	import ErrorField from './error/ErrorField.svelte';
	import SourceFields from './source/SourceFields.svelte';

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

	function handleCopyToClipboardClick() {
		navigator.clipboard.writeText(JSON.stringify(result));
		alert('JSON copied to clipboard!');
	}

	function formatJson(json: IParsedEditSchema) {
		return JSON.stringify(json, null, 2);
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

	function handleSourceFieldUpdate(file: FileList | null, asset: Asset) {
		editTemplateService.updateSrc(file, asset);
		template = editTemplateService.template;
		result = editTemplateService.result;
	}
</script>

<div class="shotstack-mergefield-form">
	<section data-cy="form-container" class="max-w-lg my-4 mx-auto border rounded-xl px-7 py-4">
		<form>
			<div data-cy="template-input-section" class="mb-6">
				<label for="json-input" class="text-teal-400 px-1">Paste template </label>
				<textarea
					data-cy="template-input"
					class="w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none"
					id="json-input"
					on:input={(e) => handleTemplateInput(e.currentTarget.value)}
					value={formatJson(template)}
				/>
			</div>

			<ErrorField {error} onClick={resetSourceTemplate} />
			<Fields fields={result.merge} {handleFormInput} {addField} {removeField} {error} />
			<SourceFields {sources} {handleSourceFieldUpdate} />
		</form>

		{#if !error}
			<div data-cy="result-section">
				<h1 class="text-teal-400 px-1 inline-block mr-2">Result</h1>
				<abbr title="Copy to clipboard">
					<img
						src={copyRegular}
						alt="copy-button"
						class="h-4 cursor-pointer inline mb-1"
						on:click={handleCopyToClipboardClick}
					/>
				</abbr>
				<p data-cy="result" class="h-60 overflow-auto  border p-4 whitespace-pre monospace">
					{formatJson(result)}
				</p>
				<SubmitArea {submit} {download} />
			</div>
		{/if}
	</section>
</div>

<style src="./styles.css">
</style>
