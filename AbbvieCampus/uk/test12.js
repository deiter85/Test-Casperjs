var x = require('casper').selectXPath;
var userName = ****;
var password = ****;

casper.test.begin('Campus Abbvie - Test12 - Search', 6, function suite(test) {   
    
    casper.start('https://abbvie-wec.dev.aspgems.com/uk/user', function() {
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
            'search_block_form': 'Abbvie',
        }, true);
        this.echo('Page was loaded successfully.');
    });

    casper.wait(500, function() {});

    casper.wait(500, function() {});

    casper.then(function() {
        test.assertTitle('Search | AbbVie');
        test.assertHttpStatus(200);
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITLE');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="tasks"]'), 'Find an element matching: BUTTONS CONTENT USERS');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="search-form"]'), 'Find an element matching: SEARCH FORM');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="search-results node-results"]'), 'Find an element matching: LIST OF RESULTS');
    });

    casper.then(function() {
        casper.click('a[href="/uk/user/logout"]');
        this.echo('⌚ Log out....');
    });

    casper.run(function() {
        test.done();
    });

});