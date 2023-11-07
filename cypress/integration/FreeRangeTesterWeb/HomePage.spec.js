describe('Home de www.freerangetesters.com', () => {
    beforeEach(() => {
        cy.visit('https://www.freerangetesters.com/')
    })

    it('should have a title', () => {
        cy.title().should('include', 'Free Range Testers')
        // cy.get('[data-testid="header-container"] > .sc-ldFCYb > .sc-csCMJt > :nth-child(1) > .sc-kFuwaP').click() //click en Cursos
        // cy.xpath('//*[@id="page_header"]/div/section/div/header/nav/ul/li[1]/a').click() //click en Cursos
        // cy.contains('Registrarme').click()
    })
    
    it('Hay 4 cursos con el botón Ver cursos', () => {
        cy.xpath('//*[@id="page_header"]/div/section/div/header/nav/ul/li[1]/a').click()
        cy.get('[data-testid="grid-item"] > .sc-kMrHXl > .sc-ilEZps > .sc-jItqcz > .sc-hhGHuG > .sc-dKfzgJ').should('have.length', 9)
    })

    it('El campo Nombre del formulario, posee clase sc-dnwKUv aMecH', () => {
        cy.get('#email-form-name').should('have.class', 'sc-dnwKUv aMecH')
    });

    it('Hay un link llamado Blog en la barra de navegación', () => {
        cy.get('[data-testid="header-container"] > .sc-ldFCYb > .sc-csCMJt > :nth-child(3) > .sc-kFuwaP').should('have.text', 'Blog')
        // cy.get('[data-testid="header-container"] > .sc-ldFCYb > .sc-csCMJt > :nth-child(3) > .sc-kFuwaP').should('have.value', 'Blog')
    });

    it('Existe un botón de Accedé al mejor precio', () => {
        // cy.wait(4000) // Esto es una mala práctica, pero se utiliza para esperar x segundos antes de ejecutar las siguientes líneas
        cy.get('.sc-cRZddA > .sc-hhGHuG > .sc-bCDidY > .sc-dKfzgJ').as('BotonAccede')
        cy.get('@BotonAccede').should('be.visible')
        cy.get('@BotonAccede').should('exist')
    });

    // it('El elemento está checked', () => {
    //     cy.get('').should('be.checked')
    //     cy.get('#form').find('[type="checkbox"]').should('be.checked')
    // });
    
    // it('El elemento está disabled', () => {
    //     cy.get('').should('be.disabled')
    // });
})