/// <reference types="Cypress"/>
import { WelcomePage } from '../../welcome/pages/welcome-page'
import { DropDownPage } from '../pages/dropdown-page'

const welcomePage = new WelcomePage()
const dropdownPage = new DropDownPage()

describe('Dropdown Suite', () => {
	let optionsArray

	before(() => {
		cy.fixture('dropdownOptions.json').then((fixtureData) => {
			optionsArray = fixtureData.options
		})
	})

	beforeEach(() => {
		cy.visit('https://the-internet.herokuapp.com')
		welcomePage.getDropdownPage()
	})

	it('should validate the dropdown default option is correct', () => {
		dropdownPage.validateDropDownDefaultOption('Please select an option')
	})

	it('should correctly select options from the dropdown', () => {
		optionsArray.forEach((option) => {
			dropdownPage.selectOption(option)
			dropdownPage.validateSelectedOption(option)
		})
	})
})
