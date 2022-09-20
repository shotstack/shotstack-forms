/// <reference types="Cypress"/>

describe("Smoke test", () => {
    it("Should show the page", () => {
        cy.visit('localhost:5173')
        cy.get("label").should("have.text", "Paste template")
    })
})

export {}