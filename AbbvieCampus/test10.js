var x = require('casper').selectXPath;
var userName = ****;
var password = ****;

casper.test.begin('Campus Abbvie - Test10', 11, function suite(test) {   
    
    casper.start('https://abbvie-wec.dev.aspgems.com/es/user', function() {
        this.echo('⌚ Logging in....');
        this.fill('form#user-login', {
            'name': userName,
            'pass': password
        }, true);
        this.echo('Homepage was loaded successfully.');
    });

    casper.wait(500, function() {});

    casper.then(function(){
        casper.click('a[href="https://abbvie-wec.dev.aspgems.com/es/userpoints-view"]');
        this.echo('Clicked in Mis puntos');
    });

    casper.wait(500, function() {});

    /*casper.then(function() {
        test.assertTitle('User Points | AbbVie');
    });*/

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITULO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="block-system-main"]'), 'Find an element matching: TEXTO');
    });

    casper.then(function(){
        casper.click('a[href="https://abbvie-wec.dev.aspgems.com/es/user"]');
        this.echo('Clicked in Mi cuenta');
    });

    casper.wait(500, function() {});

    /*casper.then(function() {
        test.assertTitle('uk_editor | AbbVie');
    });*/

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITULO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="group-left"]'), 'Find an element matching: IMAGEN USUARIO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="group-right"]'), 'Find an element matching: DATOS USUARIO');
    });

    casper.then(function(){
        casper.click('a[href="/es/myuserpoints"]');
        this.echo('Clicked in Ver transacciones de puntos');
    });

    casper.wait(500, function() {});

    /*casper.then(function() {
        test.assertTitle('Points para uk_editor | AbbVie');
    });*/

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITULO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="userpoints-myuserpoints-list sticky-enabled tableheader-processed sticky-table"]'), 'Find an element matching: TABLA PUNTOS');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="userpoints-myuserpoints-total sticky-enabled tableheader-processed sticky-table"]'), 'Find an element matching: TABLA TOTAL PUNTOS');
    });

    casper.then(function(){
        casper.click('a[href="/es/suggestions"]');
        this.echo('Clicked in Sugerencias');
    });

    casper.wait(500, function() {});

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITULO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="pre-instructions"]'), 'Find an element matching: TEXTO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="suggestions-entityform-edit-form"]'), 'Find an element matching: FORMULARIO');
    });

    casper.then(function() {
        casper.click('a[href="/es/user/logout"]');
        this.echo('⌚ Log out....');
    });

    casper.run(function() {
        test.done();
    });

});