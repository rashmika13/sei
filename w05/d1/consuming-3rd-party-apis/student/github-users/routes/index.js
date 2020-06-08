var express = require("express");
var router = express.Router();
const request = require("request");
const token = process.env.GITHUB_TOKEN;
const rootURL = "https://api.github.com/";

/* GET home page. */
router.get("/", function (req, res, next) {
  // console.log(req.query);
  const username = req.query.username;
  const options = {
    url: `${rootURL}users/${username}?access_token=${token}`,
    headers: {
      "User-Agent": "rashmika13",
    },
  };

  request(options, function (err, response, body) {
    // console.log(body);
    const userData = JSON.parse(body);
    res.render("index", { userData: userData });
  });
});
// console.log(process.env.GITHUB_TOKEN);
// res.render("index", { title: "Express" });

module.exports = router;
