const { defineConfig } = require('cypress')
const { getEnv } = require('./config/environment-handler')

module.exports = defineConfig({
	reporter: 'cypress-mochawesome-reporter',
	e2e: {
		video: false,
		defaultCommandTimeout: 5000,
		pageLoadTimeout: 10000,
		waitForAnimations: true,
		setupNodeEvents(on, config) {
			// implement node event listeners here
			require('cypress-mochawesome-reporter/plugin')(on)
			config.env.envCredentials = getEnv(config.env.envSelected)

			return config
		},
	},
})
