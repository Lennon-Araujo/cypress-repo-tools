/// <reference types = 'Cypress' />

describe('Drag and drop', () => {
  before(() => {
    cy.visit('/drag_and_drop')
  })

  const dataTransfer = new DataTransfer();
  
  it("Should to drag Cypress's logo and drop to JS field", () => {

    cy.get('img[alt="Cypress"]').trigger('dragstart', {dataTransfer})
    cy.get('article[class$="nodejs"] > figure').trigger('drop', {dataTransfer})
  })

  it("Should to drag Robot's logo and drop to Python field", () => {

    cy.get('img[alt="Robot Framework"]').trigger('dragstart', {dataTransfer})
    cy.get('article[class$="python"] > figure').trigger('drop', {dataTransfer})
  })
})

