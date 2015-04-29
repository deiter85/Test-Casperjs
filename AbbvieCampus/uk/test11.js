var x = require('casper').selectXPath;
var userName = ****;
var password = ****;

casper.test.begin('Campus Abbvie - Test11 Links and Wiki', 10, function suite(test) {   
    
    casper.start('https://abbvie-wec.dev.aspgems.com/uk/user', function() {
        this.echo('⌚ Logging in....');
        this.fill('form#user-login', {
            'name': userName,
            'pass': password
        }, true);
        this.echo('Homepage was loaded successfully.');
    });

    casper.wait(750, function() {});

    casper.then(function(){
        casper.click('a[href="/uk/links"]');
        this.echo('Clicked in Links');
    });

    casper.wait(750, function() {});

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITLE');
    });

    casper.then(function() {
        test.assertExists(x('//div[@id="block-system-main"]/div/div[@class="view-header"]'), 'Find an element matching: TEXT');
    });

    casper.then(function() {
        test.assertExists(x('//div[@id="block-system-main"]/div/div[@class="view-footer"]'), 'Find an element matching: AREA LINKS FRAME');
    });

    casper.then(function() {
        test.assertExists(x('//div[@id="block-system-main"]/div/div[@class="view-content"]'), 'Find an element matching: LIST OF LINKS FRAME');
    });

    casper.then(function(){
        casper.click('a[href="/uk/wiki"]');
        this.echo('Clicked in Wiki');
    });

    casper.wait(500, function() {});

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITLE');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="views-exposed-form-wiki-search-page"]'), 'Find an element matching: SEARCH FORM');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="block-customblocks-number-of-wikiterms"]'), 'Find an element matching: TEXT NUMBERS OF TERMS');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="lexicon-admin-links"]'), 'Find an element matching: BUTTONS ADD EDIT');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="lexicon-links"]'), 'Find an element matching: BAR LYRICS');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="lexicon-list"]'), 'Find an element matching: LIST OF TERMS');
    });

    casper.then(function() {
        casper.click('a[href="/uk/user/logout"]');
        this.echo('⌚ Log out....');
    });

    casper.run(function() {
        test.done();
    });

});