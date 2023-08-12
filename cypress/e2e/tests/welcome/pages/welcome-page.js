import { ButtonComponent } from '../../../components/button-component'
import { WelcomeLocatorsMap } from './welcome-locators'

export class WelcomePage {
	constructor() {
		this.basicAuthButton = new ButtonComponent(
			WelcomeLocatorsMap.BASIC_AUTH_BUTTON
		)
		this.dropdownButton = new ButtonComponent(
			WelcomeLocatorsMap.DROPDOWN_BUTTON
		)
		this.sortableDataTablesButton = new ButtonComponent(
			WelcomeLocatorsMap.SORTABLE_DATA_TABLES_BUTTON
		)
	}

	getBasicAuthPage() {
		this.basicAuthButton.Click()
	}

	getDropdownPage() {
		this.dropdownButton.Click()
	}

	getSortableDataTablesPage() {
		this.sortableDataTablesButton.Click()
	}
}
