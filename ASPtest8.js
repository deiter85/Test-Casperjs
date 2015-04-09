var x = require('casper').selectXPath;

casper.test.begin('Comprobar pagina ASPgems - Test8 - Presupuesto', 6, function suite(test) {
    
  	casper.start('https://aspgems.com/', function() {
    	casper.click("a[href='/presupuesto']"); //hacer click en presupuesto
  	});

  	casper.then(function(){		
 	  	test.assertUrlMatch('https://aspgems.com/presupuesto', 'Direccion URL correcta'); //comprobar la direccion URL
 	  	test.assertExists(x('//*[@class="view-header"]'), 'the element exists view-header'); //comprobar el subtitulo
 	  	test.assertExists(x('//*[@class="view-filters"]'), 'the element exists view-filters'); //comprobar cuadro ¿Dispone de presupuesto?
 	  	test.assertExists(x('//*[@class="description"]'), 'the element exists description'); //comprobar "Podemos ayudarte....."
 	  	test.assertExists(x('//*[@class="item-list"]'), 'the element exists item-list'); //comprobar titulo de tipos de solucciones
 	  	test.assertExists(x('//*[@id="block-webform-client-block-1122"]'), 'the element exists block-webform-client-block-1122'); //comprobar no encuentras lo que buscas
	});

  	casper.run(function() {
    	casper.echo("Test finalizado"); //mensaje
    	test.done();
  	});

});