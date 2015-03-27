var x = require('casper').selectXPath;

casper.test.begin('Comprobar pagina ASPgems - Test8 - Presupuesto', 6, function suite(test) {
    
  	casper.start('http://aspgems.com/', function() {
    	casper.click("a[href='/presupuesto']"); //hacer click en presupuesto
  	});

  	casper.then(function(){		
 	  	test.assertUrlMatch('http://aspgems.com/presupuesto', 'Direccion URL correcta'); //comprobar la direccion URL
 	  	test.assertExists(x('//*[@class="view-header"]'), 'the element exists view-header'); //comprobar el subtitulo
 	  	test.assertExists(x('//*[@class="view-filters"]'), 'the element exists view-filters'); //comprobar cuadro ¿Dispone de presupuesto?
 	  	test.assertExists(x('//*[@class="description"]'), 'the element exists description'); //comprobar lista de post
 	  	test.assertExists(x('//*[@class="view-content"]'), 'the element exists view-content'); //comprobar titulo de tipos de solucciones
 	  	test.assertExists(x('//*[@id="block-webform-client-block-1122"]'), 'the element exists block-webform-client-block-1122'); //comprobar lista de tipos de solucciones
	});

  	casper.run(function() {
    	casper.echo("Test finalizado"); //mensaje
    	test.done();
  	});

});