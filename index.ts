import defaultJson from './src/lib/components/Form/defaultMerge.json';
import Shotstack from './src/lib/index';
const shotstack = new Shotstack(defaultJson);
const $app = document.querySelector<HTMLDivElement>('#app');

if ($app) shotstack.renderForm($app);

shotstack.on('upload', Shotstack.mediaUploadService);
