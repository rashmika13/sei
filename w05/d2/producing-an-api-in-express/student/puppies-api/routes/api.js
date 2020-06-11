const express = require("express");
const router = express.Router();
const puppiesCtrl = require("../controllers/api/puppies");

router.get("/puppies", puppiesCtrl.index);
// router.get("/puppies/:id", puppiesCtrl.show);
// router.post("/puppies", puppiesCtrl.create);
// router.delete("/puppies/:id", puppiesCtrl.delete);
// router.put("/puppies/:id", puppiesCtrl.update);

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

module.exports = router;
