var express = require('express');
var router = express.Router();
var todosCtrl = require('./controllers/todos');

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express To-Do' });
});

router.get('/todos', todosCtrl.index);
router.post('/todos', todosCtrl.create);
router.get('/todos/:id', todosCtrl.show);

module.exports = router;
