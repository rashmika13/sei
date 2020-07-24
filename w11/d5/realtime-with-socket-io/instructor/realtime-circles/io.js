var io = require('socket.io')();

const players = {};
let circles = [];

io.on('connection', function (socket) {
  socket.on('add-circle', function (data) {
    circles.push(data);
    io.emit('add-circle', data);
  });

  socket.emit('load-circles', circles);

  socket.on('clear-circles', function (data) {
    circles = [];
    io.emit('clear-circles', data);
  });

  socket.on('clear-player-circles', function (initials) {
    circles = circles.filter((c) => c.initials !== initials);
    io.emit('clear-player-circles', circles);
  });

  socket.on('register-player', function (initials) {
    players[socket.id] = initials;
    console.log(players);
    io.emit('update-player-list', Object.values(players));
    socket.broadcast.emit('player-joined', initials);
  });

  socket.on('disconnect', function () {
    delete players[socket.id];
    io.emit('update-player-list', Object.values(players));
  });
});

module.exports = io;
