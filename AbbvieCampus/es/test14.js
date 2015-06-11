var menueditor_add = ["/es/node/add/blog-article",
                      "/es/node/add/contact",
                      "/es/node/add/course",
                      "/es/node/add/digital-certification",
                      "/es/node/add/faqs",
                      "/es/node/add/help",
                      "/es/node/add/help-video",
                      "/es/node/add/link",
                      "/es/node/add/news",
                      "/es/node/add/schedule-course",
                      "/es/node/add/classroom",
                      "/es/node/add/plan-de-formaci-n-anual",
                      "/es/admin/people/create",
					            "/es/admin/structure/taxonomy/wiki_terms/add"];

var menueditor_import = ["/es/admin/import/certifications",
                         "/es/admin/import-schedule-course-list"];

var menueditor_statistics = ["/es/statistics/best-rated-posts",
                             "/es/admin/stats/comment-stats-by-user-total",
                             "/es/admin/stats/comment-stats-by-user",
                             "/es/comment-stats",
                             "/es/stats/expert_corner/content_creation",
                             "/es/admin/your-opinion-results",
                             "/es/forum-stats",
                             "/es/statistics",
                             "/es/awards/list",
                             "/es/awards",
                             "/es/admin/config/people/userpoints",
                             "/es/user-points",
                             "/es/admin/stats/blog-stats-by-user",
                             "/es/admin/bloggers-stats",
                             "/es/admin/rated-courses-by-student",                                                   
                             "/es/stats/people-no-picture"];

var menueditor_admin = ["/es/admin-formacion-anual",
                        "/es/admin/structure/entity-type/user_awards/user_awards",
                        "/es/admin-blog-entries",
                        "/es/admin/content/comment",
                        "/es/admin-contacts",
                        "/es/admin/admin-course-request",
                        "/es/admin-courses",
                        "/es/admin-faq",
                        "/es/admin-help/help",
                        "/es/admin-help/videohelp",
                        "/es/admin-news",
                        "/es/admin-link",
                        "/es/admin/schedule-courses",
                        "/es/admin/commerce/orders",
                        "/es/admin/store-product",
                        "/es/admin-classrooms",
                        "/es/admin-tags",                       
                        "/es/wiki",
                        "/es/wiki/edit-terms"];

var menueditor_users = ["/es/dirigido-a",
                        "/es/admin-users/emails",
                        "/es/export-all-users",
                        "/es/admin-users/groups",
                        "/es/users-subscribed-to-new-content",
                        "/es/point-transaction-adminstration",
                        "/es/usuarios-suscritos-aulas",
                        "/es/admin/config/system/flood-unblock",
                        "/es/admin/users"];

casper.test.begin('Campus Abbvie ES - Test14 - Control Menu de Editor', 0, function suite(test) {
  
  casper.start();

  casper.thenOpen('/es', function() {});

  casper.then(function() {
  
    this.echo(' ');
    this.echo('---***___ADD CONTENT___***---');
    this.echo(' ');
  
  });

  casper.then(function() {
      
    casper.click('a[href="/es/node/add"]');
    this.echo('Clicked in Add content');
  
  });

  casper.then(function() {
    
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/es/node/add');
    
  });

  var indice = 0;
  
  for (i = 0; i < menueditor_add.length; i++) {
    
    casper.then(function() {
    
      casper.click('a[href="' + menueditor_add[indice] + '"]');
      this.echo('Clicked in ' + menueditor_add[indice]);
    
    });

    casper.then(function() {
    
      test.assertHttpStatus(200);
      test.assertUrlMatch('https://abbviecampus.com' + menueditor_add[indice]);
    
    });

    casper.then(function() {
    
      indice++;
    
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

  casper.then(function() {
    
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/es/admin-courses');
    
  });

  var indice3 = 0;

  for (i = 0; i < menueditor_admin.length; i++) {
  
    casper.then(function() {
  
      casper.click('a[href="' + menueditor_admin[indice3] + '"]');
      this.echo('Clicked in ' + menueditor_admin[indice3]);
  
    });

    casper.then(function() {
    
      test.assertHttpStatus(200);
      test.assertUrlMatch('https://abbviecampus.com' + menueditor_admin[indice3]);
    
    });

    casper.then(function() {
    
      indice3++;
    
    });
  
  }

  casper.then(function() {
  
    this.echo(' ');
    this.echo('---***___USERS___***---');
    this.echo(' ');
  
  });

  var indice4 = 0;

  for (i = 0; i < menueditor_users.length; i++) {
  
    casper.then(function() {
  
      casper.click('a[href="' + menueditor_users[indice4] + '"]');
      this.echo('Clicked in ' + menueditor_users[indice4] );
  
    });

    casper.then(function() {
    
      test.assertHttpStatus(200);

      if (indice4 != 2) {
      
        test.assertUrlMatch('https://abbviecampus.com' + menueditor_users[indice4]);
      
      }
    
    });

    casper.then(function() {
    
      indice4++;
    
    });

  }

  casper.then(function() {
  
    this.echo(' ');
    this.echo('---***___ESTADISTICAS___***---');
    this.echo(' ');
  
  });

  casper.then(function() {
  
    casper.click('a[href="/es/statistics"]');
    this.echo('Clicked in Estadisticas');
  
  });

  casper.then(function() {
    
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/es/statistics');
    
  });

  var indice2 = 0;

  for (i = 0; i < menueditor_statistics.length; i++) {
  
    casper.then(function() {
  
      casper.click('a[href="' + menueditor_statistics[indice2] + '"]');
      this.echo('Clicked in ' + menueditor_statistics[indice2]);
  
    });

    casper.then(function() {
    
      test.assertHttpStatus(200);
      test.assertUrlMatch('https://abbviecampus.com' + menueditor_statistics[indice2]);
    
    });

    casper.then(function() {
    
      indice2++;
    
    });

  }

  casper.then(function() {
  
    this.echo(' ');
    this.echo('---***___IMPORT___***---');
    this.echo(' ');
  
  });

  casper.then(function() {
  
    casper.click('a[href="/es/admin/import-schedule-course-list"]');
    this.echo('Clicked in Import');
  
  });

  casper.then(function() {
    
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/es/admin/import-schedule-course-list');
    
  });

  var indice5 = 0;

  for (i = 0; i < menueditor_import.length; i++) {
  
    casper.then(function() {
  
      casper.click('a[href="' + menueditor_import[indice5] + '"]');
      this.echo('Clicked in ' + menueditor_import[indice5]);
  
    });

    casper.then(function() {
    
      test.assertHttpStatus(200);
      test.assertUrlMatch('https://abbviecampus.com' + menueditor_import[indice5]);
    
    });

    casper.then(function() {
    
      indice5++;
    
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

  casper.then(function() {
    
  	test.assertElementCount('li', 69);
    
  });
  
  casper.run(function() {
  
  	test.done();
  
  });

});