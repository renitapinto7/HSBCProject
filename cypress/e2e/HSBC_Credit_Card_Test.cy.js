describe('Credit Card Test Scenario', () => {
  it('Credit Card Test', () => {
    cy.visit('https://www.hsbc.co.in/')
    cy.get('ul.row > :nth-child(1) > .header-mobile-doormat-0 > .header-main-navigation-title').trigger('mousedown')
    cy.get('#hp_main_link_5 > .A-LNKC28L-RW-ALL > .link').click()
    cy.get('.A-TYPS1L-RW-DEV').contains('Credit cards')
    cy.get('#chp_main_link_2 > .A-LNKC16R-RW-ALL > .link').contains('HSBC Cashback Credit Card')
    cy.get('#chp_main_link_2 > .A-LNKC16R-RW-ALL > .link').click()
    cy.get('#pp_intro_button_1').should('exist')
    cy.url().should('include', '/credit-cards/products/visa-cashback/')
    cy.get('#pp_intro_image_3').should('exist')
    cy.get('#pp_tools_richtext_2 > .A-TYP28L-RW-ALL').contains('INR999')
    cy.get('#pp_tools_richtext_3 > .A-TYP28L-RW-ALL > .A-TYP22L-RW-ALL').contains('INR999 (waived if you spend more than INR200,000 per year')
    cy.get('.header-logo > a > img').click()
    cy.title().should('eq','HSBC India - Credit Cards, NRI Services, Saving and Deposit')
})
})