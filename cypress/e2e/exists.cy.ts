/// <reference types="Cypress"/>

describe("Smoke test", () => {
    it("Should show the page", () => {
        cy.visit('localhost:5173')
        cy.get("section>h1").should("have.text", "Result")
    })
})

export {}