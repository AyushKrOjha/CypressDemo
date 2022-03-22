/// <reference types="Cypress" />

describe('Practice Website Mouse Actions',function(){
    it('Mouse Over',function(){
        cy.visit(Cypress.env('url')+"/AutomationPractice/")
        cy.get('.mouse-hover-content').invoke('show');
        cy.contains('Top').click();
        cy.url().should('include','top');
    })
})