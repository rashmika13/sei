const Movie = require('../models/movie');

module.exports = {
  index,
  show,
  new: newMovie,
  create,
  best,
};

function index(req, res) {
  // use query strings in the url to change the Mongo query object
  let queryObj = {};
  if (req.query.filter === 'best') {
    queryObj = { 'reviews.rating': { $gt: 3 } };
  }

  // Mongoose query builder
  // Movie.find().where('reviews.rating').gt(3).exec(function(err, movies) { ... })

  Movie.find(queryObj, function (err, movies) {
    res.render('movies/index', { title: 'All Movies', movies });
  });
}

// example of above, just using a different route instead of query strings
function best(req, res) {
  Movie.find({ 'reviews.rating': 5 }, function (err, movies) {
    res.render('movies/index', { title: 'All Movies', movies });
  });
}

function show(req, res) {
  Movie.findById(req.params.id, function (err, movie) {
    // console.log(movie);
    res.render('movies/show', { title: 'Movie Detail', movie });
  });
}

function newMovie(req, res) {
  res.render('movies/new', { title: 'Add Movie' });
}

function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;
  // remove whitespace next to commas
  req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
  // split if it's not an empty string
  if (req.body.cast) req.body.cast = req.body.cast.split(',');
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const movie = new Movie(req.body);
  movie.save(function (err) {
    // one way to handle errors
    if (err) return res.redirect('/movies/new');
    console.log(movie);
    // for now, redirect right back to new.ejs
    res.redirect('/movies');
  });
}
