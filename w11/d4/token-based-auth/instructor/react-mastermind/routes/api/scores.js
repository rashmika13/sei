const express = require('express');
const router = express.Router();
const scoresCtrl = require('../../controllers/scores');

router.get('/', scoresCtrl.highScores);

// router.use(require('../../config/auth')); // middleware runs for every /api/scores route below here
// router.use(isLoggedIn)
router.post('/', require('../../config/auth'), isLoggedIn, scoresCtrl.create); // middleware runs only for the create

// other routes

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'NOT AUTHORIZED!!' });
}
