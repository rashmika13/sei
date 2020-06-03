var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');

// todosCtrl = {
//   index: fn,
//   show: fn,
//   new: fn,
//   create: fn,
// };

// router.use(function (req, res, next) {
//   console.log('Look for route match in todos');
//   next();
// });

router.get('/', todosCtrl.index);
router.get('/new', todosCtrl.new);
router.get('/:id', todosCtrl.show);
router.post('/', todosCtrl.create);
router.delete('/:id', todosCtrl.delete);

// router.use(function (req, res, next) {
//   console.log('Did not match any routes in todoRouter');
//   next();
// });

module.exports = router;
