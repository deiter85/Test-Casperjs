var x = require('casper').selectXPath;

casper.test.begin('Comprobar pagina ASPgems UK - Test36 - Culture', 4, function suite(test) {    
  	casper.start();
    casper.thenOpen('/en', function() {
    	  casper.click("a[href='/en/culture']"); //hacer click en cultura
  	});
  	casper.then(function(){		
 	    	test.assertUrlMatch('https://aspgems.com/en/culture', 'Direccion URL correcta'); //comprobar la direccion URL
 	  });
  	casper.then(function(){	
  	  	test.assertExists(x('//*[@class="block-content content"]'), 'Se encuentra el titulo'); //comprobar el titulo
 	  });
  	casper.then(function(){	
 	    	test.assertExists(x('//*[@class="subtitle"]'), 'Se encuentra el subtitulo'); //comprobar el subtitulo
 	  });
  	casper.then(function(){	
 	    	test.assertExists(x('//*[@class="group-left"]'), 'Se encuentra la lista de post'); //comprobar lista de post
	  });
  	casper.run(function() {
      	casper.echo("Test finalizado"); //mensaje
      	test.done();
  	});
});