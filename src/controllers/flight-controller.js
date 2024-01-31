const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
      data: flight,
      success: true,
      err: {},
      message: "Successfully created a flight",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Cannot create the flight",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await flightService.getAllFlightsData(req.query);
    return res.status(200).json({
      data: response,
      success: true,
      err: {},
      message: "Successfully fetched the flights data",
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Cannot fetch the flights",
      err: error,
    });
  }
}

module.exports = {
  create,
  getAll
};
