import center from "../schemas/center.schema.js";
class centerClass {
    async get(id) {
        if (id) return await center.findById(id);
        else return await center.find();
    }
    async post(data) {
        let {
            _id
        } = await center.create(data);
        // await centers.findByIdAndUpdate(data.user, {
        //     $push: {
        //         centers: _id
        //     }
        // });
        return _id;
    }
    // async put(id, data) {
    //     return await center.updateOne({
    //         _id: id
    //     }, data);
    // }
    async delete(id, data) {
        return await center.deleteOne({
            _id: id
        });
    }
}

export default new centerClass();