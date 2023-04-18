import post from "../models/post.model.js";

class postContr {
  async find(req, res) {
    const { id } = req.params;
    res.send(await post.get(id));
  }
  async create(req, res) {
    res.send(await post.post(req.body));
  }
  async update(req, res) {
    const { id } = req.params;
    res.send(await post.put(id, req.body));
  }
  async delete(req, res) {
    const { id } = req.params;
    res.send(await post.delete(id));
  }
}

export default new postContr();
