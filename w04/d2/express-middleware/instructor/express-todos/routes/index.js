var express = require('express');
var router = express.Router();

// router.use(function (req, res, next) {
//   console.log('Look for route match in index');
//   next();
// });

router.get('/', function (req, res, next) {
  console.log('respond with index');
  res.render('index', { title: 'Express To-Do' });
});

// router.use(function (req, res, next) {
//   console.log('No match found in index router');
//   next();
// });

module.exports = router;
