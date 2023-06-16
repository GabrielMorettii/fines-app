describe('Sign Up Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should sign up sucessfully', () => {
    cy.get('.change-page').click()

    cy.get('form').should('exist')

    cy.get('input[name="username"]').type('Gabriel Moretti')
    cy.get('input[name="password"]').type('123123')
    cy.get('button[type="submit"]').click()

    cy.url().should('contain', '/')
  })

  it('should show an error message for invalid credentials(password less than 6 characteres)', () => {
    cy.get('.change-page').click()

    cy.get('form').should('exist')

    cy.get('input[name="username"]').type('Gabriel Moretti')
    cy.get('input[name="password"]').type('12312')
    cy.get('button[type="submit"]').click()

    cy.get('.error-message').should('exist')
  })
})
