'use strict';

var http = require('http');

var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');

// Change this directory to a `JS src` directory of your choice
var serve = serveStatic("./src/");

var server = http.createServer(function(req, res) {
    var done = finalhandler(req, res);
    serve(req, res, done);
});

server.listen(8001);
