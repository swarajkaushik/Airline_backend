const express = require("express");
const CityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight-controller");
const AirportController = require("../../controllers/airport-controller");
const { FlightMiddlewares } = require("../../middlewares/index");

const router = express.Router();

router.post("/create", CityController.create);
router.delete("/destroy/:id", CityController.destroy);
router.get("/get/:id", CityController.getById);
router.get("/cities", CityController.getAll);
router.patch("/update/:id", CityController.update);

router.post(
  "/flights/create",
  FlightMiddlewares.validateCreateFlight,
  FlightController.create
);
router.get("/flights/list", FlightController.getAll);
router.get("/flight/:id", FlightController.getFlightById);
router.patch("/updateFlight/:id", FlightController.updateFlight);

router.post("/airports", AirportController.create);
module.exports = router;
