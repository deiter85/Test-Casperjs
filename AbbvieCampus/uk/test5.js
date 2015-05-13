var x = require('casper').selectXPath;
var userName = ****;
var password = ****;

casper.test.begin('Campus Abbvie UK - Test5 - My training', 9, function suite(test) {   
	
    casper.start('https://abbviecampus.com/uk/user', function() {
        this.echo('⌚ Logging in....');
        this.fill('form#user-login', {
            'name': userName,
            'pass': password
        }, true);
        this.echo('Homepage was loaded successfully.');
    });

    casper.wait(500, function() {});    

    casper.then(function(){
        casper.click('a[href="/uk/my-training"]');
        this.echo('Clicked in My training');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITLE');
    });

    casper.then(function() {
        test.assertExists(x('//div[@id="block-system-main"]/div/div[@class="view-header"]'), 'Find an element matching: TEXT AND PENDING COURSES FRAME');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="mytrainingtabs"]'), 'Find an element matching: TIPES OF COURSES FRAME');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="pending"]'), 'Find an element matching: TITLE PENDING COURSES');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="recommend"]'), 'Find an element matching: TITLE RECOMMENDED');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="completed"]'), 'Find an element matching: TITLE COMPLETED COURSES');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="block-views-my-training-block-3"]'), 'Find an element matching: RECOMMENDED FRAME');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="block-views-historico-block"]'), 'Find an element matching: COMPLETED COURSES FRAME');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="views-table cols-3"]'), 'Find an element matching: TABLE OF COMPLETED COURSES FRAME');
    });

    casper.then(function() {
        casper.click('a[href="/uk/user/logout"]');
        this.echo('⌚ Log out....');
    });

    casper.run(function() {
        test.done();
    });

});