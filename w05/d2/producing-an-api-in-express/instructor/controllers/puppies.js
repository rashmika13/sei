const Puppy = require('../models/puppy');

module.exports = {
  index,
  show: show,
  create: create,
  update: update,
  delete: deleteOne,
};

function index(req, res, next) {
  Puppy.find({})
    .then((puppies) => {
      res.json(puppies);
    })
    .catch((err) => {
      next(err);
    });
}

function show(req, res, next) {
  Puppy.findById(req.params.id, function (err, puppy) {
    if (err) {
      return next(err);
    }
    if (!puppy) {
      return res.status(404).json({ message: 'Puppy not found' });
    }
    res.status(200).json({ puppy: puppy });
  });
}

function create(req, res, next) {
  Puppy.create(req.body, function (err, puppy) {
    if (err) {
      return next(err);
    }
    res.status(201).json(puppy);
  });
}

function update(req, res, next) {
  Puppy.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((puppy) => res.json(puppy))
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).json({ message: 'Puppy does not exist' });
      }
      next(err);
    });
}

function deleteOne(req, res, next) {
  Puppy.findByIdAndRemove(req.params.id, function (err, removedPuppy) {
    res.json({ removedPuppyId: removedPuppy._id });
  }).catch((err) => next(err));
}
