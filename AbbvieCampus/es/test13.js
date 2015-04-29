var x = require('casper').selectXPath;
var userName = ****;
var password = ****;

casper.test.begin('Campus Abbvie - Test13 - Foro', 9, function suite(test) {   
    
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
        casper.click('a[href="/es/forum"]');
        this.echo('Clicked in Foros');
    });

    casper.wait(500, function() {});

    casper.then(function() {
        test.assertTitle('Foros | AbbVie');
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/forum');
    });

    casper.then(function(){
        casper.click('a[href="/es/forum/1611"]');
        this.echo('CLicked in AULAS');
    });

    casper.wait(500, function() {});

    casper.then(function() {
        test.assertTitle('Aulas | AbbVie');
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/forum/1611');
    });

    casper.then(function(){
        casper.click('a[href="/es/forum/1621"]');
        this.echo('Clicked in GESTION SANITARIA');
    });

    casper.wait(500, function() {});

    casper.then(function() {
        test.assertTitle('Gestión Sanitaria | AbbVie');
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/forum/1621');
    });

    casper.then(function() {
        casper.click('a[href="/es/user/logout"]');
        this.echo('⌚ Log out....');
    });

    casper.run(function() {
        test.done();
    });


});