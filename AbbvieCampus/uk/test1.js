var userName = ****;
var password = ****;

casper.test.begin('Campus Abbvie UK - Test1 - Menu Control Homepage', 51, function suite(test) {

  casper.start('https://abbviecampus.com/uk/user', function() {
    this.echo('⌚ Logging in....');
    this.fill('form#user-login', {
      	'name': userName,
      	'pass': password
    }, true);
    this.echo('Homepage was loaded successfully.');
  });

  casper.wait(500, function() {});

  casper.then(function() {
    test.assertTitle('AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk');
  });

  casper.then(function() {
    casper.click('a[href="/uk/catalogue"]');
    this.echo('Clicked in Catalogue');
  });

  casper.then(function() {
    test.assertTitle('Catalogue of courses | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/catalogue');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/list-of-classrooms"]');
    this.echo('Clicked in Studyrooms');
  });

  casper.then(function() {
    test.assertTitle('Studyroom | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/list-of-classrooms');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/forum/400"]');
    this.echo('Clicked in Forums');
  });

  casper.then(function() {
    test.assertTitle('Studyrooms | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/forum');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/course/lyndacom-free-online-training"]');
    this.echo('Clicked in LYNDA:COM');
  });

  casper.then(function() {
    test.assertTitle('lynda.com - free online training | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/course/lyndacom-free-online-training');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/my-training"]');
    this.echo('Clicked in My training');
  });

  casper.then(function() {
    test.assertTitle('My training | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/my-training');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/point-program"][class=sf-depth-2]');
    this.echo('Clicked in Rewards/Information');
  });

  casper.then(function() {
    test.assertTitle('Point program | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/point-program');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/redeem-your-user-points"]');
    this.echo('Clicked in Rewards/My points');
  });

  casper.then(function() {
    test.assertTitle('Redeem your userpoints | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/redeem-your-user-points');
  });

  casper.back();

/***********************************************************************************************************************************
***********************************************************************************************************************************/

  casper.then(function() {
    casper.click('a[href="/uk/annual-training"]');
    this.echo('Clicked in Annual training');
  });

  casper.then(function() {
    test.assertTitle('Annual training | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/annual-training');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/news"]');
    this.echo('Clicked in News');
  });

  casper.then(function() {
    test.assertTitle('News | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/news');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/links"]');
    this.echo('Clicked in Links');
  });

  casper.then(function() {
    test.assertTitle('Links | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/links');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/help"]');
    this.echo('Clicked in Help');
  });

  casper.then(function() {
    test.assertTitle('Help | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/help');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/wiki"]');
    this.echo('Clicked in Wiki');
  });

  casper.then(function() {
    test.assertTitle('Wiki terms | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/wiki');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/contacts"]');
    this.echo('Clicked in Contacts');
  });

  casper.then(function() {
    test.assertTitle('Contacts | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/contacts');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/faqs"]');
    this.echo('Clicked in FAQS');
  });

  casper.then(function() {
    test.assertTitle('FAQs | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/faqs');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/suggestions"]');
    this.echo('Clicked in Sugerencias');
  });

  casper.then(function() {
    test.assertTitle('suggestions | AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/suggestions');
  });

  casper.then(function() {
    casper.click('a[href="/uk/"]');
    this.echo('Clicked in Home');
  });

  casper.then(function() {
    test.assertTitle('AbbVie');
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/');
  });

  casper.then(function() {
    casper.click('a[href="/uk/user/logout"]');
    this.echo('⌚ Log out....');
  });

  casper.run(function() {
    test.done();
  });

});