describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should login sucessfully', () => {
    cy.get('form').should('exist')

    cy.get('input[name="username"]').type('Gabriel Moretti')
    cy.get('input[name="password"]').type('123123')
    cy.get('button[type="submit"]').click()

    cy.url().should('contain', '/fines')
  })

  it('should show an error message for invalid credentials(password)', () => {
    cy.get('input[name="username"]').type('Gabriel Moretti')
    cy.get('input[name="password"]').type('wrongpassword')
    cy.get('button[type="submit"]').click()

    cy.get('.error-message').should('exist')
  })

  it('should show an error message for invalid credentials(username)', () => {
    cy.get('input[name="username"]').type('wrongusername')
    cy.get('input[name="password"]').type('123123')
    cy.get('button[type="submit"]').click()

    cy.get('.error-message').should('exist')
  })
})
