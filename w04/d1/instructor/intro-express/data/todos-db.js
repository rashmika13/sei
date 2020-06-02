const todos = [
  {todo: 'Feed cat', done: true},
  {todo: 'Teach Express', done: false},
  {todo: 'Take a nap', done: false},
  {todo: 'Something else', done: false}
];

module.exports = {
  getAll: function() {
    return todos;
  }
}
