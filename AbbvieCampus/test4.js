var userName = ****;
var password = ****;
var editor_allow = ["/es/node/add/plan-de-formaci-n-anual",
					          "/es/node/add/classroom",
					          "/es/node/add/help",
					          "/es/node/add/blog-article",
					          "/es/node/add/digital-certification",
					          "/es/node/add/contact",
					          "/es/node/add/course-request",
					          "/es/node/add/course",
					          "/es/node/add/link",
					          "/es/node/add/faqs",
					          "/es/node/add/forum",
					          "/es/node/add/news",
					          "/es/node/add/schedule-course",
					          "/es/node/add/help-video",
					          "/es/node/add/add-product"];
var indice = 0;

casper.test.begin('Campus Abbvie - Test4', 0, function suite(test) {   
  
  casper.start('https://abbvie-wec.dev.aspgems.com/es/user', function() {
    this.echo('⌚ Logging in....');
    this.fill('form#user-login', {
        'name': userName,
        'pass': password
    }, true);
    this.echo('Homepage was loaded successfully.');
  });
  
  for (i = 0; i < editor_allow.length; i++) {     
    casper.thenOpen(editor_allow[i], function() {
      	this.echo('⌚ Opened the ' + editor_allow[indice++]);
      	test.assertHttpStatus(200);
    });
  }
  
  casper.then(function() {
		casper.click("a[href='/es/user/logout']");
		this.echo('⌚ Log out....');
  });
  
  casper.run(function() {
  		test.done();
  });

});