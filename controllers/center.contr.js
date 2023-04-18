import center from "../models/center.model.js";

class centerContr {
    async find(req, res) {
        const {
            id
        } = req.params;
        res.send(await center.get(id));
    }
    async create(req, res) {
        res.send(await center.post(req.body));
    }
    async update(req, res) {
        const {
            id
        } = req.params;
        res.send(await center.put(id, req.body));
    }
    async delete(req, res) {
        const {
            id
        } = req.params;
        res.send(await center.delete(id));
    }
}

export default new centerContr();