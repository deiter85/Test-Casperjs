var x = require('casper').selectXPath;
var userName = ****;
var password = ****;

casper.test.begin('Campus Abbvie - Test13 - Foro', 9, function suite(test) {   
    
    casper.start('https://abbviecampus.com/es/user', function() {
        this.echo('⌚ Logging in....');
        this.fill('form#user-login', {
            'name': userName,
            'pass': password
        }, true);
        this.echo('Homepage was loaded successfully.');
    });

    casper.wait(500, function() {});

    casper.then(function(){
        casper.click('a[href="/es/forum/1611"]');
        this.echo('CLicked in Aulas');
    });

    casper.wait(500, function() {});

    casper.then(function() {
        test.assertTitle('Aulas | AbbVie');
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/forum/1611');
    });

    casper.then(function(){
        casper.click('a[href="/es/forum/1621"]');
        this.echo('Clicked in Gestion sanitaria');
    });

    casper.wait(500, function() {});

    casper.then(function() {
        test.assertTitle('Gestión Sanitaria | AbbVie');
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/forum/1621');
    });

    casper.back();

    casper.then(function(){
        casper.click('a[href="/es/forum/1632"]');
        this.echo('Clicked in Ventas');
    });

    casper.wait(500, function() {});

    casper.then(function() {
        test.assertTitle('Ventas | AbbVie');
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/forum/1632');
    });

    casper.then(function() {
        casper.click('a[href="/es/user/logout"]');
        this.echo('⌚ Log out....');
    });

    casper.run(function() {
        test.done();
    });


});