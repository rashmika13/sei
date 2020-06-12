require("./config/database"); // connect this script to the database
const Movie = require("./models/movie");
const Performer = require("./models/performer");
const data = require("./data");

// Movie.deleteMany({})
//   .then(function (results) {
//     console.log("Deleted movies: ", results);
//     return Performer.deleteMany({});
//   })
//   .then(function (results) {
//     console.log("Deleted performers:", results);
//   })
//   .then(function () {
//     process.exit();
//   });

//  Deleting at the same time
const p1 = Movie.deleteMany({});
const p2 = Performer.deleteMany({});
// Promise.all([p1, p2])
//   .then(function (results) {
//     console.log(results);
//   })
//   .then(function () {
//     process.exit();
//   });

// Promise.all([p1, p2])
//   .then(function (results) {
//     console.log(results);
//     return Performer.create(data.performers);
//   })
//   .then(function (performers) {
//     console.log(performers);
//   })
//   .then(function () {
//     process.exit();node
//   });

Promise.all([p1, p2])
  .then(function (results) {
    console.log(results);
    const p3 = Performer.create(data.performers);
    const p4 = Movie.create(data.movies);
    return Promise.all([p3, p4]);
  })
  .then(function (results) {
    console.log(results);
  })
  .then(function () {
    process.exit();
  });

// const p = new Promise(function (resolve, reject) {
//   const value = 42;
//   resolve(value);
//   //   reject("Something went wrong !");
// });
// p.then(function (result) {
//   console.log(result);
// }).catch(function (err) {
//   console.log(err);
// });

// const p = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Timed out!");
//   }, 2000);
// });

// p.then(function (result) {
//   console.log(result);
//   return 42;
// })
//   .then(function (result) {
//     console.log(result);
//     return "Done!";
//   })
//   .then(function (result) {
//     console.log(result);
//   });

// p.then(function (result) {
//   console.log(result);
// }).catch(function (err) {
//   console.log(err);
// });

//   p.then(function(result) {
//     console.log(result);
//   });

// function asyncAdd(a, b, delay) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve(a + b);
//     }, delay);
//   });
// }
// asyncAdd(5, 10, 2000)
//   .then(function (sum) {
//     console.log(sum);
//     return asyncAdd(sum, 100, 1000);
//   })
//   .then(function (sum) {
//     console.log(sum);
//     return asyncAdd(sum, 1000, 2000);
//   })
//   .then(function (sum) {
//     console.log(sum);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
