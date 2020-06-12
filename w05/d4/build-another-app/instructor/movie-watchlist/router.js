const express = require('express');
const router = express.Router();

const usersCtrl = require('./controllers/users');
const myMoviesCtrl = require('./controllers/my-movies');

router.get('/', function (req, res) {
  res.render('index');
});

router.get('/watchlist', myMoviesCtrl.watchlist);

router.get('/login', usersCtrl.loginForm);
router.post('/login', usersCtrl.login);
router.get('/signup', usersCtrl.signupForm);
router.post('/signup', usersCtrl.signup);
router.get('/logout', usersCtrl.logout);

module.exports = router;
