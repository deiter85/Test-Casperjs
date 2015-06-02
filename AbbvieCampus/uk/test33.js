casper.test.begin('Campus Abbvie UK - Test33 - Studyroom (Part 1)', 70, function suite(test) {   
    
    casper.start();

    casper.thenOpen('/uk', function() {});

    casper.then(function(){
        casper.click('a[href="/uk/list-of-classrooms"]');
        this.echo('Clicked in Studyroom');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/abbvie-academy"]');
        this.echo('Clicked in Abbvie academy');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/abbvie-academy/expert-corner"]');
        this.echo('Clicked in Abbvie academy/Expert blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/abbvie-academy/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/abbvie-academy/collaborative"]');
        this.echo('Clicked in Abbvie academy/Collaborative blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/abbvie-academy/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/abbvie-academy/courses"]');
        this.echo('Clicked in Abbvie academy/Courses');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/abbvie-academy/courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/abbvie-academy/edit-courses"]');
        this.echo('Clicked in Abbvie academy/Reorder');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/abbvie-academy/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/abbvie-academy"]');
        this.echo('Clicked in Abbvie academy/Home');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/abbvie-academy/home');
    });

    casper.thenOpen('/uk/list-of-classrooms', function() {
        this.echo('⌚ Opened Studyroom');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/abbvie-way"]');
        this.echo('Clicked in Abbvie way');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/abbvie-way/expert-corner"]');
        this.echo('Clicked in Abbvie way/Expert blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/abbvie-way/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/abbvie-way/collaborative"]');
        this.echo('Clicked in Abbvie way/Collaborative blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/abbvie-way/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/abbvie-way/courses"]');
        this.echo('Clicked in Abbvie way/Courses');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/abbvie-way/courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/abbvie-way/edit-courses"]');
        this.echo('Clicked in Abbvie way/Reorder');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/abbvie-way/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/abbvie-way"]');
        this.echo('Clicked in Abbvie way/Home');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/abbvie-way/home');
    });

    casper.thenOpen('/uk/list-of-classrooms', function() {
        this.echo('⌚ Opened Studyroom');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/abpi-and-pv"]');
        this.echo('Clicked in Abpi and pv');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/abpi-and-pv/expert-corner"]');
        this.echo('Clicked in Abpi and pv/Expert blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/abpi-and-pv/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/abpi-and-pv/collaborative"]');
        this.echo('Clicked in Abpi and pv/Collaborative blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/abpi-and-pv/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/abpi-and-pv/courses"]');
        this.echo('Clicked in Abpi and pv/Courses');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/abpi-and-pv/courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/abpi-and-pv/edit-courses"]');
        this.echo('Clicked in Abpi and pv/Reorder');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/abpi-and-pv/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/abpi-and-pv"]');
        this.echo('Clicked in Abpi and pv/Home');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/abpi-and-pv/home');
    });

    casper.thenOpen('/uk/list-of-classrooms', function() {
        this.echo('⌚ Opened Studyroom');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/biotherapeutics"]');
        this.echo('Clicked in Compliance');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/biotherapeutics/expert-corner"]');
        this.echo('Clicked in Biotherapeutics/Expert blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/biotherapeutics/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/biotherapeutics/collaborative"]');
        this.echo('Clicked in Biotherapeutics/Collaborative blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/biotherapeutics/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/biotherapeutics/courses"]');
        this.echo('Clicked in Biotherapeutics/Courses');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/biotherapeutics/courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/biotherapeutics/edit-courses"]');
        this.echo('Clicked in Biotherapeutics/Reorder');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/biotherapeutics/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/biotherapeutics"]');
        this.echo('Clicked in Biotherapeutics/Home');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/biotherapeutics/home');
    });

    casper.thenOpen('/uk/list-of-classrooms', function() {
        this.echo('⌚ Opened Studyroom');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/brand-planning"]');
        this.echo('Clicked in Brand planning');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/brand-planning/expert-corner"]');
        this.echo('Clicked in Brand planning/Expert blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/brand-planning/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/brand-planning/collaborative"]');
        this.echo('Clicked in Brand planning/Collaborative blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/brand-planning/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/brand-planning/courses"]');
        this.echo('Clicked in Brand planning/Courses');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/brand-planning/courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/brand-planning/edit-courses"]');
        this.echo('Clicked in Brand planning/Reorder');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/brand-planning/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/brand-planning"]');
        this.echo('Clicked in Brand planning/Home');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/brand-planning/home');
    });

    casper.thenOpen('/uk/list-of-classrooms', function() {
        this.echo('⌚ Opened Studyroom');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/business-skills"]');
        this.echo('Clicked in Business skills');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/business-skills/expert-corner"]');
        this.echo('Clicked in Business skills/Expert blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/business-skills/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/business-skills/collaborative"]');
        this.echo('Clicked in Business skills/Collaborative blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/business-skills/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/business-skills/courses"]');
        this.echo('Clicked in Business skills/Courses');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/business-skills/courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/business-skills/edit-courses"]');
        this.echo('Clicked in Business skills/Reorder');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/business-skills/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/business-skills"]');
        this.echo('Clicked in Business skills/Home');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/business-skills/home');
    });

    casper.thenOpen('/uk/list-of-classrooms', function() {
        this.echo('⌚ Opened Studyroom');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/closed-loop-model-clm"]');
        this.echo('Clicked in Closed loop model clm');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/closed-loop-model-clm/expert-corner"]');
        this.echo('Clicked in Closed loop model clm/Expert blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/closed-loop-model-clm/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/closed-loop-model-clm/collaborative"]');
        this.echo('Clicked in Closed loop model clm/Collaborative blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/closed-loop-model-clm/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/closed-loop-model-clm/courses"]');
        this.echo('Clicked in Closed loop model clm/Courses');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/closed-loop-model-clm/courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/closed-loop-model-clm/edit-courses"]');
        this.echo('Clicked in Closed loop model clm/Reorder');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/closed-loop-model-clm/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/closed-loop-model-clm"]');
        this.echo('Clicked in Closed loop model clm/Home');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/closed-loop-model-clm/home');
    });

    casper.run(function() {
        test.done();
    });

});