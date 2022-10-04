import { Form } from './components';
import { ShotstackEditTemplateService } from './ShotstackEditTemplate/ShotstackEditTemplateService';
import type { IShotstackEvents, TemplateEvent } from './ShotstackEditTemplate/types';

class Shotstack {
	public templateService: ShotstackEditTemplateService;
	constructor(
		initialTemplate?: unknown,
		public container = document.querySelector('#shotstack-form-field')
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
		this.container && this.render(this.container);
	}
	render(container: Element) {
		new Form({
			target: container,
			props: {
				editTemplateService: this.templateService
			}
		});
	}
}

export default Shotstack;
