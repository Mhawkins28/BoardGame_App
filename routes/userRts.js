
const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userCtrl");

router.get("/", userCtrl.indexRoute);

router.post("/", userCtrl.createRoute);

router.get("/:id", userCtrl.showRoute);

router.patch("/:id", userCtrl.updateRoute);

router.delete("/:id", userCtrl.deleteRoute);


// router.get("/:profileId", userCtrl.userProfile)

module.exports = router;