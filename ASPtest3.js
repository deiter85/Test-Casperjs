/*==============================================================================*/
/* Casper generated Wed Mar 25 2015 05:28:17 GMT-0700 (PDT) */
/*==============================================================================*/

var x = require('casper').selectXPath;
casper.options.viewportSize = {width: 1535, height: 716};
casper.on('page.error', function(msg, trace) {
   this.echo('Error: ' + msg, 'ERROR');
   for(var i=0; i<trace.length; i++) {
       var step = trace[i];
       this.echo('   ' + step.file + ' (line ' + step.line + ')', 'ERROR');
   }
});
casper.test.begin('Resurrectio test ASPgems', 7, function(test) {
   casper.start('http://aspgems.com/');
   casper.waitForSelector(x("//*[contains(text(), \'qué hacemos...\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \'qué hacemos...\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \'qué hacemos...\')]"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())='servicios']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='servicios']"));
           this.click(x("//a[normalize-space(text())='servicios']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='servicios']"));
   });
   casper.waitForSelector(x("//*[contains(text(), \'servicios\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \'servicios\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \'servicios\')]"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())='equipo']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='equipo']"));
           this.click(x("//a[normalize-space(text())='equipo']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='equipo']"));
   });
   casper.waitForSelector(x("//*[contains(text(), \'equipo\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \'equipo\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \'equipo\')]"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())='contacto']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='contacto']"));
           this.click(x("//a[normalize-space(text())='contacto']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='contacto']"));
   });
   casper.waitForSelector(x("//*[contains(text(), \'contacto\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \'contacto\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \'contacto\')]"));
   });

   casper.run(function() {test.done();});
});
