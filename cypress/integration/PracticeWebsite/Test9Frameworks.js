/// <reference types="cypress" />

describe("Framework Concepts", function(){
    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })
    it("Hooks", function(){
        cy.visit(Cypress.env('url')+"/angularpractice/")
        cy.get(".form-group:first-child input").type(this.data.name);
        cy.get("#exampleFormControlSelect1").select(this.data.gender).should('have.value','Male');
    })
})