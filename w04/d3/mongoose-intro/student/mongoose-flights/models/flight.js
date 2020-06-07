const mongoose = require("mongoose");
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
  },
  arrival: {
    type: Date,
  },
});

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"],
  },
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    default: "DEN",
  },
  flightNo: {
    type: Number,
    required: [true, "Flight No. required"],
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: function () {
      return Date.now() + 365 * 24 * 60 * 60000;
    },
  },

  destinations: { type: [destinationSchema] },
});

module.exports = mongoose.model("Flight", flightSchema);
