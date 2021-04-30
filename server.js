// import express package
const express = require('express');

// initialise express framework
const app = express();

// serve static files from the public folder
app.use(express.static(__dirname + '/dist'));

// serve the index file for the root ("/") path
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html')
   })

// start server, listen for incoming traffic and log message to console
let server = app.listen(8888, function(){
    console.log("App server is running on port 8888");
   });
