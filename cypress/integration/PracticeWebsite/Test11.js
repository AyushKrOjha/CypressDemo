/// <reference types="cypress" />
import HomePage from '../../support/PageObject/HomePage'
import ProductPage from '../../support/PageObject/ProductPage'
import InvoicePage from '../../support/PageObject/InvoicePage'
import PurchasePage from '../../support/PageObject/PurchasePage'
import cypress from 'cypress'
//import cypress from 'cypress'

describe("Adding From Table",function(){
    before(function(){
        cy.fixture('TwoWay').then(function(data){
            this.data=data;
        })
    })
    it("Adding Numbers",function(){
        Cypress.config('defaultCommandTimeout',8000)
        const homePage = new HomePage()
        const productPage = new ProductPage()
        const invoicePage = new InvoicePage()
        const purchasePage = new PurchasePage()
        cy.visit(Cypress.env('url')+"/angularpractice/");
        homePage.getShopButton().click();
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element);
        });
        productPage.getCheckoutButton().click();
        var sum = 0;
        cy.get('td:nth-Child(4) strong').each((el, index, $list)=>{
            const actualText = el.text();
            var res = actualText.split(" ");
            res = res[1].trim()
            sum = Number(sum)+Number(res)
        })
        cy.get('h3 strong').then(function(el){
            const actualText = el.text();
            var res = actualText.split(" ")
            const total = res[1].trim()
            expect(Number(total)).to.equal(sum)
        })
    })
})