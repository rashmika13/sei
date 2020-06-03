const Todo = require('../models/todo');

module.exports = {
  index: index,
  show: show,
};

function index(req, res) {
  res.render('todos/index', {
    // title: 'Express Todos',
    todos: Todo.getAll(),
  });
}

function show(req, res) {
  console.log(req.params);
  const todo = Todo.getOne(req.params.id);
  // if (!todo) {
  //   return res.redirect('/todos');
  // }

  res.render('todos/show', {
    todo: todo,
  });
}
