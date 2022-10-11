<script lang="ts">
	import './Form.css';
	import './styles.css';
	import copyRegular from './copy-regular.svg';
	import { ShotstackEditTemplateService } from '../../ShotstackEditTemplate/ShotstackEditTemplateService';
	import defaultJSONInput from './defaultMerge.json';
	import type { IParsedEditSchema } from '$lib/ShotstackEditTemplate/types';
	import SubmitArea from './submit/SubmitArea.svelte';

	export let editTemplateService = new ShotstackEditTemplateService(defaultJSONInput);

	let template = editTemplateService.template;
	let result = editTemplateService.result;
	let error: Error | null = null;

	function handleTemplateInput(value: string) {
		editTemplateService.setTemplateSource(value);
		template = editTemplateService.template;
		result = editTemplateService.result;
		error = editTemplateService.error;
	}

	function handleFormInput(mergeField: { find: string; replace: string }) {
		editTemplateService.updateResultMergeFields(mergeField);
		result = editTemplateService.result;
	}

	function handleCopyToClipboardClick() {
		navigator.clipboard.writeText(JSON.stringify(result));
		alert('JSON copied to clipboard!');
	}

	function formatJson(json: IParsedEditSchema) {
		return JSON.stringify(json, null, 2);
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

			{#if error}
				<p data-cy="template-input-error" class=" bg-rose-200 rounded py-2 px-4">
					<span class="monospace text-orange-900">
						{error.message}
					</span>
				</p>
			{/if}

			{#if template.merge?.length && !error}
				<div data-cy="merge-fields-input-section">
					<h1 class="text-teal-400 px-1">Modify Merge Values</h1>
					<div class="border p-4 mb-6">
						{#each template.merge as { find, replace }}
							<div data-cy="label-input">
								<label for={find} class="block mb-2 monospace">
									{'{{ ' + find + ' }} '}
								</label>
								<input
									class="border w-full mb-3 pl-2 py-1 text-stone-500"
									id={find}
									type="text"
									value={replace}
									on:input={(e) => handleFormInput({ find, replace: e.currentTarget.value })}
								/>
							</div>
						{/each}
					</div>
				</div>
			{/if}
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
				<SubmitArea />
			</div>
		{/if}
	</section>
</div>

<style src="./styles.css">
</style>
