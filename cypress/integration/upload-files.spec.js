/// <reference types = 'Cypress' />

it('upload image', () => {
  cy.visit('/upload')

  const imageFile = 'cypress/fixtures/catioro.jpg';

  cy.get('#file-upload').selectFile(imageFile, {force: true})
  cy.get('input[class="button is-success"][type=submit]').click()


  cy.get('img[src="/uploads/catioro.jpg"]', {timeout: 7000}).should('be.visible')
  // cy.get('figure > img[alt="Upload image"]', {timeout: 7000}).should('have.attr', 'src', '/uploads/catioro.jpg').and('be.visible')
})