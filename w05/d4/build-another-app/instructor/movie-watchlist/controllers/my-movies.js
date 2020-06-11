const MyMovie = require('../models/my-movie');

module.exports = {
  watchlist,
  create,
};

function watchlist(req, res, next) {
  res.render('watchlist');
}

// promise example
function create(req, res) {
  MyMovie.create(req.body)
    .then((movie) => res.json(movie))
    .catch((err) => next(err));
}
