/// <reference types = 'Cypress' />

it('Should to show 7 rows of table', () => {
    cy.visit('/tables')

    cy.get('table tbody tr').then(series => {
        expect(series).to.have.length(7)
    })
})

it('Should to show Loki series', () => {
    cy.visit('/tables')

    cy.contains('table tbody tr', 'Loki').then(i => {
        expect(i).to.contain('Marvel')
        expect(i).to.contain('Disney+')
        expect(i).to.contain('2021')
    })
})

it("Should to remove Round6's item ", () => {
    cy.visit('/tables')

    cy.contains('table tbody tr', 'Round 6').then(i => {
        i.find('.delete').trigger('click')
    }).should('not.exist')

    cy.get('table tbody tr').then(series => {
        expect(series).to.have.length(6)
    })
})