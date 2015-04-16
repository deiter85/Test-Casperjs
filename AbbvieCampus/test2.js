casper.test.begin('Campus Abbvie - Test2', 12, function suite(test) {

  casper.start();
  
  casper.thenOpen('/es', function() {});

  casper.then(function() {
    casper.click("a[href='/es/list-of-classrooms']");
    this.echo('Clicked in Aula');
  });

  casper.then(function() {
    casper.click("a[href='/es/studyrooms/adherencia']");
    this.echo('Clicked in Adherencia');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('http://abbvie-wec.dev.aspgems.com/es/studyrooms/adherencia/courses');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/studyrooms/an%C3%A1lisis-de-negocio']");
    this.echo('Clicked in Análisis de negocio');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('http://abbvie-wec.dev.aspgems.com/es/studyrooms/análisis-de-negocio/courses');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/studyrooms/competencias']");
    this.echo('Clicked in Competencias');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('http://abbvie-wec.dev.aspgems.com/es/studyrooms/competencias/courses');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/studyrooms/compliance']");
    this.echo('Clicked in Compliance');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('http://abbvie-wec.dev.aspgems.com/es/studyrooms/compliance/courses');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/studyrooms/comunicaci%C3%B3n-corporativa']");
    this.echo('Clicked in Comunicación corporativa');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('http://abbvie-wec.dev.aspgems.com/es/studyrooms/comunicación-corporativa/courses');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/studyrooms/finanzas']");
    this.echo('Clicked in Finanzas');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('http://abbvie-wec.dev.aspgems.com/es/studyrooms/finanzas/courses');
  });

  casper.run(function() {
    test.done();
  });

});