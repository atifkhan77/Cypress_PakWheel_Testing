describe("testing ebuy", () => {
    beforeEach(() => {
        cy.visit('https://ebuy.pk/')
        // Handle uncaught exceptions
        cy.on('uncaught:exception', (err, runnable) => {
            // Returning false here prevents Cypress from failing the test
            return false;
        });
    });

    it('/my-acc', function () {
        cy.fixture('loginData').then((loginData) => {
            loginData.forEach((user) => {
                // Ensure the state is reset for each user login iteration
                cy.visit('https://ebuy.pk/')
                cy.get('.nav-top-link > span').click({ force: true, waitForAnimations: false })
                cy.get('#username').click().type(user.username)
                cy.get('#password').click().type(user.password)
                cy.get('#rememberme').click()
                cy.get(':nth-child(3) > .woocommerce-button').click()

                // Search for "mobile"
                cy.get('#woocommerce-product-search-field-0').click({ force: true }).type("mobile")
                cy.get('.header-nav > .header-search-form > .header-search-form-wrapper > .searchform-wrapper > .searchform > .flex-row > :nth-child(3) > .ux-search-submit > .icon-search').click()
                
                // Click on the first product using force: true to handle overlapping elements
                cy.get('.post-103903 > .col-inner > .product-small > .box-image > .image-fade_in_back > a > .attachment-woocommerce_thumbnail').click({ force: true })
                
                // Add to cart
                cy.get('.product-info > .cart > .single_add_to_cart_button').click()
                cy.get('.continue-shopping').click()

                // Search for "electronic"
                cy.get('#woocommerce-product-search-field-0').click({ force: true }).type("electronic")
                cy.get('.header-nav > .header-search-form > .header-search-form-wrapper > .searchform-wrapper > .searchform > .flex-row > :nth-child(3) > .ux-search-submit > .icon-search').click()
                
                // Click on the first product using force: true to handle overlapping elements
                cy.get('.post-40776 > .col-inner > .product-small > .box-image > .image-fade_in_back > a > .attachment-woocommerce_thumbnail').click({ force: true })

                // Add to cart
                cy.get('.product-info > .cart > .single_add_to_cart_button').click()
                cy.wait(3000)
                cy.get('.header-account-title').click()
                cy.get('#my-account-nav > .woocommerce-MyAccount-navigation-link--customer-logout > a').click()
                cy.get('.message-container > a').click()
                // cy.get('.continue-shopping').click()

                // Logout to reset the state before the next iteration
            });
        });
    });
});
