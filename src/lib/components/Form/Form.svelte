<script lang="ts">
	import './Form.css';
	import { ShotstackEditTemplateService } from '../../ShotstackEditTemplate/ShotstackEditTemplateService';
	import defaultJSONInput from './defaultMerge.json';

	// DEFAULT JSON VALUE PLACEHOLDER TO JSON TEXTAREA INPUT
	const editTemplateService = new ShotstackEditTemplateService(defaultJSONInput);

	let template = editTemplateService.template;
	let result = editTemplateService.result;
	let templateError: string;
	let resultError: string;

	function handleTemplateInput(e: any) {
		try {
			const updatedTemplate = editTemplateService.setTemplateSource(e.target.value);
			template = updatedTemplate;
			result = updatedTemplate;
			templateError = '';
		} catch (err: any) {
			templateError = err.message;
		}
	}

	function handleFormInput(mergeField: { find: string; replace: string }) {
		try {
			const updatedMergeFields = editTemplateService.updateResultMergeFields(mergeField);
			result = { ...result, merge: updatedMergeFields };
			resultError = '';
		} catch (err: any) {
			resultError = err.message;
		}
	}

	function handleCopyToClipboardClick() {
		navigator.clipboard.writeText(JSON.stringify(result));
		alert('JSON copied to clipboard!');
	}

	function safeApply(val: any) {
		if (typeof val === 'string') return val;
		else
			try {
				return JSON.stringify(val);
			} catch (error) {
				return val;
			}
	}
</script>

<section data-cy="form-container" class="max-w-lg my-4 mx-auto border rounded-xl px-7 py-4">
	<form>
		<div data-cy="template-input-section" class="mb-6">
			<label for="json-input" class="text-teal-400 px-1">Paste template </label>
			<textarea
				data-cy="template-input"
				class="w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none"
				id="json-input"
				on:input={handleTemplateInput}
				value={JSON.stringify(template, null, 2)}
			/>
		</div>

		{#if templateError}
			<p data-cy="template-input-error" class=" bg-rose-200 rounded py-2 px-4">
				<span class="monospace text-orange-900">
					{templateError}
				</span>
			</p>
		{/if}

		{#if template.merge?.length && !templateError}
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
								value={safeApply(replace)}
								on:input={(e) => handleFormInput({ find, replace: e.currentTarget.value })}
							/>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		{#if resultError}
			<p data-cy="merge-fields-input-error" class=" bg-rose-200 rounded py-2 px-4">
				<span class="monospace text-orange-900">
					{resultError}
				</span>
			</p>
		{/if}
	</form>

	{#if !resultError && !templateError}
		<div data-cy="result-section">
			<h1 class="text-teal-400 px-1 inline-block mr-2">Result</h1>
			<abbr title="Copy to clipboard">
				<img
					src="img/copy-regular.svg"
					alt="copy-button"
					class="h-4 cursor-pointer inline mb-1"
					on:click={handleCopyToClipboardClick}
				/>
			</abbr>
			<p data-cy="result" class="h-60 overflow-auto  border p-4 whitespace-pre monospace">
				{JSON.stringify(result, null, 2)}
			</p>
		</div>
	{/if}
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
	.monospace {
		font-family: monospace;
	}

	* {
		font-family: 'Nunito Sans';
	}
</style>