var x = require('casper').selectXPath;

casper.test.begin('Comprobar pagina ASPgems - Test13 - Presupuesto-Aplicacion Web', 8, function suite(test) {
    
  casper.start('https://aspgems.com/', function() {
  	casper.click("a[href='/presupuesto']"); //hacer click en presupuesto
  });

  casper.then(function() {
    casper.click("a[href='/presupuesto/aplicacion-web-completa']"); //hacer click en etiquetas ver todas
  });

  casper.then(function() {		
    test.assertUrlMatch('https://aspgems.com/presupuesto/aplicacion-web-completa', 'Direccion URL correcta'); //comprobar la direccion URL
  	test.assertTitle('Aplicación web completa | ASPgems Soluciones Ágiles', 'Titulo --> ' + this.getTitle()); //comprobar el titulo de la pagina
  	test.assertExists(x('//*[@id="page-title"]'), 'the element exists page-title'); //comprobar el titulo
  	test.assertExists(x('//a[@title="Volver a presupuestos" and @href="/presupuesto"]'), 'the element exists link-budget'); //comprobar link volver a presupuesto
   	test.assertExists(x('//*[@class="field field-name-field-project-type-description field-type-text-with-summary field-label-hidden view-mode-full"]'), 'the element exists field field-name-field-project-type-description field-type-text-with-summary field-label-hidden view-mode-full'); //comprobar texto de la pagina
    test.assertExists(x('//*[@class="field field-name-field-project-type-range field-type-image field-label-above view-mode-full"]'), 'the element exists field field-name-field-project-type-range field-type-image field-label-above view-mode-full'); //comprobar cuadro rango de precio            
    test.assertExists(x('//*[@class="field field-name-field-project-type-time-range field-type-image field-label-above view-mode-full"]'), 'the element exists field field-name-field-project-type-time-range field-type-image field-label-above view-mode-full'); //comprobar cuadro rango de tiempo
    test.assertExists(x('//*[@id="block-webform-client-block-1100"]'), 'the element exists block-webform-client-block-1100'); //comprobar formulario Solicitar presupuesto
  });

  casper.run(function() {
  	casper.echo("Test finalizado"); //mensaje
  	test.done();
  });

});