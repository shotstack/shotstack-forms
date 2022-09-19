<script lang="ts">
	import '../app.css';
	import { ShotstackEditTemplateService } from '../ShotstackEditTemplate/ShotstackEditTemplateService';
	import type { MergeField } from '../ShotstackEditTemplate/ShotstackEditTemplateService';

	// DEFAULT JSON VALUE PLACEHOLDER TO JSON TEXTAREA INPUT
	const defaultJSONInput = {
		timeline: {
			soundtrack: {
				src: 'https://s3-ap-northeast-1.amazonaws.com/my-bucket/music.mp3',
				effect: 'fadeIn',
				volume: 0
			},
			background: 'string',
			fonts: [
				{
					src: 'https://s3-ap-northeast-1.amazonaws.com/my-bucket/open-sans.ttf'
				}
			],
			tracks: [
				{
					clips: [
						{
							asset: {
								type: 'video',
								src: 'https://s3-ap-northeast-1.amazonaws.com/my-bucket/video.mp4',
								trim: 2,
								volume: 1,
								crop: {
									top: 0.15,
									bottom: 0.15,
									left: 0,
									right: 0
								}
							},
							start: 2,
							length: 5,
							fit: 'cover',
							scale: 0,
							position: 'top',
							offset: {
								x: 0.1,
								y: -0.2
							},
							transition: {
								in: 'fade',
								out: 'fade'
							},
							effect: 'zoomIn',
							filter: 'greyscale',
							opacity: 0,
							transform: {
								rotate: {
									angle: 45
								},
								skew: {
									x: 0.5,
									y: 0.5
								},
								flip: {
									horizontal: true,
									vertical: true
								}
							}
						}
					]
				}
			],
			cache: true
		},
		output: {
			format: 'mp4',
			resolution: 'sd',
			aspectRatio: 969,
			size: {
				width: 1200,
				height: 800
			},
			fps: 25,
			scaleTo: 'preview',
			quality: 'medium',
			repeat: true,
			range: {
				start: 3,
				length: 6
			},
			poster: {
				capture: 1
			},
			thumbnail: {
				capture: 1,
				scale: 0.3
			},
			destinations: [
				{
					provider: 'shotstack',
					exclude: false
				}
			]
		},
		merge: [
			{
				find: 'NAME',
				replace: 'Jane'
			},
			{
				find: 'AGE',
				replace: 29
			}
		],
		callback: 'https://my-server.com/callback.php',
		disk: 'local'
	};

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

	function handleFormInput(mergeField: MergeField) {
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
</script>

<section class="max-w-lg my-4 mx-auto border rounded-xl px-7 py-4">
	<form>
		<div class="mb-6">
			<label for="json-input" class="text-teal-400 px-1">Paste template </label>
			<textarea
				class="w-full h-60 monospace border p-4 overflow-auto whitespace-pre resize-none"
				id="json-input"
				on:input={handleTemplateInput}
				value={JSON.stringify(template, null, 2)}
			/>
		</div>

		{#if templateError}
			<p class=" bg-rose-200 rounded py-2 px-4">
				<span class="monospace text-orange-900">
					{templateError}
				</span>
			</p>
		{/if}

		{#if template.merge?.length && !templateError}
			<h1 class="text-teal-400 px-1">Modify Merge Values</h1>
			<div class="border p-4 mb-6">
				{#each template.merge as { find, replace }}
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
				{/each}
			</div>
		{/if}
	</form>

	{#if resultError}
		<p class=" bg-rose-200 rounded py-2 px-4">
			<span class="monospace text-orange-900">
				{resultError}
			</span>
		</p>
	{/if}

	{#if !resultError && !templateError}
		<h1 class="text-teal-400 px-1 inline-block mr-2">Result</h1>
		<abbr title="Copy to clipboard">
			<img
				src="img/copy-regular.svg"
				alt="copy-button"
				class="h-4 cursor-pointer inline mb-1"
				on:click={handleCopyToClipboardClick}
			/>
		</abbr>
		<p class="h-60 overflow-auto  border p-4 whitespace-pre monospace">
			{JSON.stringify(result, null, 2)}
		</p>
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
