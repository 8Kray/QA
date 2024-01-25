describe("TestPersonal", () => {
  it("tests TestPersonal", () => {
    //cy.viewport(1231, 956);
    cy.visit("http://localhost:3000/personal");
    cy.get("#name-filter").click();
    cy.get("#name-filter").type("Vasile");
    cy.get("#name-filter").clear();
    cy.get("#name-filter").click();
    cy.get("#name-filter").type("Mihai ");
    cy.get("#name-filter").clear();
    cy.get('[role=combobox]').click();
    cy.get('[role=option]').contains('Jucator').click();
    cy.get('[role=combobox]').click();
    cy.get('[role=option]').contains('Antrenor').click();
  });
});
