var x = require('casper').selectXPath;

casper.test.begin('Campus Abbvie UK - Test30 - Search', 7, function suite(test) {   
    
    casper.start();

    casper.thenOpen('/uk', function() {});

    casper.then(function(){
        this.echo('⌚ Search....');
        this.fill('form#search-block-form', {
            'search_block_form': 'Abbvie',
        }, true);
        this.echo('Page was loaded successfully.');
    });

    casper.wait(50, function() {});

    casper.then(function() {
        test.assertTitle('Search | AbbVie');
        test.assertHttpStatus(200);
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITLE');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="edit-submit"]'), 'Find an element matching: SEARCH BUTTON');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="search-form"]'), 'Find an element matching: SEARCH FORM');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="search-results node-results"]'), 'Find an element matching: LIST OF RESULTS');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="item-list item-list-pager"]'), 'Find an element matching: PAGES BUTTONS');
    });

    casper.run(function() {
        test.done();
    });

});