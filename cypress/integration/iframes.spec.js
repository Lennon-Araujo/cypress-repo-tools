/// <reference types = 'Cypress' />

describe('IFRAMES', () => {

  const niceIFrame = function() {
    return cy
      .get('#weareqaninja')
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then(cy.wrap)
  }

  const badIFrame = function() {
    return cy
      .get('iframe[src*=instagram]')
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then(cy.wrap)
  }
  it('validar quantidade de seguidores - Iframe Bom', () => {
    cy.visit('/nice_iframe')

    niceIFrame()
      .contains('.FollowerCountText', '6,460 followers')
      .should('be.visible')
  })

  it('validar quantidade de seguidores - Iframe ruim, sem ID ou NAME', () => {
    cy.visit('/bad_iframe')

    badIFrame()
      .contains('.FollowerCountText', '6,460 followers')
      .should('be.visible')
  })
})