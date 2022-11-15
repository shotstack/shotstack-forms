import { Field, Form, Source } from './components';
import { ShotstackEditTemplateService } from './ShotstackEditTemplate/ShotstackEditTemplateService';
import type {
	IShotstackEvents,
	MergeField,
	ShotstackSourceData,
	ShotstackUploadURL,
	TemplateEvent
} from './ShotstackEditTemplate/types';

class Shotstack {
	public templateService: ShotstackEditTemplateService;
	public container: HTMLElement | undefined;
	constructor(initialTemplate?: unknown) {
		this.templateService = new ShotstackEditTemplateService(initialTemplate);
		this.container = undefined;
	}

	on(eventName: TemplateEvent, callback: IShotstackEvents[TemplateEvent]) {
		this.templateService.on(eventName, callback);
	}

	off(eventName: TemplateEvent, callback: IShotstackEvents[TemplateEvent]) {
		this.templateService.off(eventName, callback);
	}

	submit() {
		this.templateService.submit();
	}

	renderForm(container: HTMLElement) {
		this.container = container;
		new Form({
			target: container,
			props: {
				editTemplateService: this.templateService
			}
		});
	}

	renderElements(container: HTMLElement, nextToElement?: HTMLElement) {
		const inputs = this.getInputs();
		if (nextToElement) nextToElement.after(...inputs);
		else container.append(...inputs);
	}

	display() {
		if (this.container) this.container.style.display = 'block';
	}

	hide() {
		if (this.container) this.container.style.display = 'none';
	}

	attach(newElement: HTMLElement) {
		this.remove();
		this.container = newElement;
		this.renderForm(this.container);
	}

	remove() {
		this.container && this.container.replaceChildren();
	}

	merge() {
		return this.templateService.result;
	}

	load(input: unknown) {
		this.templateService.setTemplateSource(input);
	}

	addField(find: string, replace: string) {
		this.templateService.addMergeField({ find, replace });
	}

	removeField(item: MergeField) {
		this.templateService.removeMergeField(item);
	}

	getField(field: { find?: string; replace?: string }) {
		return this.templateService.getMergeFieldItem(field);
	}

	getInputs() {
		const container = document.createElement('div');
		this.renderMergeFields(container);
		this.renderSourceFields(container);
		return container.children;
	}

	renderMergeFields(container: HTMLElement) {
		this.templateService.template.merge.forEach(
			(field) =>
				new Field({
					target: container,
					props: {
						field,
						handleFormInput: (updatedField: MergeField) => {
							this.templateService.updateResultMergeFields(updatedField, field);
						}
					}
				})
		);
	}

	renderSourceFields(container: HTMLElement) {
		this.templateService.getSrcPlaceholders().forEach(
			(source) =>
				new Source({
					target: container,
					props: {
						value: source.asset.src,
						asset: source.asset,
						label: source.placeholder,
						handleChange: async (files: FileList | null) => {
							await this.templateService.updateSrc(files, source.asset);
						}
					}
				})
		);
	}
	static async mediaUploadService(files: FileList | null) {
		if (!files) throw new Error('File not found');
		const item = files.item(0);
		if (!item) throw new Error('File not found');
		const fetchURL = await fetch(
			'https://0oot5z5cud.execute-api.ap-southeast-2.amazonaws.com/upload',
			{
				method: 'POST'
			}
		);
		const { data }: ShotstackUploadURL = await fetchURL.json();
		await fetch(data.attributes.url, {
			method: 'PUT',
			body: item,
			headers: {
				'Content-Type': ''
			}
		});
		const finalUrl: string = await new Promise((res, rej) => {
			const interval = setInterval(async () => {
				const fetchSourceUrl =
					'https://0oot5z5cud.execute-api.ap-southeast-2.amazonaws.com/upload/';
				const fetchSource = await fetch(fetchSourceUrl + data.id);
				const fetchSourceResponse: ShotstackSourceData = await fetchSource.json();
				const sourceData = fetchSourceResponse.data;
				if (sourceData.attributes.status === 'ready' && sourceData.attributes.source) {
					clearInterval(interval);
					res(sourceData.attributes.source);
				} else if (sourceData.attributes.status !== 'importing') {
					clearInterval(interval);
					rej();
				}
			}, 1000);
		});
		return finalUrl;
	}
}

export default Shotstack;
