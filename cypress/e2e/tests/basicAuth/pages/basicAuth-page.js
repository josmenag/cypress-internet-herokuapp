import { LabelComponent } from '../../../components/label-component'
import { BasicAuthLocatorsMap } from './basicAuth-locators'

export class BasicAuthPage {
	constructor() {
		this.successfulAuth_label = new LabelComponent(
			BasicAuthLocatorsMap.SUCCESSFUL_AUTH_LABEL,
		)
	}

	validateCorrectLogin() {
		return this.successfulAuth_label.containsText(
			'Congratulations! You must have the proper credentials.',
		)
	}

	validateIncorrectLogin() {
		return this.successfulAuth_label.containsText(
			'Congratulations! You must have the proper credentials.',
		)
	}
}
