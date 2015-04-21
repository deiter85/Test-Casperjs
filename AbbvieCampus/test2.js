var x = require('casper').selectXPath;
var userName = ****;
var password = ****;

casper.test.begin('Campus Abbvie - Test2', 7, function suite(test) {

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
        casper.click("a[href='/es/catalogue']");
        this.echo('Clicked in Catalogo');
    });

    casper.wait(750, function() {});

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITULO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-filters"]'), 'Find an element matching: CUADRO DEL FORMULARIO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-content"]'), 'Find an element matching: LISTA DE CURSOS');
    });

    casper.then(function(){
        casper.click("a[href='/es/list-of-classrooms']");
        this.echo('Clicked in Aula');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITULO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-header"]'), 'Find an element matching: TEXTO');
    });

    casper.then(function() {
        test.assertExists(x('//form[@id="views-exposed-form-classrooms-page"]'), 'Find an element matching: FORMULARIO BUSQUEDA AULA');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-content"]'), 'Find an element matching: LISTA DE AULAS');
    });

    casper.then(function() {
        casper.click("a[href='/es/user/logout']");
        this.echo('⌚ Log out....');
    });

    casper.run(function() {
        test.done();
    });

});
