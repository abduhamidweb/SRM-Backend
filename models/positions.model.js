import positions from "../schemas/positions.schema.js";
import departments from "../schemas/departments.schema.js";
class positionsClass {
    async get(id) {
        if (id) return await positions.findById(id).populate('users');
        else return await positions.find().populate('users');
    }
    async post(data) {
        let {
            _id
        } = await positions.create(data);
        await departments.findByIdAndUpdate(data.dep_ref_id, {
            $push: {
                positions: _id
            }
        });
        return _id;
    }
    async put(id, data) {
        return await positions.updateOne({
            _id: id
        }, data);
    }
    async delete(id, data) {
        return await positions.deleteOne({
            _id: id
        });
    }
}
export default new positionsClass();