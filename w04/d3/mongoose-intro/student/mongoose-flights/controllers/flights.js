const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
  new: newFlight,
  create,
  index,
  show,
};

function index(req, res) {
  Flight.find({})
    .sort({ departs: "ascending" })
    .exec(function (err, flights) {
      res.render("flights/index", { flights });
    });
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    Ticket.find({ flight: flight._id }, function (err, tickets) {
      res.render("flights/show", { title: "Flight Detail", flight });
    });
  });
}

function newFlight(req, res) {
  const newFlight = new Flight();
  const dt = newFlight.departs;
  const departsDate = dt.toISOString().slice(0, 16);
  res.render("flights/new", { departsDate });
}

function create(req, res) {
  const newFlight = new Flight();
  const dt = newFlight.departs;
  const departsDate = dt.toISOString().slice(0, 16);
  if (req.body.departs === "") {
    delete req.body.departs;
  }
  const flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) {
      console.log(err);
      return res.render("flights/new", { departsDate });
    }
    console.log(flight);
    res.redirect("flights");
  });
}
