/**
 * Homepage tests.
 *
 * These tests make some assertions on a Drupal vanilla installation.
 * Feel free to change them to suit your needs.
 */

casper.test.begin('Tests homepage and request new password page structure', 4, function suite(test) {
  casper.start();
  casper.thenOpen('/user', function() {
    test.assertHttpStatus(200, 'Homepage was loaded successfully.');
    test.assertExists('form#user-login', 'Login form is present.');
  });
  casper.thenOpen('/user/password', function() {
  	test.assertHttpStatus(200, 'Request new password page was loaded successfully.');
    test.assertExists('form#user-pass', 'Request new password form is present.');
  });
  casper.run(function() {
    test.done();
  });
});