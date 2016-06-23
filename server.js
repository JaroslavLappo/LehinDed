/*var port = process.env.PORT || 8080;

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

http.listen(port, function () {
    console.log('listening on port: ' + port.toString());
});*/

var http = require("http");

http.createServer(function(request, response) {
  console.log(request.socket.address());
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("This is leha");
  response.end();
}).listen(process.env.PORT || 80);
