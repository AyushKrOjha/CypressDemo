beforeEach(function(){
    cy.fixture('TwoWay').then(function(data){
        this.data=data;
    })
})