import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'pnpm run build && pnpm run preview',
		port: 4173
	},
	testDir: 'tests/e2e-tests',
	testMatch: '**/*.ts',
	retries: 1,
	workers: 1
};

export default config;
