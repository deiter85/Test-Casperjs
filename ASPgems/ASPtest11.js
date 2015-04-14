var x = require('casper').selectXPath;

casper.test.begin('Comprobar pagina ASPgems - Test11 - Equipo', 9, function suite(test) {    
  	casper.start('https://aspgems.com/', function() {
   		casper.click("a[href='/equipo']"); //hacer click en presupuesto
  	});
  	casper.then(function(){		
  		test.assertUrlMatch('https://aspgems.com/equipo', 'Direccion URL correcta'); //comprobar la direccion URL
    });
    casper.then(function(){ 
  		test.assertExists(x('//header[@id="main-content-header"]'), 'Se encuentra el titulo'); //comprobar el titulo
    });
    casper.then(function(){ 
  		test.assertExists(x('//div[@id="content"]/div/div/div[@class="view-header"]'), 'Se encuentra el subtitulo'); //comprobar el subtitulo
    });
    casper.then(function(){ 
  		test.assertExists(x('//div[@id="content"]/div/div/div[@class="view-content"]'), 'Se encuentra la lista de equipo'); //comprobar lista de equipo
    });
    casper.then(function(){ 
      test.assertExists(x('//div[@role="article"]'), 'Se encuentra el cuadro de empleado'); //comprobar cuadro de empleado
    });
    casper.then(function(){ 
  		test.assertExists(x('//img[@class="image-style-employee-medium"]'), 'Se encuentra la foto del cuadro de empleado'); //comprobar foto cuadro de empleado
    });
    casper.then(function(){ 
		  test.assertExists(x('//div[@role="article"]/div[@class="group-right"]'), 'Se encuentra el texto del cuadro de empleado'); //comprobar texto cuadro de empleado
    });
    casper.then(function(){ 
    	test.assertExists(x('//h2[@class="block-title"]'), 'Se encuentra el texto asi se vive en aspgems'); //comprobar texto asi se vive en aspgems
    });
    casper.then(function(){ 
    	test.assertExists(x('//div[@id="views_slideshow_cycle_main_lives_in_aspgem-block"]'), 'Se encuentra el cuadro de fotos'); //comprobar cuadro de fotos
   	});
   	casper.run(function() {
   		casper.echo("Test finalizado"); //mensaje
   		test.done();
   	});
});