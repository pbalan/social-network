"use strict";

var sdk = require('facebook-node-sdk');

// load facebook appid & secret from .env (environment file)
var FACEBOOK_APPID = process.env.FACEBOOK_APPID, 
	  FACEBOOK_SECRET = process.env.FACEBOOK_SECRET,
    FACEBOOK_ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN;

var fb = new sdk({
    appId: FACEBOOK_APPID,
    secret: FACEBOOK_SECRET
}).setAccessToken(FACEBOOK_ACCESS_TOKEN);

var facebook = {

  shareMessage :  function(message){
                    if(message!=undefined && message.length > 0)
                    {
                      console.log('message transferred: ' + message);
                      fb.api('/me/feed', 'post', {'message':message}, function(err, data) {
                        if (err) {
                          console.log(err);
                          return;
                        }

                        if (data) {
                          console.log(data);
                        }
                      });
                    }
                  }
};

module.exports = facebook;