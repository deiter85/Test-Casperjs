casper.test.begin('Comprobar pagina ASPgems - Test5 - Contacto', 5, function suite(test) {
    
  	casper.start('http://aspgems.com/', function() {
<<<<<<< HEAD
    	casper.click("a[href='/contacto']"); //hacer click en contactos
=======
    		casper.click("a[href='/contacto']"); //hacer click en contactos
>>>>>>> 83b6fbb4cba298d3342b2d711881f32fd36878fd
  	});

  	casper.then(function(){		
 	  	test.assertUrlMatch('http://aspgems.com/contacto', 'Direccion URL correcta'); //comprobar la direccion URL
<<<<<<< HEAD
 	  	test.assertExists('.webform-client-form', 'the element exists webform-client-for'); //comprobar el formulario para enviar un e-mail
 	  	test.assertExists('.block-title', 'the element exists block-title'); //comprobar titulo encuentranos
 	  	test.assertExists('.group-left', 'the element exists group-left'); //comprobar direccion de la empresa
 	  	test.assertExists('.group-right', 'the element exists group-righr'); //comprobar mapa
=======
 	  	test.assertExists('.webform-client-form'); //comprobar el formulario para enviar un e-mail
 	  	test.assertExists('.block-title'); //comprobar titulo encuentranos
 	  	test.assertExists('.group-left'); //comprobar direccion de la empresa
 	  	test.assertExists('.group-right'); //comprobar mapa
>>>>>>> 83b6fbb4cba298d3342b2d711881f32fd36878fd
	});

  	casper.run(function() {
    		casper.echo("Test finalizado"); //mensaje
    		test.done(); 
  	});

});
