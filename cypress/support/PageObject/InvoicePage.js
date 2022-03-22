class InvoicePage{
    getCheckoutButton(){
        return cy.get(".btn.btn-success");
    }
    getContinueShoppingButton(){
        return cy.get("btn.btn-default");
    }
}
export default InvoicePage;