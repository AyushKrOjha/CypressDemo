/// <reference types="Cypress" />

describe('Practice Website Alerts',function(){
    it('Handeling Alerts',function(){
        cy.visit(Cypress.env('url')+"/AutomationPractice/")
        
        cy.get('tr td:nth-child(2)').each(($el, index, $list)=>{
            const text = $el.text();
            if(text.includes("Python")){
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                    const priceText = price.text();
                    expect(priceText).to.equals('25');
                })
            }
        })

        cy.get('.tableFixHead table tbody tr td:nth-child(3)').each(($e1, index, $list)=>{
            const text = $e1.text();
            if(text.includes("Bengaluru")){
                cy.get('.tableFixHead table tbody tr td:nth-child(3)').eq(index).next().then(function(Amount){
                    const Amounts = Amount.text();
                    expect(Amounts).to.equals('23');
                })
            }
        })
    })
})