var x = require('casper').selectXPath;

casper.test.begin('Campus Abbvie ES - Test11 - Enlaces y Wiki', 10, function suite(test) {   
    
    casper.start();

    casper.thenOpen('/es', function() {});

    casper.then(function(){
        casper.click('a[href="/es/links"]');
        this.echo('Clicked in Enlaces');
    });

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

    casper.run(function() {
        test.done();
    });

});