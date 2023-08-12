/// <reference types ="Cypress"/>
import { WelcomePage } from '../../welcome/pages/welcome-page'
import { BasicAuthPage } from '../pages/basicAuth-page'

const welcomePage = new WelcomePage()
const basicAuthPage = new BasicAuthPage()

describe('Basic Auth Suite', () => {
	beforeEach(() => {
		cy.clearAllCookies()
		cy.clearLocalStorage()
	})

	it('should log in correctly with valid credentials as parameters', () => {
		cy.visit('https://the-internet.herokuapp.com/basic_auth', {
			auth: { username: 'admin', password: 'admin' },
		})
		basicAuthPage.validateCorrectLogin()
	})

	it('should log in correctly with valid credentials in the URL', () => {
		cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
		basicAuthPage.validateCorrectLogin()
	})

	it('should log in correctly using headers', function () {
		cy.visit('https://the-internet.herokuapp.com/basic_auth', {
			headers: {
				authorization: 'Basic YWRtaW46YWRtaW4=',
			},
			failOnStatusCode: false,
		})
		basicAuthPage.validateCorrectLogin()
	})

	it.skip('should not auth with invalid credentials', function () {
		cy.intercept('/basic_auth').as('response')
		cy.visit('https://fake:admin@the-internet.herokuapp.com/basic_auth', {
			failOnStatusCode: false,
		})
		cy.wait('@response').then((intercept) => {
			console.log(intercept.response.statusMessage)
			expect(intercept.response.statusMessage).to.equal('Unauthorized')
		})
	})

	it.skip('should not auth using headers with invalid credentials', function () {
		cy.intercept('/basic_auth').as('response')
		cy.visit('https://the-internet.herokuapp.com/basic_auth', {
			headers: {
				authorization: 'false YWRtaW46YWRtaW4=',
			},
			failOnStatusCode: false,
		})
		cy.wait('@response').then((intercept) => {
			console.log(intercept.response.statusMessage)
			expect(intercept.response.statusMessage).to.equal('Unauthorized')
		})
	})

	it.skip('should fail with invalid credentials', () => {
		cy.intercept('/basic_auth').as('response')
		cy.visit('https://the-internet.herokuapp.com/basic_auth', {
			auth: { username: 'admin2', password: 'admin' },
			failOnStatusCode: false,
		})
		cy.wait('@response').then((intercept) => {
			console.log(intercept.response.statusMessage)
			expect(intercept.response.statusMessage).to.equal('Unauthorized')
		})
	})
})
