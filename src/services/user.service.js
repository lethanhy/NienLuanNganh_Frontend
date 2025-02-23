import createApiClient from "./api.service";

class UserService {
    constructor(baseUrl = "/api/users") {
        this.api = createApiClient(baseUrl);
    }

    async getAll() {
        return (await this.api.get("/")).data;
    }
    async login(data) {
       const user = (await this.api.post("/login", data)).data;
       return user;
    }
    

    async create(data) {
        return (await this.api.post("/register", data)).data;
    }
    async deleteAll() {
        return (await this.api.delete("/")).data;
    }
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    }
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
}

export default new UserService();