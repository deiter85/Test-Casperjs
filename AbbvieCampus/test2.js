var x = require('casper').selectXPath;
var userName = ****;
var password = ****;

casper.test.begin('Campus Abbvie - Test2', 9, function suite(test) {

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
        casper.click("a[href='/es/catalogue']");
        this.echo('Clicked in Catalogo');
    });

    casper.wait(500, function() {});

    casper.then(function(){
        test.assertHttpStatus(200, 'Request catalogue page was loaded successfully.');
        test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/catalogue');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'));
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-filters"]'));
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-content"]'));
    });

    casper.then(function(){
        casper.click("a[href='/es/list-of-classrooms']");
        this.echo('Clicked in Aula');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'));
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-header"]'));
    });

    casper.then(function() {
        test.assertExists(x('//form[@id="views-exposed-form-classrooms-page"]'));
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-content"]'));
    });

    casper.then(function() {
        casper.click("a[href='/es/user/logout']");
        this.echo('⌚ Log out....');
    });

    casper.run(function() {
        test.done();
    });

});
