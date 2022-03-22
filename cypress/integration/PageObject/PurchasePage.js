class PurchasePage{
    getCountryTextBox(){
        return cy.get('#country');
    }
    getSuggestion(){
        return cy.get(".suggestions a");
    }
    getTearmsCheckbox(){
        return cy.get(".checkbox > label");
    }
    getPurchaseButton(){
        return cy.get(".btn.btn-success.btn-lg");
    }
    getAlert(){
        return cy.get("div.alert.alert-success.alert-dismissible strong");
    }
}
export default PurchasePage;