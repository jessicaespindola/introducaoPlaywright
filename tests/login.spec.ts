
import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

let loginPage: LoginPage

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
})

test('deve logar com sucesso', async ({ page }) => {

    //const loginPage: LoginPage = new LoginPage(page)

    //acessa a página de login
    await loginPage.go()

    // submete o formulário de login
    await loginPage.sigIn('qa', 'cademy')

    //valida login no modal
    await loginPage.userLoggedIn()

})

test('senha incorreta', async ({ page }) => {

    await loginPage.go()
    await loginPage.sigIn('qa', '123456')
    await loginPage.toastMessage('Oops! Credenciais inválidas :(')

})

test('nome obrigatório', async ({ page }) => {

    await loginPage.go()
    await loginPage.sigIn('', 'cademy')
    await loginPage.toastMessage('Informe o seu nome de usuário!')

})

test('senha obrigatória', async ({ page }) => {

    await loginPage.go()
    await loginPage.sigIn('qa', '')
    await loginPage.toastMessage('Informe a sua senha secreta!')

})