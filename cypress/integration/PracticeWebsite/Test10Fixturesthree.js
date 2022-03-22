/// <reference types="cypress" />
import HomePage from '../PageObject/HomePage'
import ProductPage from '../PageObject/ProductPage'
import InvoicePage from '../PageObject/InvoicePage'
import PurchasePage from '../PageObject/PurchasePage'
import cypress from 'cypress'

describe("Two Way Data Binding",function(){
    before(function(){
        cy.fixture('TwoWay').then(function(data){
            this.data=data;
        })
    })
    it("Two Way text Fiels",function(){
        Cypress.config('defaultCommandTimeout',8000)
        const homePage = new HomePage()
        const productPage = new ProductPage()
        const invoicePage = new InvoicePage()
        const purchasePage = new PurchasePage()
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        homePage.getNameTextBox().type(this.data.name0);
        homePage.getTwoWayTextBox().should('have.value',this.data.name0);
        homePage.getEenterpreneurCheckbox().should('be.disabled');
        homePage.getNameTextBox().clear().type(this.data.name1);
        homePage.getNameTextBox().should('have.attr','minlength','2');
        //cy.get(".form-group:first-child input").then(function(el){
        //    var min = el.prop('minlength');
        //    expect(min).to.equals('2');
        //})
        homePage.getShopButton().click();
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element);
        });
        productPage.getCheckoutButton().click();
        //cy.get('td:nth-Child(4) strong').each((el, index, $list)=>{
        //    el.text()
        //})
        invoicePage.getCheckoutButton().click();
        purchasePage.getCountryTextBox().type("India");
        purchasePage.getSuggestion().click();
        purchasePage.getTearmsCheckbox().click();
        purchasePage.getPurchaseButton().click();
        purchasePage.getAlert().should('have.text',"Success!");
    })
})