var x = require('casper').selectXPath;

casper.test.begin('Comprobar pagina ASPgems - Test28 - Servicios-Due Diligence', 7, function suite(test) {    
  	casper.start('https://aspgems.com/', function(){
   	  	casper.click("a[href='/servicios']"); //hacer click en servicio
    });
    casper.then(function() {
   	  	casper.click("a[href='/servicios/due-diligence-tecnologico']"); //hacer click en due diligence
    });
  	casper.then(function() {		
  	   	test.assertUrlMatch('https://aspgems.com/servicios/due-diligence-tecnologico', 'Direccion URL correcta'); //comprobar la direccion URL
    });
    casper.then(function() {
  		  test.assertExists('h1', 'Se encuentra el titulo'); //comprobar si se encuentra el titulo
    });
    casper.then(function() {
        test.assertSelectorHasText('h1', 'Due Diligence Tecnológico', 'El texto del titulo es el correcto'); //comprobar si el titulo es el correcto
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