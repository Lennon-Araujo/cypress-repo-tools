/// <reference types = "Cypress" />

describe("Iniciando no cypress", () => {
    it("Acessar a home do training wheels", () => {
        cy.visit('/')
				cy.title().should('eq', 'Training Wheels | QAninja')
				cy.get('.menu-list').should('be.visible')
    })
})
