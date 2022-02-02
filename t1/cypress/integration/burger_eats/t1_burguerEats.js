///<reference types ='Cypress'/>

describe('t1_burguerEtas_Funcional', () =>{
    it('validar textos da tela princial', ()=>{
        //acessando a url
        cy.visit('https://buger-eats.vercel.app/')
        //verificando o titulo da pagina
        cy.get('h1:contains(Seja um parceiro entregador pela Buger Eats)').should('be.visible')
        //verificando o 'sub titulo'
        cy.get('p:contains(Em vez de oportunidades tradicionais de entrega de refeições em horários pouco flexíveis, seja seu próprio chefe.)')
        .should('be.visible')
        //verificando botão e texto de cadastro
        cy.get('a:contains(Cadastre-se para fazer entregas)').should('be.visible')

    })

    it('Validar cadastros', () =>{
        //acessando a url
        cy.visit('https://buger-eats.vercel.app/')
        cy.get('a').click()
        //valivando a url apos clicar pra cadastrar
        cy.url().should('include', '/deliver')
        //preencher os campos do cadastro
        cy.get('h1:contains(Cadastre-se para)').should('be.visible')
        cy.get(':nth-child(2) > header > h2:contains(Dados)')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input')
        .type('Ruenildo')
        .should('have.value','Ruenildo')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input')
        .type('65349189000')
        .should('have.value','65349189000')
        cy.get(':nth-child(3) > :nth-child(1) > input')
        .type('ruenildo@gmail.com')
        .should('have.value', 'ruenildo@gmail.com')
        cy.get(':nth-child(3) > :nth-child(2) > input')
        .type('83988888888')
        .should('have.value', '83988888888')
        cy.get(':nth-child(3) > header > h2:contains(Endereço)').should('be.visible')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input')
        .type('58030021')
        .should('have.value','58030021')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()
        cy.get(':nth-child(3) > input').should('have.value', 'Avenida Rio Grande do Sul')
        cy.get(':nth-child(4) > :nth-child(1) > input')
        .type('123')
        .should('have.value', '123')
        cy.get(':nth-child(4) > :nth-child(2) > input')
        .type('teste')
        .should('have.value', 'teste')
        cy.get(':nth-child(5) > :nth-child(1) > input').should('have.value','Estados')
        cy.get(':nth-child(5) > :nth-child(2) > input').should('have.value', 'João Pessoa/PB')
        cy.get('.delivery-method > :nth-child(1)').click();
        //anexando a imagem com um drop e drag
        cy.get('.dropzone').selectFile('img1.png', { action: 'drag-drop' })
        cy.get('.button-success').click()
        //confirmação do 'pop-up' de finalização
        cy.get('.swal2-confirm').click()
        //checagem da o url do home
        cy.url().should('equal','https://buger-eats.vercel.app/')
    })
    it('Validar exibição de mensagens dos campos obrigatorios', () => {
        //acessando a url
        cy.visit('https://buger-eats.vercel.app/')
        cy.get('a').click()
        //valivando a url apos clicar pra cadastrar
        cy.url().should('include', '/deliver')
        //clicar em confirmar para exibicação dos campos obrigatorios
        cy.get('.button-success').click()
        //validação das mensagens de campos obrigatorios
        //nome
        cy.contains('É necessário informar o nome')
        //cpf
        cy.contains('É necessário informar o CPF')
        //e-mail
        cy.contains('É necessário informar o email')
        //cep
        cy.contains('É necessário informar o CEP')
        //numero
        cy.contains('É necessário informar o número do endereço')
        //metodo de entrega
        cy.contains('Selecione o método de entrega')
        //foto da CNH
        cy.contains('Adicione uma foto da sua CNH')
        //verificação do pop-up de confirmação
        cy.get('.swal2-popup').should('not.exist')
    })
    it('Validar campo obrigatorio Nome Completo', () =>{
        //acessando a url
        cy.visit('https://buger-eats.vercel.app/')
        cy.get('a').click()
        //preencher os campos do cadastro
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input')
        .type('65349189000')
        .should('have.value','65349189000')
        cy.get(':nth-child(3) > :nth-child(1) > input')
        .type('ruenildo@gmail.com')
        .should('have.value', 'ruenildo@gmail.com')
        cy.get(':nth-child(3) > :nth-child(2) > input')
        .type('83988888888')
        .should('have.value', '83988888888')
        cy.get(':nth-child(3) > header > h2:contains(Endereço)').should('be.visible')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input')
        .type('58030021')
        .should('have.value','58030021')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()
        cy.get(':nth-child(3) > input').should('have.value', 'Avenida Rio Grande do Sul')
        cy.get(':nth-child(4) > :nth-child(1) > input')
        .type('123')
        .should('have.value', '123')
        cy.get(':nth-child(4) > :nth-child(2) > input')
        .type('teste')
        .should('have.value', 'teste')
        cy.get(':nth-child(5) > :nth-child(1) > input').should('have.value','Estados')
        cy.get(':nth-child(5) > :nth-child(2) > input').should('have.value', 'João Pessoa/PB')
        cy.get('.delivery-method > :nth-child(1)').click();
        //anexando a imagem com um drop e drag
        cy.get('.dropzone').selectFile('img1.png', { action: 'drag-drop' })
        cy.get('.button-success').click()
        //verificando mensagem de erro referente a falta do nome
        cy.contains('É necessário informar o nome')
        //verificando se continua no mesmo url(pagina)
        cy.url().should('include', '/deliver')
        //verificação do pop-up de confirmação
        cy.get('.swal2-popup').should('not.exist')

    })
    it('Validar campo obrgatorio "CPF somente números"', () =>{
        //acessando a url
        cy.visit('https://buger-eats.vercel.app/')
        cy.get('a').click()
        //valivando a url apos clicar pra cadastrar
        cy.url().should('include', '/deliver')
        //preencher os campos do cadastro
        cy.get('h1:contains(Cadastre-se para)').should('be.visible')
        cy.get(':nth-child(2) > header > h2:contains(Dados)')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input')
        .type('Ruenildo')
        .should('have.value','Ruenildo')
        cy.get(':nth-child(3) > :nth-child(1) > input')
        .type('ruenildo@gmail.com')
        .should('have.value', 'ruenildo@gmail.com')
        cy.get(':nth-child(3) > :nth-child(2) > input')
        .type('83988888888')
        .should('have.value', '83988888888')
        cy.get(':nth-child(3) > header > h2:contains(Endereço)').should('be.visible')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input')
        .type('58030021')
        .should('have.value','58030021')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()
        cy.get(':nth-child(3) > input').should('have.value', 'Avenida Rio Grande do Sul')
        cy.get(':nth-child(4) > :nth-child(1) > input')
        .type('123')
        .should('have.value', '123')
        cy.get(':nth-child(4) > :nth-child(2) > input')
        .type('teste')
        .should('have.value', 'teste')
        cy.get(':nth-child(5) > :nth-child(1) > input').should('have.value','Estados')
        cy.get(':nth-child(5) > :nth-child(2) > input').should('have.value', 'João Pessoa/PB')
        cy.get('.delivery-method > :nth-child(1)').click();
        //anexando a imagem com um drop e drag
        cy.get('.dropzone').selectFile('img1.png', { action: 'drag-drop' })
        cy.get('.button-success').click()
        //verificando mensagem de erro referente a falta do CPF
        cy.contains('É necessário informar o CPF')
        //verificando se continua no mesmo url(pagina)
        cy.url().should('include', '/deliver')
        //verificação do pop-up de confirmação
        cy.get('.swal2-popup').should('not.exist')
    })
    it('Validar campo obrigatorio E-mail', () =>{
        //acessando a url
        cy.visit('https://buger-eats.vercel.app/')
        cy.get('a').click()
        //valivando a url apos clicar pra cadastrar
        cy.url().should('include', '/deliver')
        //preencher os campos do cadastro
        cy.get('h1:contains(Cadastre-se para)').should('be.visible')
        cy.get(':nth-child(2) > header > h2:contains(Dados)')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input')
        .type('Ruenildo')
        .should('have.value','Ruenildo')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input')
        .type('65349189000')
        .should('have.value','65349189000')
        cy.get(':nth-child(3) > :nth-child(2) > input')
        .type('83988888888')
        .should('have.value', '83988888888')
        cy.get(':nth-child(3) > header > h2:contains(Endereço)').should('be.visible')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input')
        .type('58030021')
        .should('have.value','58030021')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()
        cy.get(':nth-child(3) > input').should('have.value', 'Avenida Rio Grande do Sul')
        cy.get(':nth-child(4) > :nth-child(1) > input')
        .type('123')
        .should('have.value', '123')
        cy.get(':nth-child(4) > :nth-child(2) > input')
        .type('teste')
        .should('have.value', 'teste')
        cy.get(':nth-child(5) > :nth-child(1) > input').should('have.value','Estados')
        cy.get(':nth-child(5) > :nth-child(2) > input').should('have.value', 'João Pessoa/PB')
        cy.get('.delivery-method > :nth-child(1)').click();
        //anexando a imagem com um drop e drag
        cy.get('.dropzone').selectFile('img1.png', { action: 'drag-drop' })
        cy.get('.button-success').click()
       //verificando mensagem de erro referente a falta do e-mail
       cy.contains('É necessário informar o email')
       //verificando se continua no mesmo url(pagina)
       cy.url().should('include', '/deliver')
       //verificação do pop-up de confirmação
       cy.get('.swal2-popup').should('not.exist')
    })
    it('Validar campo obrigatorio CEP e endereço', () =>{
        //acessando a url
        cy.visit('https://buger-eats.vercel.app/')
        cy.get('a').click()
        //valivando a url apos clicar pra cadastrar
        cy.url().should('include', '/deliver')
        //preencher os campos do cadastro
        cy.get('h1:contains(Cadastre-se para)').should('be.visible')
        cy.get(':nth-child(2) > header > h2:contains(Dados)')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input')
        .type('Ruenildo')
        .should('have.value','Ruenildo')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input')
        .type('65349189000')
        .should('have.value','65349189000')
        cy.get(':nth-child(3) > :nth-child(1) > input')
        .type('ruenildo@gmail.com')
        .should('have.value', 'ruenildo@gmail.com')
        cy.get(':nth-child(3) > :nth-child(2) > input')
        .type('83988888888')
        .should('have.value', '83988888888')
        cy.get(':nth-child(3) > header > h2:contains(Endereço)').should('be.visible')
        cy.get(':nth-child(3) > input').should('have.value', '')
        cy.get(':nth-child(4) > :nth-child(1) > input')
        .type('123')
        .should('have.value', '123')
        cy.get(':nth-child(4) > :nth-child(2) > input')
        .type('teste')
        .should('have.value', 'teste')
        cy.get(':nth-child(5) > :nth-child(1) > input').should('have.value','')
        cy.get(':nth-child(5) > :nth-child(2) > input').should('have.value', '')
        cy.get('.delivery-method > :nth-child(1)').click();
        //anexando a imagem com um drop e drag
        cy.get('.dropzone').selectFile('img1.png', { action: 'drag-drop' })
        cy.get('.button-success').click()
       //verificando mensagem de erro referente a falta do cep
       cy.contains('É necessário informar o CEP')
       //checando se continua no memso url
       cy.url().should('include', '/deliver')
       //verificação do pop-up de confirmação
       cy.get('.swal2-popup').should('not.exist')
    })
    it('validar campo obrigatorio metodo de entrega', () =>{
        //acessando a url
        cy.visit('https://buger-eats.vercel.app/')
        cy.get('a').click()
        //valivando a url apos clicar pra cadastrar
        cy.url().should('include', '/deliver')
        //preencher os campos do cadastro
        cy.get('h1:contains(Cadastre-se para)').should('be.visible')
        cy.get(':nth-child(2) > header > h2:contains(Dados)')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input')
        .type('Ruenildo')
        .should('have.value','Ruenildo')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input')
        .type('65349189000')
        .should('have.value','65349189000')
        cy.get(':nth-child(3) > :nth-child(1) > input')
        .type('ruenildo@gmail.com')
        .should('have.value', 'ruenildo@gmail.com')
        cy.get(':nth-child(3) > :nth-child(2) > input')
        .type('83988888888')
        .should('have.value', '83988888888')
        cy.get(':nth-child(3) > header > h2:contains(Endereço)').should('be.visible')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input')
        .type('58030021')
        .should('have.value','58030021')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()
        cy.get(':nth-child(3) > input').should('have.value', 'Avenida Rio Grande do Sul')
        cy.get(':nth-child(4) > :nth-child(1) > input')
        .type('123')
        .should('have.value', '123')
        cy.get(':nth-child(4) > :nth-child(2) > input')
        .type('teste')
        .should('have.value', 'teste')
        cy.get(':nth-child(5) > :nth-child(1) > input').should('have.value','Estados')
        cy.get(':nth-child(5) > :nth-child(2) > input').should('have.value', 'João Pessoa/PB')
        //anexando a imagem com um drop e drag
        cy.get('.dropzone').selectFile('img1.png', { action: 'drag-drop' })
        cy.get('.button-success').click()
        //verificando mensagem de erro referente a falta do metodo de entre
        cy.contains('Selecione o método de entrega')
        //verificando se continua no mesmo url(pagina)
        cy.url().should('include', '/deliver')
        //verificação do pop-up de confirmação
        cy.get('.swal2-popup').should('not.exist')
	})
    it('Validar campo obrigatorio foto da CNH', () =>{
        //acessando a url
        cy.visit('https://buger-eats.vercel.app/')
        cy.get('a').click()
        //valivando a url apos clicar pra cadastrar
        cy.url().should('include', '/deliver')
        //preencher os campos do cadastro
        cy.get('h1:contains(Cadastre-se para)').should('be.visible')
        cy.get(':nth-child(2) > header > h2:contains(Dados)')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input')
        .type('Ruenildo')
        .should('have.value','Ruenildo')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input')
        .type('65349189000')
        .should('have.value','65349189000')
        cy.get(':nth-child(3) > :nth-child(1) > input')
        .type('ruenildo@gmail.com')
        .should('have.value', 'ruenildo@gmail.com')
        cy.get(':nth-child(3) > :nth-child(2) > input')
        .type('83988888888')
        .should('have.value', '83988888888')
        cy.get(':nth-child(3) > header > h2:contains(Endereço)').should('be.visible')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input')
        .type('58030021')
        .should('have.value','58030021')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()
        cy.get(':nth-child(3) > input').should('have.value', 'Avenida Rio Grande do Sul')
        cy.get(':nth-child(4) > :nth-child(1) > input')
        .type('123')
        .should('have.value', '123')
        cy.get(':nth-child(4) > :nth-child(2) > input')
        .type('teste')
        .should('have.value', 'teste')
        cy.get(':nth-child(5) > :nth-child(1) > input').should('have.value','Estados')
        cy.get(':nth-child(5) > :nth-child(2) > input').should('have.value', 'João Pessoa/PB')
        cy.get('.delivery-method > :nth-child(1)').click();
        cy.get('.button-success').click()
       //verificando mensagem de erro referente a falta da CNH
       cy.contains('Adicione uma foto da sua CNH')
       //verificando se continua no mesmo url(pagina)
       cy.url().should('include', '/deliver')
       //verificação do pop-up de confirmação
       cy.get('.swal2-popup').should('not.exist')
	})
    it('Validar pesquisa do CEP', () =>{
        //acessando a url
        cy.visit('https://buger-eats.vercel.app/')
        cy.get('a').click()
        //valivando a url apos clicar pra cadastrar
        cy.url().should('include', '/deliver')
        //preencher os campos do cadastro
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input')
        .type('58030021')
        .should('have.value','58030021')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()
        cy.get(':nth-child(3) > input').should('have.value', 'Avenida Rio Grande do Sul')
        cy.get(':nth-child(5) > :nth-child(1) > input').should('have.value','Estados')
        cy.get(':nth-child(5) > :nth-child(2) > input').should('have.value', 'João Pessoa/PB')
       //verificando se continua no mesmo url(pagina)
       cy.url().should('include', '/deliver')
	})
    it('Validar pesquisa quando CEP invalido', () =>{
        //acessando a url
        cy.visit('https://buger-eats.vercel.app/')
        cy.get('a').click()
        //valivando a url apos clicar pra cadastrar
        cy.url().should('include', '/deliver')
        //preencher os campos do cadastro
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input')
        .type('5800021')
        .should('have.value','5800021')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()
        cy.get(':nth-child(3) > input').should('have.value', '')
        cy.get(':nth-child(5) > :nth-child(1) > input').should('have.value','')
        cy.get(':nth-child(5) > :nth-child(2) > input').should('have.value', '')
       //verificando se continua no mesmo url(pagina)
       cy.url().should('include', '/deliver')
	})
    it('Validar preenchimento do endereço ao confirmar cadastro', () =>{
        //acessando a url
        cy.visit('https://buger-eats.vercel.app/')
        cy.get('a').click()
        //valivando a url apos clicar pra cadastrar
        cy.url().should('include', '/deliver')
        //preencher os campos do cadastro
        cy.get('h1:contains(Cadastre-se para)').should('be.visible')
        cy.get(':nth-child(2) > header > h2:contains(Dados)')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input')
        .type('Ruenildo')
        .should('have.value','Ruenildo')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input')
        .type('65349189000')
        .should('have.value','65349189000')
        cy.get(':nth-child(3) > :nth-child(1) > input')
        .type('ruenildo@gmail.com')
        .should('have.value', 'ruenildo@gmail.com')
        cy.get(':nth-child(3) > :nth-child(2) > input')
        .type('83988888888')
        .should('have.value', '83988888888')
        cy.get(':nth-child(3) > header > h2:contains(Endereço)').should('be.visible')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input')
        .type('58030021')
        .should('have.value','58030021')
        cy.get(':nth-child(4) > :nth-child(1) > input')
        .type('123')
        .should('have.value', '123')
        cy.get(':nth-child(4) > :nth-child(2) > input')
        .type('teste')
        .should('have.value', 'teste')
        cy.get('.delivery-method > :nth-child(1)').click();
        //anexando a imagem com um drop e drag
        cy.get('.dropzone').selectFile('img1.png', { action: 'drag-drop' })
        cy.get('.button-success').click()
       //verificando se continua no mesmo url(pagina)
       cy.url().should('include', '/deliver')
       //validando se foi preenchido os campos apos clicar em confirmar cadastro
       cy.get(':nth-child(3) > input').should('have.value', '')
       cy.get(':nth-child(5) > :nth-child(1) > input').should('have.value','')
       cy.get(':nth-child(5) > :nth-child(2) > input').should('have.value', '')
	})
    it('Validar seleção de dois metodos de entrega', () =>{
        //acessando a url
        cy.visit('https://buger-eats.vercel.app/')
        cy.get('a').click()
        //valivando a url apos clicar pra cadastrar
        cy.url().should('include', '/deliver')
        //preencher os campos do cadastro
        cy.get('h1:contains(Cadastre-se para)').should('be.visible')
        cy.get(':nth-child(2) > header > h2:contains(Dados)')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input')
        .type('Ruenildo')
        .should('have.value','Ruenildo')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input')
        .type('65349189000')
        .should('have.value','65349189000')
        cy.get(':nth-child(3) > :nth-child(1) > input')
        .type('ruenildo@gmail.com')
        .should('have.value', 'ruenildo@gmail.com')
        cy.get(':nth-child(3) > :nth-child(2) > input')
        .type('83988888888')
        .should('have.value', '83988888888')
        cy.get(':nth-child(3) > header > h2:contains(Endereço)').should('be.visible')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input')
        .type('58030021')
        .should('have.value','58030021')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()
        cy.get(':nth-child(3) > input').should('have.value', 'Avenida Rio Grande do Sul')
        cy.get(':nth-child(4) > :nth-child(1) > input')
        .type('123')
        .should('have.value', '123')
        cy.get(':nth-child(4) > :nth-child(2) > input')
        .type('teste')
        .should('have.value', 'teste')
        cy.get(':nth-child(5) > :nth-child(1) > input').should('have.value','Estados')
        cy.get(':nth-child(5) > :nth-child(2) > input').should('have.value', 'João Pessoa/PB')
        cy.get('.delivery-method > :nth-child(1)').click();
        cy.get('.delivery-method > :nth-child(2)').click();
        //anexando a imagem com um drop e drag
        cy.get('.dropzone').selectFile('img1.png', { action: 'drag-drop' })
        cy.get('.button-success').click()
       //verificando se continua no mesmo url(pagina)
       cy.url().should('include', '/deliver')
       //verificação do pop-up de confirmação
       cy.get('.swal2-popup').should('not.exist')
	})
    it('Validar botão voltar', () =>{
        //acessando a url
        cy.visit('https://buger-eats.vercel.app/')
        cy.get('a').click()
    })
})