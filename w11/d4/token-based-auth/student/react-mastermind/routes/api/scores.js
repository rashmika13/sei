const express = require("express");
const router = express.Router();
const scoresCtrl = require("../../controllers/scores");

router.get("/", scoresCtrl.highScores);

router.post("/", require("../../config/auth"), isLoggedIn, scoresCtrl.create);

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}
