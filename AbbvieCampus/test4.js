var editor_allow = ["/node/add/add-product",
					"/node/add/classroom",
					"/node/add/basic-page",
					"/node/add/contact",
					"/node/add/course",
					"/node/add/course-request",
					"/node/add/help",
					"/node/add/help-video",
					"/node/add/link",
					"/node/add/blog-article",
					"/node/add/plan-de-formaci-n-anual",];

//var editor_disallow = [];

var indice = 0;

casper.test.begin('Campus Abbvie - Test4', 0, function suite(test) {   
  
  casper.start();
  
  casper.thenOpen('/es', function() {});
  
  for (i = 0; i < editor_allow.length; i++) {     
    casper.thenOpen(editor_allow[i], function() {
      	this.echo('⌚ Opened the ' + editor_allow[indice++]);
      	test.assertHttpStatus(200);
    });
  }
  
  /*var indice2 = 0; //Contador
  
  for (i = 0; i < editor_disallow.length; i++) {     
    casper.thenOpen(editor_disallow[i], function() {
      	this.echo('⌚ Opened the ' + editor_disallow[indice2++]);
      	test.assertHttpStatus(403);
    });
  }*/
  
  casper.then(function() {
		casper.click("a[href='/es/user/logout']");
		this.echo('⌚ Log out....');
  });
  
  casper.run(function() {
  		test.done();
  });

});