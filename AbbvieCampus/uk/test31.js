var x = require('casper').selectXPath;

casper.test.begin('Campus Abbvie UK - Test31 - Forum', 9, function suite(test) {   
    
    casper.start();

    casper.thenOpen('/uk', function() {});

    casper.then(function(){
        casper.click('a[href="/uk/forum"]');
        this.echo('Clicked in Forums');
    });

    casper.then(function() {
        test.assertTitle('Forums | AbbVie');
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/forum');
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

    casper.run(function() {
        test.done();
    });
    
});