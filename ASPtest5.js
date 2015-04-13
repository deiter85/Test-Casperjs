var x = require('casper').selectXPath;

casper.test.begin('Comprobar pagina ASPgems - Test5 - Contacto', 7, function suite(test) {   
	casper.start('https://aspgems.com/', function() {
   		casper.click("a[href='/contacto']"); //hacer click en contactos
  	});
  	casper.then(function(){		
 		test.assertUrlMatch('https://aspgems.com/contacto', 'Direccion URL correcta'); //comprobar la direccion URL
 	});
    casper.then(function(){
 		test.assertExists('.webform-client-form', 'Se encuentra el formulario para enviar un e-mail'); //comprobar el formulario para enviar un e-mail
 	});
    casper.then(function(){
 		test.assertExists('.block-title', 'Se encuentra el titulo encuentranos'); //comprobar titulo encuentranos
 	});
    casper.then(function(){
 		test.assertExists('.group-left', 'Se encuentra la direccion de la empresa'); //comprobar direccion de la empresa
 	});
    casper.then(function(){
 		test.assertExists('.group-right', 'Se encuentra el mapa'); //comprobar mapa
 	});
    casper.then(function(){
 		test.assertExists(x('//*[@class="field field-name-title field-type-ds field-label-hidden view-mode-full"]'), 'Se encuentra el titulo'); //comprobar titulo
 	});
    casper.then(function(){
 		test.assertExists(x('//*[@class="field field-name-body field-type-text-with-summary field-label-hidden view-mode-full"]'), 'Se encuentra el subtitulo'); //comprobar subtitulo
  	});
  	casper.run(function() {
   		casper.echo("Test finalizado"); //mensaje
   		test.done(); 
  	}); 
});