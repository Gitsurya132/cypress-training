
describe('My First Test', () => {

    // it('verify title-positive', () => {
    //     cy.visit("https://opensource-demo.orangehrmlive.com/")
    //     cy.title().should('eq','OrangeHRM')

    // })

    // it('verify title-negative', () => {
    //     cy.visit("https://opensource-demo.orangehrmlive.com/")
    //     cy.title().should('eq','OrangeHRM123')

//   })

  it('verify google', () => {
    cy.visit("https://google.com/")
    cy.get('#APjFqb').type('what is cypress');
    const searchbutton = "div.FPdoLc input[name='btnK'][class='gNO89b']";
    const sideArea = "div[jsmodel*='sj77Re']";
    cy.get(sideArea).click();
    cy.get(searchbutton).click();

})
})

