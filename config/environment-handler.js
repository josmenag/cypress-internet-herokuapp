const staging = require('./staging.json')
const dev = require('./dev.json')
const local = require('./local.json')

exports.getEnv = function (envSelected) {
	if (envSelected == 'staging') {
		return staging
	} else if (envSelected == 'dev') {
		return dev
	} else if (envSelected == 'local') {
		return local
	}
}
