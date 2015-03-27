casper.test.begin('Comprobar pagina ASPgems - Test1', 11, function suite(test) {
    
  casper.start('http://aspgems.com/', function() {
    casper.viewport(1200,720); //modificar las dimensiones del navegador
    test.assertHttpStatus(200); //comprobar el codigo de estatus Http
    test.assertTitle('ASPgems Soluciones Ágiles | Soluciones Ágiles', 'Titulo --> ' + this.getTitle()); //comprobar el titulo de la pagina
    test.assertResourceExists('logo.png'); //comprobar recursos
    test.assertElementCount('body', 1); //comprobar el numero de un elemento
    test.assertExists('.wrapper'); //comprobar si existe un elemento
	  casper.click("a[href='/trabajos']"); //hacer click en un hipervinculo
  });

  casper.then(function(){		
 	 	test.assertUrlMatch('http://aspgems.com/trabajos', 'Direccion URL correcta'); //comprobar la direccion URL
 	 	test.assertSelectorHasText('h1', 'trabajos'); //comprobar si el selector contiene un texto
  	test.assertTextExists('trabajos', 'La pagina contiene la palabra "trabajos"'); //comprobar que existe un texto
  });

  casper.then(function(){	
   	casper.fill('form[action="/search/node"]', { custom_search_blocks_form_1: 'presupuesto' }, true); //rellena un formulario
   	test.assertField('custom_search_blocks_form_1', 'presupuesto'); //comprobar que el recurso contiene una palabra
  }); 

  casper.then(function(){
    test.assertTitle('Buscar | ASPgems Soluciones Ágiles', 'Titulo --> ' + this.getTitle());
    test.assertVisible('a'); //comprobar si es visible un elemento
   	casper.capture("captura1.png", { top:0,left:0,width:1200,height:720}); //captura de pantalla
    casper.echo("Captura realizada"); //mensaje
  });
   
  casper.run(function() {
   	casper.echo("Test finalizado"); //mensaje
   	test.done();
  });

});