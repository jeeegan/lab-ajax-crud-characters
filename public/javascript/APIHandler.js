class APIHandler {
  constructor(baseURL) {
    this.axiosApp = axios.create({
      baseURL: baseURL
    })
  }

  getFullList = () => this.axiosApp.get('/characters');

  getOneRegister = (id) => this.axiosApp.get(`/characters/${id}`);

  createOneRegister = (data) => this.axiosApp.post('/characters', data);

  updateOneRegister = (id, data) => this.axiosApp.put(`/characters/${id}`, data);

  deleteOneRegister = (id) => this.axiosApp.delete(`/characters/${id}`);
  
}
