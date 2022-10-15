import {username, password} from './fixtures.js'

describe('Czechitas Login Page', () => {

    it('should login and list applications', () => {
        
        browser.reloadSession();
        
        browser.url('/prihlaseni');

// cvičení 1

        // 2. najít element pro vyplnění emailu a hesla
        const emailField = $('#email');
        const passwordField = $('#password');

        // 3. Zjisti, jestli jsou tyto elementy editovatelné (enabled) a viditelné pomocí isDisplayed a isEnabled
        console.log('Email field is displayed: ' + emailField.isDisplayed());
        console.log('Email field is enabled: ' + emailField.isEnabled());

        console.log("Password field is displayed: " + passwordField.isDisplayed());
        console.log("Password field is enabled: " + passwordField.isEnabled());

        // 4. Najdi tlačítko pro přihlášení a jeho vypiš text pomocí getText
        const loginButton = $('.btn-primary');
        console.log("Login button text: " + loginButton.getText());


        // 5. Najdi odkaz “Zapomněli jste své heslo?” a vypiš hodnotu jeho atributu href
        const lostPasswordLink = $('form').$('a').getAttribute('href');
        console.log('Lost password link: ' + lostPasswordLink);
 
        // 6. V testu se přihlaš do aplikace, použij setValue a click
        emailField.setValue(username);
        passwordField.setValue(password);
        loginButton.click();

        // 7. Najdi element který obsahuje celé jméno přihlášeného uživatele a vypiš ho do konzole (tady by se ti mohlo hodit řetězení elementů)
        const currentUser = $('.navbar-right').$('strong').getText();
        console.log("Current user: " + currentUser.getText());

        //ERROR Can't call getText on element with selector "strong" because element wasn't found

//Cvičení 2

        // 1. Klikni na odkaz Přihlášky
        $('=Přihlášky').click();

        // 2. Pomocí řetězení selektorů a $$ a getText najdi  všechny řádky tabulky s příhláškami. Dej si ale pozor, abys nehledal/a hlavičku ani zápatí tabulky. (tak toto jsem zkopírovala, protože na to nemám nervy)
        // 3. Vypiš počet řádků tabulky
        const rows = $('.dataTable').$('tbody').$$('tr')
        console.log('There are ' + rows.length + ' rows in the table');
        rows.forEach(row => {
            console.log(row.getText());
        })




        // 4. Vypiš text každého řádku tabulky.   




    });
    
});