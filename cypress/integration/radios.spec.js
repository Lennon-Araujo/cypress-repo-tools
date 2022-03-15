/// <reference types = 'Cypress' />

it("The best Marvel's movies", () => {
  cy.visit('/radios')

  cy.get('input[value="avengers4"]').click().should('be.checked')
})