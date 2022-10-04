import { Form } from './components';
import { ShotstackEditTemplateService } from './ShotstackEditTemplate/ShotstackEditTemplateService';
import type { IShotstackEvents, TemplateEvent } from './ShotstackEditTemplate/types';

class Shotstack {
	public templateService: ShotstackEditTemplateService;
	constructor(
		initialTemplate?: unknown,
		public containerElement = document.querySelector('#shotstack-form-field') as HTMLElement
	) {
		this.templateService = new ShotstackEditTemplateService(initialTemplate);
		this.initialize();
	}

	on(eventName: TemplateEvent, callback: IShotstackEvents[TemplateEvent]) {
		this.templateService.on(eventName, callback);
	}

	submit() {
		this.templateService.submit();
	}

	initialize() {
		this.containerElement && this.render(this.containerElement);
	}
	render(container: HTMLElement) {
		new Form({
			target: container,
			props: {
				editTemplateService: this.templateService
			}
		});
	}
	display() {
		this.containerElement.style.display = 'block';
	}
	hide() {
		this.containerElement.style.display = 'none';
	}
	attach(newElement: HTMLElement) {
		this.remove();
		this.containerElement = newElement;
		this.render(this.containerElement);
	}
	remove() {
		this.containerElement.replaceChildren();
	}

	get container() {
		return this.containerElement;
	}
	merge() {
		return this.templateService.result;
	}
}

export default Shotstack;
