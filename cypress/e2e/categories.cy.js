describe("Categories Test cases", ()=>{
    it("It should successfully navigate to Categories in form", ()=>{
      cy.visit("https://www.pakwheels.com/");
      cy.get(':nth-child(4) > .container > .nav-tabs-main > .nav > .active > a').click()
      cy.contains("Category").should("be.visible");
  
      
    })
  })
  