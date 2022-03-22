/// <reference types="cypress" />

describe('Practice Website handeling new window', function(){
    it('retreaving attribute valur', function(){
        cy.visit(Cypress.env('url')+"/AutomationPractice/")
        cy.get('#opentab').then(function(el){
            const link = el.prop('href');
            cy.log(link);
            cy.visit(link);
        })
    })
})