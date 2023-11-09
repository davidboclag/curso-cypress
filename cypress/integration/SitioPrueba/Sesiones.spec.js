describe('Sesiones y cookies', () => {

    // it('Sin sesión guardada', () => {
    //     cy.visit('https://the-internet.herokuapp.com/login')
    //     cy.get("#username").type("tomsmith")
    //     cy.get("#password").type("SuperSecretPassword!")
    //     cy.get('form').contains('Login').click()
    //     cy.url().should('contain', 'secure')
    // });

    // it('Con sesión guardada', () => {
    //     cy.session('Tom', () => {
    //         cy.visit('https://the-internet.herokuapp.com/login')
    //         cy.get("#username").type("tomsmith")
    //         cy.get("#password").type("SuperSecretPassword!")
    //         cy.get('form').contains('Login').click()
    //         cy.url().should('contain', 'secure')
    //     })
    // });

    // it('Ejemplo getCookies', () => {
    //     cy.session('Tom', () => {
    //         cy.visit('https://the-internet.herokuapp.com/login')
    //         cy.get("#username").type("tomsmith")
    //         cy.get("#password").type("SuperSecretPassword!")
    //         cy.get('form').contains('Login').click()
    //         cy.url().should('contain', 'secure')
    //         cy.getCookies().should('have.length', 5).then((cookies) => {
    //             expect(cookies[0]).to.have.property('name', 'optimizelyPendingLogEvents')
    //         })
    //     })
    // });

    // it('Ejemplo getCookie', () => {
    //     cy.session('Tom', () => {
    //         cy.visit('https://the-internet.herokuapp.com/login')
    //         cy.get("#username").type("tomsmith")
    //         cy.get("#password").type("SuperSecretPassword!")
    //         cy.get('form').contains('Login').click()
    //         cy.url().should('contain', 'secure')
    //         cy.getCookie('optimizelyPendingLogEvents').should('exist')
    //         cy.getCookie('optimizelyPendingLogEvents').should('not.have.property', 'value', '%5B%22n%3Dhttps%253A%252F%252Fthe-internet.herokuapp.com%252Fsecure%26u%3Doeu1699446879200r0.6240589886819514%26wxhr%3Dtrue%26t%3D1699446880308%26f%3D298349752%2C318188263%22%2C%22n%3Dengagement%26g%3D298283957%26u%3Doeu1699446879200r0.6240589886819514%26wxhr%3Dtrue%26t%3D1699446879367%26f%3D298349752%2C318188263%22%2C%22n%3Dhttps%253A%252F%252Fthe-internet.herokuapp.com%252Flogin%26u%3Doeu1699446879200r0.6240589886819514%26wxhr%3Dtrue%26t%3D1699446879202%26f%3D298349752%2C318188263%22%5D')
    //         cy.getCookie('optimizelyPendingLogEvents').should('not.be.null')
    //     })
    // });

    // it('Eliminar todas las cookies', () => {
    //     cy.session('Tom', () => {
    //         cy.visit('https://the-internet.herokuapp.com/login')
    //         cy.get("#username").type("tomsmith")
    //         cy.get("#password").type("SuperSecretPassword!")
    //         cy.get('form').contains('Login').click()
    //         cy.url().should('contain', 'secure')
    //         cy.getCookies().should('have.length', 5).then((cookies) => {
    //             expect(cookies[0]).to.have.property('name', 'optimizelyPendingLogEvents')
    //         })
    //     })
    //     cy.clearCookies();
    //     cy.getCookies().should('have.length', 5)
    // });

    // it('Eliminar todas las cookies', () => {
    //     cy.session('Tom', () => {
    //         cy.visit('https://the-internet.herokuapp.com/login')
    //         cy.get("#username").type("tomsmith")
    //         cy.get("#password").type("SuperSecretPassword!")
    //         cy.get('form').contains('Login').click()
    //         cy.url().should('contain', 'secure')
    //         cy.getCookies().should('have.length', 5).then((cookies) => {
    //             expect(cookies[0]).to.have.property('name', 'optimizelyPendingLogEvents')
    //         })
    //     })
    //     cy.clearCookies();
    //     cy.getCookies().should('have.length', 5)
    // });

    // it('Elimina una sola cookie', () => {
    //     cy.session('Tom', () => {
    //         cy.visit('https://the-internet.herokuapp.com/login')
    //         cy.get("#username").type("tomsmith")
    //         cy.get("#password").type("SuperSecretPassword!")
    //         cy.get('form').contains('Login').click()
    //         cy.url().should('contain', 'secure')
    //         cy.getCookie('optimizelyPendingLogEvents').should('exist')
    //         cy.getCookie('optimizelyPendingLogEvents').should('not.have.property', 'value', '%5B%22n%3Dhttps%253A%252F%252Fthe-internet.herokuapp.com%252Fsecure%26u%3Doeu1699446879200r0.6240589886819514%26wxhr%3Dtrue%26t%3D1699446880308%26f%3D298349752%2C318188263%22%2C%22n%3Dengagement%26g%3D298283957%26u%3Doeu1699446879200r0.6240589886819514%26wxhr%3Dtrue%26t%3D1699446879367%26f%3D298349752%2C318188263%22%2C%22n%3Dhttps%253A%252F%252Fthe-internet.herokuapp.com%252Flogin%26u%3Doeu1699446879200r0.6240589886819514%26wxhr%3Dtrue%26t%3D1699446879202%26f%3D298349752%2C318188263%22%5D')
    //         cy.getCookie('optimizelyPendingLogEvents').should('not.be.null')
    //         cy.clearCookie('optimizelyPendingLogEvents')
    //         cy.getCookie('optimizelyPendingLogEvents').should('not.exist')
    //     })
    // });

    // it('Setear Cookie', () => {
    //     cy.visit('https://the-internet.herokuapp.com/login')
    //     cy.get("#username").type("tomsmith")
    //     cy.get("#password").type("SuperSecretPassword!")
    //     cy.get('form').contains('Login').click()
    //     cy.url().should('contain', 'secure')
    //     cy.getCookie('CookieLoca').should('not.exist')
    //     cy.setCookie('CookieLoca', 'Oreo')
    //     cy.getCookie('CookieLoca').should('have.property', 'value', 'Oreo')
    // });

    it('Login con comando personalizado en commands.js', () => {
        cy.login();
    });

});