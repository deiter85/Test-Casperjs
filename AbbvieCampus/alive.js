casper.test.begin('Campus Abbvie - User', 4, function suite(test){
  
  casper.start();

  casper.thenOpen('/es/user', function() {
    test.assertHttpStatus(200, 'Homepage was loaded successfully.');
  });
  
  casper.then(function(){
    test.assertExists('form#user-login', 'Login form is present.');
  });

  casper.thenOpen('/uk/user', function() {
    test.assertHttpStatus(200, 'Homepage was loaded successfully.');
  });
  
  casper.then(function(){
    test.assertExists('form#user-login', 'Login form is present.');
  });
  
  casper.run(function() {
    test.done();    
  });

});