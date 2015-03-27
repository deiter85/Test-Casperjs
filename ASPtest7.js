var x = require('casper').selectXPath;

casper.test.begin('Comprobar pagina ASPgems - Test7 - Cultura', 4, function suite(test) {
    
  	casper.start('http://aspgems.com/', function() {
    	casper.click("a[href='/cultura']"); //hacer click en cultura
  	});

  	casper.then(function(){		
 	  	test.assertUrlMatch('http://aspgems.com/cultura', 'Direccion URL correcta'); //comprobar la direccion URL
 	  	test.assertExists(x('//*[@id="main-content-header"]'), 'the element exists main-content-header'); //comprobar el titulo
 	  	test.assertExists(x('//*[@class="group-header"]'), 'the element exists group-header'); //comprobar el subtitulo
 	  	test.assertExists(x('//*[@class="group-left"]'), 'the element exists group-left'); //comprobar lista de post
	});

  	casper.run(function() {
    	casper.echo("Test finalizado"); //mensaje
    	test.done();
  	});

});