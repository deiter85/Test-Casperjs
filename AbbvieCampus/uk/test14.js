var userName = ****;
var password = ****;

var menueditor_add = ["/uk/admin/people/create",
					            "/uk/admin/structure/taxonomy/wiki_terms/add",
					            "/uk/node/add/blog-article",
                      "/uk/node/add/classroom",
					            "/uk/node/add/contact",
					            "/uk/node/add/course",
                      "/uk/node/add/digital-certification",
					            "/uk/node/add/faqs",
                      "/uk/node/add/help",
					            "/uk/node/add/help-video",
					            "/uk/node/add/link",
					            "/uk/node/add/news",
					            "/uk/node/add/schedule-course",
					            "/uk/node/add/plan-de-formaci-n-anual"];

var menueditor_statistics = ["/uk/comment-stats",
                             "/uk/user-points",
                             "/uk/awards/list",
                             "/uk/awards",
                             "/uk/admin/config/people/userpoints"]; 

var menueditor_admin = ["/uk/admin/structure/entity-type/user_awards/user_awards",
                        "/uk/admin-faq",
                        "/uk/admin/store-product",
                        "/uk/admin-classrooms",
                        "/uk/admin-help/help",
                        "/uk/admin/content/comment",
                        "/uk/admin-contacts",
                        "/uk/admin-courses",
                        "/uk/admin-link",
                        "/uk/admin-formacion-anual",
                        "/uk/admin/schedule-courses",
                        "/uk/admin-news",
                        "/uk/wiki",
                        "/uk/wiki/edit-terms",
                        "/uk/admin/commerce/orders",
                        "/uk/admin/store-product",
                        "/uk/admin-tags"]; 

var menueditor_users = ["/uk/admin/config/system/flood-unblock",
                        "/uk/export-all-users",
                        "/uk/dirigido-a",
                        "/uk/admin-users/emails",
                        "/uk/admin-users/groups",
                        "/uk/point-transaction-adminstration",
                        "/uk/usuarios-suscritos-aulas",
                        "/uk/usuarios-suscritos-a-novedades",
                        "/uk/admin/users"];

var indice = 0;

casper.test.begin('Campus Abbvie - Test14 - Menu Control of Editor', 0, function suite(test) {   
  
  casper.start('https://abbvie-wec.dev.aspgems.com/uk/user', function() {
    
    this.echo('⌚ Logging in....');
    
    this.fill('form#user-login', {
        
        'name': userName,
        'pass': password
    
    }, true);
    
    this.echo('Homepage was loaded successfully.');
  
  });

  casper.then(function() {
  
    this.echo(' ');
    this.echo('---***___AGREGAR CONTENIDO___***---');
    this.echo(' ');
  
  });

  casper.then(function() {
      
      casper.click('a[href="/uk/node/add"]');
      this.echo('Clicked in Agregar contenido');
  
  });

  casper.wait(500, function() {});

  casper.then(function() {
    
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/uk/node/add');
    
  });
  
  for (i = 0; i < menueditor_add.length; i++) {     
    
    casper.then(function() {
    
      casper.click('a[href="' + menueditor_add[indice] + '"]');
      this.echo('Clicked in ' + menueditor_add[indice]);
    
    });

    casper.wait(500, function() {});

    casper.then(function() {
    
      test.assertHttpStatus(200);
      test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com' + menueditor_add[indice++]);
    
    });
  
  }

  casper.then(function() {
  
    this.echo(' ');
    this.echo('---***___BLOG ENTRIES___***---');
    this.echo(' ');
  
  });

  casper.then(function() {
  
    casper.click('a[href="/uk/admin-blog-entries"]');
    this.echo('Clicked in Blog entries');
  
  });

  casper.wait(500, function() {});

  casper.then(function() {
    
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/uk/admin-blog-entries');
    
  });

  casper.then(function() {
  
    this.echo(' ');
    this.echo('---***___ESTADISTICAS___***---');
    this.echo(' ');
  
  });

  casper.then(function() {
  
    casper.click('a[href="/uk/statistics"]');
    this.echo('Clicked in Estadisticas');
  
  });

  casper.wait(500, function() {});

  casper.then(function() {
    
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/uk/statistics');
    
  });

  var indice2 = 0;

  for (i = 0; i < menueditor_statistics.length; i++) {     
  
    casper.then(function() {
  
      casper.click('a[href="' + menueditor_statistics[indice2] + '"]');
      this.echo('Clicked in ' + menueditor_statistics[indice2]);
  
    });

    casper.wait(500, function() {});

    casper.then(function() {
    
      test.assertHttpStatus(200);
      test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com' + menueditor_statistics[indice2++]);
    
    });

  }

  casper.then(function() {
  
    this.echo(' ');
    this.echo('---***___ADMIN___***---');
    this.echo(' ');
  
  });

  casper.then(function() {
      
    casper.click('a[href="/uk/admin-courses"]');
    this.echo('Clicked in Admin');
  
  });

  casper.wait(500, function() {});

  casper.then(function() {
    
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/uk/admin-courses');
    
  });

  var indice3=0;

  for (i = 0; i < menueditor_admin.length; i++) {     
  
    casper.then(function() {
  
      casper.click('a[href="' + menueditor_admin[indice3] + '"]');
      this.echo('Clicked in ' + menueditor_admin[indice3]);
  
    });

    casper.wait(500, function() {});

    casper.then(function() {
    
      test.assertHttpStatus(200);
      test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com' + menueditor_admin[indice3++]);
    
    });
  
  }

  casper.then(function() {
  
    this.echo(' ');
    this.echo('---***___USERS___***---');
    this.echo(' ');
  
  });

  var indice4=0;

  for (i = 0; i < menueditor_users.length; i++) {     
  
    casper.then(function() {
  
      casper.click('a[href="' + menueditor_users[indice4] + '"]');
      this.echo('Clicked in ' + menueditor_users[indice4] );
  
    });

    casper.wait(500, function() {});

    casper.then(function() {
    
      test.assertHttpStatus(200);

      if (indice4 != 1) {
      
        test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com' + menueditor_users[indice4++]);
      
      } else {

        indice4++;

      }
    
    });
  
  }

  casper.then(function() {
  
    this.echo(' ');
    this.echo('---***___ITEMS NUMBER___***---');
    this.echo(' ');
  
  });

  casper.then(function() {
      
      casper.click('a[href="/uk/admin/config/system/flood-unblock"]');
  
  })

  casper.wait(500, function() {});

  casper.then(function() {
    
    test.assertElementCount('li', 55);  
    
  });
  
  casper.then(function() {
  
    casper.click('a[href="/uk/user/logout"]');
    this.echo('⌚ Log out....');
  
  });
  
  casper.run(function() {
  
  	test.done();
  
  });

});