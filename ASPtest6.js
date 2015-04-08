var x = require('casper').selectXPath;

casper.test.begin('Comprobar pagina ASPgems - Test6 - Blog', 8, function suite(test) {
    
  	casper.start('https://aspgems.com/', function() {
    	casper.click("a[href='/blog']"); //hacer click en blog
  	});

  	casper.then(function(){		
 	  	test.assertUrlMatch('https://aspgems.com/blog', 'Direccion URL correcta'); //comprobar la direccion URL
 	  	test.assertExists(x('//*[@id="page-title"]'), 'the element exists page-title'); //comprobar el titulo
 	  	test.assertExists(x('//*[@id="block-customblocks-block-subtitle-blog"]'), 'the element exists block-customblocks-block-subtitle-blog'); //comprobar el subtitulo
 	  	test.assertExists(x('//*[@id="block-system-main"]'), 'the element exists block-system-main'); //comprobar lista de post
 	  	test.assertExists(x('//*[@id="block-views-tags-block"]'), 'the element exists block-views-tags-block'); //comprobar lista de etiquetas
 	  	test.assertExists(x('//*[@id="block-mailchimp-signup-sign-up"]'), 'the element exists block-mailchimp-signup-sign-up'); //comprobar cuadro recibir novedades
 	  	test.assertExists(x('//*[@id="block-views-posts-block-4"]'), 'the element exists block-views-posts-block-4'); //comprobar lista ultimos post 	  	 	  	
 	  	test.assertExists(x('//*[@id="block-customblocks-block-flipboard"]'), 'the element exists block-customblocks-block-flipboard'); //comprobar cuadro nuestra revista
	});

  	casper.run(function() {
    	casper.echo("Test finalizado"); //mensaje
    	test.done();
  	});

});