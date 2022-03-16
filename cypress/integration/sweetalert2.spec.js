/// <reference types = 'Cypress' />

it('sweetalert2', () => {
    cy.visit('/sweet_alert')

    cy.contains('button', 'Sucesso').click()

    cy.get('.swal-text').should('have.text', 'Você clicou no botão verde.')
})

it('sweetalert2', () => {
    cy.visit('/sweet_alert')

    cy.contains('button', 'Deu Ruim').click()

    cy.get('.swal-text').should('have.text', 'Você clicou no botão vermelho.')
})