/// <reference types="Cypress"/>
import { WelcomePage } from '../../welcome/pages/welcome-page'
import { SortableDataTablePage } from '../pages/sortableDatatable-page'

const welcomePage = new WelcomePage()
const sortableDataTablePage = new SortableDataTablePage()

describe('Sortable Data Table suite', () => {
	beforeEach(() => {
		cy.visit('https://the-internet.herokuapp.com')
		welcomePage.getSortableDataTablesPage()
	})

	it('verifies table loads correctly', () => {
		sortableDataTablePage.table2.isDisplayed()
	})

	it('should sort the table by last name criteria', () => {
		sortableDataTablePage.sortTableBy('last-name')
		sortableDataTablePage.testSorting('lastName', 1)
	})

	it('should sort the table by first name criteria', () => {
		sortableDataTablePage.sortTableBy('first-name')
		sortableDataTablePage.testSorting('firstName', 2)
	})

	it('should sort the table by email criteria', () => {
		sortableDataTablePage.sortTableBy('email')
		sortableDataTablePage.testSorting('email', 3)
	})

	it('should sort the table by website name criteria', () => {
		sortableDataTablePage.sortTableBy('web-site')
		sortableDataTablePage.testSorting('website', 5)
	})
})
