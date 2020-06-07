const Ticket = require("../models/ticket");
const Flight = require("../models/flight");

module.exports = {
  new: newTicket,
  create,
};

// function addToCast(req, res) {
//   Movie.findById(req.params.id, function (err, movie) {
//     movie.cast.push(req.body.performerId);
//     movie.save(function (err) {
//       res.redirect(`/movies/${movie._id}`);
//     });
//   });
// }

function create(req, res) {
  Ticket.create(req.body, function (err, ticket) {
    res.redirect("/tickets/new");
  });
}

function newTicket(req, res) {
  Ticket.find({}, function (err, tickets) {
    res.render("tickets/new", {
      title: "Add Ticket",
      tickets,
    });
  });
}
