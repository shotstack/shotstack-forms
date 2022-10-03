import { Form } from './components';
import { ShotstackEditTemplateService } from './ShotstackEditTemplate/ShotstackEditTemplateService';

class Shotstack {
	public templateService: ShotstackEditTemplateService;
	constructor(
		initialTemplate?: unknown,
		public container = document.querySelector('#shotstack-form-field')
	) {
		this.templateService = new ShotstackEditTemplateService(initialTemplate);
		this.initialize();
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
