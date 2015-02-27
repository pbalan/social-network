"use strict";

// create an application instance
var Facebook = require('./facebook');

var SocialNetwork = function(network,type){
	if(type=="message")
	{
		if(network!=undefined)
		{
			switch(network)
			{
				case "facebook" : 
			}
		}
		else
		{
			return ¨required parameter network is missing¨; 
		}
	} else {
		return ¨type ¨ + type + ¨ is undefined ¨;
	}
	
};