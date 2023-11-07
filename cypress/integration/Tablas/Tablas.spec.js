/// <reference types="Cypress" />

describe('Tablas estáticas y dinámicas', function () {

    it('Validamos texto en una tabla estática', () => {
        cy.visit('https://thefreerangetester.github.io/sandbox-automation-testing/')
        cy.get(':nth-child(8) > .col > .table > tbody > tr > td:nth-child(2)').each(($elm, index, $list) => {
            cy.log($elm)
            const t = $elm.text();
            if (t.includes('Mbappe')) {
                cy.get(':nth-child(8) > .col > .table > tbody > tr > td:nth-child(2)').eq(index).next().then(function (p) {
                    const r = p.text()
                    expect(r).to.contains(24)
                })
            }
        });
    });
});