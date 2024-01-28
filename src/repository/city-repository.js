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

  async deleteCity(payload) {
    try {
      const city = await City.destroy({
        where: {
          id: payload.id,
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
      // const city = await City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      // });
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (err) {
      console.log("Something went wrong at repository layer.");
      throw { err };
    }
  }

  async getCityById(payload) {
    try {
      const city = await City.findByPk(payload.id);
      return city;
    } catch (err) {
      console.log("Something went wrong at repository layer.");
      throw { err };
    }
  }

  async getAllCities() {
    try {
      const city = await City.findAll();
      return city;
    } catch (error) {
      console.log("Something went wrong at repository layer.");
      throw { err };
    }
  }
}

module.exports = CityRepository;
