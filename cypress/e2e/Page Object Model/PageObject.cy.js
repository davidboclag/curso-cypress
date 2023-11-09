import FreeRangeHome from "../../pages/FreeRangeHome";

const home = new FreeRangeHome;

describe('Ejemplo de POM en la web Free Range Testers', () => {
    
    beforeEach(() => {
        home.navigateToHome();
    })

    it('El botón "Accedé al mejor precio", existe!', () => {
        home.accedeButton().should('exist');
        home.clickABotonAccede();
    });
});