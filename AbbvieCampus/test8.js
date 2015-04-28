var x = require('casper').selectXPath;
var userName = ****;
var password = ****;

casper.test.begin('Campus Abbvie - Test8', 9, function suite(test) {   
    
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
        casper.click('a[href="/es/help"]');
        this.echo('Clicked in Ayuda');
    });

    casper.wait(500, function() {});

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

    casper.wait(500, function() {});

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

    casper.then(function() {
        casper.click('a[href="/es/user/logout"]');
        this.echo('⌚ Log out....');
    });

    casper.run(function() {
        test.done();
    });

});