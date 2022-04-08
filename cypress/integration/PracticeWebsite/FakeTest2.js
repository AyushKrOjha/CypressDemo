/// <reference types="cypress"/>

describe('Test Suite twelve',function(){
    it('Test Cases',function(){
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept('GET',"https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
        (req)=>{
        req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"

        req.continue((res)=>{
           // expect(res.statuscode).to.equal(403)
        })
        }).as('dummyurl')
        cy.get('.btn.btn-primary').click()
        cy.wait('@dummyurl')
    })
})