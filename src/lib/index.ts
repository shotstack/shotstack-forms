import { Form } from './components';

const Shotstack = {
	render: (container: Element) => new Form({ target: container })
};

const element = document.querySelector('#shotstack-form-field');
element && Shotstack.render(element);

export default Shotstack;
