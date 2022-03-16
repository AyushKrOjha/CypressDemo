/// <reference types="cypress" />

describe('Practice Website handeling new window', function(){
    it('retreaving attribute valur', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#opentab').then(function(el){
            const link = el.prop('href');
            cy.log(link);
            cy.visit(link);
        })
    })
})