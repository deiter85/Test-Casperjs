var x = require('casper').selectXPath;

casper.test.begin('Comprobar pagina ASPgems - Test9 - Servicios', 6, function suite(test) {
  
  casper.start('https://aspgems.com/', function() {
   	casper.click("a[href='/servicios']"); //hacer click en presupuesto
  });

  casper.then(function(){		
 	 	test.assertUrlMatch('https://aspgems.com/servicios', 'Direccion URL correcta'); //comprobar la direccion URL
 	 	test.assertExists(x('//header[@id="main-content-header"]'), 'the element exists main-content-header'); //comprobar el titulo
 	 	test.assertExists(x('//div[@id="content"]/div/div/div[@class="view-header"]'), 'the element exists view-header'); //comprobar el subtitulo
 	 	test.assertExists(x('//div[@id="content"]/div/div/div[@class="view-filters"]'), 'the element exists view-header'); //comprobar cuadro de eleccion entre servicios profesionales o formacion
		test.assertExists(x('//div[@id="content"]/div/div/div[@class="view-content"]'), 'the element exists view-content servicios profesionales'); //comprobar lista de servicios profesionales
 	 	casper.click("label[class='option activo']"); //hacer click en formacion
	});

	casper.then(function(){		
		test.assertExists(x('//div[@id="content"]/div/div/div[@class="view-content"]'), 'the element exists view-content formacion'); //comprobar lista de formacion
	});

  casper.run(function() {
   	casper.echo("Test finalizado"); //mensaje
   	test.done();
  });

});
