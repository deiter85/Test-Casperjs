var x = require('casper').selectXPath;

casper.test.begin('Campus Abbvie ES - Test13 - Foro', 9, function suite(test) {
    
    casper.start();

    casper.thenOpen('/es', function() {});

    casper.then(function(){
        casper.click('a[href="/es/forum"]');
        this.echo('CLicked in Aulas');
    });

    casper.then(function() {
        test.assertTitle('Foros | AbbVie');
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/forum');
    });

    casper.then(function(){
        casper.click('a[href="/es/forum/1621"]');
        this.echo('Clicked in Gestion sanitaria');
    });

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

    casper.then(function() {
        test.assertTitle('Ventas | AbbVie');
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/forum/1632');
    });

    casper.run(function() {
        test.done();
    });


});