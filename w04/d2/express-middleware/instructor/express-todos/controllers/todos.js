var Todo = require('../models/todo');

module.exports = {
  index,
  show,
  new: newTodo,
  create,
  delete: deleteTodo,
};

function index(req, res) {
  // console.log('respond with todo index');
  res.render('todos/index', {
    time: req.time,
    todos: Todo.getAll(),
  });
}

function show(req, res) {
  // console.log('respond with todo show');
  res.render('todos/show', {
    todo: Todo.getOne(req.params.id),
    // Would like to display the number of the todo within the list
    todoNum: Todo.getAll().findIndex((todo) => todo.id === parseInt(req.params.id)) + 1,
  });
}

function newTodo(req, res) {
  res.render('todos/new');
}

function create(req, res) {
  Todo.create(req.body);
  res.redirect('/todos');
}

function deleteTodo(req, res) {
  Todo.deleteOne(req.params.id);
  res.redirect('/todos');
}
