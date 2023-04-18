import groups from "../schemas/groups.schema.js";
import directions from "../schemas/directions.schema.js";

class groupsClass {
    async get(id) {
        if (id) return await groups.findById(id).populate('users').populate('dir_ref_id');
        else return await groups.find().populate('users').populate('dir_ref_id');
    }
    async post(data) {
        let {
            _id
        } = await groups.create(data);
        await directions.findByIdAndUpdate(data.dir_ref_id, {
            $push: {
                groups: _id
            }
        });
        return _id;
    }
    async put(id, data) {
        return await groups.updateOne({
            _id: id
        }, data);
    }
    async delete(id, data) {
        return await groups.deleteOne({
            _id: id
        });
    }
}

export default new groupsClass();