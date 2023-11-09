class FreeRangeHome {
    // Locators
    accedeButton() {
        return cy.get('.sc-cRZddA > .sc-hhGHuG > .sc-bCDidY > .sc-dKfzgJ').as('BotonAccede');
    }
    
    // Acciones sobre los elementos
    clickABotonAccede() {
        this.accedeButton().click();
    }
    
    // Navegaciones
    navigateToHome() {
        cy.visit('https://www.freerangetesters.com/')
    }
}

export default FreeRangeHome