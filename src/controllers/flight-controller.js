const { FlightService } = require("../services/index");
const { SuccessCodes } = require("../utils/error-codes");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(SuccessCodes.CREATED).json({
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
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      err: {},
      message: "Successfully fetched the flights data",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Cannot fetch the flights",
      err: error,
    });
  }
};

const getFlightById = async (req, res) => {
  try {
    const response = await flightService.getFlightById(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      err: {},
      message: "Successfully fetched the flight data",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Cannot fetch the flight",
      err: error,
    });
  }
};

const updateFlight = async (req, res) => {
  try {
    const response = await flightService.updateFlight(req.params.id, req.body);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      err: {},
      message: "Successfully updated the flight data",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Cannot update the flight",
      err: error,
    });
  }
};

module.exports = {
  create,
  getAll,
  getFlightById,
  updateFlight,
};
