var x = require('casper').selectXPath;

casper.test.begin('Comprobar pagina ASPgems - Test4 - Pagina Principal', 16, function suite(test) {
    
    casper.start('https://aspgems.com/', function() {
        test.assertResourceExists('logo.png', 'Se encuentra el Logo'); //comprueba si esta el logo
        test.assertResourceExists('bannersintexto.jpg?itok=b6rNsEI2', 'Se encuentra la imagen'); //comprueba si esta la imagen de la pagina principal
        test.assertExists('.twitter-icon', 'Se encuentra el icono de twitter'); //comprueba si esta el icono de twitter
        test.assertExists('.rss-icon', 'Se encuentra el icono de rss'); //comprueba si esta el icono de rss
        test.assertExists('header.clearfix', 'Se encuentra el header'); // comprueba el header
        test.assertExists('footer.clearfix', 'Se encuentra el footer'); // comprueba el footer
        test.assertExists('.mosca', 'Se encuentra volver arriba'); //comprueba volver arriba
        test.assertExists(x('//article[@id="block-views-what-we-do-block"]/h2[@class="block-title"]'), 'Se encuentra que hacemos...'); //comprobar que hacemos..
        test.assertExists(x('//article[@id="block-views-what-we-do-block"]/div/div[@class="view-header"]'), 'Se encuentra subtitulo de que hacemos...'); //comprobar subtitulos que hacemos...
        test.assertExists(x('//article[@id="block-views-what-we-do-block"]/div/div[@class="view-content"]'), 'Se encuentra lista de tipos'); //comprobar lista de tipos
        test.assertExists(x('//article[@id="block-views-company-logos-block"]/h2[@class="block-title"]'), 'Se encuentra trabajamos para...'); //comprobar trabajamos para...
        test.assertExists(x('//article[@id="block-views-company-logos-block"]/div/div[@class="view-content"]'), 'Se encuentra lista de logos'); //comprobar lista de logos
        test.assertExists(x('//section[@id="block-views-testimonials-block"]/h2[@class="block-title"]'), 'Se encuentra que dicen de nosotros...'); //comprobar que dicen de nosotros...
        test.assertExists(x('//section[@id="block-views-testimonials-block"]/div/div[@class="view-content"]'), 'Se encuentra lista de testimonios'); //comprobar lista de testimonios
        test.assertExists(x('//*[@class="footer-left"]'), 'Se encuentra footer left'); //comprobar footer left
        test.assertExists(x('//*[@class="footer-right"]'), 'Se encuentra footer right'); //comprobar footer right
    });
   
    casper.run(function() {
        casper.echo("Test finalizado"); //mensaje
        test.done();
    });

});