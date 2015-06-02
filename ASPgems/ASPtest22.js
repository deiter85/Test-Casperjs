var userName = ****; //Nombre de usuario

var password = ****; //Contraseña

var editor_allow = ["/node/add/culture",
					"/node/add/employee",
					"/node/add/company-logo",
					"/node/add/testimonial",
					"/node/add/live-in-aspgems",
					"/node/add/project",
					"/node/add/service",
					"/node/add/feed",
					"/node/add/post",
					"/node/add/type-of-project",
					"/node/add/location",
					"/node/add/what-we-do-first-clone",
					"/node/add/what-we-do-second-clone",
					"/node/add/what-we-do-third-clone",
					"/node/add/forum",
					"/node/add/what-we-do",
					"/node/add/webform",
					"/node/add/basic-page",
					"/node/add/feed-item",
					"/node/add/banner",
					"/node/add/banner-first-clone",
					"/node/add/banner-second-clone",
					"/node/add/banner-third-clone",
					"/node/add/asplab-project",]; //Nodos que se permiten con los permisos de este usuario

var editor_disallow = ["/node/add/panel/choose-layout"]; //Nodos que no se permiten con los permisos de este usuario

var indice = 0; //Contador

casper.test.begin('Comprobar pagina ASPgems - Test22 - Http Status', 0, function suite(test) {   
  
  casper.start();
  
  casper.thenOpen('/user', function() {
  	test.assertTitle('Cuenta de usuario | ASPgems Soluciones Ágiles'); 
    this.echo('⌚ Logging in....');
    this.fill('form[action="/user"]', { //Iniciar sesion
      	'name': userName,
      	'pass': password
    }, true);
  });
  
  casper.wait(1000, function() {});
  
  casper.then(function() {
		test.assertTitle('editor | ASPgems Soluciones Ágiles', 'Authentication successful'); //Comprobar que se ha accedido correctamente
  });
  
  for (i = 0; i < editor_allow.length; i++) {     
    casper.thenOpen(editor_allow[i], function() {
      	this.echo('⌚ Opened the ' + editor_allow[indice++]);
      	test.assertHttpStatus(200);	// Comprobar estatus del http de los distintos nodos  
    });
  }
  
  var indice2 = 0; //Contador
  
  for (i = 0; i < editor_disallow.length; i++) {     
    casper.thenOpen(editor_disallow[i], function() {
      	this.echo('⌚ Opened the ' + editor_disallow[indice2++]);
      	test.assertHttpStatus(403);	// Comprobar estatus del http de los distintos nodos 
    });
  }
  
  casper.then(function() {
		casper.click("a[href='/user/logout']"); //Cerrar sesion
		this.echo('⌚ Log out....');
  });
  
  casper.wait(1000, function() {});
  
  casper.then(function() {
		test.assertTitle('ASPgems Soluciones Ágiles | Soluciones Ágiles', 'Disconnection successful'); //Comprobar que se ha cerrado la sesion
  });
  
  casper.run(function() {
  		casper.echo('Test finalizado');
  		test.done();
  });

});