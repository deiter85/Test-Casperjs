casper.test.begin('Tests homepage and request new password page structure', 4, function suite(test) {
  casper.start('http://abbvie-wec.dev.aspgems.com/user', function() {
    test.assertHttpStatus(200, 'Homepage was loaded successfully.');
  });
  casper.then(function(){
    test.assertExists('form#user-login', 'Login form is present.');
  });
  casper.then(function(){
    this.echo('Clicked in Request new password')
    casper.click("a[href='/user/password']");
  });
  casper.wait(750, function() {});
  casper.then(function(){
    test.assertHttpStatus(200, 'Request new password page was loaded successfully.');
  });
  casper.then(function(){
    test.assertExists('form#user-pass', 'Request new password form is present.');
  });
  casper.run(function() {
    test.done();
  });
});