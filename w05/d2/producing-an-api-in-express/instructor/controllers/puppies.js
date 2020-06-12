<<<<<<< HEAD
const Puppy = require("../../models/puppy");

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update,
};

function update(req, res) {
  Puppy.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    function (puppy) {
      res.status(200).json(puppy);
    }
  );
}

function deleteOne(req, res) {
  Puppy.findByIdAndRemove(req.params.id).then(function (puppy) {
    res.status(200).json(puppy);
  });
}

function show(req, res) {
  Puppy.findById(req.params.id).then(function (puppy) {
    res.status(200).json(puppy);
  });
}

function create(req, res) {
  Puppy.create(req.body).then(function (puppy) {
    res.status(201).json(puppy);
  });
}

function index(req, res) {
  Puppy.find({}).then(function (puppies) {
    res.status(200).json(puppies);
  });
=======
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
>>>>>>> 0c93ab0a1caf534154349a77abe915c8e9d502eb
}
