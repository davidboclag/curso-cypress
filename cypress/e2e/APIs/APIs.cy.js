describe('Pruebas en API con Cypress', () => {
    // it('El endpoint "posts" responde con status 200', () => {
    //     // cy.visit('https://jsonplaceholder.typicode.com')
    //     // cy.request('/posts')
    //     cy.request({
    //         url: 'https://jsonplaceholder.typicode.com/posts'
    //     }).then((respuesta) => {
    //         expect(respuesta.status).to.eq(200)
    //     })
    // });

    // it('El endpoint "posts" tiene 100 entradas', () => {
    //     cy.visit('https://jsonplaceholder.typicode.com')
    //     cy.request('/posts')
    //         .its('body')
    //         .should('have.length', 100)
    // });

    // it('El post número 1, tiene por título "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"', () => {
    //     cy.visit('https://jsonplaceholder.typicode.com')
    //     cy.request('/posts/1')
    //         .its('body')
    //         .should('have.property', 'title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
    // });

    // it('El POST request funciona correctamente para el endpoint', () => {
    //     cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
    //         userId: 1,
    //         id: 101,
    //         title: "Relatos Salvajes",
    //         body: "Una película argentina"
    //     }).then((respuesta) => {
    //         expect(respuesta.status).to.eq(201)
    //         expect(respuesta.body).to.have.property('title', 'Relatos Salvajes')
    //     })
    // });

    // it('El PUT request funciona correctamente para el endpoint', () => {
    //     cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/2', {
    //         title: "Relatos Salvajes",
    //         body: "Una película argentina"
    //     }).then((respuesta) => {
    //         expect(respuesta.status).to.eq(200)
    //         expect(respuesta.body).to.have.property('title', 'Relatos Salvajes')
    //     })
    // });

    // it('El DELETE request funciona correctamente para el endpoint', () => {
    //     cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1').then((respuesta) => {
    //         expect(respuesta.status).to.eq(200)
    //     })
    // });

    it('Simula una solicitud GET a/posts con Stub', () => {
        // Datos de ejemplo para simular la respuesta del servidor
        const samplePosts = [
            {
                userId: 1,
                id: 1,
                title: 'El Carpincho del dia',
                body: 'Esto es falso'
            },
            {
                userId: 2,
                id: 2,
                title: 'Argentina para el mundo',
                body: 'Free Range Tester data falsa'
            }
        ];

        // Creación del Stub para simular la respuesta del servidor
        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', samplePosts).as('getPosts')
        // Visita la página de la aplicación donde se realiza lasolicitud a la API
        cy.visit('https://jsonplaceholder.typicode.com')
        cy.get('table:nth-child(5) > tbody > tr:nth-child(1) > td:nth-child(1) > a').click();
        // Espera a que se completela solicitud interceptada
        cy.wait('@getPosts')
        // Realiza las verificaciones necesarias enl ainterfaz de usuario utilizando los datos de ejemplo
        cy.get('body > pre').eq(0).should('contain', 'El Carpincho del dia')
        cy.get('body > pre').eq(0).should('contain', 'Esto es falso')
        cy.get('body > pre').eq(1).should('contain', 'Argentina para el mundo')
        cy.get('body > pre').eq(1).should('contain', 'Free Range Tester data falsa')
    });
});