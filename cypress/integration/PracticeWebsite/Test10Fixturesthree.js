/// <reference types="cypress" />

describe("Two Way Data Binding",function(){
    before(function(){
        cy.fixture('TwoWay').then(function(data){
            this.data=data;
        })
    })
    it("Two Way text Fiels",function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get(".form-group:first-child input").type(this.data.name0);
        cy.get("h4 input").should('have.value',this.data.name0);
        cy.get('#inlineRadio3').should('be.disabled');
        cy.get(".form-group:first-child input").clear().type(this.data.name1);
        cy.get(".form-group:first-child input").should('have.attr','minlength','2');
        //cy.get(".form-group:first-child input").then(function(el){
        //    var min = el.prop('minlength');
        //    expect(min).to.equals('2');
        //})
        cy.selectProduct('Blackberry');
    })
})