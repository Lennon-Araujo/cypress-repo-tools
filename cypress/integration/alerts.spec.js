/// <reference types = 'Cypress' />

describe('ALERTS EVENTS', () => {
  before(() => {
    cy.visit('/javascript_alerts')
  })

  it('alert tests', () => {
    cy.contains('button', 'Alerta').click()
  
    cy.on('window:alert', (result) => {
      expect(result).to.be.equal('Isto é uma mensagem de alerta')
    })
  })

  it('confirm tests - event approved', () => {
    cy.contains('button', 'Confirma').click()
  
    cy.on('window:confirm', () => true)

    cy.get('#result').should('have.text', 'Mensagem confirmada')
  })

  it('confirm tests - event disapproved', () => {
    cy.contains('button', 'Confirma').click()
  
    cy.on('window:confirm', () => false)

    cy.get('#result').should('have.text', 'Mensagem não confirmada')
  })

  it('prompt tests - should to show welcome message with my name', () => {
    cy.window().then($win => {
      cy.stub($win, 'prompt').returns('Lennon')
      cy.contains('button', 'Prompt').click()
    })
    cy.get('#result').should('have.text', 'Olá, Lennon')
  })

})