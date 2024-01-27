const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(name) {
    try {
      const city = await this.cityRepository.createCity(name);
      return city;
    } catch (error) {
      console.log("Something went wrong at service layer.");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log("Something went wrong at service layer.");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("Something went wrong at service layer.");
      throw { error };
    }
  }

  async getCityById(cityId) {
    try {
      const city = await this.cityRepository.getCityById(cityId);
    } catch (error) {
      console.log("Something went wrong at service layer.");
      throw { error };
    }
  }
}

module.exports = CityService;
