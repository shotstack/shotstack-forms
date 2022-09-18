import type { Config } from 'jest';
import { defaults } from 'jest-config';

const config: Config = {
	moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
	testEnvironment: 'jsdom'
};

export default config;
