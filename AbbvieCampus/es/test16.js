casper.test.begin('Campus Abbvie ES - Test16 - Aulas (Parte 2)', 60, function suite(test) {   
    
    casper.start();

    casper.thenOpen('/es', function() {});

    casper.then(function(){
        casper.click('a[href="/es/list-of-classrooms"]');
        this.echo('Clicked in Aulas');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/ingles"]');
        this.echo('Clicked in Ingles');
    });
   
    casper.then(function(){
        casper.click('a[href="/es/studyrooms/ingles/expert-corner"]');
        this.echo('Clicked in Ingles/Blog del experto');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/ingles/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/ingles/collaborative"]');
        this.echo('Clicked in Ingles/Blog colaborativos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/ingles/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/ingles/courses"]');
        this.echo('Clicked in Ingles/Cursos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/ingles/courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/ingles/edit-courses"]');
        this.echo('Clicked in Ingles/Ordenar');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/ingles/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/ingles"]');
        this.echo('Clicked in Ingles/Inicio');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/ingles/home');
    });

    casper.thenOpen('/es/list-of-classrooms', function() {
        this.echo('⌚ Opened Aulas');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/investigacion-clinica"]');
        this.echo('Clicked in Investigacion clinica');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/investigacion-clinica/expert-corner"]');
        this.echo('Clicked in Investigacion clinica/Blog del experto');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/investigacion-clinica/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/investigacion-clinica/collaborative"]');
        this.echo('Clicked in Investigacion clinica/Blog colaborativos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/investigacion-clinica/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/investigacion-clinica/courses"]');
        this.echo('Clicked in Investigacion clinica/Cursos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/investigacion-clinica/courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/investigacion-clinica/edit-courses"]');
        this.echo('Clicked in Investigacion clinica/Ordenar');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/investigacion-clinica/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/investigacion-clinica"]');
        this.echo('Clicked in Investigacion clinica/Inicio');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/investigacion-clinica/home');
    });

    casper.thenOpen('/es/list-of-classrooms', function() {
        this.echo('⌚ Opened Aulas');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/nuevas-tecnologias"]');
        this.echo('Clicked in Nuevas tecnologias');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/nuevas-tecnologias/expert-corner"]');
        this.echo('Clicked in Nuevas tecnologias/Blog del experto');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/nuevas-tecnologias/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/nuevas-tecnologias/collaborative"]');
        this.echo('Clicked in Nuevas tecnologias/Blog colaborativos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/nuevas-tecnologias/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/nuevas-tecnologias/courses"]');
        this.echo('Clicked in Nuevas tecnologias/Cursos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/nuevas-tecnologias/courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/nuevas-tecnologias/edit-courses"]');
        this.echo('Clicked in Nuevas tecnologias/Ordenar');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/nuevas-tecnologias/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/nuevas-tecnologias"]');
        this.echo('Clicked in Nuevas tecnologias/Inicio');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/nuevas-tecnologias/home');
    });

    casper.thenOpen('/es/list-of-classrooms', function() {
        this.echo('⌚ Opened Aulas');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/producto"]');
        this.echo('Clicked in Producto');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/producto/expert-corner"]');
        this.echo('Clicked in Producto/Blog del experto');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/producto/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/producto/collaborative"]');
        this.echo('Clicked in Producto/Blog colaborativos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/producto/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/producto/courses"]');
        this.echo('Clicked in Producto/Cursos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/producto/courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/producto/edit-courses"]');
        this.echo('Clicked in Producto/Ordenar');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/producto/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/producto"]');
        this.echo('Clicked in Producto/Inicio');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/producto/home');
    });

    casper.thenOpen('/es/list-of-classrooms', function() {
        this.echo('⌚ Opened Aulas');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/relaciones-institucionales"]');
        this.echo('Clicked in Relaciones institucionales');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/relaciones-institucionales/expert-corner"]');
        this.echo('Clicked in Relaciones institucionales/Blog del experto');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/relaciones-institucionales/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/relaciones-institucionales/collaborative"]');
        this.echo('Clicked in Relaciones institucionales/Blog colaborativos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/relaciones-institucionales/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/relaciones-institucionales/courses"]');
        this.echo('Clicked in Relaciones institucionales/Cursos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/relaciones-institucionales/courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/relaciones-institucionales/edit-courses"]');
        this.echo('Clicked in Relaciones institucionales/Ordenar');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/relaciones-institucionales/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/relaciones-institucionales"]');
        this.echo('Clicked in Relaciones institucionales/Inicio');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/relaciones-institucionales/home');
    });

    casper.thenOpen('/es/list-of-classrooms', function() {
        this.echo('⌚ Opened Aulas');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/abbvie-way"]');
        this.echo('Clicked in Abbvie way');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/abbvie-way/expert-corner"]');
        this.echo('Clicked in Abbvie way/Blog del experto');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/abbvie-way/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/abbvie-way/collaborative"]');
        this.echo('Clicked in Abbvie way/Blog colaborativos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/abbvie-way/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/abbvie-way/courses"]');
        this.echo('Clicked in Abbvie way/Cursos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/abbvie-way/courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/abbvie-way/edit-courses"]');
        this.echo('Clicked in Abbvie way/Ordenar');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/abbvie-way/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/abbvie-way"]');
        this.echo('Clicked in Abbvie way/Inicio');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/abbvie-way/home');
    });

    casper.run(function() {
        test.done();
    });

});