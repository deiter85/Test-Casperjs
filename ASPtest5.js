var x = require('casper').selectXPath;

casper.test.begin('Comprobar pagina ASPgems - Test5 - Contacto', 11, function suite(test) {
    
	casper.start('https://aspgems.com/', function() {
   		casper.click("a[href='/contacto']"); //hacer click en contactos
  	});

  	casper.then(function(){		
 		test.assertUrlMatch('https://aspgems.com/contacto', 'Direccion URL correcta'); //comprobar la direccion URL
 		test.assertExists('.webform-client-form', 'the element exists webform-client-for'); //comprobar el formulario para enviar un e-mail
 		test.assertExists('.block-title', 'the element exists block-title'); //comprobar titulo encuentranos
 		test.assertExists('.group-left', 'the element exists group-left'); //comprobar direccion de la empresa
 		test.assertExists('.group-right', 'the element exists group-righr'); //comprobar mapa
 		test.assertExists('.webform-client-form'); //comprobar el formulario para enviar un e-mail
 		test.assertExists('.block-title'); //comprobar titulo encuentranos
 		test.assertExists('.group-left'); //comprobar direccion de la empresa
 		test.assertExists('.group-right'); //comprobar mapa
 		test.assertExists(x('//*[@class="field field-name-title field-type-ds field-label-hidden view-mode-full"]'), 'the element exists field field-name-title field-type-ds field-label-hidden view-mode-full'); //comprobar titulo
 		test.assertExists(x('//*[@class="field field-name-body field-type-text-with-summary field-label-hidden view-mode-full"]'), 'the element exists field field-name-body field-type-text-with-summary field-label-hidden view-mode-full'); //comprobar subtitulo
  	});

  	casper.run(function() {
   		casper.echo("Test finalizado"); //mensaje
   		test.done(); 
  	});
 
});