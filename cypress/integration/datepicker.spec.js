/// <reference types = 'Cypress' />

describe('DATEPICKER', () => {
  before(() => {
    cy.visit('/datepicker')
  })
  it('Should to select 26/03/1996', () => {
    const date = {
      day: '28',
      month: 'mai',
      year: '2016'
    }

    cy.get('.datetimepicker-dummy-input').click()

    cy.get('.datepicker-nav-month').click()
    cy.contains('div.datepicker-month', date.month).click()

    cy.get('.datepicker-nav-year').click()
    // cy.get('div[data-year="1996"][class=datepicker-year]').click()
    cy.contains('.datepicker-year span', date.year).click()

    cy.contains('div[class="datepicker-date is-current-month"] > button.date-item', date.day).click()
  })

})