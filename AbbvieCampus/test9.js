var userName = ****;
var password = ****;

casper.test.begin('Campus Abbvie - Test9', 44, function suite(test) {

  casper.start('https://abbvie-wec.dev.aspgems.com/es/user', function() {
    this.echo('⌚ Logging in....');
    this.fill('form#user-login', {
      	'name': userName,
      	'pass': password
    }, true);
    this.echo('Homepage was loaded successfully.');
  });

  casper.wait(500, function() {});

  casper.then(function() {
    casper.click("a[href='/es/list-of-classrooms']");
    this.echo('Clicked in Aula');
  });

  casper.then(function() {
    casper.click("a[href='/es/studyrooms/abbvie-care']");
    this.echo('Clicked in Abbvie-care');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/studyrooms/abbvie-care/home');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/studyrooms/analisis-de-negocio']");
    this.echo('Clicked in Analisis de negocio');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/studyrooms/analisis-de-negocio/home');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/studyrooms/competencias']");
    this.echo('Clicked in Competencias');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/studyrooms/competencias/home');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/studyrooms/digital']");
    this.echo('Clicked in Digital');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/studyrooms/digital/home');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/studyrooms/formacion']");
    this.echo('Clicked in Formacion');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/studyrooms/formacion/home');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/studyrooms/gestion-sanitaria']");
    this.echo('Clicked in Gestion sanitaria');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/studyrooms/gestion-sanitaria/home');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/studyrooms/innovacion']");
    this.echo('Clicked in Innovacion');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/studyrooms/innovacion/home');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/studyrooms/marketing']");
    this.echo('Clicked in Marketing');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/studyrooms/marketing/home');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/studyrooms/on-boarding']");
    this.echo('Clicked in On Boarding');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/studyrooms/on-boarding/home');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/studyrooms/regulacion-y-financiacion']");
    this.echo('Clicked in Regulacion y financiacion');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/studyrooms/regulacion-y-financiacion/home');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/studyrooms/ventas']");
    this.echo('Clicked in Ventas');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/studyrooms/ventas/home');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/studyrooms/abbvie-way']");
    this.echo('Clicked in Abbvie way');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/studyrooms/abbvie-way/home');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/studyrooms/biosimilares']");
    this.echo('Clicked in Biosimilares');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/studyrooms/biosimilares/home');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/studyrooms/compliance']");
    this.echo('Clicked in Compliance');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/studyrooms/compliance/home');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/studyrooms/finanzas']");
    this.echo('Clicked in Finanzas');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/studyrooms/finanzas/home');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/studyrooms/futurefit-20']");
    this.echo('Clicked in Futurefit 2.0');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/studyrooms/futurefit-20/home');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/studyrooms/ingles']");
    this.echo('Clicked in Ingles');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/studyrooms/ingles/home');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/studyrooms/investigacion-clinica']");
    this.echo('Clicked in Investigacion clinica');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/studyrooms/investigacion-clinica/home');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/studyrooms/nuevas-tecnologias']");
    this.echo('Clicked in Nuevas tecnologias');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/studyrooms/nuevas-tecnologias/home');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/studyrooms/producto']");
    this.echo('Clicked in Producto');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/studyrooms/producto/home');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/studyrooms/relaciones-institucionales']");
    this.echo('Clicked in Relaciones institucionales');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/studyrooms/relaciones-institucionales/home');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/studyrooms/community-relations']");
    this.echo('Clicked in Community relations');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/studyrooms/community-relations/home');
  });

  casper.then(function() {
    casper.click("a[href='/es/user/logout']");
    this.echo('⌚ Log out....');
  });

  casper.run(function() {
    test.done();
  });

});