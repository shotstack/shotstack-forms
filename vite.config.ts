import { sveltekit } from '@sveltejs/kit/vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import type { UserConfig } from 'vite';
import { resolve } from 'path';
import sveltePreprocess from 'svelte-preprocess';

function configOptions(environment: boolean): UserConfig {
	switch (environment) {
		case true:
			return {
				plugins: [
					svelte({
						preprocess: [sveltePreprocess({ postcss: true })]
					})
				],
				build: {
					outDir: 'package',
					lib: {
						entry: resolve(__dirname, 'src/lib/index.ts'),
						name: 'Shotstack',
						fileName: 'Shotstack'
					}
				}
			};
		default:
			return {
				plugins: [sveltekit()]
			};
	}
}

const config: UserConfig = configOptions(process.env.PACKAGE === 'package');

export default config;
