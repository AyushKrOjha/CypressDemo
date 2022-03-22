/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Practice Website handeling new window', function(){
    it('handeling frames', function(){
        cy.visit(Cypress.env('url')+"/AutomationPractice/")
        cy.frameLoaded("#courses-iframe");
        cy.iframe().find("a[href='#/mentorship']").eq(0).click();
    })
})