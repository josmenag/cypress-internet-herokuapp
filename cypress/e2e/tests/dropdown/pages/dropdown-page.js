import { DropdownListComponent } from '../../../components/dropdown-component'
import { DropdownLocatorsMap } from './dropdown-locators'
export class DropDownPage {
	constructor() {
		this.optionDropdown = new DropdownListComponent(
			DropdownLocatorsMap.OPTIONS_DROPDOWN,
		)
	}

	selectOption(option) {
		this.optionDropdown.select(option)
	}

	validateSelectedOption(option) {
		this.optionDropdown.containsText(option)
	}

	validateDropDownDefaultOption(expectedDropdowntext) {
		this.optionDropdown.containsText(expectedDropdowntext)
	}
}
