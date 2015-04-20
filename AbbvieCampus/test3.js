var x = require('casper').selectXPath;
var userName = ****;
var password = ****;

casper.test.begin('Campus Abbvie - Test3', 11, function suite(test) {   
	
    casper.start('https://abbvie-wec.dev.aspgems.com/es/user', function() {
        this.echo('⌚ Logging in....');
            this.fill('form#user-login', {
            'name': userName,
            'pass': password
        }, true);
        this.echo('Homepage was loaded successfully.');
    });

    casper.wait(1000, function() {});  

    casper.thenOpen('https://abbvie-wec.dev.aspgems.com/es/', function() {
   	    test.assertExists(x('//*[@id="block-views-view-news-block-1"]'));
    });
    
    casper.then(function(){		
 		test.assertExists(x('//*[@id="block-views-blog-block-last-posts"]'));
 	});
    
    casper.then(function(){
 		test.assertExists(x('//*[@id="block-views-course-ratings-block"]'));
 	});
    
    casper.then(function(){
 		test.assertExists(x('//*[@id="block-search-form"]'));
 	});
    
    casper.then(function(){
 		test.assertExists(x('//*[@id="block-views-courses-block-1"]'));
 	});
    
    casper.then(function(){
 		test.assertExists(x('//*[@id="block-views-usuario-block"]'));
 	});
    
    casper.then(function(){
 		test.assertExists(x('//*[@id="views_slideshow_cycle_teaser_section_courses-block_1"]'));
 	});

    casper.then(function(){
        test.assertExists(x('//*[@id="block-customblocks-image-wiki"]'));
    });

    casper.then(function(){
        test.assertExists(x('//*[@id="block-customblocks-image-suggestions"]'));
    });
    
    casper.then(function(){
        test.assertExists(x('//*[@class="site-logo"]'));
    });

    casper.then(function(){
        test.assertExists(x('//*[@id="footer"]'));
    });

    casper.then(function() {
        casper.click("a[href='/es/user/logout']");
        this.echo('⌚ Log out....');
    });
  	
    casper.run(function() {
   		test.done(); 
  	}); 

});