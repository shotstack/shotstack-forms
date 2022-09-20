import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const basePath = process.env.NODE_ENV === 'production' ? '/shotstack-merge-fields' : ""

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			precompress: false,
		}),
		appDir: "app",
		paths: {
			base: basePath
		},
		trailingSlash: 'always',

	}
};

export default config;
