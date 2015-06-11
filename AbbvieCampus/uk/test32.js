var menueditor_add = ["/uk/node/add/blog-article",
                      "/uk/node/add/contact",
                      "/uk/node/add/course",
                      "/uk/node/add/digital-certification",
                      "/uk/node/add/faqs",
                      "/uk/node/add/help",
                      "/uk/node/add/help-video",
                      "/uk/node/add/link",
                      "/uk/node/add/news",
                      "/uk/node/add/schedule-course",
                      "/uk/node/add/classroom",
                      "/uk/node/add/plan-de-formaci-n-anual",
                      "/uk/admin/people/create",
                      "/uk/admin/structure/taxonomy/wiki_terms/add"];

var menueditor_import = ["/uk/admin/import/certifications",
                         "/uk/admin/import-schedule-course-list"];

var menueditor_statistics = ["/uk/statistics/best-rated-posts",
                             "/uk/admin/stats/comment-stats-by-user-total",
                             "/uk/admin/stats/comment-stats-by-user",
                             "/uk/comment-stats",
                             "/uk/stats/expert_corner/content_creation",
                             "/uk/admin/your-opinion-results",
                             "/uk/forum-stats",
                             "/uk/statistics",
                             "/uk/awards/list",
                             "/uk/awards",
                             "/uk/admin/config/people/userpoints",
                             "/uk/user-points",
                             "/uk/admin/stats/blog-stats-by-user",
                             "/uk/admin/bloggers-stats",
                             "/uk/admin/rated-courses-by-student",                                                   
                             "/uk/stats/people-no-picture"];

var menueditor_admin = ["/uk/admin-formacion-anual",
                        "/uk/admin/structure/entity-type/user_awards/user_awards",
                        "/uk/admin-blog-entries",
                        "/uk/admin/content/comment",
                        "/uk/admin-contacts",
                        "/uk/admin/admin-course-request",
                        "/uk/admin-courses",
                        "/uk/admin-faq",
                        "/uk/admin-help/help",
                        "/uk/admin-help/videohelp",
                        "/uk/admin-news",
                        "/uk/admin-link",
                        "/uk/admin/schedule-courses",
                        "/uk/admin/commerce/orders",
                        "/uk/admin/store-product",
                        "/uk/admin-classrooms",
                        "/uk/admin-tags",                       
                        "/uk/wiki",
                        "/uk/wiki/edit-terms"];

var menueditor_users = ["/uk/dirigido-a",
                        "/uk/admin-users/emails",
                        "/uk/export-all-users",
                        "/uk/admin-users/groups",
                        "/uk/users-subscribed-to-new-content",
                        "/uk/point-transaction-adminstration",
                        "/uk/usuarios-suscritos-aulas",
                        "/uk/admin/config/system/flood-unblock",
                        "/uk/admin/users"];

var indice = 0;

casper.test.begin('Campus Abbvie UK - Test32 - Menu Control of Editor', 0, function suite(test) {
  
  casper.start();

  casper.thenOpen('/uk', function() {});

  casper.then(function() {
  
    this.echo(' ');
    this.echo('---***___ADD CONTENT___***---');
    this.echo(' ');
  
  });

  casper.then(function() {
      
      casper.click('a[href="/uk/node/add"]');
      this.echo('Clicked in Add content');
  
  });

  casper.then(function() {
    
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/node/add');
    
  });
  
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
      
    casper.click('a[href="/uk/admin-courses"]');
    this.echo('Clicked in Admin');
  
  });

  casper.then(function() {
    
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/admin-courses');
    
  });

  var indice3=0;

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

  var indice4=0;

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
    this.echo('---***___STATISTICS___***---');
    this.echo(' ');
  
  });

  casper.then(function() {
  
    casper.click('a[href="/uk/statistics"]');
    this.echo('Clicked in Statistics');
  
  });

  casper.then(function() {
    
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/statistics');
    
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
  
    casper.click('a[href="/uk/admin/import-schedule-course-list"]');
    this.echo('Clicked in Import');
  
  });

  casper.then(function() {
    
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/admin/import-schedule-course-list');
    
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
    this.echo('---***___ITEMS NUMBER___***---');
    this.echo(' ');
  
  });

  casper.then(function() {
      
    casper.click('a[href="/uk/admin/config/system/flood-unblock"]');
  
  })

  casper.then(function() {
    
    test.assertElementCount('li', 69);
    
  });
  
  casper.run(function() {
  
  	test.done();
  
  });

});