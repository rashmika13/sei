// utility to initialize database
require("./config/database");
const Movie = require("./models/movie");
const Performer = require("./models/performer");
const data = require("./data");

Promise.resolve()
  .then(function () {
    console.log("HERE");
    return Movie.find({});
  })
  .then(function (result) {
    console.log("1): ", result);
    return Performer.find({});
  })
  .then(function (result) {
    console.log("2): ", result);
    return Movie.find({ mpaaRating: "PG-13" });
  })
  .then(function (result) {
    console.log("3): ", result);
    return Movie.find({ nowShowing: true });
  })
  .then(function (result) {
    console.log("4): ", result);
    return Movie.find({
      $or: [{ mpaaRating: "PG-13" }, { mpaaRating: "PG" }],
    });
  })
  .then(function (result) {
    console.log("5): ", result);
    return Movie.find({ releaseYear: 2018 });
  })
  .then(function (result) {
    console.log("6): ", result);
    return Movie.find({ releaseYear: { $gt: 1980 } });
  })
  .then(function (result) {
    console.log("7): ", result);
    return Movie.find({ title: /^C/ });
  })
  .then(function (result) {
    console.log("8): ", result);
    return Performer.find({ name: "Rami Malek" });
  })
  .then(function (result) {
    console.log("9): ", result);
    return Performer.find({ born: { $lt: 1980 } });
  })
  .then(function (result) {
    console.log("10): ", result);
    return Performer.find({ name: /^J/ });
  })
  .then(function (result) {
    console.log("11): ", result);
    return Promise.all([
      Performer.findOne({ name: "Bill Murray" }),
      Movie.findOne({ title: "Caddyshack" }),
    ]);
  })
  .then(function (result) {
    console.log("12): ", result);
    const mark = result[0];
    const caddyshack = result[1];
    caddyshack.cast.push(mark);
    return caddyshack.save();
  })
  .then(function () {
    process.exit();
  });
