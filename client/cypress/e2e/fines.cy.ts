describe('Fines Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should list fines available', () => {
    cy.get('form').should('exist')

    cy.get('input[name="username"]').type('Gabriel Moretti')
    cy.get('input[name="password"]').type('123123')

    cy.get('button[type="submit"]').click()

    cy.get('select[name="state"]').select('AL')
    cy.get('select[name="service"]').select('DETRAN')
    cy.get('input[name="license_plate"]').type('ALB8901')

    cy.get('button[type="submit"]').click()

    cy.get('table').find('tbody').find('tr').should('have.length', 1)
  })

  it('should list non pending services when there are not any available fines', () => {
    cy.get('form').should('exist')

    cy.get('input[name="username"]').type('Gabriel Moretti')
    cy.get('input[name="password"]').type('123123')

    cy.get('button[type="submit"]').click()

    cy.get('select[name="state"]').select('SP')
    cy.get('select[name="service"]').select('all')
    cy.get('input[name="license_plate"]').type('DEF3456')
    cy.get('input[name="renavam"]').type('45678901234')
    cy.get('input[name="chassis"]').type('2HGCM82633A123456')

    cy.get('button[type="submit"]').click()

    cy.get('table')
      .find('tbody')
      .find('tr')
      .should('have.length', 3)
      .each(($row) => {
        cy.wrap($row).find('td').contains('Nada consta')
      })
  })

  it('should show an info message for invalid information', () => {
    cy.get('form').should('exist')

    cy.get('input[name="username"]').type('Gabriel Moretti')
    cy.get('input[name="password"]').type('123123')

    cy.get('button[type="submit"]').click()

    cy.get('select[name="state"]').select('AL')
    cy.get('select[name="service"]').select('DETRAN')
    cy.get('input[name="license_plate"]').type('ALB8902')

    cy.get('button[type="submit"]').click()

    cy.get('table').should('not.exist')
    cy.get('.not-found-container').should('exist')
  })
})
