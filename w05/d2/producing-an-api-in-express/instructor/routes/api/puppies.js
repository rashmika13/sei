<<<<<<< HEAD
const express = require("express");
const router = express.Router();

/* GET /api/puppies */

router.get("/puppies", puppiesCtrl.index);
router.get("/puppies/:id", puppiesCtrl.show);
router.post("/puppies", puppiesCtrl.create);
router.delete("/puppies/:id", puppiesCtrl.delete);
router.put("/puppies/:id", puppiesCtrl.update);
=======
const express = require('express');
const router = express.Router();
const puppiesCtrl = require('../../controllers/puppies');

/* GET /api/puppies */
router.get('/puppies', puppiesCtrl.index);
router.get('/puppies/:id', puppiesCtrl.show);
router.post('/puppies', puppiesCtrl.create);
router.put('/puppies/:id', puppiesCtrl.update);
router.delete('/puppies/:id', puppiesCtrl.delete);
>>>>>>> 0c93ab0a1caf534154349a77abe915c8e9d502eb

module.exports = router;
