var userName = ****;
var password = ****;

casper.test.begin('Campus Abbvie - Test1 - Control Menu de Pagina Principal', 42, function suite(test) {

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
	  test.assertTitle('AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es');
  });

  casper.then(function() {
    casper.click('a[href="/es/catalogue"]');
    this.echo('Clicked in Catalogo');
  });

  casper.wait(500, function() {});

  casper.then(function() {
    test.assertTitle('Catálogo de actividades formativas | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/catalogue');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/es/list-of-classrooms"]');
    this.echo('Clicked in Aula');
  });

  casper.wait(500, function() {});

  casper.then(function() {
    test.assertTitle('Aula | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/list-of-classrooms');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/es/forum/1611"]');
    this.echo('Clicked in Foro');
  });

  casper.wait(500, function() {});

  casper.then(function() {
    test.assertTitle('Aulas | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/forum');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/es/schedule-course-list"]');
    this.echo('Clicked in Itinerarios formativos');
  });

  casper.wait(500, function() {});

  casper.then(function() {
    test.assertTitle('Itinerarios formativos | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/schedule-course-list');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/es/my-training"]');
    this.echo('Clicked in Mi formación');
  });

  casper.wait(500, function() {});

  casper.then(function() {
    test.assertTitle('Mi formación | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/my-training');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/es/point-program"]');
    this.echo('Clicked in Programa de Puntos/Información');
  });

  casper.wait(500, function() {});

  casper.then(function() {
    //test.assertTitle('Point program | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/point-program');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/es/redeem-your-user-points"]');
    this.echo('Clicked in Programa de Puntos/Canjear puntos');
  });

  casper.wait(500, function() {});

  casper.then(function() {
    test.assertTitle('Canjea tus puntos | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/redeem-your-user-points');
  });

  casper.back();

/***********************************************************************************************************************************
***********************************************************************************************************************************/

  casper.then(function() {
    casper.click('a[href="/es/annual-training"]');
    this.echo('Clicked in Formacion anual');
  });

  casper.wait(500, function() {});

  casper.then(function() {
    //test.assertTitle('Annual training | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/annual-training');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/es/news"]');
    this.echo('Clicked in Noticias');
  });

  casper.wait(500, function() {});

  casper.then(function() {
    test.assertTitle('Noticias | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/news');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/es/links"]');
    this.echo('Clicked in Enlaces');
  });

  casper.wait(500, function() {});

  casper.then(function() {
    test.assertTitle('Enlaces | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/links');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/es/help"]');
    this.echo('Clicked in Ayuda');
  });

  casper.wait(500, function() {});

  casper.then(function() {
    test.assertTitle('Ayuda | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/help');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/es/wiki"]');
    this.echo('Clicked in Wiki');
  });

  casper.wait(500, function() {});

  casper.then(function() {
    test.assertTitle('Términos wiki | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/wiki');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/es/faqs"]');
    this.echo('Clicked in FAQS');
  });

  casper.wait(500, function() {});

  casper.then(function() {
    test.assertTitle('FAQs | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/faqs');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/es/suggestions"]');
    this.echo('Clicked in Sugerencias');
  });

  casper.wait(500, function() {});

  casper.then(function() {
    //test.assertTitle('suggestions | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/suggestions');
  });

  casper.then(function() {
    casper.click('a[href="/uk/"]');
    this.echo('Clicked in Home');
  });

  casper.wait(500, function() {});

  casper.then(function() {
    test.assertTitle('AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/uk/faqs');
  });

  casper.then(function() {
    casper.click('a[href="/es/user/logout"]');
    this.echo('⌚ Log out....');
  });

  casper.run(function() {
    test.done();
  });

});