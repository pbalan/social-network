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
	res.write('app '+app);
	res.end();
};

// create an application instance
var SocialNetwork = require('./lib/social-network');

var server = restify.createServer(app);

server
  .use(restify.fullResponse())
  .use(restify.bodyParser())
  .use(restify.queryParser());

server.timeout = 0;

server.listen(options.port, function(request, response){

	// server created
	console.log('server running at http://' + options.host + '/ on port ' + server.address().port);
});

server.get('/:network/:type/:message', function (req, res, next) {
  // create report module
  if(req.params.network===undefined || req.params.network === null)
  {
  	res.send('network is required');
  }
  if(req.params.type === undefined  || req.params.type === null)
  {
  	res.send('type is required');
  }
  if(req.params.message === undefined  || req.params.message === null)
  {
  	res.send('message is required');
  }
  console.log('network: ' + req.params.network + ', type: ' + req.params.type + ', message: ' + req.params.message);
  // create report module
  var SocialNetworkObj = new SocialNetwork();
  SocialNetworkObj.sendMessage(req.params.network, req.params.type, req.params.message);
  res.send('what you want?');
});

server.on('data',app);