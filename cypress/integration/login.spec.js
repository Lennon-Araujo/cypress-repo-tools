/// <reference types= 'Cypress' />

it('Should to fill inputs', () => {

  const login = {
    nickname: 'papitorocks',
    password: 'pwd123',
    welcomeText: 'Olá Papito, bem-vindo ao Orkut'
  }

  cy.visit('/login')
  cy.get('#nickId').type(login.nickname)
  cy.get('#passId').type(login.password)
  cy.get('button[type=submit][class="button is-link"]').click()

  cy.get('.box > h3[class^="title"]').should('have.text', login.welcomeText)
})