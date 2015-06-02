var x = require('casper').selectXPath;

casper.test.begin('Campus Abbvie ES - Test12 - Busqueda', 7, function suite(test) {   
    
    casper.start();

    casper.thenOpen('/es', function() {});

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
        test.assertExists(x('//*[@id="edit-submit"]'), 'Find an element matching: BOTON BUSCAR');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="search-form"]'), 'Find an element matching: FORMULARIO BUSQUEDA');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="search-results node-results"]'), 'Find an element matching: LISTA RESULTADOS');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="item-list item-list-pager"]'), 'Find an element matching: BOTONES DE PAGINAS');
    });

    casper.run(function() {
        test.done();
    });

});