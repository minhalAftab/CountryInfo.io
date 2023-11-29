///  <reference types="Cypress"/>

describe("App Componenet", () => {
  beforeEach(() => {
    cy.visit("https://country-info-io-frontend.vercel.app/");
  });

  it("should search for country name provided in input text when search button is clicked", () => {
    cy.get(".form-control").type("Ireland");
    cy.get("Button").click();
    cy.get("h1").should("have.text", "Ireland");
  });

  it("should search for country name provided in input text when enter button is pressed", () => {
    cy.get(".form-control").type("China{Enter}");
    cy.get("h1").should("have.text", "China");
  });

  it("should search for country name and if input is inccorect should show country not found image", () => {
    cy.get(".form-control").type("China123{Enter}");
    cy.wait(500).get(".img-fluid").should("be.visible");
  });

  it("should search for country name and if input is correct should click view full response dropdown and check if country name in response is exactly same", () => {
    cy.get(".form-control").type("Pakistan{Enter}");
    cy.get('.accordion-button').click()
    cy.get('.pretty-json-container > :nth-child(1) > :nth-child(1) > :nth-child(1) > [style="display: inline-block; cursor: pointer;"] > [style="display: inline-block; color: rgb(0, 43, 54); letter-spacing: 0.5px; vertical-align: top; opacity: 0.85;"] > .object-key > :nth-child(1)').click()
    cy.get('.pushed-content > .object-content > :nth-child(1) > :nth-child(1) > [style="display: inline-block; cursor: pointer;"] > [style="display: inline-block; color: rgb(0, 43, 54); letter-spacing: 0.5px; vertical-align: top; opacity: 0.85;"] > .object-key > :nth-child(2)').click()
    cy.get(':nth-child(1) > .variable-value > div > .string-value').should('have.text', '"Pakistan"')
    cy.wait(1000).get('.accordion-button').click()

  });

});
