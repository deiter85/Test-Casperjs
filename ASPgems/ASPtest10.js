var x = require('casper').selectXPath;

casper.test.begin('Comprobar pagina ASPgems - Test10 - Proyectos', 6, function suite(test) {   
  	casper.start();
    casper.thenOpen('/', function() {
   		casper.click("a[href='/proyectos']"); //hacer click en presupuesto
  	});
  	casper.then(function(){		
  		test.assertUrlMatch('https://aspgems.com/proyectos', 'Direccion URL correcta'); //comprobar la direccion URL
    });
    casper.then(function(){
  		test.assertExists(x('//div[@class="block-content content"]'), 'Se encuentra el titulo'); //comprobar el titulo
    });
    casper.then(function(){
  		test.assertExists(x('//div[@id="content"]/div/div/div[@class="view-header"]'), 'Se encuentra el subtitulo'); //comprobar el subtitulo
    });
    casper.then(function(){
  		test.assertExists(x('//div[@id="content"]/div/div/div[@class="view-filters"]'), 'Se encuentra el cuadro de eleccion entre casos de exito o proyectos propios'); //comprobar cuadro de eleccion entre casos de exito o proyectos propios
    });
    casper.then(function(){
		  test.assertExists(x('//div[@id="content"]/div/div/div[@class="view-content"]'), 'Se encuentra la lista de casos de exito'); //comprobar lista de casos de exito
    });
    casper.then(function(){ 
      casper.click('input[name="field_project_type_value_i18n"][value="2"]'); //hacer click en formacion
    });
    casper.wait(1000, function() {});
    casper.then(function(){ 	
		  test.assertExists(x('//div[@id="content"]/div/div/div[@class="view-content"]'), 'Se encuentra la lista de proyectos propios'); //comprobar lista de proyectos propios
  	});
  	casper.run(function() {
   		casper.echo("Test finalizado"); //mensaje
   		test.done();
  	});
});