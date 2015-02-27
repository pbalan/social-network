"use strict";

var dotenv = require('dotenv');
dotenv.load();

// load http module to create server
var restify = require('restify');
// specify the server port and other options
var options =  {
					host: 'localhost',
					port: 4000
               };

function app(req, res) {

	res.write();
	res.end();
};

// create an application instance
var SocialNetwork = require('./lib/social-network');

var server = restify.createServer(app);

server
  .use(restify.fullResponse())
  .use(restify.bodyParser())
  .use(restify.queryParser());

server.listen(options.port, function(request, response){

	// server created
	console.log('server running at http://' + options.host + '/ on port ' + server.address().port);
});

