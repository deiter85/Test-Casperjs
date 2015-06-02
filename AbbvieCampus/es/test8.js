var x = require('casper').selectXPath;

casper.test.begin('Campus Abbvie ES - Test8 - Ayuda y Noticias', 9, function suite(test) {   
    
    casper.start();

    casper.thenOpen('/es', function() {});

    casper.then(function(){
        casper.click('a[href="/es/help"]');
        this.echo('Clicked in Ayuda');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITULO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-header"]'), 'Find an element matching: TEXTO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="views-table cols-3"]'), 'Find an element matching: TABLA');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="views-table cols-3"]/thead'), 'Find an element matching: NOMBRE DE LAS COLUMNAS');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="views-table cols-3"]/tbody'), 'Find an element matching: LISTA DE ITEMS');
    });

    casper.then(function(){
        casper.click('a[href="/es/news"]');
        this.echo('Clicked in Noticias');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITULO');
    });

    casper.then(function() {
        test.assertExists(x('//div[@id="block-system-main"]/div/div[@class="view-content"]/div[@class="item-list"]'), 'Find an element matching: LISTA NOTICIAS');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="pager"]'), 'Find an element matching: SELECCION DE PAGINA DE NOTICIAS');
    });

    casper.then(function() {
        test.assertExists(x('//div[@class="view-footer"]'), 'Find an element matching: LISTA AREA NEWS');
    });

    casper.run(function() {
        test.done();
    });

});