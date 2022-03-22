class HomePage
{
    getNameTextBox(){
        return cy.get('.form-group:first-child input');
    }
    getEmailTextBox(){
        return cy.get('div.form-group:nth-child(2) input');
    }
    getPasswordTextBox(){
        return cy.get('div.form-group:nth-child(3) input');
    }
    getIcecreamCheckBox(){
        return cy.get('#exampleCheck1');
    }
    getGenderDropdown(){
        return cy.get('#exampleFormControlSelect1');
    } 
    getStudendCheckbox(){
        return cy.get('#inlineRadio1'); 
    }
    getEmployeeCheckbox(){
        return cy.get('#inlineRadio2');
    }
    getEenterpreneurCheckbox(){
        return cy.get('#inlineRadio3');
    }
    getTwoWayTextBox(){
        return cy.get('h4 input');
    }
    getShopButton(){
        return cy.get('.navbar-nav li:nth-child(2)');
    }
}

export default HomePage;