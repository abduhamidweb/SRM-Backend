import login from "../models/login.model.js";

class loginContr {
  async find(req, res) {
    const {
      id
    } = req.params;
    res.send(await login.get(id));
  }
  async create(req, res) {
    res.send(await login.post(req.body));
  }
  async update(req, res) {
    const {
      id
    } = req.params;
    res.send(await login.put(id, req.body));
  }
  async delete(req, res) {
    const {
      id
    } = req.params;
    res.send(await login.delete(id));
  }
}

export default new loginContr();