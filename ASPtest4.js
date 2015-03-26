casper.test.begin('Comprobar pagina ASPgems - Test4', 6, function suite(test) {
    
  casper.start('http://aspgems.com/', function() {
    test.assertResourceExists('logo.png');
    test.assertResourceExists('bannersintexto.jpg?itok=b6rNsEI2');
    test.assertExists('.twitter-icon');
    test.assertExists('.rss-icon');
    test.assertExists('header.clearfix');
    test.assertExists('footer.clearfix');
  });
   
  casper.run(function() {
    casper.echo("Test finalizado"); //mensaje
    test.done();
  });

});

