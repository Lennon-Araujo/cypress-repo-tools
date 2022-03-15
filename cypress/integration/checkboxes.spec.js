/// <reference types = 'Cypress' />

it("Top 5 Marvel's films", () => {
  cy.visit('/checkboxes')

  const films = [
    'blackpanther',
    'guardians',
    'cap3',
    'avengers4',
    'spider3'
  ]

  films.forEach(film => {
    cy.get(`.checkbox > input[name=${film}]`).check().should('be.checked')
  })
})