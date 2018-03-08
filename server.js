const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

let app = express();

let server = http.createServer(app);
var io = socketIo.listen(server);

io.on('connection', socket => {
  console.log("user connected");

  socket.on('disconnect', () => {
    console.log("user disconnected");
  });

  socket.on('add-message', message => {
    io.emit('message', { type:'new-message', text: message });
  });
});

server.listen(8080);
app.use(express.static(__dirname + "/dist"));
console.log("Server running on localhost:8080");