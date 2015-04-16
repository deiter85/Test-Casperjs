var userName = ****;
var password = ****;

casper.test.begin('Campus Abbvie - Test1', 18, function suite(test) {

  casper.start();
  
  casper.thenOpen('/user', function() {
    this.echo('⌚ Logging in....');
    this.fill('form[action="/user"]', {
      	'name': userName,
      	'pass': password
    }, true);
    this.echo('Homepage was loaded successfully.')
  });

  casper.wait(1000, function() {});

  casper.then(function() {
		test.assertTitle('AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('http://abbvie-wec.dev.aspgems.com/es');
  });

  casper.then(function() {
    casper.click("a[href='/es/catalogue']");
    this.echo('Clicked in Catalogo');
  });

  casper.then(function() {
    test.assertTitle('Catalogue of training activities | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('http://abbvie-wec.dev.aspgems.com/es/catalogue');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/list-of-classrooms']");
    this.echo('Clicked in Aula');
  });

  casper.then(function() {
    test.assertTitle('Aula | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('http://abbvie-wec.dev.aspgems.com/es/list-of-classrooms');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/faqs']");
    this.echo('Clicked in FAQs');
  });

  casper.then(function() {
    test.assertTitle('FAQs | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('http://abbvie-wec.dev.aspgems.com/es/faqs');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/my-training']");
    this.echo('Clicked in My training');
  });

  casper.then(function() {
    test.assertTitle('My training | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('http://abbvie-wec.dev.aspgems.com/es/my-training');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/point-program']");
    this.echo('Clicked in Recompensas');
  });

  casper.then(function() {
    test.assertTitle('Información | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('http://abbvie-wec.dev.aspgems.com/es/point-program');
  });

  casper.run(function() {
    test.done();
  });

});