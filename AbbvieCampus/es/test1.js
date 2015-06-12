var userName = '****';
var password = '****';

casper.test.begin('Campus Abbvie ES - Test1 - Control Menu de Pagina Principal', 48, function suite(test) {

  casper.start();

  casper.thenOpen('/es/user', function() {
    this.echo('⌚ Logging in....');
    this.fill('form#user-login', {
      	'name': userName,
      	'pass': password
    }, true);
    this.echo('Homepage was loaded successfully.');
  });

  casper.wait(25, function() {});

  casper.then(function() {
	  test.assertTitle('AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/es');
  });

  casper.then(function() {
    casper.click('a[href="/es/catalogue"]');
    this.echo('Clicked in Catalogo');
  });

  casper.then(function() {
    test.assertTitle('Catálogo de actividades formativas | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/es/catalogue');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/es/list-of-classrooms"]');
    this.echo('Clicked in Aula');
  });

  casper.then(function() {
    test.assertTitle('Aulas | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/es/list-of-classrooms');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/es/forum"]');
    this.echo('Clicked in Foro');
  });

  casper.then(function() {
    test.assertTitle('Foros | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/es/forum');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/es/schedule-course-list"]');
    this.echo('Clicked in Itinerarios formativos');
  });

  casper.then(function() {
    test.assertTitle('Itinerarios formativos | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/es/schedule-course-list');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/es/my-training"]');
    this.echo('Clicked in Mi formación');
  });

  casper.then(function() {
    test.assertTitle('Mi formación | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/es/my-training');
  });

  casper.back();

  casper.then(function(){
        casper.click('a[href="/es/point-program"][class=sf-depth-2]');
        this.echo('Clicked in Programa de puntos/Informacion');
    });

  casper.then(function() {
    test.assertTitle('Programa de puntos | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/es/point-program');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/es/redeem-your-user-points"]');
    this.echo('Clicked in Programa de Puntos/Canjear puntos');
  });

  casper.then(function() {
    test.assertTitle('Canjea tus puntos | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/es/redeem-your-user-points');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/es/annual-training"]');
    this.echo('Clicked in Formación anual');
  });

  casper.then(function() {
    test.assertTitle('Formación anual | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/es/annual-training');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/es/news"]');
    this.echo('Clicked in Noticias');
  });

  casper.then(function() {
    test.assertTitle('Noticias | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/es/news');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/es/links"]');
    this.echo('Clicked in Enlaces');
  });

  casper.then(function() {
    test.assertTitle('Enlaces | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/es/links');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/es/help"]');
    this.echo('Clicked in Ayuda');
  });

  casper.then(function() {
    test.assertTitle('Ayuda | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/es/help');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/es/wiki"]');
    this.echo('Clicked in Wiki');
  });

  casper.then(function() {
    test.assertTitle('Términos wiki | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/es/wiki');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/es/faqs"]');
    this.echo('Clicked in FAQS');
  });

  casper.then(function() {
    test.assertTitle('FAQs | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/es/faqs');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/es/contacts"]');
    this.echo('Clicked in Contactos');
  });

  casper.then(function() {
    test.assertTitle('Contactos | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/es/contacts');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/es/suggestions"]');
    this.echo('Clicked in Sugerencias');
  });

  casper.then(function() {
    test.assertTitle('Sugerencias | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/es/suggestions');
  });

  casper.then(function() {
    casper.click('a[href="/es/"]');
    this.echo('Clicked in Inicio');
  });

  casper.then(function() {
    test.assertTitle('AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/es/');
  });

  casper.run(function() {
    test.done();
  });

});