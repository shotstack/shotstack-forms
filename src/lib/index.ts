import { Field, Form, Source } from './components';
import { ShotstackEditTemplateService } from './ShotstackEditTemplate/ShotstackEditTemplateService';
import type { IShotstackEvents, MergeField, TemplateEvent } from './ShotstackEditTemplate/types';

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

	renderElements(container: HTMLElement, after?: HTMLElement) {
		const inputs = this.getInputs();
		if (after) after.after(...inputs);
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
		this.templateService.getSrcPlaceholders().forEach(
			(source) =>
				new Source({
					target: container,
					props: {
						label: source.placeholder,
						asset: source.asset,
						handleChange: (files: FileList | null) => {
							this.templateService.updateSrc(files, source.asset);
						}
					}
				})
		);
		return container.children as HTMLCollectionOf<HTMLInputElement>;
	}

	getInputSource() {
		const container = document.createElement('div');
		new Source({
			target: container
		});
		return container.children as HTMLCollection;
	}
}

export default Shotstack;
