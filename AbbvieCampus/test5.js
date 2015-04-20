var x = require('casper').selectXPath;
var userName = ****;
var password = ****;

casper.test.begin('Campus Abbvie - Test5', 16, function suite(test) {   
	
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
        casper.click("a[href='/es/schedule-course-list']");
        this.echo('Clicked in Itinerarios formativos');
    });

    casper.wait(500, function() {});

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'));
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="page-header"]'));
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="position-selector"]'));
    });

    casper.then(function(){
        this.fill('form#position-selector', {
            'posicitions': '2697',
        }, true);
        this.echo('Clicked in Mostrar itinerario');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="percentages"]'));
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="print-area"]'));
    });

    casper.then(function(){
        casper.click("a[href='/es/my-training']");
        this.echo('Clicked in Aula');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'));
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-header"]'));
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="mytrainingtabs"]'));
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="pending"]'));
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="recommend"]'));
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="completed"]'));
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="certifications"]'));
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-empty"]'));
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="block-views-my-training-block-3"]'));
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="block-views-my-training-block-1"]'));
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="block-views-digital-certifications-block-1"]'));
    });

    casper.then(function() {
        casper.click("a[href='/es/user/logout']");
        this.echo('⌚ Log out....');
    });

    casper.run(function() {
        test.done();
    });

});