import directions from "../schemas/directions.schema.js";
import departments from "../schemas/departments.schema.js";
class directionsClass {
    async get(id) {
        if (id) return await directions.findById(id).populate('groups');
        else return await directions.find().populate('groups');
    }
    async post(data) {
        let {
            _id
        } = await directions.create(data);

        await departments.findByIdAndUpdate(data.dep_ref_id, {
            $push: {
                directions: _id
            }
        });
        return _id;
    }
    async put(id, data) {
        return await directions.updateOne({
            _id: id
        }, data);
    }
    async delete(id, data) {
        return await directions.deleteOne({
            _id: id
        });
    }
}

export default new directionsClass();