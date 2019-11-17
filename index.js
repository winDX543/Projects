'use strict';

// Imports dependencies and set up http server
	const
	requestify=require('requestify'),
	express = require('express'),
	bodyParser = require('body-parser'),
	PageAccessToken='EAAHZAqUeuVxgBAO2RaZANoSbC3Jxs2FPMPbMwWWQbT8SuqZAOR3dX0G5xiVMdUUUmoMPISwv4sphWePsLOnA4e2OR351u6MpDPjHv1fCvyCzujegrZA4ihCetxRoZCatuMs4aDu33sH9xKjmAjBQ470MdBBzQFWuM3ZB1wzyA3owZAS8FOpQzoEZBWsHEJqalWIZD',
	app = express().use(bodyParser.json()); // creates express http server 
	const sendmessageurl='https://graph.facebook.com/v4.0/me/messages?access_token='+PageAccessToken
	
	
var admin = require("firebase-admin");

var serviceAccount = {
  "type": "service_account",
  "project_id": "testing1-231009",
  "private_key_id": "fddf09a953e9e2849a540f871d76459839e8cc27",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDyX5jRVsI26BiZ\nhq+pf08hjAYUFww5i2Io7WWB+YLyoY3seGfsn9aAUNihaKByVgGOqylCiGOLQ5ZU\ngTmga2WQIeXQ9Z/G1t0iYO2pjWn/pCY5KiHE1FI88eeNpULNyrVQig5+IKvs61d9\nTkdIiLmxZlwFRT4tAvCw1KPQVG2x9UO7Sr/xh8eytCJCLbgfilEmLhiTn43RL3Xz\nYovnlxdveCVZVeXT2t0KBoRsNmfKL1gv35kmP85DbAGN8dUpLrcUc2F9r5e0XW1G\n18xwOOPFUizIDjNlmhyFjv9pm3iksm3qaYe48hc9hWX/jE0RiWtApwUZCqav5JY9\nJPUkABPXAgMBAAECggEAPiNoKHNXw3/pnqK7MndjMDSX8lqeVbp4ZgnG9nWjrtTg\nb/nGmxG3ipovj+IlEGsgZxVWtKoG61NenTesMIaYOUWXh+URG4dGlmPHSqrovBO3\ngPxeP/o3Q0y5ksUFxYDsz0M1x/xUV59WhNemyt/Sy7p0aR2BfUS9tHgvr1+V6AN7\no98ovJLkNFMlCjWnfHQfJekERBvxdXeSVkDOCEy5vP6qAGDTblVgze76wZGhvIk1\nQ3qYQVv+MwGxPM3gd4PyoZf+Po59hHn7DJLkJmiy4tOLBpL1YcjzVGeqSbbAj0M6\nn4THh270yOg3BI66ONvUxP4Xdnn8eQ7UcJ7faL/R8QKBgQD+Kii3Ki/0QblFkdDO\nuPijyTDywcR9PMdG5yziWDSXaZ3gSvW1Dv+LWuYxU7mQSaBi8pesHxBhMZ2hWJF0\nihgGqU/mYS66lp5eIIv4wi/OcZUR9DaWHYbax/Mr0fyDrfqT6yZpLnSgPuNW8TyC\nI5op5/6fy+C4WjMUSpjeMCQS4wKBgQD0H6QU+MZ1wAkiBhomphw99H71Sk+By1VT\nAgt75TbkrZFF1SK68cLNQsTlejzcKXQVj2/o8giUi/jpazwoGqYHo1ILomN8r6/k\nHSfETUWsatSSKAH4z06xGOOrl1x999lP6h+ShCzFKKuBpsUR2GuO+lUEDgh1KPCX\n7THMi1mpfQKBgCjlPbHjHt4taRMxmCh7CL7J049r8CK6kdHtxoIQ8T1fqCB7zzc3\n15RjpuBO+W+m+SCSqibuxKLu6c8ZQiY/RghkW8/U2UD6lTbOA9ed3zVXf0XpRpM2\n4wj23UCyw++oIcaFMqP/7pIOLGRD4pmKAvc1NfoeQuVG1iswqZIuqs9DAoGBAMyN\nnq077v9HU9/AgTUVRuDa926NP6WgPPR66Ch+XcqrbOi4uIswfGwFoHowPMK1sWFH\neRwVgf8GciEUC6oG+ku4G81H2ljl1Vos299uaA0aztdQ0qYq/uMB2fMztvqOLPb7\nVE0ul1z0wRC4LrTPRQDe3VGyeH/DOCX1SB7+PLj5AoGAF+uBtS7uF5VHlo4WDDvS\ndfdcPGefAZ7OJs+nXdjQy2WrbkG4IiUcFtjM2ah32RzM0zaz3zyIxzpgCSfIvKl5\nGjF/ZYGR2QLJzr8e1NpryUToE/oOffZiTEKY/XOk3Xzbz0a1JDrBWY7SUkJ2wPQ3\n/C5YrI3VGZNlJ/n/H09khaA=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-jrzvu@testing1-231009.iam.gserviceaccount.com",
  "client_id": "110282816661611469692",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-jrzvu%40testing1-231009.iam.gserviceaccount.com"
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://testing1-231009.firebaseio.com"
});

const db = admin.firestore()

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
					"url":"https://mym-acavxb.firebaseapp.com/index.html",
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

function textMessage(senderID,text){
	requestify.post(sendmessageurl, {
		"recipient":{
		"id":senderID},
		"message":{
			"text":text
		}
	})
}

app.post('/admin', (req, res) => {
	var userInput = req.body.userInput
	var senderID = req.body.senderID
	if(userInput == 'Hi'){
		textMessage(senderID,'Welcome Admin')
	}
})

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
		db.collection('admin').where('id','==',`${senderID}`).get().then(adminList => {
			if(adminList.empty){
				//check for book advisor
			}else{
				requestify.post('https://winbookadvisor.herokuapp.com/admin', {
					userInput: userButton || userComment,
					senderID: senderID
				})
			}
		})
	 }
	
  
  
    });

    // Returns a '200 OK' response to all requests
    res.status(200).send('EVENT_RECEIVED');
     } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});






