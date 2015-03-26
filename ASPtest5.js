casper.test.begin('Comprobar pagina ASPgems - Test5 - Contacto', 5, function suite(test) {
    
  	casper.start('http://aspgems.com/', function() {
    	casper.click("a[href='/contacto']");
  	});

  	casper.then(function(){		
 	  	test.assertUrlMatch('http://aspgems.com/contacto', 'Direccion URL correcta'); //comprobar la direccion URL
 	  	test.assertExists('.webform-client-form');
 	  	test.assertExists('.block-title');
 	  	test.assertExists('.group-left');
 	  	test.assertExists('.group-right');
	});

  	casper.run(function() {
    	casper.echo("Test finalizado"); //mensaje
    	test.done();
  	});

});