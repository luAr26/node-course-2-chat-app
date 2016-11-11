const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('User connected!');

  socket.emit('newEmail', {
    from : 'john@example.com',
    text: 'Hey. What is going on.',
    createdAt: 123
  });

  socket.emit('newMessage', {
    from: 'Server',
    text: 'Hello!',
    createdAt: 123
  });

  socket.on('createEmail', (newEmail) => {
    console.log('createEmail', newEmail);
  });

  socket.on('createMessage', (newMessage) => {
    console.log('newMessage', newMessage);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected!');
  });
});

server.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
