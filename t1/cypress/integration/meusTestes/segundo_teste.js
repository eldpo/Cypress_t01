describe('Meu segundo Teste', function (){
    it('visitando a cozinha', function (){
        cy.visit("https://example.cypress.io")

        cy.contains('type').click()

        cy.url().should('include', '/commands/actions')
    })
})