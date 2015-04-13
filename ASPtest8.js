var x = require('casper').selectXPath;

casper.test.begin('Comprobar pagina ASPgems - Test8 - Presupuesto', 6, function suite(test) {   
  	casper.start('https://aspgems.com/', function() {
    	casper.click("a[href='/presupuesto']"); //hacer click en presupuesto
  	});
  	casper.then(function(){		
 	  	test.assertUrlMatch('https://aspgems.com/presupuesto', 'Direccion URL correcta'); //comprobar la direccion URL
  	});
  	casper.then(function(){	
 	  	test.assertExists(x('//*[@class="view-header"]'), 'Se encuentra el subtitulo'); //comprobar el subtitulo
  	});
  	casper.then(function(){	
 	  	test.assertExists(x('//*[@class="view-filters"]'), 'Se encuentra el cuadro ¿Dispone de presupuesto?'); //comprobar cuadro ¿Dispone de presupuesto?
  	});
  	casper.then(function(){	
 	  	test.assertExists(x('//*[@class="description"]'), 'Se encuentra el texto "Podemos ayudarte....."'); //comprobar "Podemos ayudarte....."
  	});
  	casper.then(function(){	
 	  	test.assertExists(x('//*[@class="item-list"]'), 'Se encuentra el cuadro de tipos de solucciones'); //comprobar cuadro de tipos de solucciones
  	});
  	casper.then(function(){	
 	  	test.assertExists(x('//*[@id="block-webform-client-block-1122"]'), 'Se encuentra el formulario no encuentras lo que buscas'); //comprobar formulario no encuentras lo que buscas
	});
  	casper.run(function() {
    	casper.echo("Test finalizado"); //mensaje
    	test.done();
  	});
});