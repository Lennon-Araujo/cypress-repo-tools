/// <reference types = 'Cypress' />

describe('SELECT 2', () => {
  before(()=>{
    cy.visit('/apps/select2/index.html')
  })
  it('Select 2 Single', () => {
    cy.get('.select2-selection--single').click()
    cy.contains('.select2-results__option', 'Cypress').click()
  })
  
  it('Select 2 Multiple', () => {

    const frameworks = [
      'Cypress',
      'Robot Framework',
      'Selenium Webdriver'
    ]

    frameworks.forEach( fw => {
      cy.get('.select2-selection--multiple').click()
      cy.contains('.select2-results__option', fw).click()
    })
  })
})