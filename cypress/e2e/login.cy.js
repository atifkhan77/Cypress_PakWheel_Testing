describe("Login on Pakwheels.com", () => {
    it("should successfully navigate to signup form", () => {
      cy.visit("https://www.pakwheels.com/");
      cy.contains("Sign In").click();
      //cy.contains("Save Your Favourite Ads").should("be.visible");
    });
    it("logging in to the pak wheels",()=>{
        cy.visit("https://www.pakwheels.com/");
        cy.contains("Sign In").click();
        cy.get('.modal-body > [href="javascript:void(0)"]').click();
        cy.get('#username-popup').type("atifm1190@gmail.com");
        cy.get('#pwd-popup').type("hello123");
        cy.get('#email-submit-btn').click();
        cy.contains("Welcome atif!").should("be.visible");
        cy.wait(5000);
    });
    // it("",()=>{

    // })
  });
