describe("Sign Up on Pakwheels.com", () => {
  it("should successfully navigate to signup form", () => {
    cy.visit("https://www.pakwheels.com/");
    cy.contains("Sign Up").click();
    cy.contains("Let’s get you started!").should("be.visible");
  });
  it("should automatically fill the form ",()=>{
    cy.visit("https://www.pakwheels.com/");
    cy.contains("Sign Up").click();
    cy.contains("Let’s get you started!").should("be.visible");
    
    cy.get("#user_display_name").type("test hello");
    cy.get("#user_email").type("test@email.com");
    cy.get("#user_password").type("testpassword");
    cy.get("#user_password_confirmation").type("testpassword");
    cy.get('#new_user > .btn').click();
  })
});
