import outlay from "../schemas/outlay.schema.js";
// import positions from "../schemas/positions.schema.js";
// import groups from "../schemas/groups.schema.js";

class outlayClass {
  async get(id, query) {
    // if (query.username) {
    //   return await user.find({
    //     first_name: query.username
    //   })
    // } else if (query.contact) {
    //   return await user.find({
    //     contact: query.contact
    //   })
    // } else if (query.gender) {
    //   return await user.find({
    //     gender: query.gender
    //   })
    // } else {
    //   if (id) return await user.findById(id);
    //   else return await user.find();
    // }
    if (id) return await outlay.findById(id);
    else return await outlay.find();
  }
  async post(data) {
    try {
      let {
        _id
      } = await outlay.create(data);
      return _id
      // await positions.findByIdAndUpdate(data.pos_ref_id, {
      //   $push: {
      //     users: _id
      //   }
      // });
      await groups.findByIdAndUpdate(data.group_ref_id, {
        $push: {
          users: _id
        }
      });
      return _id
    } catch (er) {
      return er;
    }
  }
  async put(id, data) {
    return await outlay.updateOne({
      _id: id
    }, data);
  }
  async delete(id, data) {
    return await user.deleteOne({
      _id: id
    });
  }
}

export default new outlayClass();