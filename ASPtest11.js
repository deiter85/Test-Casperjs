var x = require('casper').selectXPath;

casper.test.begin('Comprobar pagina ASPgems - Test11 - Equipo', 9, function suite(test) {
    
  casper.start('http://aspgems.com/', function() {
   	casper.click("a[href='/equipo']"); //hacer click en presupuesto
  });

  casper.then(function(){		
 	 	test.assertUrlMatch('http://aspgems.com/equipo', 'Direccion URL correcta'); //comprobar la direccion URL
 	 	test.assertExists(x('//header[@id="main-content-header"]'), 'the element exists main-content-header'); //comprobar el titulo
 	 	test.assertExists(x('//div[@id="content"]/div/div/div[@class="view-header"]'), 'the element exists view-header'); //comprobar el subtitulo
 	 	test.assertExists(x('//div[@id="content"]/div/div/div[@class="view-content"]'), 'the element exists views-content'); //comprobar lista equipo
	  test.assertExists(x('//div[@role="article"]'), 'the element exists ds-2col node node-employee node-sticky node-teaser article odd node-lang-es view-mode-teaser clearfix'); //comprobar cuadro de empleado
 	 	test.assertExists(x('//img[@class="image-style-employee-medium"]'), 'the element exists group left'); //comprobar foto cuadro de empleado
    test.assertExists(x('//div[@role="article"]/div[@class="group-right"]'), 'the element exists group right'); //comprobar texto cuadro de empleado
    test.assertExists(x('//h2[@class="block-title"]'), 'the element exists block title'); //comprobar texto asi se vive en aspgems
    test.assertExists(x('//div[@id="views_slideshow_cycle_main_lives_in_aspgem-block"]'), 'the element exists views_slideshow_cycle_main_lives_in_aspgem-block'); //comprobar cuadro de fotos
	});

  casper.run(function() {
   	casper.echo("Test finalizado"); //mensaje
   	test.done();
  });

});