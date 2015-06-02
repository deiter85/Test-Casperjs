casper.test.begin('Campus Abbvie UK - Test35 - Studyroom (Part 3)', 60, function suite(test) {   
    
    casper.start();

    casper.thenOpen('/uk', function() {});

    casper.then(function(){
        casper.click('a[href="/uk/list-of-classrooms"]');
        this.echo('Clicked in Studyroom');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/insights-discovery"]');
        this.echo('Clicked in Insights discovery');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/insights-discovery/expert-corner"]');
        this.echo('Clicked in Insights discovery/Expert blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/insights-discovery/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/insights-discovery/collaborative"]');
        this.echo('Clicked in Insights discovery/Collaborative blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/insights-discovery/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/insights-discovery/courses"]');
        this.echo('Clicked in Insights discovery/Courses');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/insights-discovery/courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/insights-discovery/edit-courses"]');
        this.echo('Clicked in Insights discovery/Reorder');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/insights-discovery/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/insights-discovery"]');
        this.echo('Clicked in Insights discovery/Home');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/insights-discovery/home');
    });

    casper.thenOpen('/uk/list-of-classrooms', function() {
        this.echo('⌚ Opened Studyroom');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/leadership"]');
        this.echo('Clicked in Leadership');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/leadership/expert-corner"]');
        this.echo('Clicked in Leadership/Expert blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/leadership/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/leadership/collaborative"]');
        this.echo('Clicked in Leadership/Collaborative blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/leadership/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/leadership/courses"]');
        this.echo('Clicked in Leadership/Courses');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/leadership/courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/leadership/edit-courses"]');
        this.echo('Clicked in Leadership/Reorder');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/leadership/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/leadership"]');
        this.echo('Clicked in Leadership/Home');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/leadership/home');
    });

    casper.thenOpen('/uk/list-of-classrooms', function() {
        this.echo('⌚ Opened Studyroom');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/lynda-com-and-external-experts"]');
        this.echo('Clicked in Lynda com and external experts');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/lynda-com-and-external-experts/expert-corner"]');
        this.echo('Clicked in Lynda com and external experts/Expert blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/lynda-com-and-external-experts/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/lynda-com-and-external-experts/collaborative"]');
        this.echo('Clicked in Lynda com and external experts/Collaborative blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/lynda-com-and-external-experts/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/lynda-com-and-external-experts/courses"]');
        this.echo('Clicked in Lynda com and external experts/Courses');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/lynda-com-and-external-experts/courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/lynda-com-and-external-experts/edit-courses"]');
        this.echo('Clicked in Lynda com and external experts/Reorder');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/lynda-com-and-external-experts/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/lynda-com-and-external-experts"]');
        this.echo('Clicked in Lynda com and external experts/Home');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/lynda-com-and-external-experts/home');
    });

    casper.thenOpen('/uk/list-of-classrooms', function() {
        this.echo('⌚ Opened Studyroom');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/marketing-excellence"]');
        this.echo('Clicked in Marketing excellence');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/marketing-excellence/expert-corner"]');
        this.echo('Clicked in Marketing excellence/Expert blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/marketing-excellence/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/marketing-excellence/collaborative"]');
        this.echo('Clicked in Marketing excellence/Collaborative blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/marketing-excellence/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/marketing-excellence/courses"]');
        this.echo('Clicked in Marketing excellence/Courses');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/marketing-excellence/courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/marketing-excellence/edit-courses"]');
        this.echo('Clicked in Marketing excellence/Reorder');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/marketing-excellence/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/marketing-excellence"]');
        this.echo('Clicked in Marketing excellence/Home');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/marketing-excellence/home');
    });

    casper.thenOpen('/uk/list-of-classrooms', function() {
        this.echo('⌚ Opened Studyroom');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/medical-and-clinical"]');
        this.echo('Clicked in Medical and clinical');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/medical-and-clinical/expert-corner"]');
        this.echo('Clicked in Medical and clinical/Expert blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/medical-and-clinical/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/medical-and-clinical/collaborative"]');
        this.echo('Clicked in Medical and clinical/Collaborative blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/medical-and-clinical/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/medical-and-clinical/courses"]');
        this.echo('Clicked in Medical and clinical/Courses');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/medical-and-clinical/courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/medical-and-clinical/edit-courses"]');
        this.echo('Clicked in Medical and clinical/Reorder');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/medical-and-clinical/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/medical-and-clinical"]');
        this.echo('Clicked in Medical and clinical/Home');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/medical-and-clinical/home');
    });

    casper.thenOpen('/uk/list-of-classrooms', function() {
        this.echo('⌚ Opened Studyroom');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/mentoring"]');
        this.echo('Clicked in Mentoring');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/mentoring/expert-corner"]');
        this.echo('Clicked in Mentoring/Expert blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/mentoring/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/mentoring/collaborative"]');
        this.echo('Clicked in Mentoring/Collaborative blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/mentoring/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/mentoring/courses"]');
        this.echo('Clicked in Mentoring/Courses');
    });
   
    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/mentoring/courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/mentoring/edit-courses"]');
        this.echo('Clicked in Mentoring/Reorder');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/mentoring/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/mentoring"]');
        this.echo('Clicked in Mentoring/Home');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/mentoring/home');
    });

    casper.run(function() {
        test.done();
    });

});