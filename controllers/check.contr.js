import check from "../models/check.model.js";

class checkContr {
  async find(req, res) {
    const {
      id
    } = req.params;
    res.send(await check.get(id, req.query));
  }
  async create(req, res) {
    res.send(await check.post(req.body));
  }
  async update(req, res) {
    const {
      id
    } = req.params;
    res.send(await check.put(id, req.body));
  }
  async delete(req, res) {
    const {
      id
    } = req.params;
    res.send(await check.delete(id));
  }
}

export default new checkContr();