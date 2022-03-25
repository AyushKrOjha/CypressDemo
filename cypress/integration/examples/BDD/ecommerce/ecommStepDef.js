import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import HomePage from '../../../../support/PageObject/HomePage'
import ProductPage from '../../../../support/PageObject/ProductPage'
import InvoicePage from '../../../../support/PageObject/InvoicePage'
import PurchasePage from '../../../../support/PageObject/PurchasePage'

const homePage = new HomePage()
const productPage = new ProductPage()
const invoicePage = new InvoicePage()
const purchasePage = new PurchasePage()

Given('I open Ecommerce page',function(){
    cy.visit(Cypress.env('url')+"/angularpractice/")
})
//When I add items to cart
When('I add items to cart',function(){
    homePage.getShopButton().click();
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element);
        });
        productPage.getCheckoutButton().click();
})
//And Validate the total prices 
And('Validate the total prices',()=>{
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
//Then select the country submit and verify thankyou
Then('select the country submit and verify thankyou',()=>{
    invoicePage.getCheckoutButton().click();
        purchasePage.getCountryTextBox().type("India");
        //Cypress.config('defaultCommandTimeout', 8000)
        purchasePage.getSuggestion().click();
        purchasePage.getTearmsCheckbox().click({force: true});
        purchasePage.getPurchaseButton().click();
        purchasePage.getAlert().should('have.text',"Success!");
})