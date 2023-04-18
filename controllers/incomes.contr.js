import incomes from "../models/incomes.model.js";

class incomesContr {
  async find(req, res) {
    const {
      id
    } = req.params;
    res.send(await incomes.get(id, req.query));
  }
  async create(req, res) {
    res.send(await incomes.post(req.body));
  }
  async update(req, res) {
    const {
      id
    } = req.params;
    res.send(await incomes.put(id, req.body));
  }
  async delete(req, res) {
    const {
      id
    } = req.params;
    res.send(await incomes.delete(id));
  }
}

export default new incomesContr();