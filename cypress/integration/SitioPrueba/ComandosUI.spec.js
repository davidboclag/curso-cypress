describe("Pruebas sobre UI", () => {
    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/")
    })

    // it("Ejemplo de click", () => {
    //     cy.contains("Add/Remove Elements").click()
    //     cy.get("button").click()
    //     // cy.get(".added-manually").click()
    //     cy.contains("Delete").click()
    // });

    // it("Ejemplo de escritura", () => {
    //     cy.contains("Form Authentication").click()
    //     cy.get("#username").type("tomsmith")
    //     cy.get("#password").type("SuperSecretPassword!")
    //     cy.get(".fa").click()
    // });

    // it("Ejemplo de checkboxes", () => {
    //     cy.contains("Checkboxes").click()
    //     cy.get("#checkboxes > :nth-child(1)").check()
    //     cy.get("#checkboxes > :nth-child(3)").uncheck()
    // });

    // it("Elegir de un dropdown", () => {
    //     cy.contains("Dropdown").click()
    //     cy.get("#dropdown").select(1)
    //     cy.get("#dropdown").select("Option 2")
    // });

    // it("Ejemplo borrar texto", () => {
    //     cy.contains("Form Authentication").click()
    //     cy.get("#username").type("tomsmith")
    //     cy.get("#password").type("SuperSecretPassword!")
    //     cy.get("#password").clear()
    //     cy.get(".fa").click()
    // });

    // it("Hover sobre elemento", () => {
    //     cy.contains("Hovers").click()
    //     cy.get("#content > div > div:nth-child(4) > div > a").click({ force: true })
    //     // cy.get("#content > div > div:nth-child(4) > div > a").invoke("show")
    // });

    it("Click derecho y validamos una alerta nativa", () => {
        cy.contains("Context Menu").click()
        cy.get("#hot-spot").rightclick()
        // cy.get("#hot-spot").invoke("trigger","contextmenu") //contextmenu se encuentra al inspeccionar el elemento, es el trigger que invoca al hacer click derecho
        cy.on("window:alert", (alert) => {
            expect(alert).to.equal("You selected a context menu")
        })
    });
})
