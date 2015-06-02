casper.test.begin('Campus Abbvie ES - Test15 - Aulas (Parte 1)', 60, function suite(test) {   
    
    casper.start();

    casper.thenOpen('/es', function() {});

    casper.then(function(){
        casper.click('a[href="/es/list-of-classrooms"]');
        this.echo('Clicked in Studyroom');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/abbvie-care"]');
        this.echo('Clicked in Abbvie care');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/abbvie-care/expert-corner"]');
        this.echo('Clicked in Abbvie care/Blog del experto');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/abbvie-care/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/abbvie-care/collaborative"]');
        this.echo('Clicked in Abbvie care/Blog colaborativos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/abbvie-care/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/abbvie-care/courses"]');
        this.echo('Clicked in Abbvie care/Cursos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/abbvie-care/courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/abbvie-care/edit-courses"]');
        this.echo('Clicked in Abbvie care/Ordenar');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/abbvie-care/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/abbvie-care"]');
        this.echo('Clicked in Abbvie care/Inicio');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/abbvie-care/home');
    });

    casper.thenOpen('/es/list-of-classrooms', function() {
        this.echo('⌚ Opened Aulas');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/analisis-de-negocio"]');
        this.echo('Clicked in Analisis de negocio');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/analisis-de-negocio/expert-corner"]');
        this.echo('Clicked in Analisis de negocio/Blog del experto');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/analisis-de-negocio/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/analisis-de-negocio/collaborative"]');
        this.echo('Clicked in Analisis de negocio/Blog colaborativos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/analisis-de-negocio/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/analisis-de-negocio/courses"]');
        this.echo('Clicked in Analisis de negocio/Cursos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/analisis-de-negocio/courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/analisis-de-negocio/edit-courses"]');
        this.echo('Clicked in Analisis de negocio/Ordenar');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/analisis-de-negocio/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/analisis-de-negocio"]');
        this.echo('Clicked in Analisis de negocio/Inicio');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/analisis-de-negocio/home');
    });

    casper.thenOpen('/es/list-of-classrooms', function() {
        this.echo('⌚ Opened Aulas');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/community-relations"]');
        this.echo('Clicked in Community relations');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/community-relations/expert-corner"]');
        this.echo('Clicked in Community relations/Blog del experto');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/community-relations/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/community-relations/collaborative"]');
        this.echo('Clicked in Community relations/Blog colaborativos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/community-relations/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/community-relations/courses"]');
        this.echo('Clicked in Community relations/Cursos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/community-relations/courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/community-relations/edit-courses"]');
        this.echo('Clicked in Community relations/Ordenar');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/community-relations/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/community-relations"]');
        this.echo('Clicked in Community relations/Inicio');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/community-relations/home');
    });

    casper.thenOpen('/es/list-of-classrooms', function() {
        this.echo('⌚ Opened Aulas');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/compliance"]');
        this.echo('Clicked in Compliance');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/compliance/expert-corner"]');
        this.echo('Clicked in Compliance/Blog del experto');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/compliance/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/compliance/collaborative"]');
        this.echo('Clicked in Compliance/Blog colaborativos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/compliance/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/compliance/courses"]');
        this.echo('Clicked in Compliance/Cursos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/compliance/courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/compliance/edit-courses"]');
        this.echo('Clicked in Compliance/Ordenar');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/compliance/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/compliance"]');
        this.echo('Clicked in Compliance/Inicio');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/compliance/home');
    });

    casper.thenOpen('/es/list-of-classrooms', function() {
        this.echo('⌚ Opened Aulas');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/finanzas"]');
        this.echo('Clicked in Finanzas');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/finanzas/expert-corner"]');
        this.echo('Clicked in Finanzas/Blog del experto');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/finanzas/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/finanzas/collaborative"]');
        this.echo('Clicked in Finanzas/Blog colaborativos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/finanzas/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/finanzas/courses"]');
        this.echo('Clicked in Finanzas/Cursos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/finanzas/courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/finanzas/edit-courses"]');
        this.echo('Clicked in Finanzas/Ordenar');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/finanzas/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/finanzas"]');
        this.echo('Clicked in Finanzas/Inicio');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/finanzas/home');
    });

    casper.thenOpen('/es/list-of-classrooms', function() {
        this.echo('⌚ Opened Aulas');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/futurefit-20"]');
        this.echo('Clicked in Futurefit 2.0');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/futurefit-20/expert-corner"]');
        this.echo('Clicked in Futurefit 2.0/Blog del experto');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/futurefit-20/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/futurefit-20/collaborative"]');
        this.echo('Clicked in Futurefit 2.0/Blog colaborativos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/futurefit-20/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/futurefit-20/courses"]');
        this.echo('Clicked in Futurefit 2.0/Cursos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/futurefit-20/courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/futurefit-20/edit-courses"]');
        this.echo('Clicked in Futurefit 2.0/Ordenar');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/futurefit-20/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/futurefit-20"]');
        this.echo('Clicked in Futurefit 2.0/Inicio');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/futurefit-20/home');
    });

    casper.run(function() {
        test.done();
    });

});