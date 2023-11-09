import "cypress-axe";

describe('Pruebas de accesibilidad en el sitio Free Range Testers', () => {
    it('Cumple el sitio visitado en con los estándares de accesibilidad', () => {
        cy.visit('https://www.freerangetesters.com');
        cy.injectAxe();
        cy.checkA11y();
    });
    
    it('Cumple elbotón cursos con los estándares de accesibilidad', () => {
        cy.visit('https://www.freerangetesters.com');
        cy.injectAxe();
        cy.checkA11y('[data-testid="header-container"] > .sc-ldFCYb > .sc-csCMJt > :nth-child(1) > .sc-kFuwaP');
    });
});