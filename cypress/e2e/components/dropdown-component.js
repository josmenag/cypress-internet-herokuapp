import { BaseComponent } from './base-component'
export class DropdownListComponent extends BaseComponent {
	constructor(locator) {
		super(locator)
		this.locator = locator
	}

	select(option) {
		cy.get(this.locator).should('exist').should('be.visible').select(option)
	}
}
