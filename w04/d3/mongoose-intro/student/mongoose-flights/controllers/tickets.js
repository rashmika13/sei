const Ticket = require("../models/ticket");
const Flight = require("../models/flight");

module.exports = {
  new: newTicket,
  create,
  // delete: deleteTicket,
};

function create(req, res) {
  req.body.flight = req.params.id;
  Ticket.create(req.body, function (err, ticket) {
    console.log(ticket);
    res.redirect("/flights/" + req.params.id);
  });
}
// function create(req, res) {
//   req.body.flight = req.params.id;
//   console.log(req.body);
//   const newTicket = new Ticket(req.body);
//   newTicket.save(function (err) {
//     console.log(newTicket);
//     res.redirect("/flights/" + req.params.id);
//   });
// }

function newTicket(req, res) {
  Flight.findById(req.params.id, function (err, flights) {
    res.render("tickets/new", {
      title: "Add Ticket",
      flights,
    });
  });
}

// function deleteTicket(req, res) {
//   Flight.findById(req.params.id, function (err, flight) {
//     Ticket.findOneAndDelete(req.body, function (err, ticket) {
//       console.log(ticket);
//       ticket.save(function (err) {
//         res.render(`/flights/${flight._id}`);
//       });
//     });
//   });
// }
