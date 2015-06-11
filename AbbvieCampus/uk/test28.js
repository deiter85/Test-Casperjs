var x = require('casper').selectXPath;

casper.test.begin('Campus Abbvie UK - Test28 - My points, my account and suggestions', 14, function suite(test) {   
    
    casper.start();

    casper.thenOpen('/uk', function() {});

    casper.then(function(){
        casper.click('a[href="https://abbviecampus.com/uk/userpoints-view"]');
        this.echo('Clicked in My points');
    });

    casper.then(function() {
        test.assertTitle('User Points | AbbVie');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITLE');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="block-system-main"]'), 'Find an element matching: TEXT');
    });

    casper.then(function(){
        casper.click('a[href="https://abbviecampus.com/uk/user"]');
        this.echo('Clicked in My account');
    });

    casper.then(function() {
        test.assertTitle('casper_test | AbbVie');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITLE');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="group-left"]'), 'Find an element matching: USER IMAGE');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="group-right"]'), 'Find an element matching: USER DATA');
    });

    casper.then(function(){
        casper.click('a[href="/uk/myuserpoints"]');
        this.echo('Clicked in View points transactions');
    });

    casper.then(function() {
        test.assertTitle('Points for casper_test | AbbVie');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITLE');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="userpoints-myuserpoints-list sticky-enabled tableheader-processed sticky-table"]'), 'Find an element matching: TABLE POINTS');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="userpoints-myuserpoints-total sticky-enabled tableheader-processed sticky-table"]'), 'Find an element matching: TABLE TOTAL POINTS');
    });

    casper.then(function(){
        casper.click('a[href="/uk/suggestions"]');
        this.echo('Clicked in Suggestions');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITLE');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="pre-instructions"]'), 'Find an element matching: TEXT');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="suggestions-entityform-edit-form"]'), 'Find an element matching: FORM');
    });

    casper.run(function() {
        test.done();
    });

});