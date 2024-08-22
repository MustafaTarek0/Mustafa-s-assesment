import { defineConfig,devices } from '@playwright/test';

// config.ts
export const baseUrl = 'https://automationexercise.com/';
export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  reporter: [['html', { outputFolder: './playwright-report' }]],
  use: {
    baseURL: 'https://automationexercise.com/',
    headless: false,
    viewport: null,
    ignoreHTTPSErrors: true,
		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		trace: 'on',
		video: 'retain-on-failure',
		screenshot: 'only-on-failure'
  },
  projects: [
		{
			name: 'chromium',
			use: {
				...devices['Desktop Chrome'],
				screenshot: 'on',
				video: 'retain-on-failure'
			}
		},
		{
			name: 'Microsoft Edge',
			use: {
				...devices['Desktop Edge'],
				channel: 'msedge',
				screenshot: 'on',
				video: 'retain-on-failure'
			}
		},
		{
			name: 'Google Chrome',
			use: {
				...devices['Desktop Chrome'],
				channel: 'chrome',
				screenshot: 'on',
				video: 'retain-on-failure'
			}
		},
    {
			name: 'webkit',
			use: { ...devices['Desktop Safari'] }
		}
    

		/*{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] }
		},


		/* Test against mobile viewports. */
		// {
		//   name: 'Mobile Chrome',
		//   use: { ...devices['Pixel 5'] },
		// },
		// {
		//   name: 'Mobile Safari',
		//   use: { ...devices['iPhone 12'] },
		// },

		/* Test against branded browsers. */
		// {
		//   name: 'Microsoft Edge',
		//   use: { ...devices['Desktop Edge'], channel: 'msedge' },
		// },
		// {
		//   name: 'Google Chrome',
		//   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
		// },
	]
});

	