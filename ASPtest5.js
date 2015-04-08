casper.test.begin('Comprobar pagina ASPgems - Test5 - Contacto', 9, function suite(test) {
    
  casper.start('https://aspgems.com/', function() {
   	casper.click("a[href='/contacto']"); //hacer click en contactos
  });

  casper.then(function(){		
<<<<<<< HEAD
 	 	test.assertUrlMatch('https://aspgems.com/contacto', 'Direccion URL correcta'); //comprobar la direccion URL
 	 	test.assertExists('.webform-client-form', 'the element exists webform-client-for'); //comprobar el formulario para enviar un e-mail
 	 	test.assertExists('.block-title', 'the element exists block-title'); //comprobar titulo encuentranos
 	 	test.assertExists('.group-left', 'the element exists group-left'); //comprobar direccion de la empresa
 	 	test.assertExists('.group-right', 'the element exists group-righr'); //comprobar mapa
 	 	test.assertExists('.webform-client-form'); //comprobar el formulario para enviar un e-mail
 	 	test.assertExists('.block-title'); //comprobar titulo encuentranos
 	 	test.assertExists('.group-left'); //comprobar direccion de la empresa
 	 	test.assertExists('.group-right'); //comprobar mapa
	});
=======
 	test.assertUrlMatch('https://aspgems.com/contacto', 'Direccion URL correcta'); //comprobar la direccion URL
   	casper.click("a[href='/contacto']"); //hacer click en contactos
   	casper.click("a[href='/contacto']"); //hacer click en contactos
  });

  casper.then(function(){		
 	test.assertUrlMatch('http://aspgems.com/contacto', 'Direccion URL correcta'); //comprobar la direccion URL
 	test.assertUrlMatch('https://aspgems.com/contacto', 'Direccion URL correcta'); //comprobar la direccion URL
 	test.assertExists('.webform-client-form', 'the element exists webform-client-for'); //comprobar el formulario para enviar un e-mail
 	test.assertExists('.block-title', 'the element exists block-title'); //comprobar titulo encuentranos
 	test.assertExists('.group-left', 'the element exists group-left'); //comprobar direccion de la empresa
 	test.assertExists('.group-right', 'the element exists group-righr'); //comprobar mapa
 	test.assertExists('.webform-client-form'); //comprobar el formulario para enviar un e-mail
 	test.assertExists('.block-title'); //comprobar titulo encuentranos
 	test.assertExists('.group-left'); //comprobar direccion de la empresa
 	test.assertExists('.group-right'); //comprobar mapa
  });
>>>>>>> a5da40665ce586e964d7468ed77f1840e103462f

  casper.run(function() {
   	casper.echo("Test finalizado"); //mensaje
   	test.done(); 
  });
 
});
