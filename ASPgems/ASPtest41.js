var userName = '****'; //Nombre de usuario

var password = '****'; //Contraseña

var editor_allow = ["/en/node/add/culture",
					"/en/node/add/employee",
					"/en/node/add/company-logo",
					"/en/node/add/testimonial",
					"/en/node/add/live-in-aspgems",
					"/en/node/add/project",
					"/en/node/add/service",
					"/en/node/add/feed",
					"/en/node/add/post",
					"/en/node/add/type-of-project",
					"/en/node/add/location",
					"/en/node/add/what-we-do-first-clone",
					"/en/node/add/what-we-do-second-clone",
					"/en/node/add/what-we-do-third-clone",
					"/en/node/add/forum",
					"/en/node/add/what-we-do",
					"/en/node/add/webform",
					"/en/node/add/basic-page",
					"/en/node/add/feed-item",
					"/en/node/add/banner",
					"/en/node/add/banner-first-clone",
					"/en/node/add/banner-second-clone",
					"/en/node/add/banner-third-clone",
					"/en/node/add/asplab-project",]; //Nodos que se permiten con los permisos de este usuario

var editor_disallow = ["/en/node/add/panel/choose-layout"]; //Nodos que no se permiten con los permisos de este usuario

var indice = 0; //Contador

casper.test.begin('Comprobar pagina ASPgems UK - Test41 - Http Status', 0, function suite(test) {   
  
  casper.start();
  
  casper.thenOpen('/en/user', function() {
  	test.assertTitle('User account | ASPgems Soluciones Ágiles'); 
    this.echo('⌚ Logging in....');
    this.fill('form[action="/en/user"]', { //Iniciar sesion
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
		casper.click("a[href='/en/user/logout']"); //Cerrar sesion
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