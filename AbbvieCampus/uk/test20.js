var x = require('casper').selectXPath;

casper.test.begin('Campus Abbvie UK - Test20 - Catalogue and Studyroom', 8, function suite(test) {

    casper.start();

    casper.thenOpen('/uk', function() {});

    casper.then(function(){
        casper.click('a[href="/uk/catalogue"]');
        this.echo('Clicked in Catalogue');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITLE');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="views-exposed-form-courses-page"]'), 'Find an element matching: FORM');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-content"]'), 'Find an element matching: LIST OF COURSES');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="pager"]'), 'Find an element matching: ITEMS');
    });

    casper.then(function(){
        casper.click('a[href="/uk/list-of-classrooms"]');
        this.echo('Clicked in Studyrooms');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITLE');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-header"]'), 'Find an element matching: TEXT');
    });

    casper.then(function() {
        test.assertExists(x('//form[@id="views-exposed-form-classrooms-page"]'), 'Find an element matching: SEARCH FORM');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-content"]'), 'Find an element matching: LIST OF STUDYROOMS');
    });

    casper.run(function() {
        test.done();
    });

});