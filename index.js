"use strict";

var dotenv = require('dotenv');
dotenv.load();

var Facebook = require('./lib/facebook');

// load http module to create server
var restify = require('restify');
// specify the server port and other options
var options =  {
					host: 'localhost',
					port: 4000
               };

function app(req, res) {

	res.write('module: ' + reportObj.module + ', action: ' + reportObj.action);
	res.end();
};

var server = restify.createServer(app);

server
  .use(restify.fullResponse())
  .use(restify.bodyParser())
  .use(restify.queryParser());

server.listen(options.port, function(request, response){

	// server created
	console.log('server running at http://' + options.host + '/ on port ' + server.address().port);
});