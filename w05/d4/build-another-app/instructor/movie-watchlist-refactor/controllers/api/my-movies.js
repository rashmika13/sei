const MyMovie = require('../../models/my-movie');

module.exports = {
  create,
};

// promise example
function create(req, res) {
  req.body.user = req.user;
  MyMovie.create(req.body)
    .then((movie) => res.json(movie))
    .catch((err) => next(err));
}
