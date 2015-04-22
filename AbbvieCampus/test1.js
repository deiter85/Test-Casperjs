var userName = ****;
var password = ****;

casper.test.begin('Campus Abbvie - Test1', 31, function suite(test) {

  casper.start('https://abbvie-wec.dev.aspgems.com/es/user', function() {
    this.echo('⌚ Logging in....');
    this.fill('form#user-login', {
      	'name': userName,
      	'pass': password
    }, true);
    this.echo('Homepage was loaded successfully.');
  });

  casper.wait(750, function() {});

  casper.then(function() {
	  test.assertTitle('AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es');
  });

  casper.then(function() {
    casper.click("a[href='/es/catalogue']");
    this.echo('Clicked in Catalogo');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/catalogue');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/list-of-classrooms']");
    this.echo('Clicked in Aula');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/list-of-classrooms');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/forum']");
    this.echo('Clicked in Foros');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/forum');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/schedule-course-list']");
    this.echo('Clicked in Itinerarios formativos');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/schedule-course-list');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/my-training']");
    this.echo('Clicked in Mi formación');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/my-training');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/point-program']");
    this.echo('Clicked in Programa de Puntos/Información');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/point-program');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/redeem-your-user-points']");
    this.echo('Clicked in Programa de Puntos/Canjear puntos');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/redeem-your-user-points');
  });

  casper.back();

/***********************************************************************************************************************************
***********************************************************************************************************************************/

  casper.then(function() {
    casper.click("a[href='/es/annual-training']");
    this.echo('Clicked in Formacion anual');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/annual-training');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/news']");
    this.echo('Clicked in Noticias');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/news');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/links']");
    this.echo('Clicked in Enlaces');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/links');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/help']");
    this.echo('Clicked in Ayuda');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/help');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/wiki']");
    this.echo('Clicked in Wiki');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/wiki');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/contacts']");
    this.echo('Clicked in Contactos');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/contacts');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/es/faqs']");
    this.echo('Clicked in FAQS');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/faqs');
  });

  casper.then(function() {
    casper.click("a[href='/es/user/logout']");
    this.echo('⌚ Log out....');
  });

  casper.run(function() {
    test.done();
  });

});