const express = require("express");
const CityController = require("../../controllers/city-controller");

const router = express.Router();

router.post("/create", CityController.create);

module.exports = router;
