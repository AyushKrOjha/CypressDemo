/// <reference types="Cypress" />

describe('Practice Website Alerts',function(){
    it('Handeling Alerts',function(){
        cy.visit(Cypress.env('url')+"/AutomationPractice/")
        cy.get('#alertbtn').click();
        cy.get('#confirmbtn').click();
        //window alert

        cy.on('window:alert',(str)=>{
            expect(str).to.equals('Hello , share this practice page and share your knowledge');
        })

        cy.on('window:confirm',(str)=>{
            expect(str).to.equals('Hello , Are you sure you want to confirm?');
        })

        cy.get('#opentab').invoke('removeAttr','target').click();

        cy.url().should('include','rahulshettyacademy');

        cy.go('back');

    })
})