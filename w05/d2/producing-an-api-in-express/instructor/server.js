const express = require('express');
const logger = require('morgan');
const cors = require('cors');

// load secrets from .env file
require('dotenv').config();
require('./database');

const puppyApiRouter = require('./routes/api/puppies');

const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());

// app.use(express.urlencoded())

app.use('/api', puppyApiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err,
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {},
  });
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Express server started');
});
