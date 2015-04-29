var x = require('casper').selectXPath;
var userName = ****;
var password = ****;

casper.test.begin('Campus Abbvie - Test11 - Enlaces y Wiki', 10, function suite(test) {   
    
    casper.start('https://abbvie-wec.dev.aspgems.com/es/user', function() {
        this.echo('⌚ Logging in....');
        this.fill('form#user-login', {
            'name': userName,
            'pass': password
        }, true);
        this.echo('Homepage was loaded successfully.');
    });

    casper.wait(750, function() {});

    casper.then(function(){
        casper.click('a[href="/es/links"]');
        this.echo('Clicked in Enlaces');
    });

    casper.wait(750, function() {});

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITULO');
    });

    casper.then(function() {
        test.assertExists(x('//div[@id="block-system-main"]/div/div[@class="view-header"]'), 'Find an element matching: TEXTO');
    });

    casper.then(function() {
        test.assertExists(x('//div[@id="block-system-main"]/div/div[@class="view-footer"]'), 'Find an element matching: CUADRO LINKS DE AREA');
    });

    casper.then(function() {
        test.assertExists(x('//div[@id="block-system-main"]/div/div[@class="view-content"]'), 'Find an element matching: CUADRO LISTA ENLACES');
    });

    casper.then(function(){
        casper.click('a[href="/es/wiki"]');
        this.echo('Clicked in Wiki');
    });

    casper.wait(500, function() {});

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITULO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="views-exposed-form-wiki-search-page"]'), 'Find an element matching: FORMULARIO BUSQUEDA');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="block-customblocks-number-of-wikiterms"]'), 'Find an element matching: TEXTO NUMERO TERMINOS');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="lexicon-admin-links"]'), 'Find an element matching: BOTONES AGREGAR EDITAR');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="lexicon-links"]'), 'Find an element matching: BARRA LETRAS');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="lexicon-list"]'), 'Find an element matching: LISTA TERMINOS');
    });

    casper.then(function() {
        casper.click('a[href="/es/user/logout"]');
        this.echo('⌚ Log out....');
    });

    casper.run(function() {
        test.done();
    });

});