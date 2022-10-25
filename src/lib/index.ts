import { Form, Input } from './components';
import { ShotstackEditTemplateService } from './ShotstackEditTemplate/ShotstackEditTemplateService';
import type { IShotstackEvents, MergeField, TemplateEvent } from './ShotstackEditTemplate/types';

class Shotstack {
	public templateService: ShotstackEditTemplateService;

	constructor(initialTemplate?: unknown, public container?: HTMLElement) {
		this.templateService = new ShotstackEditTemplateService(initialTemplate);
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

	renderForm(container: Element) {
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
				new Input({
					target: container,
					props: {
						find: field.find,
						replace: field.replace,
						field,
						handleFormInput: (updatedField: MergeField) => {
							this.templateService.updateResultMergeFields(updatedField, field);
						}
					}
				})
		);
		return container.children as HTMLCollectionOf<HTMLInputElement>;
	}
}

export default Shotstack;
