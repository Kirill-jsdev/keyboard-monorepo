describe('First keyboard project tests', () => {
  it('click link create task', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a').contains('Create Task').click()
    cy.get('textarea').clear().type('Hello, this is a message.')
  })
})