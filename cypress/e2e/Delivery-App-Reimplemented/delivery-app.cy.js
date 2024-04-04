/* global cy */

/// <reference types="cypress" />

describe("Poster log in", () => {
  
  it("log in as poster", () => {
    cy.visit("http://localhost:5173/sign-in");
    cy.get("select[id=\"inlineFormCustomSelectPref\"]").select("2");
    cy.get("#root > div > div > div > form > div.d-grid > button").click();
    cy.url().should("include", "/poster");
    cy.get("#root > div > div > form").should("exist");
  });
});

describe("Deliverer log in", () => {
  it("log in as deliverer", () => {
    cy.visit("http://localhost:5173/sign-in");
    cy.get("select[id=\"inlineFormCustomSelectPref\"]").select("1");
    cy.get("#root > div > div > div > form > div.d-grid > button").click();
    cy.url().should("include", "/deliverer");

  });
});

describe("Deliverer accept an errand", () => {
  it("deliverer accepts an errand", () => {
    cy.visit("http://localhost:5173/sign-in");
    cy.get("select[id=\"inlineFormCustomSelectPref\"]").select("1");
    cy.get("#root > div > div > div > form > div.d-grid > button").click();
    cy.url().should("include", "/deliverer");
    let extractedText = "";
    cy.get("#root > div > div > a:nth-child(1) > div > h5").then(($h5) => {
      extractedText = $h5.text().slice(7,);
      cy.get("#root > div > div > a:nth-child(1) > small > button").click();
      cy.get("#navbarTogglerDemo02 > ul > li:nth-child(2) > a").click();
      console.log(extractedText);
      cy.contains(extractedText,{ timeout: 10000 });
    });
  });
});

describe("Deliverer cancel an errand", () => {
  it("deliverer cancels an errand", () => {
    cy.visit("http://localhost:5173/sign-in");
    cy.get("select[id=\"inlineFormCustomSelectPref\"]").select("1");
    cy.get("#root > div > div > div > form > div.d-grid > button").click();
    cy.url().should("include", "/deliverer");
    cy.get("#navbarTogglerDemo02 > ul > li:nth-child(2) > a").click();
    let extractedText = "";
    cy.get("#root > div > div > a:nth-child(1) > div > h5").then(($h5) => {
      extractedText = $h5.text().slice(7,);
      cy.get("#root > div > div > a:nth-child(1) > small > button:nth-child(2)").click();
      cy.get("#navbarTogglerDemo02 > ul > li:nth-child(1) > a").click();
      console.log(extractedText);
      cy.contains(extractedText,{ timeout: 10000 });
    });
  });
});

describe("Deliverer completes an errand", () => {
  it("deliverer completes an errand", () => {
    cy.visit("http://localhost:5173/sign-in");
    cy.get("select[id=\"inlineFormCustomSelectPref\"]").select("1");
    cy.get("#root > div > div > div > form > div.d-grid > button").click();
    cy.url().should("include", "/deliverer");
    cy.get("#navbarTogglerDemo02 > ul > li:nth-child(2) > a").click();
    let extractedText = "";
    cy.get("#root > div > div > a:nth-child(1) > div > h5").then(($h5) => {
      extractedText = $h5.text().slice(7,);
      cy.get("#root > div > div > a:nth-child(1) > small > button:nth-child(1)").click();
      cy.get("#navbarTogglerDemo02 > ul > li:nth-child(3) > a").click();
      console.log(extractedText);
      cy.contains(extractedText,{ timeout: 10000 });
    });
  });
});