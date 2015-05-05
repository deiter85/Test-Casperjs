var x = require('casper').selectXPath;
var userName = ****;
var password = ****;

casper.test.begin('Campus Abbvie - Test7 - Formacion Anual y FAQs',5, function suite(test) {   
	
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
        casper.click('a[href="/es/annual-training"]');
        this.echo('Clicked in Formacion anual');
    });

    casper.wait(500, function() {});

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITULO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-content ui-accordion ui-widget ui-helper-reset"]'), 'Find an element matching: LISTA DOCUMENTOS');
    });

    casper.then(function(){
        casper.click('a[href="/es/faqs"]');
        this.echo('Clicked in FAQs');
    });

    casper.wait(500, function() {});

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITULO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-header"]'), 'Find an element matching: TEXTO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-content ui-accordion ui-widget ui-helper-reset"]'), 'Find an element matching: LISTA PREGUNTAS FRECUENTES');
    });
   
    casper.then(function() {
        casper.click('a[href="/es/user/logout"]');
        this.echo('⌚ Log out....');
    });

    casper.run(function() {
        test.done();
    });

});