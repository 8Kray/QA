describe("TestJuvenili", () => {
  it("tests TestJuvenili", () => {
   // cy.viewport(1231, 956);
    cy.visit("http://localhost:3000/juvenili");
    cy.get("button.slick-next").click();
    cy.get("button.slick-next").click();
    cy.get("button.slick-next").click();
    cy.get("button.slick-next").click();
    cy.get("button.slick-next").click();
    cy.get("button.slick-next").click();
    cy.get("button.slick-next").click();
    cy.get('[role=combobox]').click()
    cy.get('[role=option]').contains('Jucatori').click();
    cy.get('[role=combobox]').click()
    cy.get('[role=option]').contains('Cadeti').click();
  });
});
