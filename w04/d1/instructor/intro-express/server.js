const express = require('express');
const path = require('path');
const todoDb = require('./data/todos-db');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
  console.log('I RECEIVED A REQUEST TO HOME');
  res.send('<h1>Hello, World!</h1>');
});

app.get('/goodbye', function (req, res) {
  res.send('<h1>Goodbye, World!</h1>');
});

app.get('/cars', function(req, res) {
  res.redirect('/goodbye');
})

app.post('/cars', function (req, res) {
  res.send('<h1>Thanks for the new car!</h1>')
})

app.get('/home', function (req, res) {
  res.render('home');
})

app.get('/todos', function(req, res) {
  res.render('todos/index', {
    todos: todoDb.getAll(),
    message: 'I am a message'
  })
})

app.listen(3001, function () {
  console.log('Listening on port 3001');
});
