/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Practice Website handeling new window', function(){
    it('handeling frames', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/"); 
        cy.frameLoaded("#courses-iframe");
        cy.iframe().find("a[href='#/mentorship']").eq(0).click();
    })
})