'use strict';

// Imports dependencies and set up http server
	const
	requestify=require('requestify'),
	express = require('express'),
	bodyParser = require('body-parser'),
	PageAccessToken='EAAHZAqUeuVxgBAO2RaZANoSbC3Jxs2FPMPbMwWWQbT8SuqZAOR3dX0G5xiVMdUUUmoMPISwv4sphWePsLOnA4e2OR351u6MpDPjHv1fCvyCzujegrZA4ihCetxRoZCatuMs4aDu33sH9xKjmAjBQ470MdBBzQFWuM3ZB1wzyA3owZAS8FOpQzoEZBWsHEJqalWIZD',
	app = express().use(bodyParser.json()); // creates express http server 
	const sendmessageurl='https://graph.facebook.com/v4.0/me/messages?access_token='+PageAccessToken

	requestify.post('https://graph.facebook.com/v2.6/me/messenger_profile?access_token='+PageAccessToken,
		{"get_started":{"payload":"Hi"},
		"persistent_menu":[
			{
				"locale":"default",
				"composer_input_disabled":false,
				"call_to_actions":[
				{
					"type":"postback",
					"title":"Home",
					"payload":"Hi"

				},
				{
					"type":"web_url",
					"title":"Visit Page",
					"url":"https://web.facebook.com/%E1%80%80%E1%80%B0%E1%82%90%E1%80%BD%E1%80%AC%E1%80%96%E1%80%90%E1%80%B9-113762300024095/?__tn__=kC-R&eid=ARAblm5cCwsOgVy6pTAl96nSWBS8BGnOOLZd_KIoKbhcyomoY-aa1r4dZZlNYZlbYLsroXaRxEKr2KYR&hc_ref=ARRfMuUvyQoHOHUX0oSIkkv1W_5kRQDyfNzbqYnvvwICjSImHpIKdv9TQITzWl87eHk&fref=nf&__xts__[0]=68.ARAel5l8bZYRJTnNAN4rbgAdPzZv8s4SBin-gZ1H7wYDWQ8B3ZHDkcJ7YqMRbadqT8lqE6Ex00Sx6wxDmzs4QSPTWtw8BQJgU9sw21q5MtfDUgpxfnVFxP708BzRevrwE8S1x7dkmWECnGFFIDO4wfpxoknxENDjP2oB89LydIeiR-XH2id4FTcBoJUmGfWngRocZFDp0Sk9Aox1Myopt0DIqLQZhVcn9Q8JMdc584Eb6Tp347dRdI5KcUKjP285sNbMYmw1bM8aZXzpSWwF5z8E-tbMgiVetCha9XWxxiJBFg4N5y84McYJBd2Fh19Y0if-OBRiFkqXj75OdiDb320",
					"webview_height_ratio":"tall"

				}
			]
	
		}
	],
  
  "greeting": [
    {
      "locale":"default",
      "text":"Hello {{user_first_name}}! \nWe provide service!!" 
    }
  ]

}).then(function(success) {
	console.log('persistent_menu.success');
	// body...
})

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));
app.get('/', (req, res)=>{
	res.send("Hello vro!");
})

/

// Adds support for GET requests to our webhook
app.get('/webhook', (req, res) => {

  // Your verify token. Should be a random string.
  let VERIFY_TOKEN = "19950419"
    
  // Parse the query params
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];
    
  // Checks if a token and mode is in the query string of the request
  if (mode && token) {
  
    // Checks the mode and token sent is correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      
      // Responds with the challenge token from the request
      console.log('WEBHOOK_VERIFIED');
   	   res.status(200).send(challenge);
    
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);      
    }
  }
});

// Creates the endpoint for our webhook 
app.post('/webhook', (req, res) => {  
 
  let body = req.body;

  // Checks this is an event from a page subscription
  if (body.object === 'page') {

    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(function(entry) {

      // Gets the message. entry.messaging is an array, but 
      // will only ever contain one message, so we get index 0
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);
      var senderID=webhook_event.sender.id;
      console.log('senderID',senderID);
      if(webhook_event.postback){
      	var userButton=webhook_event.postback.payload;
      	console.log('reply',userButton);
    }
    if (webhook_event.message) {if (webhook_event.message.text) {
    	var userComment=webhook_event.message.text;
    	console.log('userComment',userComment);
    }
	if (webhook_event.message.attachments){
		var userImage=webhook_event.message.attachments;
		console.log('userPhoto',userImage);

	}}
	 if(userButton == 'Hi' || userComment == 'Hi'){


/*	MessengerExtensions.askPermission(
	funcition(permission_response) {
	// Person grants or rejects the asked permission.
	let permission */
	MessengerExtensions.askPermission(success, error, permission);
 
requestify.post(sendmessageurl,
{        
        "recipient":{
    "id":senderID
  },
  "message":{
    "attachment":{
      "type":"template",
      "payload": {
  "template_type":"generic",
  "elements":[
     {
      "title":"Hi",
	  "image_url":"https://sites.psu.edu/siowfa16/files/2016/10/YeDYzSR-10apkm4.png",
      "subtitle":"test",
      "buttons":[{
  "type": "postback",
  "title": "button 1",
  "payload": "payload 1"
},{
  "type": "postback",
  "title": "button 2",
  "payload": "payload 2"
},{
  "type": "postback",
  "title": "button 3",
  "payload": "payload 3"
}
]
},

{
     "title":"SaPal Phyu",
	 "image_url":"https://sites.psu.edu/siowfa16/files/2016/10/YeDYzSR-10apkm4.png",
     "subtitle":"test",
     "buttons":[{
  "type": "postback",
  "title": "button 1",
  "payload": "payload 1"
},{
  "type": "postback",
  "title": "button 2",
  "payload": "payload 2"
},{
  "type": "postback",
  "title": "button 3",
  "payload": "payload 3"
}       
 ]
    
},
{
      "title":"Shwe Sein",
	  "image_url":"https://sites.psu.edu/siowfa16/files/2016/10/YeDYzSR-10apkm4.png",
      "subtitle":"test",
      "buttons":[{
  "type": "postback",
  "title": "button 1",
  "payload": "payload 1"
},{
  "type": "postback",
  "title": "button 2",
  "payload": "payload 2"
},{
  "type": "postback",
  "title": "button 3",
  "payload": "payload 3"
}       
 ]
    
}
]
}
    }
  }
      }).then(function(success){
console.log('successful template');
}).catch(function(error){
console.log('error', error);
  
  });
  }
  
    });

    // Returns a '200 OK' response to all requests
    res.status(200).send('EVENT_RECEIVED');
     } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});