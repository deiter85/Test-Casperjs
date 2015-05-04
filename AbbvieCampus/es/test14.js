var userName = ****;
var password = ****;

var menueditor_add = ["/es/admin/people/create",
					  "/es/admin/structure/taxonomy/wiki_terms/add",
					  "/es/node/add/blog-article",
                      "/es/node/add/classroom",
					  "/es/node/add/contact",
					  "/es/node/add/course",
                      "/es/node/add/digital-certification",
					  "/es/node/add/faqs",
                      "/es/node/add/help",
					  "/es/node/add/help-video",
					  "/es/node/add/link",
					  "/es/node/add/news",
					  "/es/node/add/schedule-course",
					  "/es/node/add/plan-de-formaci-n-anual"];

var menueditor_statistics = ["/es/comment-stats",
                             "/es/user-points",
                             "/es/awards/list",
                             "/es/awards",
                             "/es/admin/config/people/userpoints"]; //Falta enlace a User with/without picture

var menueditor_admin = ["/es/admin/structure/entity-type/user_awards/user_awards",
                        "/es/admin-faq",
                        "/es/admin/store-product",
                        "/es/admin-classrooms",
                        "/es/admin-help/help",
                        "/es/admin/content/comment",
                        "/es/admin-courses",
                        "/es/admin-link",
                        "/es/admin-formacion-anual",
                        "/es/admin/schedule-courses",
                        "/es/admin-news",
                        "/es/wiki",
                        "/es/wiki/edit-terms",
                        "/es/admin/commerce/orders",
                        "/es/admin/store-product",
                        "/es/admin-tags"]; //Falta enlace a Blog entries

var menueditor_users = ["/es/admin/config/system/flood-unblock",
                        "/es/export-all-users",
                        "/es/dirigido-a",
                        "/es/admin-users/emails",
                        "/es/admin-users/groups",
                        "/es/point-transaction-adminstration",
                        "/es/usuarios-suscritos-aulas",
                        "/es/usuarios-suscritos-a-novedades",
                        "/es/admin/users"];

casper.test.begin('Campus Abbvie - Test14 - Control Menu de Editor', 0, function suite(test) {   
  
  casper.start('https://abbvie-wec.dev.aspgems.com/es/user', function() {
    
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
      
      casper.click('a[href="/es/node/add"]');
      this.echo('Clicked in Agregar contenido');
  
  });

  casper.wait(500, function() {});

  casper.then(function() {
    
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/node/add');
    
  });

  var indice = 0;
  
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
  
    casper.click('a[href="/es/admin-blog-entries"]');
    this.echo('Clicked in Blog entries');
  
  });

  casper.wait(500, function() {});

  casper.then(function() {
    
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/admin-blog-entries');
    
  });

  casper.then(function() {
  
    this.echo(' ');
    this.echo('---***___ESTADISTICAS___***---');
    this.echo(' ');
  
  });

  casper.then(function() {
  
    casper.click('a[href="/es/statistics"]');
    this.echo('Clicked in Estadisticas');
  
  });

  casper.wait(500, function() {});

  casper.then(function() {
    
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/statistics');
    
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
      
    casper.click('a[href="/es/admin-courses"]');
    this.echo('Clicked in Admin');
  
  });

  casper.wait(500, function() {});

  casper.then(function() {
    
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com/es/admin-courses');
    
  });

  var indice3 = 0;

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

  /*casper.then(function() {
      
      casper.click('a[href="/es/admin.courses"]');   FALTA ENLACE A USERS
      this.echo('Clicked in Agregar contenido');
  
  });*/

  var indice4 = 0;

  for (i = 0; i < menueditor_users.length; i++) {     
  
    casper.then(function() {
  
      casper.click('a[href="' + menueditor_users[indice4] + '"]');
      this.echo('Clicked in ' + menueditor_users[indice4] );
  
    });

    casper.wait(500, function() {});

    casper.then(function() {
    
      test.assertHttpStatus(200);

      if (indice4 != 1) {
      
        test.assertUrlMatch('https://abbvie-wec.dev.aspgems.com' + menueditor_users[indice4]);
      
      }

      indice4++;
    
    });

  }

  casper.then(function() {
  
    this.echo(' ');
    this.echo('---***___NUMERO DE ITEMS___***---');
    this.echo(' ');
  
  });

  casper.then(function() {
      
      casper.click('a[href="/es/admin/config/system/flood-unblock"]');
  
  })

  casper.wait(500, function() {});

  casper.then(function() {
    
  	test.assertElementCount('li', 55);  
    
  });
  
  casper.then(function() {
  
    casper.click('a[href="/es/user/logout"]');
    this.echo('⌚ Log out....');
  
  });
  
  casper.run(function() {
  
  	test.done();
  
  });

});