const Student = require('../models/student');

module.exports = {
  index,
  addFact,
  delFact,
};

function index(req, res, next) {
  /**
   * REQ.QUERY --> comes from the GET request on the submit form VS. req.body Post req.
   */
  console.log(req.query);

  // Make the query object to use with Student.find based up
  // the user has submitted the search form or now

  /**
   * @param {name} string Conditional --> if no name provided get all the students
   */
  const modelQuery = req.query.name ? { name: new RegExp(req.query.name, 'i') } : {};

  // Default to sorting by name
  const sortKey = req.query.sort || 'name';

  Student.find(modelQuery)
    .sort(sortKey)
    .exec(function(err, students) {
      if (err) return next(err);

      // Passing search values, name & sortKey, for use in the EJS
      res.render('students/index', { students, user: req.user, name: req.query.name, sortKey });
    });
}

function addFact(req, res, next) {
  req.user.facts.push(req.body);

  req.user.save(function(err) {
    res.redirect('/students');
  });
}

function delFact(req, res, next) {
  // get the specific fact to delete (_id)
  // use the mongoose method to remove an embedded document from the student instance (req.user === Student Instance)
  // make sure the record is updated (save)
  // reditect back to /students
}
