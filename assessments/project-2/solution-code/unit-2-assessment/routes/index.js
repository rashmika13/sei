var express = require('express');
var router = express.Router();
var todos = require('../data/todos');

router.get('/', function(req, res) {
  res.render('index', { todos });
});

router.post('/todos', function(req, res) {
  todos.push({todo: req.body.todo, done: false});
  res.redirect('/');
});

router.delete('/todos/:idx', function(req, res) {
  todos.splice(req.params.idx, 1);
  res.redirect('/');
});

module.exports = router;
