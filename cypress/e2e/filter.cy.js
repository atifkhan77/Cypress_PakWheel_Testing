describe("Applying Different Filters on Pakwheels.com", () => {
  it("should apply different filters", () => {
    cy.visit("https://www.pakwheels.com/cars/");
    cy.get('#browes_make_id').click();
    cy.get('#browesMKSlider > .carousel-inner > .active > :nth-child(2) > a').click()
    cy.get('#pr_from').type(200000);
    cy.get('#pr_to').type(400000);
    cy.get('#pr-go').click();
    cy.click();
  });
});
