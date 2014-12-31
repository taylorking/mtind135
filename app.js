//Taylor King
//Under MIT License
//Simulates a Metler Toledo IND 135 scale reder with TCP

var net = require('net');
var express = require('express');
var server = express();



var host = "127.0.0.1";
var port = "1701";
var weight = 10;
var started = false;


server.get('/start', function(req,res) {
  started = true;
  console.log('start writing');
});
server.get('/stop', function(req, res) {
  started = fasle;
  console.log('stop writing');
});
server.listen(3000);

var client = new net.Socket();


// Start the TCP Socket. 
 var socklistener = net.createServer(function(sock) {
  sock.on('data', function(data) {
    console.log("Client connected.");
    while(started) {
      console.log("Data written: " + data);
      sock.write(data);
    }
  });
  sock.on('close', function(data) {
    console.log("Socket closed");
  });
});
socklistener.listen(port, host);


