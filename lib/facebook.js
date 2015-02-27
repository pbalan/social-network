"use strict";

var sdk = require('facebook-node-sdk');

// load facebook appid & secret from .env (environment file)
var FACEBOOK_APPID = process.env.FACEBOOK_APPID, 
	  FACEBOOK_SECRET = process.env.FACEBOOK_SECRET;

var fb = new sdk({
    appId: FACEBOOK_APPID,
    secret: FACEBOOK_SECRET
}).setAccessToken('CAAUudUtjQDMBAHaYa0r0Wxeh80lnEdPKnTPkXGqPCv7BiHinctZBLTXW36yMwFezsR1ATd9OaWqzP7ZB4G4ZB5CTPc0ZBelRGEgHczELlRgjeO5Iw4bfaT8trgOPJJvCE4Mp9ZBcQjSVTTIRS7YlR4EzSKPH7n6gJBxjvasN8zzyOfImcOJjgtW2aEbPMM2Lb9djmTNeMIOXkfhS6Nlsn');

var socialNetwork.prototype.shareMessage = function(message){
  if(message!=undefined && message.length > 0)
  {
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

module.exports = socialNetwork;