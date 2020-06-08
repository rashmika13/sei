const Movie = require('../models/movie');

module.exports = {
  create,
};

function create(req, res) {
  if (req.body.content.length > 100) {
    req.session.errorMessage = 'Review is too long, try again';
    return res.redirect(301, `/movies/${req.params.id}`);
  }

  Movie.findById(req.params.id, function (err, movie) {
    if (err) {
      // a different error handling strategy, send back basic message/
      return res.send('Something went wrong...');
    }
    movie.reviews.push(req.body);
    movie.save(function (err) {
      if (err) {
        req.session.errorMessage = 'Something went wrong, try again';
        return res.redirect(301, `/movies/${req.params.id}`);
      }
      res.redirect(`/movies/${movie._id}`);
    });
  });
}
