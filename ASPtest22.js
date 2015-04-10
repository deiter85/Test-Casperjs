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
					"/node/add/panel/choose-layout",
					"/node/add/basic-page",
					"/node/add/feed-item",
					"/node/add/banner",
					"/node/add/banner-first-clone",
					"/node/add/banner-second-clone",
					"/node/add/banner-third-clone",
					"/node/add/asplab-project",];

var nomUser = ****;

var password = ****;

var indice = 0;

casper.test.begin('Comprobar pagina ASPgems - Test22 - Http Status', 0, function suite(test) {
    
  casper.start('https://aspgems.com/');
  	
  casper.thenOpen('https://aspgems.com/user', function() {
    this.echo('⌚ Logging in '+nomUser+'....');
    this.fill('form#user-login', {
      "name": nomUser,
      "pass": password
    }, true);
    this.echo('Authentication successful');
  });
 	
  for (i=0;i<editor_allow.length;i++) {     
    casper.thenOpen('https://aspgems.com'+editor_allow[i], function() {
      this.echo('⌚ Opened the '+editor_allow[indice++]);
      test.assertHttpStatus(200);	    
    });
  }

  casper.run(function() {
  	casper.echo('Test finalizado');
  	test.done();
  });

});