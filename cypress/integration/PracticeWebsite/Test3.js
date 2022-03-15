/// <reference types="Cypress" />

describe('Practive Website two', function(){
    it('Handeling Web Elements', function(){
        //checkboxes
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        cy.get('#checkbox-example').find("input[type='checkbox']").check(['option2','option3']);
        //static dropdown
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2');
        //dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('#ui-id-1 li div').each(($el, index, $list) => {
            if($el.text()=='India'){
                cy.wrap($el).click();
            }
        })
        cy.get('#autocomplete').should('have.value','India');

        //visible and invisible button
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible')

        //radio button
        cy.get("input[value='radio3']").click().should('be.checked');
    })
})