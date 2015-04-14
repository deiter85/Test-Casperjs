var x = require('casper').selectXPath;

casper.test.begin('Comprobar pagina ASPgems - Test33 - Servicios-Aprende Rails', 7, function suite(test) {    
  	casper.start('https://aspgems.com/', function(){
   	  	casper.click("a[href='/servicios']"); //hacer click en servicio
    });
    casper.then(function(){ 
        casper.click('input[name="field_service_type_value"][value="2"]'); //hacer click en formacion
    });
    casper.wait(1000, function() {});
    casper.then(function() {
   	  	casper.click("a[href='/servicios/aprende-rails-en-8-semanas']"); //hacer click en aprende rails
    });
  	casper.then(function() {		
  	   	test.assertUrlMatch('https://aspgems.com/servicios/aprende-rails-en-8-semanas', 'Direccion URL correcta'); //comprobar la direccion URL
    });
    casper.then(function() {
  		  test.assertExists('h1', 'Se encuentra el titulo'); //comprobar si se encuentra el titulo
    });
    casper.then(function() {
        test.assertSelectorHasText('h1', 'Aprende Rails en 8 semanas', 'El texto del titulo es el correcto'); //comprobar si el titulo es el correcto
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