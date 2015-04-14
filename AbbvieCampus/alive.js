casper.test.begin('Tests homepage and request new password page structure', 4, function suite(test) {
  casper.start('http://www.campusabbvie.com/user', function() {
    test.assertTitle('Inicio de sesión | AbbVie');
    test.assertHttpStatus(200, 'Homepage was loaded successfully.');
    test.assertExists('form#user-login', 'Login form is present.');
  });
  casper.then(function(){
    test.assertExists('header.clearfix'); // comprueba el header
  });
  casper.then(function(){
    this.echo('Clicked in SOLICITAR UNA CONTRASEÑA')
    casper.click("a[href='/user/password']"); //hacer click en un hipervinculo
  });
  casper.wait(1000, function() {});
  casper.then(function(){
    test.assertTitle('Solicitar una contraseña | AbbVie'); 
    test.assertHttpStatus(200, 'Request new password page was loaded successfully.');
    test.assertExists('form#user-pass', 'Request new password form is present.');
  });
  casper.run(function() {
    test.done();
  });
});