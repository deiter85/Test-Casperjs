casper.test.begin('Comprobar pagina ASPgems - Test4 - Pagina Principal', 7, function suite(test) {
    
  casper.start('http://aspgems.com/', function() {
    test.assertResourceExists('logo.png', 'Se encuentra el Logo'); //comprueba si esta el logo
    test.assertResourceExists('bannersintexto.jpg?itok=b6rNsEI2', 'Se encuentra la imagen'); //comprueba si esta la imagen de la pagina principal
    test.assertExists('.twitter-icon', 'Se encuentra el icono de twitter'); //comprueba si esta el icono de twitter
    test.assertExists('.rss-icon', 'Se encuentra el icono de rss'); //comprueba si esta el icono de rss
    test.assertExists('header.clearfix', 'Se encuentra el header'); // comprueba el header
    test.assertExists('footer.clearfix', 'Se encuentra el footer'); // comprueba el footer
    test.assertExists('.mosca', 'Se encuentra volver arriba'); //comprueba volver arriba
  });
   
  casper.run(function() {
    casper.echo("Test finalizado"); //mensaje
    test.done();
  });

});