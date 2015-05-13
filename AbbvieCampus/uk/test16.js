var userName = ****;
var password = ****;

casper.test.begin('Campus Abbvie UK - Test16 - Studyroom (Part 2)', 60, function suite(test) {   
    
    casper.start('https://abbviecampus.com/uk/user', function() {
        this.echo('⌚ Logging in....');
        this.fill('form#user-login', {
            'name': userName,
            'pass': password
        }, true);
        this.echo('Homepage was loaded successfully.');
    });

    casper.wait(500, function() {});

    casper.then(function(){
        casper.click('a[href="/uk/list-of-classrooms"]');
        this.echo('Clicked in Studyroom');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/coaching"]');
        this.echo('Clicked in Coaching');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/coaching/expert-corner"]');
        this.echo('Clicked in Coaching/Expert blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/coaching/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/coaching/collaborative"]');
        this.echo('Clicked in Coaching/Collaborative blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/coaching/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/coaching/courses"]');
        this.echo('Clicked in Coaching/Courses');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/coaching/courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/coaching/edit-courses"]');
        this.echo('Clicked in Coaching/Reorder');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/coaching/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/coaching"]');
        this.echo('Clicked in Coaching/Home');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/coaching/home');
    });

    casper.thenOpen('/uk/list-of-classrooms', function() {
        this.echo('⌚ Opened Aulas');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/hr"]');
        this.echo('Clicked in Hr');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/hr/expert-corner"]');
        this.echo('Clicked in Hr/Expert blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/hr/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/hr/collaborative"]');
        this.echo('Clicked in Hr/Collaborative blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/hr/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/hr/courses"]');
        this.echo('Clicked in Hr/Courses');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/hr/courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/hr/edit-courses"]');
        this.echo('Clicked in Hr/Reorder');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/hr/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/hr"]');
        this.echo('Clicked in Hr/Home');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/hr/home');
    });

    casper.thenOpen('/uk/list-of-classrooms', function() {
        this.echo('⌚ Opened Aulas');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/impact-scheme"]');
        this.echo('Clicked in Impact scheme');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/impact-scheme/expert-corner"]');
        this.echo('Clicked in Impact scheme/Expert blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/impact-scheme/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/impact-scheme/collaborative"]');
        this.echo('Clicked in Impact scheme/Collaborative blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/impact-scheme/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/impact-scheme/courses"]');
        this.echo('Clicked in Impact scheme/Courses');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/impact-scheme/courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/impact-scheme/edit-courses"]');
        this.echo('Clicked in Impact scheme/Reorder');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/impact-scheme/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/impact-scheme"]');
        this.echo('Clicked in Impact scheme/Home');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/impact-scheme/home');
    });

    casper.thenOpen('/uk/list-of-classrooms', function() {
        this.echo('⌚ Opened Aulas');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/in-field-working"]');
        this.echo('Clicked in In field working');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/in-field-working/expert-corner"]');
        this.echo('Clicked in In field working/Expert blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/in-field-working/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/in-field-working/collaborative"]');
        this.echo('Clicked in In field working/Collaborative blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/in-field-working/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/in-field-working/courses"]');
        this.echo('Clicked in In field working/Courses');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/in-field-working/courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/in-field-working/edit-courses"]');
        this.echo('Clicked in In field working/Reorder');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/in-field-working/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/in-field-working"]');
        this.echo('Clicked in In field working/Home');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/in-field-working/home');
    });

    casper.thenOpen('/uk/list-of-classrooms', function() {
        this.echo('⌚ Opened Aulas');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/influencing-and-persuading"]');
        this.echo('Clicked in Influencing and persuading');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/influencing-and-persuading/expert-corner"]');
        this.echo('Clicked in Influencing and persuadingg/Expert blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/influencing-and-persuading/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/influencing-and-persuading/collaborative"]');
        this.echo('Clicked in Influencing and persuading/Collaborative blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/influencing-and-persuading/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/influencing-and-persuading/courses"]');
        this.echo('Clicked in Influencing and persuading/Courses');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/influencing-and-persuading/courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/influencing-and-persuading/edit-courses"]');
        this.echo('Clicked in Influencing and persuading/Reorder');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/influencing-and-persuading/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/influencing-and-persuading"]');
        this.echo('Clicked in Influencing and persuading/Home');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/influencing-and-persuading/home');
    });

    casper.thenOpen('/uk/list-of-classrooms', function() {
        this.echo('⌚ Opened Aulas');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/innovation"]');
        this.echo('Clicked in Innovation');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/innovation/expert-corner"]');
        this.echo('Clicked in Innovation/Expert blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/innovation/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/innovation/collaborative"]');
        this.echo('Clicked in Innovation/Collaborative blog');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/innovation/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/innovation/courses"]');
        this.echo('Clicked in Innovation/Courses');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/innovation/courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/innovation/edit-courses"]');
        this.echo('Clicked in Innovation/Reorder');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/innovation/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/uk/studyrooms/innovation"]');
        this.echo('Clicked in Innovation/Home');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/innovation/home');
    });

    casper.then(function() {
        casper.click('a[href="/uk/user/logout"]');
        this.echo('⌚ Log out....');
    });

    casper.run(function() {
        test.done();
    });

});