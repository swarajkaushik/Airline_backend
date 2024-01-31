const { Flights } = require("../models/index");
const { Op } = require("sequelize");

class FlightRepository {
  #crateFilter(data) {
    let filter = {};
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }
    if (data.minPrice && data.maxPrice) {
      Object.assign(filter, {
        [Op.and]: [
          { price: { [Op.lte]: data.maxPrice } },
          { price: { [Op.gte]: data.minPrice } },
        ],
      });
    }
    if (data.maxPrice) {
      Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
    }
    if (data.minPrice) {
      Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
    }
    return filter;
  }
  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong at repository layer.");
      throw { error };
    }
  }

  async getFlightById(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong at repository layer.");
      throw { error };
    }
  }

  async getFlights(filter) {
    try {
      const filterObj = this.#crateFilter(filter);
      const flights = await Flights.findAll({
        where: filterObj,
      });
      return flights;
    } catch (error) {
      console.log("Something went wrong at repository layer.");
      throw { error };
    }
  }
}

module.exports = FlightRepository;
