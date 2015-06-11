var x = require('casper').selectXPath;

casper.test.begin('Comprobar pagina ASPgems - Test1 - Pagina Principal', 20, function suite(test) {    
    casper.start();
    casper.thenOpen('/', function() {
        test.assertExists('.twitter-icon', 'Se encuentra el icono de twitter'); //comprueba si esta el icono de twitter
    });
    casper.then(function(){
        test.assertExists('.rss-icon', 'Se encuentra el icono de rss'); //comprueba si esta el icono de rss
    });
    casper.then(function(){
        test.assertExists('header.clearfix', 'Se encuentra header'); // comprueba el header
    });
    casper.then(function(){
        test.assertExists('footer.clearfix', 'Se encuentra footer'); // comprueba el footer
    });
    casper.then(function(){
        test.assertExists('.mosca', 'Se encuentra volver arriba'); //comprueba volver arriba
    });
    casper.then(function(){
        test.assertExists(x('//*[@id="block-views-what-we-do-block"]/h2[@class="block-title"]'), 'Se encuentra que hacemos...'); //comprobar que hacemos..
    });
    casper.then(function(){
        test.assertExists(x('//*[@id="block-views-what-we-do-block"]/div/div[@class="view-header"]'), 'Se encuentra subtitulo de que hacemos...'); //comprobar subtitulos que hacemos...
    });
    casper.then(function(){
        test.assertExists(x('//*[@id="block-views-what-we-do-block"]/div/div[@class="view-content"]'), 'Se encuentra lista de tipos'); //comprobar lista de tipos
    });
    casper.then(function(){
        test.assertExists(x('//*[@id="block-views-company-logos-block"]/h2[@class="block-title"]'), 'Se encuentra trabajamos para...'); //comprobar trabajamos para...
    });
    casper.then(function(){
        test.assertExists(x('//*[@id="block-views-company-logos-block"]/div/div[@class="view-content"]'), 'Se encuentra lista de logos'); //comprobar lista de logos
    });
    casper.then(function(){
        test.assertExists(x('//section[@id="block-views-testimonials-block"]/h2[@class="block-title"]'), 'Se encuentra que dicen de nosotros...'); //comprobar que dicen de nosotros...
    });
    casper.then(function(){
        test.assertExists(x('//section[@id="block-views-testimonials-block"]/div/div[@class="view-content"]'), 'Se encuentra lista de testimonios'); //comprobar lista de testimonios
    });
    casper.then(function(){
        test.assertExists(x('//*[@class="footer-logo"]'), 'Se encuentra footer logo'); //comprobar footer logo
    });
    casper.then(function(){
        test.assertExists(x('//*[@class="idiomas"]'), 'Se encuentra enlaces a rss y twitter'); //comprobar enlaces a rss y twitter
    });
    casper.then(function(){
        test.assertExists(x('//*[@id="menu-bar"]'), 'Se encuentra menu-bar'); //comprobar menu-bar
    });
    casper.then(function(){
        test.assertExists(x('//a[@class="language-link"]'), 'Se encuentra language-link'); //comprobar link a ingles
    });
    casper.then(function(){
        test.assertExists(x('//*[@class="form-item form-type-textfield form-item-custom-search-blocks-form-1"]'), 'Se encuentra buscar'); //comprobar buscar
    });
    casper.then(function(){
        test.assertExists(x('//*[@class="menu-footer"]'), 'Se encuentra menu-footer'); //comprobar menu-footer
    });
    casper.then(function(){
        test.assertExists(x('//*[@class="site-logo image-style-none"]'), 'Se encuentra el Logo'); //comprueba si esta el logo
    });
    casper.then(function(){
        test.assertExists(x('//*[@class="image-style-banner-home"]'), 'Se encuentra la imagen principal'); //comprueba si esta la imagen de la pagina principal
    });
    casper.run(function() {
        casper.echo("Test finalizado"); //mensaje
        test.done();
    });
});