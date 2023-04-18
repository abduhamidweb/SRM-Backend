import check from "../schemas/check.schema.js";

class checkClass {
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
    if (id) return await check.findById(id).populate('user_ref_id').populate('gr_ref_id');
    else return await check.find().populate('gr_ref_id').populate('user_ref_id');
  }
  async post(data) {
    try {
      let {
        _id
      } = await check.create(data);
      // await positions.findByIdAndUpdate(data.pos_ref_id, {
      //   $push: {
      //     users: _id
      //   }
      // });
      return _id
      // await groups.findByIdAndUpdate(data.group_ref_id, {
      //   $push: {
      //     users: _id
      //   }
      // });
      // return _id
    } catch (er) {
      return er;
    }
  }
  async put(id, data) {
    return await check.updateOne({
      _id: id
    }, data);
  }
  async delete(id, data) {
    return await check.deleteOne({
      _id: id
    });
  }
}

export default new checkClass();