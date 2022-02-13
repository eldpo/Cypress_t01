///<reference types ='Cypress'/>

describe('Testes para a aplicação demoQA', () =>{
    it('validar acesso ao url dodemoqa', () =>{
        //acessando a url home
        cy.visit('http://demoqa.com/')
        //validando o url
        cy.url().should('equal','https://demoqa.com/')
    })
    it('Validar opções de teste', () =>{
        //acessando a url home
        cy.visit('http://demoqa.com/')
    })
    it('Elements', () =>{
        //acessando a url home
        cy.visit('https://demoqa.com/')

        cy.get('.home-body > .category-cards > :nth-child(1)').click()

        cy.get(':nth-child(1) > .group-header > .header-wrapper')

        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()

        cy.get('#userName')
        .type('ledos mauri')
        .should('have.value','ledos mauri' )

        cy.get('#userEmail')
        .type('ledosmauri@gmail.com')
        .should('have.value', 'ledosmauri@gmail.com' )

        cy.get('#currentAddress')
        .type('rua dos bobos,0, proximo a casa de carai, santa rita, paraiba, brazil, terra')
        .should('have.value', 'rua dos bobos,0, proximo a casa de carai, santa rita, paraiba, brazil, terra')

        cy.get('#permanentAddress')
        .type('rua da caixa dagua,1, onde o vento faz a curva, santa rita, paraiba, brazil, terra')
        .should('have.value', 'rua da caixa dagua,1, onde o vento faz a curva, santa rita, paraiba, brazil, terra')

        cy.get('#submit').click()

        cy.get('.border').then(()=>{
            cy.get('#name').contains('ledos mauri')
            cy.get('#email').contains('ledosmauri@gmail.com')
            cy.get('.border > #currentAddress').contains('rua dos bobos,0, proximo a casa de carai, santa rita, paraiba, brazil, terra')
            cy.get('.border > #permanentAddress').contains('rua da caixa dagua,1, onde o vento faz a curva, santa rita, paraiba, brazil, terra' )
        })
    })
    it('Checkbox : Marcando o home', () =>{
        //acessando o url
        cy.visit('https://demoqa.com/')
        //acessando os 'elementos'
        cy.get('.home-body > .category-cards > :nth-child(1)').click()
        //clicando nas opções do elemento para expandir as opções
        cy.get(':nth-child(1) > .group-header > .header-wrapper')
        //abrindo o teste de checkbox
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click()
        //clicando no checkbox
        cy.get('.rct-checkbox ').click()
        //abrindo a listagem do dos checkbox
        cy.get('.rct-collapse ').click()
    })
    it('Checkbox : expandindo e recolhendo o caminho', () =>{
        //acessando o url
        cy.visit('https://demoqa.com/')
        //acessando os 'elementos'
        cy.get('.home-body > .category-cards > :nth-child(1)').click()
        //clicando nas opções do elemento para expandir as opções
        cy.get(':nth-child(1) > .group-header > .header-wrapper')
        //abrindo o teste de checkbox
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click()
        //abrindo a listagem do dos checkbox
        cy.get('.rct-collapse ').click()

        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .rct-collapse').click()

        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(1) > .rct-collapse').click()
            cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .rct-collapse ').click()
            cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(1) > .rct-collapse ').click()
        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(3) > :nth-child(1) > .rct-collapse').click()

        //recolhendo
        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(3) > :nth-child(1) > .rct-collapse').click()
        
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .rct-collapse ').click()
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(1) > .rct-collapse ').click()

        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(1) > .rct-collapse').click()

        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .rct-collapse').click()
    })
    it('Checkbox: marcando os checkboxses', () =>{
        //acessando o url
        cy.visit('https://demoqa.com/')
        //acessando os 'elementos'
        cy.get('.home-body > .category-cards > :nth-child(1)').click()
        //clicando nas opções do elemento para expandir as opções
        cy.get(':nth-child(1) > .group-header > .header-wrapper')
        //abrindo o teste de checkbox
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click()
        //abrindo a listagem do dos checkbox
        cy.get('.rct-collapse').click()
        //desktop
        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .rct-collapse').click()
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > ol > :nth-child(1) > .rct-text > label > .rct-checkbox').click()
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > ol > :nth-child(2) > .rct-text > label > .rct-checkbox').click()
        //documents
        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(1) > .rct-collapse').click()
        //workspace  
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .rct-collapse').click()
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > ol > :nth-child(1) > .rct-text > label > .rct-checkbox ').click()
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > ol > :nth-child(2) > .rct-text > label > .rct-checkbox ').click()
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > ol > :nth-child(3) > .rct-text > label > .rct-checkbox ').click()
        //office
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(1) > .rct-collapse ').click()
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > ol > :nth-child(1) > .rct-text > label > .rct-checkbox ').click()
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > ol > :nth-child(2) > .rct-text > label > .rct-checkbox ').click()
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > ol > :nth-child(3) > .rct-text > label > .rct-checkbox ').click()
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > ol > :nth-child(4) > .rct-text > label > .rct-checkbox ').click()
        //downloads
        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(3) > :nth-child(1) > .rct-collapse').click()
        cy.get(':nth-child(3) > ol > :nth-child(1) > .rct-text > label > .rct-checkbox').click()
        cy.get(':nth-child(3) > ol > :nth-child(2) > .rct-text > label > .rct-checkbox').click()
    })
    it('checkbox : botao expandir e recolher', () =>{
         //acessando o url
         cy.visit('https://demoqa.com/')
         //acessando os 'elementos'
         cy.get('.home-body > .category-cards > :nth-child(1)').click()
         //clicando nas opções do elemento para expandir as opções
         cy.get(':nth-child(1) > .group-header > .header-wrapper')
         //abrindo o teste de checkbox
         cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click()
         //expandindo tudo
         cy.get('.rct-option-expand-all').click()
         //recolhendo tudo
         cy.get('.rct-option-collapse-all').click()
    })

})