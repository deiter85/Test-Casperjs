casper.test.begin('Campus Abbvie - User', 4, function suite(test){
  
  casper.start('https://abbvie-wec.dev.aspgems.com/uk/user', function(){
    test.assertHttpStatus(200, 'Homepage was loaded successfully.');
  });
  
  casper.then(function(){
    test.assertExists('form#user-login', 'Login form is present.');
  });
  
  casper.then(function(){
    casper.click('a[href="/uk/user/password"]');
    this.echo('Clicked in Request new password');
  });
  
  casper.wait(500, function() {});
  
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