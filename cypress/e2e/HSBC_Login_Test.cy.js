describe('Login Scenarios', () => {
  it('Login Test', () => {
    cy.visit('https://www.hsbc.co.in/');
    cy.screenshot('h1');
    cy.title().should('eq','HSBC India - Credit Cards, NRI Services, Saving and Deposit');
    cy.contains('Log On').click({force: true});
    cy.get('.crh-chevron-link__text').click()
    cy.get('.col-sm-12 > .pull-left > span').contains('Log On')
    cy.get(':nth-child(5) > .col-sm-12').should('exist')
    cy.contains('Continue').should('be.disabled')
    cy.get('#username').type('abcdefg')
    cy.contains('Continue').should('be.enabled')
    cy.get('#username_help_link > [role="text"] > .icon').should('exist')
    cy.get('#username_help_link > [role="text"] > .icon').click()
    cy.get('.t25l > span').contains('Username')
    cy.get('.close-btn > [role="text"] > .icon').should('exist')
    cy.wait(10000)
    cy.get('.close-btn > [role="text"] > .icon').click({force: true})
 })
})