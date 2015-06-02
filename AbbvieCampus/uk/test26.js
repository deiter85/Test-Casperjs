var x = require('casper').selectXPath;

casper.test.begin('Campus Abbvie UK - Test26 - Help and News', 9, function suite(test) {   
    
    casper.start();

    casper.thenOpen('/uk', function() {});

    casper.then(function(){
        casper.click('a[href="/uk/help"]');
        this.echo('Clicked in Help');
    });

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

    casper.run(function() {
        test.done();
    });

});