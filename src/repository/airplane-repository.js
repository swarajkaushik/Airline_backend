const { Airplane } = require("../models/index");

class AirplaneRepository {
  async getAirplaneById(id) {
    try {
      const airplane = await Airplane.findByPk(id);
      return airplane;
    } catch (error) {
      console.log("Something went wrong at repository layer.");
      throw { error };
    }
  }
}

module.exports = AirplaneRepository;
