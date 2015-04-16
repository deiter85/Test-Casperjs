casper.test.begin('Campus Abbvie - Test3', 12, function suite(test) {

  casper.start();
  
  casper.thenOpen('/es', function() {});

  casper.then(function() {
    casper.click("a[href='/es/annual-training']");
    this.echo('Clicked in Formacion anual');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('http://abbvie-wec.dev.aspgems.com/es/annual-training');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/news']");
    this.echo('Clicked in Noticias');
    this
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('http://abbvie-wec.dev.aspgems.com/es/news');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/links']");
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('http://abbvie-wec.dev.aspgems.com/es/links');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/help']");
    this.echo('Clicked in Ayuda');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('http://abbvie-wec.dev.aspgems.com/es/help');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/wiki']");
    this.echo('Clicked in Wiki');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('http://abbvie-wec.dev.aspgems.com/es/wiki');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/contacts']");
    this.echo('Clicked in Contactos');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('http://abbvie-wec.dev.aspgems.com/es/contacts');
  });

  casper.run(function() {
    test.done();
  });

});