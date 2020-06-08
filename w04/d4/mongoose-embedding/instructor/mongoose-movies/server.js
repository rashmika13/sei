var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
require('./config/database');

var indexRouter = require('./routes/index');
var moviesRouter = require('./routes/movies');
const reviewsRouter = require('./routes/reviews');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: 'keyboard cat', // normally don't add secrets in source code, use .env files
    resave: true,
    saveUninitialized: true,
    cookie: {},
  })
);

// simple custom flash message middleware (we could use the 'express-flash' package for something more robust)
// this will expose an errorMessage variable to our EJS views
// if we had put an errorMessage into our session, it'll be available to views
// we then need to remove it from session so it doesn't keep showing up
app.use(function (req, res, next) {
  res.locals.errorMessage = req.session.errorMessage;
  delete req.session.errorMessage;
  next();
});

app.use('/', indexRouter);
app.use('/movies', moviesRouter);
app.use('/', reviewsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
