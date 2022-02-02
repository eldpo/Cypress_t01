///<reference types ='Cypress'/>


describe('Sut - desafios_funcionais', () => {
    it('Validar acesso ao url uitestingplayground', () => {
        //acessando a url home
        cy.visit('http://uitestingplayground.com/')
        //validando o url
        cy.url().should('equal','http://uitestingplayground.com/')
    })
    it('01_Dynamic ID', () =>{
        cy.visit('http://uitestingplayground.com/')

        cy.get('#overview > .container > :nth-child(1) > :nth-child(1) > h3 > a')
        .contains('Dynamic ID')
        .click()

        cy.url().should('equal', 'http://uitestingplayground.com/dynamicid')

        cy.xpath('//div//button').click()

        cy.get('#navbarSupportedContent > .navbar-nav > :nth-child(1) > .nav-link').click()

        cy.url().should('equal','http://uitestingplayground.com/home')

    })

    it('02_Class_Attribute',() =>{
        cy.visit('http://uitestingplayground.com/')

        //cy.get(':nth-child(1) > :nth-child(2) > h3 > a')
        cy.get('#overview > .container > :nth-child(1) > :nth-child(2) > h3 > a')
        .contains('Class Attribute')
        .click()

        cy.url().should('equal', 'http://uitestingplayground.com/classattr')

        cy.get('.btn-primary').click()

        cy.on('window:alert', (text) =>{
            expect(text).to.contains('Primary button pressed')
        })

        cy.get('#navbarSupportedContent > .navbar-nav > :nth-child(1) > .nav-link').click()

        cy.url().should('equal','http://uitestingplayground.com/home')


    })
    it('03_Hidden_Layers', () => {
        cy.visit('http://uitestingplayground.com/')

        cy.get('#overview > .container > :nth-child(1) > :nth-child(3) > h3 > a')
        .contains('Hidden Layers')
        .click()

        cy.get('#greenButton').dblclick({ force: true})

        cy.contains('User can not click green button in the current application state!')

        cy.get('#navbarSupportedContent > .navbar-nav > :nth-child(1) > .nav-link').click()

        cy.url().should('equal', 'http://uitestingplayground.com/home')
    })
    it('04_Load_Delay', () => {
        cy.visit('http://uitestingplayground.com/')

        cy.get('#overview > .container > :nth-child(1) > :nth-child(4) > h3 > a')
        .contains('Load Delay')
        .click()

        cy.waitFor('section > .container > .btn btn-primary')

        cy.get('section > .container > .btn')
        .contains('Button Appearing After Delay')
        .click()

        cy.get('#navbarSupportedContent > .navbar-nav > :nth-child(1) > .nav-link').click()

        cy.url().should('equal', 'http://uitestingplayground.com/home')
    })
    it('05_Ajax_data', () =>{
        cy.visit('http://uitestingplayground.com/')

        cy.get('#overview > .container > :nth-child(2) > :nth-child(1) > h3 > a')
        .contains('AJAX Data')
        .click()

        cy.get('#content').should('not.be.visible')

        cy.get('#ajaxButton').click()
    
        cy.wait(15000);

        cy.get('#content').should('be.visible')

        /* não ta validando o texto da mensagem de retorno do ajax
        cy.get('.bg-success')
        .should('have.value','Data loaded with AJAX get request.')
        */
        cy.get('#navbarSupportedContent > .navbar-nav > :nth-child(1) > .nav-link').click()

        cy.url().should('equal', 'http://uitestingplayground.com/home')
    })
    it('06_Client_Side_Delay', () =>{
        cy.visit('http://uitestingplayground.com/')

        cy.get('#overview > .container > :nth-child(2) > :nth-child(2) > h3 > a')
        .contains('Client Side Delay')
        .click()

        cy.get('.bg-success').should('not.exist')

        cy.get('#ajaxButton').click({ force: true})

        cy.wait(15000);

        cy.get('.bg-success').should('be.visible')

        cy.get('#navbarSupportedContent > .navbar-nav > :nth-child(1) > .nav-link').click()

        cy.url().should('equal', 'http://uitestingplayground.com/home')
    })
    it('07_Click', () =>{

        cy.visit('http://uitestingplayground.com/')

        cy.get('#overview > .container > :nth-child(2) > :nth-child(3) > h3 > a')
        .contains('Click')
        .click()

        cy.get('#badButton')
        .click({ force: true})
        
        //voltando para tela home
        cy.get('#navbarSupportedContent > .navbar-nav > :nth-child(1) > .nav-link').click()
        cy.url().should('equal', 'http://uitestingplayground.com/home')
    })
    it('08_Text Input', () =>{

        cy.visit('http://uitestingplayground.com/')

        cy.get('#overview > .container > :nth-child(2) > :nth-child(4) > h3 > a')
        .contains('Text Input')
        .click()

        cy.get('#newButtonName')
        .type('nome do botão')
        .should('have.value', 'nome do botão')

        cy.get('#updatingButton')
        .contains("Button That Should Change it's Name Based on Input Value")
        .click()

        cy.get('#updatingButton')
        .contains('nome do botão')


        //voltando para tela home
        cy.get('#navbarSupportedContent > .navbar-nav > :nth-child(1) > .nav-link').click()
        cy.url().should('equal', 'http://uitestingplayground.com/home')
    })  

    it('09_Scrollbars', () =>{

        cy.visit('http://uitestingplayground.com/')

        cy.get('#overview > .container > :nth-child(3) > :nth-child(1) > h3 > a')
        .contains('Scrollbars')
        .click()

        cy.get('[style="height:150px;overflow-y: scroll;width:300px;overflow-x:scroll"]').scrollTo(250, 125)

        cy.get('#hidingButton').click()
        
        //voltando para tela home
        cy.get('#navbarSupportedContent > .navbar-nav > :nth-child(1) > .nav-link').click()
        cy.url().should('equal', 'http://uitestingplayground.com/home')

    })  
    it('10_Dynamic Table', () =>{
        /*
        cy.visit('http://uitestingplayground.com/')

        cy.get('#overview > .container > :nth-child(3) > :nth-child(2) > h3 > a')
        .contains('Dynamic Table')
        .click()


        cy.get('[role=table] ').contains('[role=cell]', 'Chrome').then(Element =>{
                cy.get('[role=table]').contains('[role=columnheader]', 'CPU').then(Element =>{
                    cy.get();
                })
        })

        
        //voltando para tela home
        cy.get('#navbarSupportedContent > .navbar-nav > :nth-child(1) > .nav-link').click()
        cy.url().should('equal', 'http://uitestingplayground.com/home')
        */
    }) 
    it('11_Verify_Text', () =>{
        cy.visit('http://uitestingplayground.com/')

        cy.get('#overview > .container > :nth-child(3) > :nth-child(3) > h3 > a')
        .contains('Verify Text')
        .click()

        cy.get('.bg-primary').contains('Welcome UserName!')



        //voltando para tela home
        cy.get('#navbarSupportedContent > .navbar-nav > :nth-child(1) > .nav-link').click()
        cy.url().should('equal', 'http://uitestingplayground.com/home')

    })
    it('12_Progress_Bar', () =>{
        cy.visit('http://uitestingplayground.com/')

        cy.get('#overview > .container > :nth-child(3) > :nth-child(4) > h3 > a')
        .contains('Progress Bar')
        .click()

        cy.get('#startButton').click()

        cy.get('.progress', {timeout:250000}).should('include.text','75%')

        cy.get('#stopButton').click()

        //voltando para tela home
        cy.get('#navbarSupportedContent > .navbar-nav > :nth-child(1) > .nav-link').click()
        cy.url().should('equal', 'http://uitestingplayground.com/home')

    })
    it('13_Visibility', () =>{
        cy.visit('http://uitestingplayground.com/')

        cy.get('#overview > .container > :nth-child(4) > :nth-child(1) > h3 > a')
        .contains('Visibility')
        .click()

        cy.get('#hideButton').click()

        cy.get('#removedButton').should('not.exist')

        cy.get('#zeroWidthButton').should('not.be.visible')

        cy.get('#overlappedButton').should('be.visible')

        //voltando para tela home
        cy.get('#navbarSupportedContent > .navbar-nav > :nth-child(1) > .nav-link').click()
        cy.url().should('equal', 'http://uitestingplayground.com/home')

    })
        it('14_Visibility', () =>{
        cy.visit('http://uitestingplayground.com/')

        cy.get('#overview > .container > :nth-child(4) > :nth-child(2) > h3 > a')
        .contains('Sample App')
        .click()
        
        cy.get('#loginstatus').contains('User logged out.')

        cy.get('input[name="UserName"]')
        .type('josin')
        .should('have.value', 'josin')

        cy.get('input[name="Password"]')
        .type('pwd')
        .should('have.value','pwd')

        cy.get('#login').click()

        cy.get('#loginstatus').contains('Welcome, josin!')

        //voltando para tela home
        cy.get('#navbarSupportedContent > .navbar-nav > :nth-child(1) > .nav-link').click()
        cy.url().should('equal', 'http://uitestingplayground.com/home')
    })
    it('15_Mouse_Over', () =>{
        cy.visit('http://uitestingplayground.com/')

        cy.get('#overview > .container > :nth-child(4) > :nth-child(3) > h3 > a')
        .contains('Mouse Over')
        .click()

        cy.get('.container > :nth-child(7)')
        .contains('Click me')
        .click()

        cy.get('.container > :nth-child(7)')
        .contains('Click me')
        .click()

        cy.get(':nth-child(8) > p').contains('The link clicked 2 times.')

        //voltando para tela home
        cy.get('#navbarSupportedContent > .navbar-nav > :nth-child(1) > .nav-link').click()
        cy.url().should('equal', 'http://uitestingplayground.com/home')

    })
    it('16_Non-Breaking Space', () =>{
        cy.visit('http://uitestingplayground.com/')

        cy.get('#overview > .container > :nth-child(4) > :nth-child(4) > h3 > a')
        .contains('Non-Breaking Space')
        .click()

        cy.xpath('//div//button').click()

        //voltando para tela home
        cy.get('#navbarSupportedContent > .navbar-nav > :nth-child(1) > .nav-link').click()
        cy.url().should('equal', 'http://uitestingplayground.com/home')
    })
    it('17_Overlapped Element', () =>{
        cy.visit('http://uitestingplayground.com/')

        cy.get('#overview > .container > :nth-child(5) > :nth-child(1) > h3 > a')
        .contains('Overlapped Element')
        .click()
        
        cy.get('#id')
        .type('666')
        
        cy.get('[style="overflow-y: scroll; height:100px;"]').scrollTo(0, 100)

        cy.get('#name')
        .type('huenildo')


        //voltando para tela home
        cy.get('#navbarSupportedContent > .navbar-nav > :nth-child(1) > .nav-link').click()
        cy.url().should('equal', 'http://uitestingplayground.com/home')
    })
})