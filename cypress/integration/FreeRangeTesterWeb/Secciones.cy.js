const testData = require('../../fixtures/titulos.json');

testData.forEach(testData => {
    describe('El título es el correcto para cada subpágina en Free Range Testers', () => {
        it('Valida que ' + testData.Title + ' sea el titulo de ' + testData.Location, () => {
            // Para modificar la respuesta, en este caso agregamos nuevos valores
            // cy.intercept('GET', {
            //     status: 500,
            //     body: {
            //         nombre: "Esto es stubbeado"
            //     }
            // });
            // cy.intercept('GET', (req) => {
            //     // Hacemos algo con la respuesta
            //     // req.body
            // });
            cy.visit(testData.Location);
            cy.title().should('include', testData.Title);
        });
    });
});