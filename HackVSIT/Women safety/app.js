var path = require("path");
const Nexmo = require('nexmo');
//var path = require('path');
const express = require('express');
//var dir = path.join(__dirname, 'public');
const app = express();
console.log('Server-side code running');

// start the express web server listening on 8080
app.listen(8080, () => {
  console.log('listening on 8080');
});
const spawn = require("child_process").spawn;
function runScript(){
  return spawn('python', [
    "-u", 
    path.join(__dirname, 'phonecall.py')
  ])};
//app.use(express.static(dir));

// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/clicked', (req, res) => {
    console.log("got the request");
      runScript();
    
    
       
     res.sendStatus(201);
      
 
});



