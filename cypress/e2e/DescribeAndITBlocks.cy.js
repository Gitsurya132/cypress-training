describe("login functionality",()=>{

    it("right email right password" ,()=>{
        // console.log('enter correct email id');
        // console.log('enter correct password');
        
        cy.visit("https://app.kylas.io");
        cy.get("input#input_email").type("kireeti.345@gmail.com");
        cy.get("input#input_password").type("Test@777");
        cy.get("button#loginBtn").click();
        cy.wait(8000);
        cy.get("span.text-uppercase").should('be.visible');
        console.log('expected result: user should be logged in');

        
    })

    it("wrong email wrong password ",()=>{
        console.log('enter incorrect email id');
        console.log('enter incorrect password');
        console.log('expected result: user should not be logged in and error should be thrown');


        cy.visit("https://app.kylas.io");
        cy.get("input#input_email").type("kireeti.123@gmail.com");
        cy.get("input#input_password").type("Test@777");

        cy.get("button#loginBtn").click();
        cy.wait(8000);
        cy.get("span.text-uppercase").should('not.exist');
        console.log('expected result: user should be logged in');

    })

})