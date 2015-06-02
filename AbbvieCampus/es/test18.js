casper.test.begin('Campus Abbvie ES - Test18 - Aulas (Parte 4)', 50, function suite(test) {   
    
    casper.start();

    casper.thenOpen('/es', function() {});

    casper.then(function(){
        casper.click('a[href="/es/list-of-classrooms"]');
        this.echo('Clicked in Studyroom');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/innovacion"]');
        this.echo('Clicked in Innovacion');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/innovacion/expert-corner"]');
        this.echo('Clicked in Innovacion/Blog del experto');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/innovacion/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/innovacion/collaborative"]');
        this.echo('Clicked in Innovacion/Blog colaborativos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/innovacion/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/innovacion/courses"]');
        this.echo('Clicked in Innovacion/Cursos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/innovacion/courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/innovacion/edit-courses"]');
        this.echo('Clicked in Innovacion/Ordenar');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/innovacion/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/innovacion"]');
        this.echo('Clicked in Innovacion/Inicio');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/innovacion/home');
    });

    casper.thenOpen('/es/list-of-classrooms', function() {
        this.echo('⌚ Opened Studyroom');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/marketing"]');
        this.echo('Clicked in Marketing');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/marketing/expert-corner"]');
        this.echo('Clicked in Marketing/Blog del experto');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/marketing/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/marketing/collaborative"]');
        this.echo('Clicked in Marketing/Blog colaborativos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/marketing/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/marketing/courses"]');
        this.echo('Clicked in Marketing/Cursos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/marketing/courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/marketing/edit-courses"]');
        this.echo('Clicked in Marketing/Ordenar');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/marketing/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/marketing"]');
        this.echo('Clicked in Marketing/Inicio');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/marketing/home');
    });

    casper.thenOpen('/es/list-of-classrooms', function() {
        this.echo('⌚ Opened Studyroom');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/on-boarding"]');
        this.echo('Clicked in On boarding');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/on-boarding/expert-corner"]');
        this.echo('Clicked in On boarding/Blog del experto');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/on-boarding/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/on-boarding/collaborative"]');
        this.echo('Clicked in On boarding/Blog colaborativos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/on-boarding/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/on-boarding/courses"]');
        this.echo('Clicked in On boarding/Cursos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/on-boarding/courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/on-boarding/edit-courses"]');
        this.echo('Clicked in On boarding/Ordenar');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/on-boarding/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/on-boarding"]');
        this.echo('Clicked in On boarding/Inicio');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/on-boarding/home');
    });

    casper.thenOpen('/es/list-of-classrooms', function() {
        this.echo('⌚ Opened Studyroom');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/regulacion-y-financiacion"]');
        this.echo('Clicked in Regulacion y financiacion');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/regulacion-y-financiacion/expert-corner"]');
        this.echo('Clicked in Regulacion y financiacion/Blog del experto');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/regulacion-y-financiacion/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/regulacion-y-financiacion/collaborative"]');
        this.echo('Clicked in Regulacion y financiacion/Blog colaborativos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/regulacion-y-financiacion/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/regulacion-y-financiacion/courses"]');
        this.echo('Clicked in Regulacion y financiacion/Cursos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/regulacion-y-financiacion/courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/regulacion-y-financiacion/edit-courses"]');
        this.echo('Clicked in Regulacion y financiacion/Ordenar');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/regulacion-y-financiacion/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/regulacion-y-financiacion"]');
        this.echo('Clicked in Regulacion y financiacion/Inicio');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/regulacion-y-financiacion/home');
    });

    casper.thenOpen('/es/list-of-classrooms', function() {
        this.echo('⌚ Opened Studyroom');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/ventas"]');
        this.echo('Clicked in Ventas');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/ventas/expert-corner"]');
        this.echo('Clicked in Ventas/Blog del experto');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/ventas/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/ventas/collaborative"]');
        this.echo('Clicked in Ventas/Blog colaborativos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/ventas/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/ventas/courses"]');
        this.echo('Clicked in Ventas/Cursos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/ventas/courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/ventas/edit-courses"]');
        this.echo('Clicked in Ventas/Ordenar');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/ventas/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/ventas"]');
        this.echo('Clicked in Ventas/Inicio');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/ventas/home');
    });

    casper.run(function() {
        test.done();
    });

});