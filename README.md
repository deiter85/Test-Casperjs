# Test Casperjs
Distintos archivos JavaScript para la realización de testing con CasperJS

Para paginas https hay que cambiar el protocolo SSLv3 por TLSv1 con:
casperjs --ignore-ssl-errors=yes --ssl-protocol=tlsv1 test file.js
