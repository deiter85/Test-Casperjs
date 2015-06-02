casper.test.begin('Campus Abbvie ES - Test17 - Aulas (Parte 3)', 50, function suite(test) {   
    
    casper.start();

    casper.thenOpen('/es', function() {});

    casper.then(function(){
        casper.click('a[href="/es/list-of-classrooms"]');
        this.echo('Clicked in Aulas');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/biosimilares"]');
        this.echo('Clicked in Biosimilares');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/biosimilares/expert-corner"]');
        this.echo('Clicked in Biosimilares/Blog del experto');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/biosimilares/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/biosimilares/collaborative"]');
        this.echo('Clicked in Biosimilares/Blog colaborativos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/biosimilares/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/biosimilares/courses"]');
        this.echo('Clicked in Biosimilares/Cursos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/biosimilares/courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/biosimilares/edit-courses"]');
        this.echo('Clicked in Biosimilares/Ordenar');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/biosimilares/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/biosimilares"]');
        this.echo('Clicked in Biosimilares/Inicio');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/biosimilares/home');
    });

    casper.thenOpen('/es/list-of-classrooms', function() {
        this.echo('⌚ Opened Aulas');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/competencias"]');
        this.echo('Clicked in Competencias');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/competencias/expert-corner"]');
        this.echo('Clicked in Competencias/Blog del experto');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/competencias/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/competencias/collaborative"]');
        this.echo('Clicked in Competencias/Blog colaborativos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/competencias/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/competencias/courses"]');
        this.echo('Clicked in Competencias/Cursos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/competencias/courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/competencias/edit-courses"]');
        this.echo('Clicked in Competencias/Ordenar');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/competencias/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/competencias"]');
        this.echo('Clicked in Competencias/Inicio');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/competencias/home');
    });

    casper.thenOpen('/es/list-of-classrooms', function() {
        this.echo('⌚ Opened Aulas');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/digital"]');
        this.echo('Clicked in Digital');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/digital/expert-corner"]');
        this.echo('Clicked in Digital/Blog del experto');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/digital/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/digital/collaborative"]');
        this.echo('Clicked in Digital/Blog colaborativos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/digital/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/digital/courses"]');
        this.echo('Clicked in Digital/Cursos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/digital/courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/digital/edit-courses"]');
        this.echo('Clicked in Digital/Ordenar');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/digital/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/digital"]');
        this.echo('Clicked in Digital/Inicio');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/digital/home');
    });

    casper.thenOpen('/es/list-of-classrooms', function() {
        this.echo('⌚ Opened Aulas');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/formacion"]');
        this.echo('Clicked in Formacion');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/formacion/expert-corner"]');
        this.echo('Clicked in Formacion/Blog del experto');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/formacion/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/formacion/collaborative"]');
        this.echo('Clicked in Formacion/Blog colaborativos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/formacion/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/formacion/courses"]');
        this.echo('Clicked in Formacion/Cursos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/formacion/courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/formacion/edit-courses"]');
        this.echo('Clicked in Formacion/Ordenar');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/formacion/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/formacion"]');
        this.echo('Clicked in Formacion/Inicio');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/formacion/home');
    });

    casper.thenOpen('/es/list-of-classrooms', function() {
        this.echo('⌚ Opened Aulas');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/gestion-sanitaria"]');
        this.echo('Clicked in Gestion sanitaria');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/gestion-sanitaria/expert-corner"]');
        this.echo('Clicked in Gestion sanitaria/Blog del experto');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/gestion-sanitaria/expert-corner');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/gestion-sanitaria/collaborative"]');
        this.echo('Clicked in Gestion sanitaria/Blog colaborativos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/gestion-sanitaria/collaborative');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/gestion-sanitaria/courses"]');
        this.echo('Clicked in Gestion sanitaria/Cursos');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/gestion-sanitaria/courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/gestion-sanitaria/edit-courses"]');
        this.echo('Clicked in Gestion sanitaria/Ordenar');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/gestion-sanitaria/edit-courses');
    });

    casper.then(function(){
        casper.click('a[href="/es/studyrooms/gestion-sanitaria"]');
        this.echo('Clicked in Gestion sanitaria/Inicio');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/studyrooms/gestion-sanitaria/home');
    });

    casper.run(function() {
        test.done();
    });

});