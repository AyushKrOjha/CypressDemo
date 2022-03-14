/// <reference types="Cypress" />

describe('My First Test Suite', function(){
it('My First Test Case', function(){

cy.visit("https://topgeek.io/");
cy.wait(4000);
cy.get('.css-79wky').click();
cy.get("div[type='Full Time']").should('have.length',7);

})

})