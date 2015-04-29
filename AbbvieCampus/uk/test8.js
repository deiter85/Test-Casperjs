var x = require('casper').selectXPath;
var userName = ****;
var password = ****;

casper.test.begin('Campus Abbvie - Test8 - Help and News', 9, function suite(test) {   
    
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
        casper.click('a[href="/uk/help"]');
        this.echo('Clicked in Help');
    });

    casper.wait(500, function() {});

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITLE');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-header"]'), 'Find an element matching: TEXT');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="views-table cols-3"]'), 'Find an element matching: TABLE');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="views-table cols-3"]/thead'), 'Find an element matching: NAME OF COLUMNS');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="views-table cols-3"]/tbody'), 'Find an element matching: LIST OF ITEMS');
    });

    casper.then(function(){
        casper.click('a[href="/uk/news"]');
        this.echo('Clicked in News');
    });

    casper.wait(500, function() {});

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITLE');
    });

    casper.then(function() {
        test.assertExists(x('//div[@id="block-system-main"]/div/div[@class="view-content"]/div[@class="item-list"]'), 'Find an element matching: LIST NEWS');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="pager"]'), 'Find an element matching: PAGER');
    });

    casper.then(function() {
        test.assertExists(x('//div[@class="view-footer"]'), 'Find an element matching: LIST AREA NEWS');
    });

    casper.then(function() {
        casper.click('a[href="/uk/user/logout"]');
        this.echo('⌚ Log out....');
    });

    casper.run(function() {
        test.done();
    });

});