/// <reference types="Cypress" />

describe('Practice Website Test Suite',function(){
    it('First Test Cases',function(){
        cy.visit(Cypress.env('url')+"/seleniumPractise/#/")
        cy.get(".search-keyword").type("ca");
        cy.wait(4000);
        cy.get(".product:visible").should('have.length',4);
        //parent clild chaining
        //Alayas
        cy.get(".products").as('productLocator')
        cy.get("@productLocator").find(".product").should('have.length',4);
        cy.get("@productLocator").find(".product").eq(2).contains('ADD TO CART').click();

        cy.get("@productLocator").as('productLocator');
        cy.get('@productLocator').find('.product').each(($el, index, $list)=>{

            const textVeg = $el.find('h4.product-name').text();

            if(textVeg.includes('Cashews')){
                cy.wrap($el).find('button').click();
            }
        })
        //Assertion to verify logo text is displayed correctely
        cy.get('.brand').should('have.text','GREENKART');
        //To Print in logs
        cy.get('.brand').then(function(logoElement){
            cy.log(logoElement.text());
        })
    })
})