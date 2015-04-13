var x = require('casper').selectXPath;

casper.test.begin('Comprobar pagina ASPgems - Test20 - Presupuesto-Web Contenidos', 8, function suite(test) {    
  	casper.start('https://aspgems.com/', function() {
   	  	casper.click("a[href='/presupuesto']"); //hacer click en presupuesto
  	});
    casper.then(function() {
      	casper.click("a[href='/presupuesto/web-de-contenidos-tipo-revista']"); //hacer click en web de contenidos tipo revista
    });
  	casper.then(function() {		
  	   	test.assertUrlMatch('https://aspgems.com/presupuesto/web-de-contenidos-tipo-revista', 'Direccion URL correcta'); //comprobar la direccion URL
    });
    casper.then(function() {  
  		  test.assertTitle('Web de contenidos tipo revista | ASPgems Soluciones Ágiles', 'Titulo --> ' + this.getTitle()); //comprobar el titulo de la pagina
    });
    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Se encuentra el titulo'); //comprobar el titulo
    });
    casper.then(function() {
        test.assertExists(x('//a[@title="Volver a presupuestos" and @href="/presupuesto"]'), 'Se encuentra el link volver a presupuesto'); //comprobar link volver a presupuesto
    });
    casper.then(function() {
        test.assertExists(x('//*[@class="field field-name-field-project-type-description field-type-text-with-summary field-label-hidden view-mode-full"]'), 'Se encuentra el texto de la pagina'); //comprobar texto de la pagina
    });
    casper.then(function() {
        test.assertExists(x('//*[@class="field field-name-field-project-type-range field-type-image field-label-above view-mode-full"]'), 'Se encuentra el cuadro rango de precio'); //comprobar cuadro rango de precio
    });
    casper.then(function() {            
        test.assertExists(x('//*[@class="field field-name-field-project-type-time-range field-type-image field-label-above view-mode-full"]'), 'Se encuentra el cuadro rango de tiempo'); //comprobar cuadro rango de tiempo
    });
    casper.then(function() {
        test.assertExists(x('//*[@id="block-webform-client-block-1100"]'), 'Se encuentra el formulario Solicitar presupuesto'); //comprobar formulario Solicitar presupuesto
    });
    casper.run(function() {
        casper.echo("Test finalizado"); //mensaje
        test.done();
    });
});