/*==============================================================================*/
/* Casper generated Thu Mar 26 2015 10:14:33 GMT+0100 (CET) */
/*==============================================================================*/

var x = require('casper').selectXPath;
casper.options.viewportSize = {width: 1280, height: 690};
casper.on('page.error', function(msg, trace) {
   this.echo('Error: ' + msg, 'ERROR');
   for(var i=0; i<trace.length; i++) {
       var step = trace[i];
       this.echo('   ' + step.file + ' (line ' + step.line + ')', 'ERROR');
   }
});
casper.test.begin('Resurrectio test', function(test) {
   casper.start('https://aspgems.com/');
   casper.waitForSelector(x("//a[normalize-space(text())='presupuesto']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='presupuesto']"));
           this.click(x("//a[normalize-space(text())='presupuesto']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='presupuesto']"));
   });
   casper.waitForSelector("h2",
       function success() {
           test.assertExists("h2");
           this.click("h2");
       },
       function fail() {
           test.assertExists("h2");
   });
   casper.waitForSelector(x("//*[contains(text(), \'¿No encuentras lo que buscas?\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \'¿No encuentras lo que buscas?\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \'¿No encuentras lo que buscas?\')]"));
   });

   casper.run(function() {test.done();});
});