/**
 * Homepage tests.
 *
 * These tests make some assertions on a Drupal vanilla installation.
 * Feel free to change them to suit your needs.
 */

casper.test.begin('Campus Abbvie - User', 6, function suite(test) {
  
  casper.start();
  
  casper.thenOpen('/user', function() {
    test.assertHttpStatus(200, 'Homepage was loaded successfully.');
  });
  
  casper.then(function(){
    test.assertExists('form#user-login', 'Login form is present.');
  });
  
  casper.then(function(){
    casper.click("a[href='/user/password']");
    this.echo('Clicked in Request new password');
  });
  
  casper.wait(750, function() {});
  
  casper.then(function(){
    test.assertHttpStatus(200, 'Request new password page was loaded successfully.');
  });
  
  casper.then(function(){
    test.assertExists('form#user-pass', 'Request new password form is present.');
  });

  casper.then(function(){
    casper.click("a[href='/user/register']");
    this.echo('Clicked in Create new account');
  });
  
  casper.wait(750, function() {});
  
  casper.then(function(){
    test.assertHttpStatus(200, 'Create new account page was loaded successfully.');
  });
  
  casper.then(function(){
    test.assertExists('form#user-register-form', 'Create new account form is present.');
  });
  
  casper.run(function() {
    test.done();
  });

});