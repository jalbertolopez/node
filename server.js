var http = require('http');

var peticion = function(req, res){
    res.writeHead('200',{'content-type':'text/plain'});
    res.end('Hola Mundo');
};

var server = http.createServer(peticion).listen(3000);