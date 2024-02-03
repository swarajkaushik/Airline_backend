const validateCreateFlight = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.departureTime ||
    !req.body.arrivalTime ||
    !req.body.price
  ) {
    res.status(400).json({
      data: {},
      success: false,
      message: "Invalid request body for create create flight",
      error: "Missing required properties to create the flight",
    });
  }

  next();
};

module.exports = {
  validateCreateFlight,
};
