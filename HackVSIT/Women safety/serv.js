/*const accountSid = 'AC3f85afd87cd644e53cbafdab8e43448b';
const authToken = '3617a3067c5a84958a8ea2c20d2e2fd7';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+12065698972',
     to: '+917972653087'
   })
  .then(message => console.log(message.sid));

*/

/*
const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: '0587db04',
  apiSecret: 'zfgbGpv6YmlGjk1f',
});

const from = 'Nexmo';
const to = '+919119314520';
const text = 'Hello from Nexmo';

nexmo.message.sendSms(from, to, text);*/
const SMS = require('node-sms-send')
 
const sms = new SMS('madanparmar637@gmail.com', 'Comilio@143')
 
sms.send('+919119314520', 'Hello!')
  .then(body => console.log(body)) // returns { message_id: 'string' }
  .catch(err => console.log(err.message))