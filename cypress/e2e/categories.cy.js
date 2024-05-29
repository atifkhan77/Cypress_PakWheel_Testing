describe("Categories Test cases", ()=>{
    it("It should successfully navigate to Categories in form", ()=>{
      cy.visit("https://www.pakwheels.com/");
      cy.get(':nth-child(4) > .container > .nav-tabs-main > .nav > .active > a').click()
      cy.contains("Category").should("be.visible");
  
      
    });
    it.only('signing up',()=>{
      cy.get('.mini-nav > .list-unstyled > :nth-child(2) > a').click()
      cy.get('#user_email').click().type('123@gmail.com')
      cy.get('#user_display_name').click()


    })
  })
  