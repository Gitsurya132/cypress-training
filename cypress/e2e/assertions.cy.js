
describe("Assertions demo", () => {      // should & and

    it("Implicit Assertions", () => {

        // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // cy.url().should('include', 'opensource-demo');
        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // cy.url().should('contain', 'index.php');


        //to use the url  cy.url()
        // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('include', 'opensource-demo')
        // .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain', 'index.php');

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include', 'opensource-demo')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'index.php')
        .and('not.contain', 'greenhrm')

        //to capture the title cy.title
        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')

        // to check the image or logo is available or not
        cy.get('.orangehrm-login-branding > img').should("be.visible")
        .and('exist')

        // to check all the link which are present in webpage  //a
        cy.xpath("//a").should('have.lenght','5')

    
    })

})
