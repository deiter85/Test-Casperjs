var x = require('casper').selectXPath;
var userName = ****;
var password = ****;

casper.test.begin('Campus Abbvie ES - Test5 - Itinerarios Formativos y Mi Formacion', 18, function suite(test) {
	
    casper.start('https://abbviecampus.com/es/user', function() {
        this.echo('⌚ Logging in....');
        this.fill('form#user-login', {
            'name': userName,
            'pass': password
        }, true);
        this.echo('Homepage was loaded successfully.');
    });

    casper.wait(500, function() {});

    casper.then(function(){
        casper.click('a[href="/es/schedule-course-list"]');
        this.echo('Clicked in Itinerarios formativos');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITULO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="page-header"]'), 'Find an element matching: TEXTO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="position-selector"]'), 'Find an element matching: FORMULARIO DE BUSQUEDA');
    });

    casper.then(function() {
        test.assertNotVisible(x('//*[@class="percentages"]'), 'Selector is not visible: CUADRO PORCENTAJE');
    });

    casper.then(function() {
        test.assertNotVisible(x('//*[@id="print-area"]'), 'Selector is not visible: LISTA DE RESULTADOS');
    });

    casper.then(function(){
        this.fill('form#position-selector', {
            'posicitions': '2697',
        }, true);
        this.echo('Clicked in Mostrar itinerario');
    });

    casper.wait(50, function() {});

    casper.then(function() {
        test.assertExists(x('//*[@class="percentages"]'), 'Find an element matching: CUADRO PORCENTAJE');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="print-area"]'), 'Find an element matching: LISTA DE RESULTADOS');
    });

    casper.then(function() {
        test.assertVisible(x('//*[@class="percentages"]'), 'Selector is visible: CUADRO PORCENTAJE');
    });

    casper.then(function() {
        test.assertVisible(x('//*[@id="print-area"]'), 'Selector is visible: LISTA DE RESULTADOS');
    });

    casper.then(function(){
        casper.click('a[href="/es/my-training"]');
        this.echo('Clicked in Mi formacion');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITULO');
    });

    casper.then(function() {
        test.assertExists(x('//div[@id="block-system-main"]/div/div[@class="view-header"]'), 'Find an element matching: TEXTO Y CUADRO PENDIENTES');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="mytrainingtabs"]'), 'Find an element matching: CUADRO TIPOS CURSOS');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="pending"]'), 'Find an element matching: TITULO PENDIENTES');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="recommend"]'), 'Find an element matching: TITULO RECOMENDADOS');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="completed"]'), 'Find an element matching: TITULO COMPLETADOS');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="block-views-my-training-block-3"]'), 'Find an element matching: CUADRO RECOMENDADOS');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="block-views-historico-block"]'), 'Find an element matching: CUADRO COMPLETADOS');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="views-table cols-3"]'), 'Find an element matching: TABLA CUADRO COMPLETADOS');
    });
    
    casper.then(function() {
        casper.click('a[href="/es/user/logout"]');
        this.echo('⌚ Log out....');
    });

    casper.run(function() {
        test.done();
    });

});