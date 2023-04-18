import departments from "../models/departments.model.js";

class departmentsContr {
    async find(req, res) {
        const {
            id
        } = req.params;
        res.send(await departments.get(id,req.query));
    }
    async create(req, res) {
        res.send(await departments.post(req.body));
    }
    async update(req, res) {
        const {
            id
        } = req.params;
        res.send(await departments.put(id, req.body));
    }
    async delete(req, res) {
        const {
            id
        } = req.params;
        res.send(await departments.delete(id));
    }
}

export default new departmentsContr();