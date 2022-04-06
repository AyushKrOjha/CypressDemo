/// <reference types="cypress"/>

describe('Test Suite twelve',function(){
    it('Test Cases',function(){
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept({
            method : "GET",
            url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        }, {
            statusCode : 200,
            body : [
                {"book_name":"RestAssured with Java","isbn":"RSU","aisle":"2301"}
            ]
        }).as('books')
        cy.get('.btn.btn-primary').click()
        cy.wait('@books')
        cy.get('p').should('be.visible')
    })
})