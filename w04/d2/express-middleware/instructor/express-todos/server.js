var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override');

var indexRouter = require('./routes/index');
var todosRouter = require('./routes/todos');
// const router = require('./router');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());

// app.use(function (req, res, next) {
//   console.log('Before middleware', req.body);
//   next();
// });

app.use(express.urlencoded({ extended: false })); // add it req.body = { ... }

// app.use(function (req, res, next) {
//   console.log('After middleware', req.body);
//   next();
// });

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));

// static middleware
// app.use(function(req, res, next) {
//   // look in public folder to see if route matches file path in folder
//   // if yes, respond with file
//   // if no, call next function
// })

app.use(function (req, res, next) {
  // console.log('Hello first middleware after standard stuff');
  req.time = new Date().toLocaleTimeString();
  next();
});

app.use('/', indexRouter);
app.use('/todos', todosRouter);

// app.use('/', router);

// app.use(function (req, res, next) {
//   console.log('Did not find route match in routers');
//   next();
// });

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
