"use strict";

// create an application instance
var SocialNetwork = function(){
	var network = null,
		type = null,
		message = null;
	
	this.getShareObj =  function(network){
							var obj = require('./'+network);
							console.log(obj);
							return obj;
				    	};

	this.sendMessage = function(network, type, message){

		if(type==="text")
		{
			if(network!=undefined)
			{
				var shareObj = this.getShareObj(network);
				shareObj.shareMessage(message);
				console.log("return : "+network);
			}
			else
			{
				return {"error":"required parameter network is missing"};
			}
		} else {
			return {"error":"type " + type + " is undefined "};
		}
	};
};

module.exports = SocialNetwork;