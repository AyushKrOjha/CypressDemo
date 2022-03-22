class ProductPage{
    getProductTitle(){
        return cy.get('h4.card-title');
    }
    getAddButtton(){
        return cy.get('button.btn.btn-info');
    }
    getCheckoutButton(){
        return cy.get('a.nav-link.btn.btn-primary');
    }
}

export default ProductPage;