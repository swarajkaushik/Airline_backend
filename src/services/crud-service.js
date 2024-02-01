class CrudService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(data) {
    try {
      const response = await this.repository.create(data);
      return response;
    } catch (error) {
      console.log("Something went wrong in crud service");
    }
  }

  async destroy(documentId) {
    try {
      const response = await this.repository.destroy(documentId);
      return response;
    } catch (error) {
      console.log("Something went wrong in crud service");
    }
  }

  async get(documentId) {
    try {
      const response = await this.repository.get(documentId);
      return response;
    } catch (error) {
      console.log("Something went wrong in crud service");
    }
  }

  async getAll() {
    try {
      const response = await this.repository.getAll();
      return response;
    } catch (error) {
      console.log("Something went wrong in crud service");
    }
  }

  async update(documentId, data) {
    try {
      const response = await this.repository.update(documentId, data);
      return response;
    } catch (error) {
      console.log("Something went wrong in crud service");
    }
  }
}

module.exports = CrudService;
