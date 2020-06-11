const Puppy = require("../../models/puppy");

module.exports = {
  index,
};

function index(req, res) {
  Puppy.find({}, function (err, puppies) {
    res.status(200).json(puppies);
  });
}

// function update(req, res) {
//     Puppy.findByIdAndUpdate(req.params.id, req.body, {new: true})
//     .then(function(puppy) {
//       res.status(200).json(puppy);
//     });
//   }

//   function deleteOne(req, res) {
//     Puppy.findByIdAndRemove(req.params.id).then(function(puppy) {
//       res.status(200).json(puppy);
//     });
//   }

//   function show(req, res) {
//     Puppy.findById(req.params.id).then(function(puppy) {
//       res.status(200).json(puppy);
//     });
//   }

//   function create(req, res) {
//     Puppy.create(req.body).then(function(puppy) {
//       res.status(201).json(puppy);
//     });
//   }
