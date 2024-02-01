class CrudRepository {
  constructor(model) {
    this.model = model;
  }
  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repository");
      throw { error };
    }
  }

  async destroy(documentId) {
    try {
      await this.model.destroy({
        where: {
          id: documentId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in crud repository");
      throw { error };
    }
  }

  async get(documentId) {
    try {
      const result = await this.model.findByPk(documentId);
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repository");
      throw { error };
    }
  }

  async getAll() {
    try {
      const result = await this.model.findAll();
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repository");
      throw { error };
    }
  }

  async update(documentId, data) {
    try {
      const result = await this.model.update(data, {
        where: {
          id: documentId,
        },
      });
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repository");
      throw { error };
    }
  }
}

module.exports = CrudRepository;
