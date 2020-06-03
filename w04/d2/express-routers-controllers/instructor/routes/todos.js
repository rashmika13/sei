const express = require('express');
const todosCtrl = require('../controllers/todos');
const router = express.Router();

router.get('/', todosCtrl.index);
// router.get('/new', todosCtrl.newTodo);

router.get('/:id', todosCtrl.show);

// router.post('/', todosCtrl.create)

module.exports = router;
