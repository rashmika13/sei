require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const router = require('./router');

const app = express();

// connect to the MongoDB with mongoose
require('./config/database');
// make sure passport code runs when server starts
require('./config/passport');

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
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ url: process.env.DATABASE_URL }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

// makes user available in all EJS views
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use(router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // if request is an AJAX request, respond with JSON
  if (req.xhr || /json/i.test(req.headers.accept)) {
    return res.status(err.status || 500).json({
      message: err.message,
      error: req.app.get('env') === 'development' ? err : {},
    });
  }

  // if not AJAX, respond with error view
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
