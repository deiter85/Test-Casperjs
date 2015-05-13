var x = require('casper').selectXPath;
var userName = ****;
var password = ****;

casper.test.begin('Campus Abbvie ES - Test12 - Busqueda', 6, function suite(test) {   
    
    casper.start('https://abbviecampus.com/es/user', function() {
        this.echo('⌚ Logging in....');
        this.fill('form#user-login', {
            'name': userName,
            'pass': password
        }, true);
        this.echo('Homepage was loaded successfully.');
    });

    casper.wait(500, function() {});

    casper.then(function(){
        this.echo('⌚ Search....');
        this.fill('form#search-block-form', {
            'search_block_form': 'clinica',
        }, true);
        this.echo('Page was loaded successfully.');
    });

    casper.wait(50, function() {});

    casper.then(function() {
        test.assertTitle('Buscar | AbbVie');
        test.assertHttpStatus(200);
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITULO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="tasks"]'), 'Find an element matching: BOTONES CONTENIDO USUARIO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="search-form"]'), 'Find an element matching: FORMULARIO BUSQUEDA');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="search-results node-results"]'), 'Find an element matching: LISTA RESULTADOS');
    });

    casper.then(function() {
        casper.click('a[href="/es/user/logout"]');
        this.echo('⌚ Log out....');
    });

    casper.run(function() {
        test.done();
    });

});