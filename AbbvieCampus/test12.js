var userName = ****;
var password = ****;
var links = ["http://directo.avanzo.com/abbvie/campus/",
					        "https://abbvie.sumtotalsystems.com/elearningcenter/app/management/LMS_LearnerHome.aspx",
					        "http://ppgisotrain.web.abbott.com/isotrain/",
					        "http://library.oneabbott.com",
					        "http://www.campusabbvie.com/sites/default/files/programa_de_blogs_2015_panel_y_plan_0.pdf",
					        "http://library.oneabbott.com/Pages/Training%20and%20Learning/Training.aspx",
					        "https://www.coursera.org/",
					        "http://campus.ie.edu",
					        "http://www.khanacademy.org",
					        "http://miriadax.net",
					        "http://ourabbvie.oneabbott.com/en/Pages/Home.aspx",
					        "http://ourabbvie.oneabbott.com/en/es/Pages/default.aspx",
					        "https://abbviehr.oneabbott.com/",
					        "http://abbvie.com"];
var indice = 0;

casper.test.begin('Campus Abbvie - Test12', 14, function suite(test) {   
  
  casper.start('https://abbvie-wec.dev.aspgems.com/es/user', function() {
    this.echo('⌚ Logging in....');
    this.fill('form#user-login', {
        'name': userName,
        'pass': password
    }, true);
    this.echo('Homepage was loaded successfully.');
  });

  casper.wait(750, function() {});

  casper.then(function(){
    casper.click('a[href="/es/links"]');
    this.echo('Clicked in Enlaces');
  });

  casper.wait(750, function() {});
  
  for (i = 0; i < links.length; i++) {     
    casper.then(function() {
        this.echo('Click in Ir a enlace --> ' + links[indice]);
    });

    casper.then(function() {
        casper.click('a[href="' + links[indice++] + '"]')  	
    });

    casper.wait(750, function() {});

    casper.then(function() {
        test.assertHttpStatus(200);
        //test.assertUrlMatch(links[indice++]);
    });

    casper.thenOpen('https://abbvie-wec.dev.aspgems.com/es/links', function() {});

  }
  
  casper.then(function() {
		('a[href="/es/user/logout"]');
		this.echo('⌚ Log out....');
  });
  
  casper.run(function() {
  	test.done();
  });

});