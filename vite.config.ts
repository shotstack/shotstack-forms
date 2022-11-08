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
				publicDir: 'src/lib/public',
				build: {
					outDir: 'package',
					lib: {
						entry: resolve(__dirname, 'src/lib/index.ts'),
						name: 'Shotstack',
						fileName: 'Shotstack',
						formats: ['es', 'iife']
					}
				}
			};
		default:
			return {
				plugins: [svelte()],
				build: {
					outDir: 'build'
				},
				base: './'
			};
	}
}

const config: UserConfig = configOptions(process.env.PACKAGE === 'package');

export default config;
