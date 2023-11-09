describe('Tablas estáticas y dinámicas', function () {
    
    // it('Validamos texto en una tabla estática', () => {
    //     cy.visit('https://thefreerangetester.github.io/sandbox-automation-testing/')
    //     cy.get(':nth-child(8) > .col > .table > tbody > tr > td:nth-child(2)').each(($elm, index, $list) => {
    //         cy.log($elm)
    //         const t = $elm.text();
    //         if (t.includes('Mbappe')) {
    //             cy.get(':nth-child(8) > .col > .table > tbody > tr > td:nth-child(2)').eq(index).next().then(function (p) {
    //                 const r = p.text()
    //                 expect(r).to.contains(24)
    //             })
    //         }
    //     });
    // });

    // Una manera más rápida de realizar el it anterior sería de la siguiente manera
    it('Validamos una tabla dinámica', () => {
        cy.visit('https://thefreerangetester.github.io/sandbox-automation-testing/')
        cy.contains('td', 'Mbappe').next().should('have.text', '24')
    });

    // it('Validamos una tabla dinámica', () => {
    //     cy.visit('https://chercher.tech/practice/dynamic-table')
    //     cy.contains('td', 'facebook.com').prev().find('input').check()
    // });
    
});