var x = require('casper').selectXPath;

casper.test.begin('Comprobar pagina ASPgems - Test10 - Trabajos', 6, function suite(test) {
    
  	casper.start('https://aspgems.com/', function() {
   		casper.click("a[href='/trabajos']"); //hacer click en presupuesto
  	});

  	casper.then(function(){		
  		test.assertUrlMatch('https://aspgems.com/trabajos', 'Direccion URL correcta'); //comprobar la direccion URL
  		test.assertExists(x('//header[@id="main-content-header"]'), 'the element exists main-content-header'); //comprobar el titulo
  		test.assertExists(x('//div[@id="content"]/div/div/div[@class="view-header"]'), 'the element exists view-header'); //comprobar el subtitulo
  		test.assertExists(x('//div[@id="content"]/div/div/div[@class="view-filters"]'), 'the element exists view-header'); //comprobar cuadro de eleccion entre casos de exito o proyectos propios
		test.assertExists(x('//div[@id="content"]/div/div/div[@class="view-content"]'), 'the element exists view-content casos de exito'); //comprobar lista de casos de exito
 		casper.click("label[class='option activo']"); //hacer click en formacion
  	});

  	casper.then(function(){		
		test.assertExists(x('//div[@id="content"]/div/div/div[@class="view-content"]'), 'the element exists view-content proyectos propios'); //comprobar lista de proyectos propios
  	});

  	casper.run(function() {
   		casper.echo("Test finalizado"); //mensaje
   		test.done();
  	});

});