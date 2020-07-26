var io = require("socket.io")();

// object to hold player's initials as keys
const players = {};

io.on("connection", function (socket) {
  socket.on("add-circle", function (data) {
    io.emit("add-circle", data);
  });
});

module.exports = io;
