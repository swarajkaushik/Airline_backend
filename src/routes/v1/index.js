const express = require("express");
const CityController = require("../../controllers/city-controller");

const router = express.Router();

router.post("/create", CityController.create);
router.delete("/destroy/:id", CityController.destroy);
router.get("/get/:id", CityController.getById);
router.get("/cities", CityController.getAll);
router.patch("/update/:id", CityController.update);

module.exports = router;
