const express = require('express');
const router = express.Router();

const homeCtrl = require('./controllers/home');
const usersCtrl = require('./controllers/users');
const myMoviesCtrl = require('./controllers/my-movies');
const omdbApiCtrl = require('./controllers/api/omdb');
const myMoviesApiCtrl = require('./controllers/api/my-movies');

const isLoggedIn = require('./middleware/isLoggedIn');

router.get('/', homeCtrl.index);
router.get('/watchlist', isLoggedIn, myMoviesCtrl.index);

// user auth
router.get('/login', usersCtrl.loginForm);
router.post('/login', usersCtrl.login);
router.get('/signup', usersCtrl.signupForm);
router.post('/signup', usersCtrl.signup);
router.get('/logout', usersCtrl.logout);

// api routes
router.get('/api/search', omdbApiCtrl.search);
router.post('/api/my-movies', isLoggedIn, myMoviesApiCtrl.create);
router.delete('/api/my-movies/:id', isLoggedIn, myMoviesApiCtrl.deleteOne);

module.exports = router;
