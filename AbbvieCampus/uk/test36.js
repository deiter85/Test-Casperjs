casper.test.begin('Campus Abbvie UK - Test36 - Studyroom (Part 4)', 60, function suite(test) {   
    
    casper.start();

    casper.thenOpen('/uk', function() {});

    casper.then(function(){
        casper.click('a[href="/uk/list-of-classrooms"]');
        this.echo('Clicked in Studyroom');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/patients-at-heart"]');
        this.echo('Clicked in Patients at heart');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/patients-at-heart/expert-corner"]');
        this.echo('Clicked in Patients at heart/Expert blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/patients-at-heart/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/patients-at-heart/collaborative"]');
        this.echo('Clicked in Patients at heart/Collaborative blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/patients-at-heart/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/patients-at-heart/courses"]');
        this.echo('Clicked in Patients at heart/Courses');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/patients-at-heart/courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/patients-at-heart/edit-courses"]');
        this.echo('Clicked in Patients at heart/Reorder');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/patients-at-heart/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/patients-at-heart"]');
        this.echo('Clicked in Patients at heart/Home');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/patients-at-heart/home');
    });

    casper.thenOpen('/uk/list-of-classrooms', function() {
        this.echo('⌚ Opened Studyroom');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/personal-development"]');
        this.echo('Clicked in Personal development');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/personal-development/expert-corner"]');
        this.echo('Clicked in Personal development/Expert blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/personal-development/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/personal-development/collaborative"]');
        this.echo('Clicked in Personal development/Collaborative blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/personal-development/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/personal-development/courses"]');
        this.echo('Clicked in Personal development/Courses');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/personal-development/courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/personal-development/edit-courses"]');
        this.echo('Clicked in Personal development/Reorder');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/personal-development/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/personal-development"]');
        this.echo('Clicked in Personal development/Home');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/personal-development/home');
    });

    casper.thenOpen('/uk/list-of-classrooms', function() {
        this.echo('⌚ Opened Studyroom');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/product-knowledge"]');
        this.echo('Clicked in Product knowledge');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/product-knowledge/expert-corner"]');
        this.echo('Clicked in Product knowledge/Expert blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/product-knowledge/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/product-knowledge/collaborative"]');
        this.echo('Clicked in Product knowledge/Collaborative blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/product-knowledge/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/product-knowledge/courses"]');
        this.echo('Clicked in Product knowledge/Courses');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/product-knowledge/courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/product-knowledge/edit-courses"]');
        this.echo('Clicked in Product knowledge/Reorder');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/product-knowledge/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/product-knowledge"]');
        this.echo('Clicked in Product knowledge/Home');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/product-knowledge/home');
    });

    casper.thenOpen('/uk/list-of-classrooms', function() {
        this.echo('⌚ Opened Studyroom');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/systems-and-finance"]');
        this.echo('Clicked in Systems and finance');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/systems-and-finance/expert-corner"]');
        this.echo('Clicked in Systems and finance/Expert blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/systems-and-finance/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/systems-and-finance/collaborative"]');
        this.echo('Clicked in Systems and finance/Collaborative blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/systems-and-finance/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/systems-and-finance/courses"]');
        this.echo('Clicked in Systems and finance/Courses');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/systems-and-finance/courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/systems-and-finance/edit-courses"]');
        this.echo('Clicked in Systems and finance/Reorder');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/systems-and-finance/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/systems-and-finance"]');
        this.echo('Clicked in Systems and finance/Home');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/systems-and-finance/home');
    });

    casper.thenOpen('/uk/list-of-classrooms', function() {
        this.echo('⌚ Opened Studyroom');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/veeva-customer-relationship-management"]');
        this.echo('Clicked in Veeva customer relationship management');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/veeva-customer-relationship-management/expert-corner"]');
        this.echo('Clicked in Veeva customer relationship management/Expert blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/veeva-customer-relationship-management/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/veeva-customer-relationship-management/collaborative"]');
        this.echo('Clicked in Veeva customer relationship management/Collaborative blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/veeva-customer-relationship-management/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/veeva-customer-relationship-management/courses"]');
        this.echo('Clicked in Veeva customer relationship management/Courses');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/veeva-customer-relationship-management/courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/veeva-customer-relationship-management/edit-courses"]');
        this.echo('Clicked in Veeva customer relationship management/Reorder');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/veeva-customer-relationship-management/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/veeva-customer-relationship-management"]');
        this.echo('Clicked in Veeva customer relationship management/Home');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/veeva-customer-relationship-management/home');
    });

    casper.thenOpen('/uk/list-of-classrooms', function() {
        this.echo('⌚ Opened Studyroom');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/zinc"]');
        this.echo('Clicked in Zinc');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/zinc/expert-corner"]');
        this.echo('Clicked in Zinc/Expert blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/zinc/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/zinc/collaborative"]');
        this.echo('Clicked in Zinc/Collaborative blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/zinc/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/zinc/courses"]');
        this.echo('Clicked in Zinc/Courses');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/zinc/courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/zinc/edit-courses"]');
        this.echo('Clicked in Zinc/Reorder');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/zinc/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/zinc"]');
        this.echo('Clicked in Zinc/Home');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/zinc/home');
    });

    casper.then(function() {
        casper.click('a[href="/uk/user/logout"]');
        this.echo('⌚ Log out....');
    });

    casper.run(function() {
        test.done();
    });

});