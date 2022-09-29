import type { Config } from 'jest';

const config: Config = {
	moduleFileExtensions: ['js', 'ts', 'svelte'],
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.ts$': 'ts-jest',
		'^.+\\.svelte$': ['svelte-jester', { preprocess: true }]
	},
	moduleNameMapper: { '^.+.(css|less|scss|svg)$': 'babel-jest' }
};

export default config;
