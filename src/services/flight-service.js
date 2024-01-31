const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTimeHelper } = require("../utils/helper");

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }
  async createFlight(data) {
    try {
      if (!compareTimeHelper(data.departureTime, data.arrivalTime)) {
        throw { error: "Arrival time cannot be less than the departure time" };
      }
      const airplane = await this.airplaneRepository.getAirplaneById(
        data.airplaneId
      );
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong at service layer.");
      throw { error };
    }
  }

  async getAllFlightsData(data) {
    try {
      const flights = await this.flightRepository.getFlights(data);
      return flights;
    } catch (error) {
      console.log("Something went wrong at service layer.");
      throw { error };
    }
  }
}

module.exports = FlightService;
