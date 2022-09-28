import type { Config } from 'jest';
import { defaults } from 'jest-config';

const config: Config = {
	moduleFileExtensions: ['js', 'ts', 'svelte'],
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.ts$': 'ts-jest',
		'^.+\\.svelte$': ['svelte-jester', { preprocess: true }]
	}
};

export default config;
