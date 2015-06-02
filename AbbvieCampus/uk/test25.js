var x = require('casper').selectXPath;

casper.test.begin('Campus Abbvie UK - Test25 - Annual training, Contacts y FAQs', 8, function suite(test) {   
    
    casper.start();

    casper.thenOpen('/uk', function() {});

    casper.then(function(){
        casper.click('a[href="/uk/annual-training"]');
        this.echo('Clicked in Annual training');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITLE');
    });

    casper.then(function(){
        casper.click('a[href="/uk/contacts"]');
        this.echo('Clicked in Contacts');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITLE');
    });

    casper.then(function() {
        test.assertExists(x('//div[@id="block-system-main"]/div/div[@class="view-header"]'), 'Find an element matching: TEXT');
    });

    casper.then(function() {
        test.assertExists(x('//div[@id="block-system-main"]/div/div[@class="view-content"]/div[@class="item-list"]'), 'Find an element matching: CONTACTS FRAME');
    });

    casper.then(function() {
        test.assertExists(x('//div[@class="view-footer"]'), 'Find an element matching: AREA CONTACTS FRAME');
    });

    casper.then(function(){
        casper.click('a[href="/uk/faqs"]');
        this.echo('Clicked in FAQs');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITLE');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-header"]'), 'Find an element matching: TEXT');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-content ui-accordion ui-widget ui-helper-reset"]'), 'Find an element matching: LIST FAQS');
    });

    casper.run(function() {
        test.done();
    });

});