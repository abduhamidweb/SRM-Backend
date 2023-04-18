import post from "../schemas/post.schema.js";
import user from "../schemas/user.schema.js";

class postClass {
  async get(id) {
    if (id) return await post.findById(id);
    else return await post.find().populate("user");
  }
  async post(data) {
    let { _id } = await post.create(data);
    await user.findByIdAndUpdate(data.user, { $push: { posts: _id } });
    return _id;
  }
  async put(id, data) {
    return await post.updateOne({ _id: id }, data);
  }
  async delete(id, data) {
    return await post.deleteOne({ _id: id });
  }
}

export default new postClass();
