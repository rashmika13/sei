// Load express
const express = require("express");
const path = require("path");

// Create our express app
const app = express();

const grocerylist = require("./data/grocery.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Define a "root" route directly on app

app.get("/groceryList", function (req, res) {
  res.render("home", {
    item: grocerylist.getAll(),
  });
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});
