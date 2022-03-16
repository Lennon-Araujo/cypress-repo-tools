/// <reference types = 'Cypress' />

it('toasters', () => {
    cy.visit('/toaster')

    cy.contains('button', 'Toast Rápido').click()

    cy.get('div.notification')
    .should('be.visible')
    .and('have.text', 'Essa notificação é muito rápida!')
})