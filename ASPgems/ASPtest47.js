var x = require('casper').selectXPath;

casper.test.begin('Comprobar pagina ASPgems UK - Test47 - Services-Rescue Projects', 7, function suite(test) {    
  	casper.start();
  	casper.thenOpen('/en', function() {
   	  	casper.click("a[href='/en/services']"); //hacer click en servicio
    });
    casper.then(function() {
   	  	casper.click("a[href='/en/services/rescue-projects']"); //hacer click en recue projects
    });
  	casper.then(function() {		
  	   	test.assertUrlMatch('https://aspgems.com/en/services/rescue-projects', 'Direccion URL correcta'); //comprobar la direccion URL
    });
    casper.then(function() {
  		  test.assertExists('h1', 'Se encuentra el titulo'); //comprobar si se encuentra el titulo
    });
    casper.then(function() {
        test.assertSelectorHasText('h1', 'Rescue Projects', 'El texto del titulo es el correcto'); //comprobar si el titulo es el correcto
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