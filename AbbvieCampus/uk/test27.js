casper.test.begin('Campus Abbvie UK - Test27 - Studyrooms', 50, function suite(test) {

  casper.start();

  casper.thenOpen('/uk', function() {});

  casper.then(function() {
    casper.click('a[href="/uk/list-of-classrooms"]');
    this.echo('Clicked in Studyrooms');
  });

  casper.then(function() {
    casper.click('a[href="/uk/studyrooms/abbvie-academy"]');
    this.echo('Clicked in Abbvie academy');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/abbvie-academy/home');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/studyrooms/abbvie-way"]');
    this.echo('Clicked in Abbvie way');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/abbvie-way/home');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/studyrooms/abpi-and-pv"]');
    this.echo('Clicked in Abpi and pv');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/abpi-and-pv/home');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/studyrooms/biotherapeutics"]');
    this.echo('Clicked in Biotherapeutics');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/biotherapeutics/home');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/studyrooms/brand-planning"]');
    this.echo('Clicked in Brand-planning');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/brand-planning/home');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/studyrooms/business-skills"]');
    this.echo('Clicked in Business skills');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/business-skills/home');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/studyrooms/closed-loop-model-clm"]');
    this.echo('Clicked in Closed loop model clm');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/closed-loop-model-clm/home');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/studyrooms/coaching"]');
    this.echo('Clicked in Coaching');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/coaching/home');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/studyrooms/hr"]');
    this.echo('Clicked in Hr');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/hr/home');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/studyrooms/impact-scheme"]');
    this.echo('Clicked in Impact scheme');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/impact-scheme/home');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/studyrooms/in-field-working"]');
    this.echo('Clicked in In field working');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/in-field-working/home');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/studyrooms/influencing-and-persuading"]');
    this.echo('Clicked in Influencing and persuading');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/influencing-and-persuading/home');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/studyrooms/innovation"]');
    this.echo('Clicked in Innovation');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/innovation/home');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/studyrooms/insights-discovery"]');
    this.echo('Clicked in Insights discovery');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/insights-discovery/home');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/studyrooms/leadership"]');
    this.echo('Clicked in Leadership');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/leadership/home');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/studyrooms/lynda-com-and-external-experts"]');
    this.echo('Clicked in Lynda com and external experts');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/lynda-com-and-external-experts/home');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/studyrooms/marketing-excellence"]');
    this.echo('Clicked in Marketing excellence');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/marketing-excellence/home');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/studyrooms/medical-and-clinical"]');
    this.echo('Clicked in Medical and clinical');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/medical-and-clinical/home');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/studyrooms/mentoring"]');
    this.echo('Clicked in Mentoring');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/mentoring/home');
  });

  casper.back();

  casper.then(function() {
    casper.click('a[href="/uk/studyrooms/patients-at-heart"]');
    this.echo('Clicked in Patients at heart');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/patients-at-heart/home');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/uk/studyrooms/personal-development']");
    this.echo('Clicked in Personal development');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/personal-development/home');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/uk/studyrooms/product-knowledge']");
    this.echo('Clicked in Product knowledge');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/product-knowledge/home');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/uk/studyrooms/systems-and-finance']");
    this.echo('Clicked in Systems and finance');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/systems-and-finance/home');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/uk/studyrooms/veeva-customer-relationship-management']");
    this.echo('Clicked in Veeva customer relationship management');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/veeva-customer-relationship-management/home');
  });

  casper.back();

  casper.then(function() {
    casper.click("a[href='/uk/studyrooms/zinc']");
    this.echo('Clicked in Zinc');
  });

  casper.then(function() {
    test.assertHttpStatus(200);
    test.assertUrlMatch('https://abbviecampus.com/uk/studyrooms/zinc/home');
  });

  casper.run(function() {
    test.done();
  });

});