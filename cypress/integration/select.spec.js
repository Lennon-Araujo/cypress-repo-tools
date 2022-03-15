/// <reference types = 'Cypress' />

describe('Select', () => {
  before(() => {
    cy.visit('/select')
  })

  it("Should to select Tony Stark by ID", () => {
    cy.get('#avengerList')
    .select('Tony Stark')
    .should('have.value', 3)
  })

  it("Should to select Loki using Parent", () => {
    cy.contains('option', 'Selecione um personagem')
    .parent()
    .select('Loki')
    .should('have.value', 6)
  })

  it("Should to select Bruce Banner using Children", () => {
    cy.get('#avengerList')
    .select(5)
    .children()
    .eq(5)
    .should('have.text', 'Bruce Banner')
  })
})