//Taylor King
//Under MIT License
//Simulates a Metler Toledo IND 135 scale reader with TCP
var net = require('net');
var express = require('express');
var server = express();

var host = '127.0.0.1';
var port = '1701';
var weight = 10;
var started = true;

server.get('/start', function (req, res) {
  started = true;
  console.log('start writing');
  res.send();
});

server.get('/weight', function (req, res) {
  weight = req.query.weight;
  res.send();
});

server.get('/stop', function (req, res) {
  started = false;
  console.log('stop writing');
  res.send();
});

server.listen(3000);

// Start the TCP Socket.
net.createServer(function (sock) {
  setInterval(function () {
    if (started) {
      sock.write(' 1(  ' + weight + '    00\r');
    }
  }, 100);

  sock.on('close', function (data) {
    console.log('Socket closed');
  });
}).listen(port, host);
