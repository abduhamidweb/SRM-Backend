import outlay from "../models/outlay.model.js";

class outlayContr {
  async find(req, res) {
    const {
      id
    } = req.params;
    res.send(await outlay.get(id, req.query));
  }
  async create(req, res) {
    res.send(await outlay.post(req.body));
  }
  async update(req, res) {
    const {
      id
    } = req.params;
    res.send(await outlay.put(id, req.body));
  }
  async delete(req, res) {
    const {
      id
    } = req.params;
    res.send(await outlay.delete(id));
  }
}

export default new outlayContr();