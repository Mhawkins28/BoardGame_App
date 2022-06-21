
const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userCtrl");

router.get("/", userCtrl.index);

router.post("/", userCtrl.create);

router.get("/:id", userCtrl.show);

router.patch("/:id", userCtrl.update);

router.delete("/:id", userCtrl.deleteIt);


module.exports = router;