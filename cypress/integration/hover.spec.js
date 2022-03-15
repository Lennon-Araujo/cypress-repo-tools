/// <reference types = 'Cypress' />

it ('Mouse Over', () => {
  cy.visit('/hovers')

  const techs = [
    {img: 'img[src*=python]', tag: 'span.tag-python', brand: 'Python'},
    {img: 'img[src*=golang]', tag: 'span.tag-golang', brand: 'Golang'},
    {img: 'img[src*=nodejs]', tag: 'span.tag-nodejs', brand: 'Node.js'},
    {img: 'img[src*=netcore]', tag: 'span.tag-netcore', brand: '.NETCore'}
  ];

  techs.forEach( tech => {
    cy.get(tech.img)
    .realHover('mouse')
  
    cy.get(tech.tag)
    .should('be.visible')
    .and('have.text', tech.brand)
  })
})