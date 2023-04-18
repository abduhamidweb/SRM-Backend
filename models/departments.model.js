import departments from "../schemas/departments.schema.js";
import positions from "../schemas/positions.schema.js";
import directionsSchema from "../schemas/directions.schema.js";

import {
    Types
} from 'mongoose';
class departmentsClass {
    async get(id, query) {
        if (query.positions) {
            return await positions.find({
                pos_name: query.positions
            }).populate('users')
        } else if (query.directions) {
            return await directionsSchema.find({
                dir_name: query.directions
            }).populate('groups');
        } else {
            if (id) return await departments.findById(id)
            else return await departments.find().populate("positions").populate('directions');
        }
    }
    async post(data) {
        let {
            _id
        } = await departments.create(data);
        // await departments.findByIdAndUpdate(data.center_ref_id, {
        //     $push: {
        //         departments: _id
        //     }
        // });
        return _id;
    }
    async put(id, data) {
        return await departments.updateOne({
            _id: id
        }, data);
    }
    async delete(id, data) {
        return await departments.deleteOne({
            _id: id
        });
    }
}
export default new departmentsClass();