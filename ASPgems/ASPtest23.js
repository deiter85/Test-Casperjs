var x = require('casper').selectXPath;

casper.test.begin('Comprobar pagina ASPgems - Test23 - Servicios-Desarrollo Web', 7, function suite(test) {    
  	casper.start();
  	casper.thenOpen('/', function() {
   	  	casper.click("a[href='/servicios']"); //hacer click en servicio
    });
    casper.then(function() {
   	  	casper.click("a[href='/servicios/desarrollo-web']"); //hacer click en desarrollo web
    });
  	casper.then(function() {		
  	   	test.assertUrlMatch('https://aspgems.com/servicios/desarrollo-web', 'Direccion URL correcta'); //comprobar la direccion URL
    });
    casper.then(function() {
  		  test.assertExists('h1', 'Se encuentra el titulo'); //comprobar si se encuentra el titulo
    });
    casper.then(function() {
        test.assertSelectorHasText('h1', 'Desarrollo Web', 'El texto del titulo es el correcto'); //comprobar si el titulo es el correcto
    });
    casper.then(function() {
  		  test.assertExists(x('//img[@class="image-style-servicio-desplegado"]'), 'Se encuentra la imagen'); //comprobar la imagen
    });
    casper.then(function() {
        test.assertExists(x('//a[@class="colorbox init-colorbox-processed cboxElement"]'), 'Se encuentra el link de la imagen'); //comprobar link en la imagen
    });
    casper.then(function() {
    	  test.assertExists(x('//div[@class="field field-name-body field-type-text-with-summary field-label-hidden view-mode-full image-and-form"]'), 'Se encuentra el texto de la pagina'); //comprobar texto de la pagina
    });
    casper.then(function() {
      	test.assertExists(x('//form[@class="webform-client-form image-and-form"]'), 'Se encuentra el formulario ¿En que te podemos ayudar?'); //comprobar formulario ¿En que te podemos ayudar?
    });
   	casper.run(function() {
   		  casper.echo("Test finalizado"); //mensaje
   		  test.done();
   	});
});