var Flight = require("../models/flight");

module.exports = {
  create,
  delete: deleteDestination,
};

function create(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    flight.destinations.push(req.body);
    flight.save(function (err) {
      res.redirect(`/flights/${flight._id}`);
    });
  });
}

function deleteDestination(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    let index = flight.destinations.findIndex(
      (destination) => destination._id == req.params.idD
    );
    flight.destinations.splice(index, 1);
    flight.save(function (err) {
      res.redirect(`/flights/${flight._id}`);
    });
  });
}
