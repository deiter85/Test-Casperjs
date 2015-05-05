var x = require('casper').selectXPath;
var userName = ****;
var password = ****;

casper.test.begin('Campus Abbvie - Test3 - Pagina Principal', 13, function suite(test) {   
	
    casper.start('https://abbviecampus.com/es/user', function() {
        this.echo('⌚ Logging in....');
        this.fill('form#user-login', {
            'name': userName,
            'pass': password
        }, true);
        this.echo('Homepage was loaded successfully.');
    });

    casper.wait(500, function() {}); 

    casper.then(function() {
   	    test.assertExists(x('//*[@id="block-views-view-news-block-1"]'), 'Find an element matching: CUADRO NOTICIAS');
    });
    
    casper.then(function(){		
 		test.assertExists(x('//*[@id="block-views-blog-block-last-posts"]'), 'Find an element matching: CUADRO BLOG');
 	});

    casper.then(function(){     
        test.assertExists(x('//*[@id="block-abbvie-best-rated-courses-abbvie-best-rated-courses-home"]'), 'Find an element matching: CUADRO CURSOS MEJOR VALORADOS');
    });

 	casper.then(function(){
 		test.assertExists(x('//*[@id="block-views-area-news-block-1"]'), 'Find an element matching: CUADRO AREA NEWS');
 	});
    
    casper.then(function(){
 		test.assertExists(x('//*[@id="search-block-form"]'), 'Find an element matching: FORMULARIO BUSQUEDA');
 	});
    
    casper.then(function(){
 		test.assertExists(x('//*[@id="block-views-courses-block-1"]'), 'Find an element matching: CUADRO RECOMENDADO');
 	});
    
    casper.then(function(){
 		test.assertExists(x('//*[@id="block-views-usuario-block"]'), 'Find an element matching: CUADRO INFORMACION USUARIO');
 	});
    
    casper.then(function(){
 		test.assertExists(x('//*[@id="views_slideshow_cycle_teaser_section_courses-block_1"]'), 'Find an element matching: INFORMACION RECOMENDADO');
 	});

    casper.then(function(){
        test.assertExists(x('//*[@id="block-customblocks-image-wiki"]'), 'Find an element matching: IMAGEN ENLACE WIKI');
    });

    casper.then(function(){
        test.assertExists(x('//*[@id="block-customblocks-image-suggestions"]'), 'Find an element matching: CUADRO IMAGEN SUGERENCIAS');
    });

    casper.then(function(){
        test.assertExists(x('//*[@id="block-tagclouds-2"]'), 'Find an element matching: CUADRO TAG');
    });
    
    casper.then(function(){
        test.assertExists(x('//*[@class="site-logo"]'), 'Find an element matching: LOGO');
    });

    casper.then(function(){
        test.assertExists(x('//*[@id="footer"]'), 'Find an element matching: FOOTER');
    });
    
    casper.then(function() {
        casper.click('a[href="/es/user/logout"]');
        this.echo('⌚ Log out....');
    });
  	
    casper.run(function() {
   		test.done(); 
  	}); 

});