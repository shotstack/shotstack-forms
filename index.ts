import Shotstack from './src/lib/index';
import defaultJson from './src/lib/components/Form/defaultMerge.json';
const shotstack = new Shotstack(defaultJson);
const $app = document.querySelector<HTMLDivElement>('#app');

if ($app) shotstack.renderForm($app);
