var x = require('casper').selectXPath;

casper.test.begin('Comprobar pagina ASPgems UK - Test42 - Services-Web Development', 7, function suite(test) {    
  	casper.start();
  	casper.thenOpen('/en', function() {
   	  	casper.click("a[href='/en/services']"); //hacer click en servicio
    });
    casper.then(function() {
   	  	casper.click("a[href='/en/services/web-development']"); //hacer click en desarrollo web
    });
  	casper.then(function() {		
  	   	test.assertUrlMatch('https://aspgems.com/en/services/web-development', 'Direccion URL correcta'); //comprobar la direccion URL
    });
    casper.then(function() {
  		  test.assertExists('h1', 'Se encuentra el titulo'); //comprobar si se encuentra el titulo
    });
    casper.then(function() {
        test.assertSelectorHasText('h1', '\n                  Web development                ', 'El texto del titulo es el correcto'); //comprobar si el titulo es el correcto
    });
    casper.then(function() {
  		  test.assertExists(x('//img[@class="image-style-servicio-desplegado"]'), 'Se encuentra la imagen'); //comprobar la imagen
    });
    casper.then(function() {
        test.assertExists(x('//a[@class="colorbox init-colorbox-processed cboxElement"]'), 'Se encuentra el link de la imagen'); //comprobar link en la imagen
    });
    casper.then(function() {
        test.assertExists(x('//div[@class="field field-name-body field-type-text-with-summary field-label-hidden view-mode-full"]'), 'Se encuentra el texto de la pagina'); //comprobar texto de la pagina
    });
    casper.then(function() {
        test.assertExists(x('//form[@class="webform-client-form"]'), 'Se encuentra el formulario How can we help?'); //comprobar formulario How can we help?
    });
   	casper.run(function() {
   		  casper.echo("Test finalizado"); //mensaje
   		  test.done();
   	});
});