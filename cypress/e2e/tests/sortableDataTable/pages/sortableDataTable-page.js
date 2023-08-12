import { ButtonComponent } from '../../../components/button-component'
import { SortableDataTableLocatorsMap } from './sortableDataTable-locators'
import { LabelComponent } from '../../../components/label-component'

export class SortableDataTablePage {
	constructor() {
		this.lastNameHeaderButton = new ButtonComponent(
			SortableDataTableLocatorsMap.LAST_NAME_HEADER_BUTTON,
		)
		this.firstNameHeaderButton = new ButtonComponent(
			SortableDataTableLocatorsMap.FIRST_NAME_HEADER_BUTTON,
		)
		this.emailHeaderButton = new ButtonComponent(
			SortableDataTableLocatorsMap.EMAIL_HEADER_BUTTON,
		)
		this.websiteHeaderButton = new ButtonComponent(
			SortableDataTableLocatorsMap.WEBSITE_HEADER_BUTTON,
		)
		this.tableElementLabel = new LabelComponent(
			SortableDataTableLocatorsMap.TABLE_ELEMENT_LABEL,
		)
		this.table2 = new LabelComponent(SortableDataTableLocatorsMap.TABLE_2_LABEL)
	}

	sortTableBy(type) {
		cy.get(
			SortableDataTableLocatorsMap.GENERIC_HEADER_BUTTON.replace(
				'{type}',
				type,
			),
		).click()
	}

	tableCellShouldHaveValue(row, column, value) {
		cy.get(
			SortableDataTableLocatorsMap.TABLE_ELEMENT_LABEL.replace(
				'{column}',
				column,
			).replace('{row}', row),
		).should('have.text', value)
	}

	sortByKey(array, key) {
		return array.slice().sort((a, b) => {
			const aValue = a[key]
			const bValue = b[key]
			if (aValue < bValue) return -1
			if (aValue > bValue) return 1
			return 0
		})
	}

	testSorting(criteria, testedColumn) {
		cy.fixture('./tableData.json').then((tableData) => {
			const sortedData = this.sortByKey(tableData, criteria)
			sortedData.forEach((rowData, rowIndex) => {
				const expectedValue = rowData[criteria]
				const expectedDues = rowData.dues

				this.tableCellShouldHaveValue(rowIndex + 1, testedColumn, expectedValue)
				this.tableCellShouldHaveValue(rowIndex + 1, 4, expectedDues)
			})
		})
	}
}
