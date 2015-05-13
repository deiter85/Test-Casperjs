var x = require('casper').selectXPath;
var userName = ****;
var password = ****;

casper.test.begin('Campus Abbvie UK - Test13 - Forum', 9, function suite(test) {   
    
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
        casper.click('a[href="/uk/forum/400"]');
        this.echo('Clicked in Forums');
    });

    casper.then(function() {
        test.assertTitle('Studyrooms | AbbVie');
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/forum/400');
    });

    casper.then(function(){
        casper.click('a[href="/uk/forum/421"]');
        this.echo('CLicked in Veeva Customer Relationship Management');
    });

    casper.then(function() {
        test.assertTitle('Veeva Customer Relationship Management | AbbVie');
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/forum/421');
    });

    casper.back();

    casper.then(function(){
        casper.click('a[href="/uk/forum/415"]');
        this.echo('Clicked in Lynda com and External Experts');
    });

    casper.then(function() {
        test.assertTitle('Lynda com and External Experts | AbbVie');
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/forum/415');
    });

    casper.then(function() {
        casper.click('a[href="/uk/user/logout"]');
        this.echo('⌚ Log out....');
    });

    casper.run(function() {
        test.done();
    });


});