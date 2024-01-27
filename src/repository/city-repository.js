const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (err) {
      throw { err };
    }
  }

  async deleteCity({ cityId }) {
    try {
      const city = await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (err) {
      console.log("Something went wrong at repository layer.");
      throw { err };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (err) {
      console.log("Something went wrong at repository layer.");
      throw { err };
    }
  }

  async getCityById({ cityId }) {
    try {
      const city = await City.findByPk(cityId);
    } catch (err) {
      console.log("Something went wrong at repository layer.");
      throw { err };
    }
  }
}

module.exports = CityRepository;
