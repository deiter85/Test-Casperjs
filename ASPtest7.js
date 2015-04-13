var x = require('casper').selectXPath;

casper.test.begin('Comprobar pagina ASPgems - Test7 - Cultura', 4, function suite(test) {    
  	casper.start('https://aspgems.com/', function() {
    	  casper.click("a[href='/cultura']"); //hacer click en cultura
  	});
  	casper.then(function(){		
 	    	test.assertUrlMatch('https://aspgems.com/cultura', 'Direccion URL correcta'); //comprobar la direccion URL
 	  });
  	casper.then(function(){	
  	  	test.assertExists(x('//*[@id="main-content-header"]'), 'Se encuentra el titulo'); //comprobar el titulo
 	  });
  	casper.then(function(){	
 	    	test.assertExists(x('//*[@class="group-header"]'), 'Se encuentra el subtitulo'); //comprobar el subtitulo
 	  });
  	casper.then(function(){	
 	    	test.assertExists(x('//*[@class="group-left"]'), 'Se encuentra la lista de post'); //comprobar lista de post
	  });
  	casper.run(function() {
      	casper.echo("Test finalizado"); //mensaje
      	test.done();
  	});
});