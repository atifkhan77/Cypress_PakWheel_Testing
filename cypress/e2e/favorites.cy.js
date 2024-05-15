describe("Login on Pakwheels.com", () => {
    before(() => {
      cy.visit("https://www.pakwheels.com/");
      cy.contains("Sign In").click();
      //cy.contains("Save Your Favourite Ads").should("be.visible");
      cy.get('.modal-body > [href="javascript:void(0)"]').click();
      cy.get('#username-popup').type("atifm1190@gmail.com");
      cy.get('#pwd-popup').type("hello123");
      cy.get('#email-submit-btn').click();
      cy.contains("Welcome atif!").should("be.visible");
      cy.wait(5000); 
    });
  
    it("Searching test case ", () => {
        cy.get('#home-search-btn').click();
        cy.get('#q').type("honda");
        cy.get('#search_key_form > .btn').click();
        cy.get('#sortby').select("price-desc");
        cy.get('#ad_9541044 > .not-saved-list > .fa').click();

        

    });
  
   
  
  });
  