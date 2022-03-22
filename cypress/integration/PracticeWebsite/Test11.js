/// <reference types="cypress" />
import HomePage from '../PageObject/HomePage'
import ProductPage from '../PageObject/ProductPage'
import InvoicePage from '../PageObject/InvoicePage'
import PurchasePage from '../PageObject/PurchasePage'
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
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
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