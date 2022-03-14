/// <reference types="Cypress" />

describe('Second Test Suit',function(){
    it('Placing order',function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".products").find(".product").each(($el, index, $list) => {
            const reqText = $el.find('h4.product-name').text();

            if(reqText.includes('Beetroot')){
                cy.wrap($el).find('button').click();
            }
        })
        cy.get(".cart-icon img").click();
        cy.get(".action-block").contains("PROCEED TO CHECKOUT").click();
        cy.wait(5000);
        cy.get(':nth-child(14)').click();
    })
})